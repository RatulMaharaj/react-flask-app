import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <App/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
