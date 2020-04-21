// import React, { useState } from 'react';
import React, { Component } from 'react';
import {
    EuiFlyout,
    EuiFlyoutBody,
    EuiFlyoutHeader,
    EuiButton,
    EuiText,
    EuiTitle,
    EuiCodeBlock,
  } from '@elastic/eui';
class Flyout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isFlyoutVisible: false,

        };
      }

      setIsFlyoutVisible = () => {
        this.setState({
            isFlyoutVisible: !this.state.isFlyoutVisible,
        });
      };
      closeFlyout = () => this.setIsFlyoutVisible();
    
    
    render() {

        let flyout;

        if (this.isFlyoutVisible) {
            flyout = (
              <EuiFlyout
                onClose={() => this.state.setIsFlyoutVisible(false)}
                aria-labelledby="flyoutTitle">
                <EuiFlyoutHeader hasBorder>
                  <EuiTitle size="s">
                    <h2 id="flyoutTitle">hellow</h2>
                  </EuiTitle>
                </EuiFlyoutHeader>
                <EuiFlyoutBody>
                  <EuiText>
                    <p>
                      For consistency across the many flyouts, please utilize the
                      following code for implementing the flyout with a header.
                    </p>
                  </EuiText>
                  {/* <EuiCodeBlock language="html">{htmlCode}</EuiCodeBlock> */}
                </EuiFlyoutBody>
              </EuiFlyout>
            );
          }
        return (
            <div>
              <EuiButton onClick={() => this.setIsFlyoutVisible(true)}>
                Show flyout
              </EuiButton>
              {flyout}
            </div>
          );
    }
}

export default Flyout














// import React, { useState } from 'react';

// import {
//   EuiFlyout,
//   EuiFlyoutBody,
//   EuiFlyoutHeader,
//   EuiButton,
//   EuiText,
//   EuiTitle,
//   EuiCodeBlock,
// } from '@elastic/eui';

// export default () => {
//   const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

//   let flyout;

//   const htmlCode = `<EuiFlyout ...>
//   <EuiFlyoutHeader hasBorder>
//     <EuiTitle size="m">
//       <h2></h2>
//     </EuiTitle>
//   </EuiFlyoutHeader>
//   <EuiFlyoutBody>
//     ...
//   </EuiFlyoutBody>
// </EuiFlyout>
// `;

//   if (isFlyoutVisible) {
//     flyout = (
//       <EuiFlyout
//         onClose={() => setIsFlyoutVisible(false)}
//         aria-labelledby="flyoutTitle">
//         <EuiFlyoutHeader hasBorder>
//           <EuiTitle size="m">
//             <h2 id="flyoutTitle">A typical flyout</h2>
//           </EuiTitle>
//         </EuiFlyoutHeader>
//         <EuiFlyoutBody>
//           <EuiText>
//             <p>
//               For consistency across the many flyouts, please utilize the
//               following code for implementing the flyout with a header.
//             </p>
//           </EuiText>
//           <EuiCodeBlock language="html">{htmlCode}</EuiCodeBlock>
//         </EuiFlyoutBody>
//       </EuiFlyout>
//     );
//   }

//   return (
//     <div>
//       <EuiButton onClick={() => setIsFlyoutVisible(true)}>
//         Show flyout
//       </EuiButton>
//       {flyout}
//     </div>
//   );
// };