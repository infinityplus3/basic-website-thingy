import React from "react";
import "./myprofile.css";
import { withRouter, Link } from "react-router-dom";

class MyProfile extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default withRouter(MyProfile);
