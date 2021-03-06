import React from "react";
import "./logandsign.css";
import { withRouter, Link } from "react-router-dom";
import Form from "../Components/form.jsx";
import { setExpiry, clearCookie, setThing } from "../globals/globals.js";

//finished
class Login extends React.Component {
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
    clearCookie();
    let potat = this.arrayify(e);
    console.log(potat);
    for (let i in potat) {
      setThing(potat[i]);
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
        <span className="logintxt">Signup</span>
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

export default withRouter(Login);
