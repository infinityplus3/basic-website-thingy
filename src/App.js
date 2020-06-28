import React from "react";
import "./styles.css";
import Form from "./Components/form.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form
          opacities={[true, true, false, false, false]}
          names={["username", "password", "XD", "XD", "XD"]}
          onSubmit={e => console.log(e)}
        />
      </div>
    );
  }
}

export default App;
