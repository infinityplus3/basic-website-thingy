import React from "react";
import "./myprofile.css";
import { withRouter, Link } from "react-router-dom";
import NavBar from "../Components/navbar.jsx";
import { getCookie } from "../globals/globals.js";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this._ismounted = false;
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    };
  }

  arrayify(dict) {
    return Object.entries(dict);
  }

  getInfo() {
    console.log(document.cookie);
    if (document.cookie !== null && document.cookie !== "") {
      try {
        if (
          getCookie("username") !== "" &&
          getCookie("password") !== "" &&
          getCookie("firstName") !== null &&
          getCookie("lastName") !== null &&
          getCookie("firstName") !== "" &&
          getCookie("lastName") !== "" &&
          getCookie("email") !== null &&
          getCookie("email") !== ""
        ) {
          this.setState({
            firstname: getCookie("firstName"),
            lastname: getCookie("lastName"),
            username: getCookie("username"),
            email: getCookie("email"),
            password: getCookie("password")
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  componentDidMount() {
    this._ismounted = true;
    console.log(document.cookie);
    this.getInfo();
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  render() {
    return (
      <div className="App">
        <NavBar opacity={false} />
        <div className="maindiv">
          <div className="myprofile">
            <Link to="/changeprofile">
              <span className="firstname">
                First Name: {this.state.firstname}
              </span>
            </Link>
            <Link to="/changeprofile">
              <span className="lastname">Last Name: {this.state.lastname}</span>
            </Link>
            <Link to="/changeprofile">
              <span className="username">Username: {this.state.username}</span>
            </Link>
            <Link to="/changeprofile">
              <span className="email">Email: {this.state.email}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MyProfile);
