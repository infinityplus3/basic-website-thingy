import React from "react";
import "./form.css";
import { withRouter, Link } from "react-router-dom";

class Form extends React.Component {
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
    this.styling = {
      firstname: "firstname",
      lastname: "lastname",
      username: "username",
      email: "email",
      password: "password"
    };
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      submitted: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      submitted: "True"
    });
  };

  componentDidMount() {
    this._ismounted = true;
    for (let index in this.props.opacities) {
      if (this.props.opacities[index] === true) {
        console.log("yer gud buddi");
      } else {
        this.styling[this.stylestring[index]] = "none";
      }
    }
    console.log(this.styling);
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  showMessage(msg) {
    let message = "";
    if (this.state.submitted) {
      message = <h1>{msg}</h1>;
    }
  }

  render() {
    return (
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          id={this.styling[1]}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          id="lastName"
          onChange={e => this.setState({ lastName: e.target.value })}
        />
        <br />
        <br />
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          id="username"
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          id="email"
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          id="password"
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
