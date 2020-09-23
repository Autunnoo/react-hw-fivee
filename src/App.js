import React from 'react';
import './App.css';
import {HashRouter as Router,Redirect, Route, Switch,} from "react-router-dom";
import Start from "./rega/start";
import Login from "./rega/login.js";
import Register from "./rega/rega";

function App() {
  return (
      <Router>
        <div className="osnova">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/start">
              <Start />
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;