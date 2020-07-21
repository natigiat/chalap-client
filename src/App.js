import React from "react";
import "./App.css";
import Parent from "./Screen2";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="main-wrapper">
        <Switch>
          <Route path={`/`} component={Parent} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
