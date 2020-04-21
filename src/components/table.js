import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";
// import { setQuickFilter } from "ag-grid-react";
// import {GridApi} from 'ag-grid-react';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "ag-grid-enterprise";
import Pagnation from "./Pagnation";
import Filter from "./Search";
// import "~@elastic/eui/dist/eui_theme_light.css";
import { EuiButtonIcon, EuiFlexGroup } from "@elastic/eui";
import Popover from "./Popover";
import Flyout from "./Flyout";

let api="";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizePage: 5,
      pageCount: null,
      show: true,
      hide: true,
      // updateRowData: null,
      filterData: null,
      columnDefs: [
        {
          headerName: "studentID",
          field: "studentID",
          sortable: true,
          filter: true,
          checkboxSelection: true,
          editable: true,
        },
        {
          headerName: "firstName",
          field: "firstName",
          sortable: true,
          filter: true,
        },
        {
          headerName: "lastName",
          field: "lastName",
          sortable: true,
          filter: true,
        },
        {
          headerName: "rollNo",
          field: "rollNo",
          sortable: true,
          filter: true,
        },
        {
          headerName: "branch",
          field: "branch",
          sortable: true,
          filter: true,
        },
        {
          headerName: "semester",
          field: "semester",
          sortable: true,
          filter: true,
        },
        {
          headerName: "dateOfBirth",
          field: "dateOfBirth",
          sortable: true,
          filter: true,
        },
        {
          headerName: "email",
          field: "email",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Action",
          colId: "edit",
          resizable: true,
          // filterField: "",
          cellRendererFramework: function (params) {
            return (
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiButtonIcon
                  iconType="trash"
                  className="icons"
                  onClick={() => this.deleteRow()}
                />
                <EuiButtonIcon
                  iconType="pencil"
                  className="icons"
                  onClick={() => this.deleteRow()}
                />
              </EuiFlexGroup>
            );
          }.bind(this),
        },
      ],
      components: {
        boldRenderer: function (params) {
          return "<b>" + params.value.name + "</b>";
        },
      },

      pagination: true,
      paginationPageSize: 5,
      rowData: [
        {
          studentID: 1,
          firstName: "Hardik",
          lastName: "Motwani",
          rollNo: 5200,
          branch: "IT",
          semester: 8,
          dateOfBirth: "20-02-1998",
          contact: 8488866756,
          email: "hardik.motwani@rapidops.com",
        },
        {
          studentID: 2,
          firstName: "Meet",
          lastName: "Shah",
          rollNo: 5201,
          branch: "CS",
          semester: 8,
          dateOfBirth: "15-05-1999",
          contact: 7982124770,
          email: "meet.shah@rapidops.com",
        },
        {
          studentID: 3,
          firstName: "Darshan",
          lastName: "Raval",
          rollNo: 5202,
          branch: "IT",
          semester: 6,
          dateOfBirth: "12-11-1997",
          contact: 9870912667,
          email: "darshan.raval@gmail.com",
        },
        {
          studentID: 4,
          firstName: "Dhairya",
          lastName: "Shah",
          rollNo: 5203,
          branch: "CS",
          semester: 5,
          dateOfBirth: "10-12-1996",
          contact: 8460556732,
          email: "shahdhairya@gmail.com",
        },
        {
          studentID: 5,
          firstName: "Jeenal",
          lastName: "Patel",
          rollNo: 5204,
          branch: "CS",
          semester: 3,
          dateOfBirth: "18-01-1999",
          contact: 8901265437,
          email: "jeenalpatel@gmail.com",
        },
        {
          studentID: 6,
          firstName: "Alia",
          lastName: "Bhatt",
          rollNo: 5205,
          branch: "IT",
          semester: 8,
          dateOfBirth: "22-06-1998",
          contact: 8460123456,
          email: "alia.bhatt@rapidops.com",
        },
        {
          studentID: 7,
          firstName: "Vaibhav",
          lastName: "Kabira",
          rollNo: 5206,
          branch: "IT",
          semester: 2,
          dateOfBirth: "13-05-1999",
          contact: 9876512344,
          email: "kabira.vaibhav@gmail.com",
        },
        {
          studentID: 8,
          firstName: "Ananya",
          lastName: "Pandey",
          rollNo: 5207,
          branch: "CS",
          semester: 6,
          dateOfBirth: "29-09-1999",
          contact: 8488898765,
          email: "ananya.pandey@gmail.com",
        },
        {
          studentID: 9,
          firstName: "Joe",
          lastName: "Dawson",
          rollNo: 5208,
          branch: "CS",
          semester: 7,
          dateOfBirth: "17-07-1997",
          contact: 9988666756,
          email: "joe.dawson@gmail.com",
        },
        {
          studentID: 10,
          firstName: "Kane",
          lastName: "Williamson",
          rollNo: 5209,
          branch: "IT",
          semester: 4,
          dateOfBirth: "30-03-1997",
          contact: 9867542310,
          email: "kanewilliamson@gmail.com",
        },
      ],
    };
    this.searchData = this.searchData.bind(this);
  }

  searchData = () => {
    api.setQuickFilter(document.getElementById('filter').value); 
}
  deleteRow = () => {
    console.log("ravi");
    const selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    this.gridApi.updateRowData({ remove: selectedData });
  };
  onGridReady = (params) => {
    this.gridApi = params.api;
    api = params.api;
  };

  filterData = (params) => {
    console.log("filter",params);
    this.setState({
      updateRowData: params,
    });
  };

  pageSize = (params) => {
    this.setState({
      sizePage: params,
    });
    this.gridApi.paginationSetPageSize(params);
  };

  goToPage = (params) => {
    this.gridApi.paginationGoToPage(params);
  };

  componentDidMount() {
    
     this.setState({ updateRowData: this.state.rowData })
     
  }

  showHide = (e, fieldName, stateName) => {
    console.log(e.target.checked);
    this.change = e.target.checked;
    this.gridcolumnApi.setColumnVisible(fieldName, !this.change);
    this.popRef.current.changeStatus(stateName, this.change);
  };

  hideShow = (field,boolean) => {
    console.log(field)
    console.log(boolean)
    this.gridcolumnApi.setColumnVisible(field,boolean)
  }


  render() {
    return (
      <div
        className="ag-theme-material"
        style={{ height: "500px", width: "100%" }}
      >
        <Filter rowData={this.state.rowData} filterData={this.filterData} />
        <input className="p-2 m-2 " type="text" id="filter" onChange={this.searchData} placeholder="Search" />
        <Flyout></Flyout>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.updateRowData}
          pagination={true}
          paginationPageSize={this.state.paginationPageSize}
          onGridReady={(e) => this.onGridReady(e)}
        ></AgGridReact>
        <Pagnation
          pageSize={this.pageSize}
          pageCount={this.state.pageCount}
          goToPage={this.goToPage}
          sizePage={this.state.sizePage}
          length={this.state.count}
        />
        <Popover 
           column={this.state.columnDefs}
           showHide={this.showHide}
           ref={this.popRef}
        ></Popover>
      </div>
    );
  }
}

export default Table;
