import React from "react";
import "./logandsign.css";
import { withRouter } from "react-router-dom";
import Form from "../Components/form.jsx";
import { getCookie } from "../globals/globals.js";

//finished
class Loginfail extends React.Component {
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
      txt: "Login",
      passin: true
    };
  }

  arrayify(dict) {
    return Object.entries(dict);
  }

  submission(e, passin) {
    if (passin === true) {
      console.log(e);
      let yee = this.arrayify(e);
      console.log(document.cookie);
      if (document.cookie !== null && document.cookie !== "") {
        try {
          if (
            getCookie("username") !== "" &&
            getCookie("password") !== "" &&
            getCookie("username") !== null &&
            getCookie("password") !== null
          ) {
            let username = getCookie("username");
            let password = getCookie("password");
            console.log(username);
            console.log(password);
            console.log(yee[0][1]);
            console.log(yee[4][1]);
            if (username === yee[0][1] && password === yee[4][1]) {
              console.log("DAM WUT A G");
              this.setState({
                txt: "Confirm your unbotness",
                redirect: "/myprofile"
              });
            } else {
              console.log("OOOOOOOF");
              this.props.history.push("/loginfailed");
            }
          }
        } catch (err) {
          console.log(err);
        }
        this.setState({
          passin: false
        });
      }
    } else {
      this.props.history.push("/myprofile");
    }
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
        <span className="logintxt">Login</span>
        <Form
          opacities={[true, false, false, false, true]}
          names={[
            "Username",
            "Password",
            "Password",
            "Password",
            "Password",
            this.state.txt
          ]}
          onSubmit={e => this.submission(e, this.state.passin)}
        />
        <span className="loginfailed">
          Sorry, your login failed. Please try again.
        </span>
        <span className="mainBG" />
      </div>
    );
  }
}

export default withRouter(Loginfail);
