// import React, { Component } from "react";

// import {
//   EuiButtonEmpty,
//   EuiContextMenuItem,
//   EuiContextMenuPanel,
//   EuiFlexGroup,
//   EuiFlexItem,
//   EuiPagination,
//   EuiPopover,
// } from "@elastic/eui";

// class Pagnation extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPopoverOpen: false,
//       activePage: 0,
//       pageCount: 5,
//     };
//   }
//   setIsPopoverOpen = () => {
//     this.setState({
//       isPopoverOpen: !this.state.isPopoverOpen,
//     });
//   };
//   closePopover = () => this.setIsPopoverOpen();

//   setActivePage = (pageNumber) => {
//     this.setState({
//       activePage: pageNumber,
//     });
//   };

//   goPage = (pageNumber) => {
//     this.setActivePage(pageNumber);
//     const { goToPage } = this.props;
//     goToPage(pageNumber);
//   };

//   changePageSize = (param) => {
//     // console.log("###########################",param)
//     this.props.pageSize(param);
//     this.setActivePage(param);
//     this.closePopover();
//   };

//   render() {
//     // console.log("####",this.props.dataLength)
//     const button = (
//       <EuiButtonEmpty
//         size="s"
//         color="text"
//         iconType="arrowDown"
//         iconSide="right"
//         onClick={this.setIsPopoverOpen}
//       >
//         Row per page {this.props.sizePage}
//       </EuiButtonEmpty>
//     );

//     const items = [
//       <EuiContextMenuItem
//         key="2 rows"
//         icon="empty"
//         onClick={() => {
//           this.changePageSize(2);
//         }}
//       >
//         2 rows
//       </EuiContextMenuItem>,
//       <EuiContextMenuItem
//         key="4 rows"
//         icon="empty"
//         onClick={() => {
//           this.changePageSize(4);
//         }}
//       >
//         4 rows
//       </EuiContextMenuItem>,
//       <EuiContextMenuItem
//         key="6 rows"
//         icon="check"
//         onClick={() => {
//           this.changePageSize(6);
//         }}
//       >
//         6 rows
//       </EuiContextMenuItem>,
//       <EuiContextMenuItem
//         key="8 rows"
//         icon="empty"
//         onClick={() => {
//           this.changePageSize(8);
//         }}
//       >
//         8 rows
//       </EuiContextMenuItem>,
//     ];

//     console.log("@@", this.props.pageCount);
//     return (
//       <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
//         <EuiFlexItem grow={false}>
//           <EuiPopover
//             button={button}
//             isOpen={this.state.isPopoverOpen}
//             closePopover={this.closePopover}
//             panelPaddingSize="none"
//           >
//             <EuiContextMenuPanel items={items} />
//           </EuiPopover>
//         </EuiFlexItem>

//         <EuiFlexItem grow={false}>
//           <EuiPagination
//             // pageCount={this.props.pageCount}
//             pageCount={this.props.sizePage}
//             activePage={this.state.activePage}
//             onPageClick={this.goPage}
//           />
//         </EuiFlexItem>
//       </EuiFlexGroup>
//     );
//   }
// }
// export default Pagnation;

import React, { useState } from 'react';

import {
  EuiButtonEmpty,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPagination,
  EuiPopover,
} from '@elastic/eui';

export default () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const PAGE_COUNT = 10;

  const onButtonClick = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const goToPage = pageNumber => setActivePage(pageNumber);

  const button = (
    <EuiButtonEmpty
      size="s"
      color="text"
      iconType="arrowDown"
      iconSide="right"
      onClick={onButtonClick}>
      Rows per page: 50
    </EuiButtonEmpty>
  );

  const items = [
    <EuiContextMenuItem
      key="10 rows"
      icon="empty"
      onClick={() => {
        closePopover();
        window.alert('10 rows');
      }}>
      10 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="20 rows"
      icon="empty"
      onClick={() => {
        closePopover();
        window.alert('20 rows');
      }}>
      20 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="50 rows"
      icon="check"
      onClick={() => {
        closePopover();
        window.alert('50 rows');
      }}>
      50 rows
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="100 rows"
      icon="empty"
      onClick={() => {
        closePopover();
        window.alert('100 rows');
      }}>
      100 rows
    </EuiContextMenuItem>,
  ];

  return (
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiPopover
          button={button}
          isOpen={isPopoverOpen}
          closePopover={closePopover}
          panelPaddingSize="none">
          <EuiContextMenuPanel items={items} />
        </EuiPopover>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiPagination
          pageCount={PAGE_COUNT}
          activePage={activePage}
          onPageClick={goToPage}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};