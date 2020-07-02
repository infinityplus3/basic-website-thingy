import React from "react";
import "./changeprofile.css";
import { withRouter, Link } from "react-router-dom";
import Form from "../Components/form.jsx";
import {
  setExpiry,
  clearCookie,
  setThing,
  getCookie
} from "../globals/globals.js";

//finished
class ChangeProfile extends React.Component {
  constructor(props) {
    super(props);
    this._ismounted = false;
    this.stylestring = [
      "firstname",
      "lastname",
      "username",
      "email",
      "password"
    ];
    this.state = {
      txt: "Sign up"
    };
  }

  arrayify(dict) {
    return Object.entries(dict);
  }

  submission(e) {
    //console.log(e);
    let username = getCookie("username");
    let firstname = getCookie("firstname");
    let lastname = getCookie("lastname");
    let email = getCookie("email");
    let password = getCookie("password");
    let bigboi = [firstname, lastname, username, email, password];
    clearCookie();
    let potat = this.arrayify(e);
    console.log(potat);
    for (let i in potat) {
      if (potat[i][1] !== "" || potat[i][1] !== bigboi[i]) {
        setThing(potat[i]);
      } else {
        setThing([this.stylestring[i], this.bigboi[i]]);
      }
    }
    setExpiry(10);
    console.log(document.cookie);
    this.props.history.push("/myprofile");
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
        <span className="logintxt">Change your info:</span>
        <Form
          opacities={[true, true, true, true, true]}
          names={[
            "First Name",
            "Last Name",
            "Username",
            "Email",
            "Password",
            this.state.txt
          ]}
          onSubmit={e => this.submission(e)}
        />
        <span className="mainBG" />
      </div>
    );
  }
}

export default withRouter(ChangeProfile);
