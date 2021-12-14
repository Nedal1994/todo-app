import React from "react";
import Settings from "./components/todo/context/context";
import ToDo from "./components/todo/todo";
import Setting from "./components/todo/Setting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Auth from '../src/components/todo/context/auth';
import Login from '../src/components/todo/context/login';
import LoginContext  from "./components/todo/context/loginContext";


export default class App extends React.Component {
  render() {
    return (
      <>
      <LoginContext>
        <Login/>
        <Auth>
        <Settings>
          <Router>
              <Switch>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/">
                  <ToDo />
                </Route>
              </Switch>
          </Router>
        </Settings>
        </Auth>
        </LoginContext>
      </>
    );
  }
}
