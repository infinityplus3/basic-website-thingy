import React from "react";
import "./form.css";

//finished
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
  }

  potato() {
    for (let index in this.props.opacities) {
      if (this.props.opacities[index] === true) {
        //console.log("yer gud buddi");
      } else {
        this.styling[this.stylestring[index]] = "none";
      }
    }
    //console.log(JSON.stringify(this.styling[this.stylestring[2]]));
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
    this.potato();
    return (
      <form>
        <input
          name="firstName"
          placeholder={this.props.names[0]}
          value={this.state.firstName}
          className={this.styling[this.stylestring[0]]}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder={this.props.names[1]}
          value={this.state.lastName}
          className={this.styling[this.stylestring[1]]}
          onChange={e => this.setState({ lastName: e.target.value })}
        />
        <br />
        <br />
        <input
          name="username"
          placeholder={this.props.names[2]}
          value={this.state.username}
          className={this.styling[this.stylestring[2]]}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="email"
          placeholder={this.props.names[3]}
          value={this.state.email}
          className={this.styling[this.stylestring[3]]}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder={this.props.names[4]}
          value={this.state.password}
          className={this.styling[this.stylestring[4]]}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>{this.props.names[5]}</button>
      </form>
    );
  }
}

export default Form;
