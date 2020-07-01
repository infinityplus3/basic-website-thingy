import React from "react";
import "./startpage.css";
import { withRouter, Link } from "react-router-dom";
import NavBar from "../Components/navbar.jsx";

//finished
class StarterPage extends React.Component {
  constructor(props) {
    super(props);
    this._ismounted = false;
  }

  componentDidMount() {
    this._ismounted = true;
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  render() {
    return (
      <div className="App">
        <NavBar opacity={false} />
        <div className="maintext">
          <span className="maintxt1">
            Do you need an easy way to build a profile?
          </span>
          <span className="maintxt2">
            Follow me to the profile builder to get your free profile now!
          </span>
        </div>
        <Link to="/buildprofile">
          <div className="buildbutton">Build your profile!</div>
        </Link>
        <span className="mainBG" />
      </div>
    );
  }
}

export default withRouter(StarterPage);
