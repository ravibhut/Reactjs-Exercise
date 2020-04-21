import React, { Component } from "react";
import {
  

  EuiPopover,
  EuiSpacer,
  EuiButtonToggle,
} from "@elastic/eui";
import { EuiButtonIcon } from "@elastic/eui";

class Popover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      visiblityFirstName: true,
      visiblityLastName: true,
      visiblityBranch: true,
      visiblityRollNo: true,
      visiblitySemester: true,
    };
  }

  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  };


    showHideStatus = (e) => {
    this.setState({
      visiblityName: e.target.checked,
    })
  };

    changeStatus = (e,status) => {
      this.setState({
        [e] : !status
      })
    }
  
  render() {
    const button = (
      <EuiButtonIcon
        iconType="gear"
        iconSide="right"
        gutterSize="l"
        onClick={this.onButtonClick}
        className="gear"
      ></EuiButtonIcon>
    );
    
    return (
      <EuiPopover
        className="pull-right button"
        ownFocus
        button={button}
        isOpen={this.state.isPopoverOpen}
        closePopover={this.closePopover}
      >
        <EuiButtonToggle
          label="First Name"
          iconType={this.state.visiblityFirstName ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'firstName','visiblityFirstName')}
          isEmpty
        />
        <EuiSpacer />
        <EuiButtonToggle
          label="Last Name"
          iconType={this.state.visiblityLastName ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'lastName','visiblityLastName')}
          isEmpty
        />

        <EuiSpacer />
        <EuiButtonToggle
          label="Branch"
          iconType={this.state.visiblityBranch ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'branch','visiblityBranch')}
      
          isEmpty
        />
        <EuiSpacer />
        <EuiButtonToggle
          label="Roll no"
          iconType={this.state.visiblityRollNo ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'rollNo','visiblityRollNo')}         
          isEmpty
        />

        <EuiSpacer />
        <EuiButtonToggle
          label="Semester"
          iconType={this.state.visiblitySemester ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'semester','visiblitySemester')}

          isEmpty
        />
      </EuiPopover>
    );
  }
}

export default Popover;























// import React, { useState } from 'react';

// import {
//   EuiButton,
//   EuiCode,
//   EuiPanel,
//   EuiPopover,
//   EuiSpacer,
// } from '@elastic/eui';

// export default () => {
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);

//   const onButtonClick = () =>
//     setIsPopoverOpen(isPopoverOpen1 => !isPopoverOpen1);
//   const closePopover = () => setIsPopoverOpen(false);

//   let panel;
//   const setPanelRef = node => {
//     panel = node;
//   };

//   const button = (
//     <EuiButton
//       iconType="arrowDown"
//       iconSide="right"
//       onClick={onButtonClick}
//       style={{ position: 'relative', left: 50 }}>
//       Show constrained popover
//     </EuiButton>
//   );

//   return (
//     <EuiPanel panelRef={setPanelRef}>
//       <EuiPopover
//         button={button}
//         isOpen={isPopoverOpen}
//         closePopover={closePopover}
//         container={panel}>
//         <div>
//           Popover is positioned <EuiCode>downCenter</EuiCode> but constrained to
//           fit within the panel.
//         </div>
//       </EuiPopover>

//       {/* create adequate room for the popover */}
//       <EuiSpacer size="xxl" />
//       <EuiSpacer size="xxl" />
//     </EuiPanel>
//   );
// };