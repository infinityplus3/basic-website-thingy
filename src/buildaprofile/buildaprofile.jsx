import React from "react";
import "./buildaprofile.css";
import { withRouter, Link } from "react-router-dom";

class BuildProfile extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default withRouter(BuildProfile);
