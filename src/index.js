import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFailed from "./loginpages/loginfailed.jsx";
import LoginPage from "./loginpages/loginpage.jsx";
import SignUp from "./loginpages/signuppage.jsx";
import MyProfile from "./myprofile/myprofile.jsx";
import StarterPage from "./starterpages/startpagelogin.jsx";
import BuildProfile from "./buildaprofile/buildaprofile.jsx";
import ChangeProfile from "./myprofile/changeprofile.jsx";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/">
        <div>
          <StarterPage />
        </div>
      </Route>
      <Route path="/login">
        <div>
          <LoginPage />
        </div>
      </Route>
      <Route path="/myprofile">
        <div>
          <MyProfile />
        </div>
      </Route>
      <Route path="/changeprofile">
        <div>
          <ChangeProfile />
        </div>
      </Route>
      <Route path="/buildprofile">
        <div>
          <BuildProfile />
        </div>
      </Route>
      <Route path="/loginfailed">
        <div>
          <LoginFailed />
        </div>
      </Route>
      <Route path="/signup">
        <div>
          <SignUp />
        </div>
      </Route>
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
