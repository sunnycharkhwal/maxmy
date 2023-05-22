import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

// class DropzoneAreaExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       files: [],
//     };
//   }
//   handleChange(files) {
//     this.setState({
//       files: files,
//     });
//   }
//   render() {
//     return <DropzoneArea name="img" onChange={this.handleChange.bind(this)} />;
//   }
// }

const DropzoneAreaExample = ({ setFile }) => {
  return <DropzoneArea name="img" onChange={(e) => setFile(e)} />;
};

export default DropzoneAreaExample;
