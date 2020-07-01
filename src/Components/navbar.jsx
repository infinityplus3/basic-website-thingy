import React from "react";
import "./navbar.css";
import { withRouter, Link } from "react-router-dom";
import { getCookie } from "../globals/globals.js";

//finished
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this._ismounted = false;
    this.state = {
      user: <span className="profile">Log In</span>,
      link: "/login",
      txt1: "Apply for a job",
      txt2: "Build a profile"
    };
  }

  componentDidMount() {
    this._ismounted = true;
    if (document.cookie !== null && document.cookie !== "") {
      try {
        if (getCookie("user") !== "") {
          let username = getCookie("user");
          this.setState({
            user: <span className="profile">{username}</span>,
            link: "/myprofile"
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (this.props.opacity === true) {
      this.setState({
        txt1: "",
        txt2: "Apply for a job!"
      });
    }
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  render() {
    return (
      <div className="navBar">
        <Link to={this.state.link}>{this.state.user}</Link>
        <a href="https://quik-parse.web.app/">
          <span className="applyjob">{this.state.txt1}</span>
        </a>
        <Link to="/buildprofile">
          <span className="buildprofile">{this.state.txt2}</span>
        </Link>
        <span className="profile.com">profile.com</span>
        <span className="BG" />
      </div>
    );
  }
}

export default withRouter(NavBar);
