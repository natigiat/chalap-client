import React from "react";
import "./App.css";
import Parent from "./Screen2";
import Screen1 from "./Screen1/Screen1";

import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import LogIn from "./Screen1/component/LogIn/LogIn";
import LogInValidation from "./Screen1/component/LogInValidation/LogInValidation";
import StudentSettingMenu from "./Screen1/component/StudentSettingMenu/StudentSettingMenu";
import StudentSettingUpdate from "./Screen1/component/StudentSettingUpdate/StudentSettingUpdate";
import Screen4 from "./Screen4/screen4";
import Screen5 from "./Screen5/Screen5";

import Schedule from "./Screen3/components/Schedule/components/Schedule";
import MySons from "./Screen3/components/SetChilde/SetChilde";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="main-wrapper">
        <Switch>
          <Route path={`/`} component={Parent} exact />

          <Route
            path="/auth/"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/login/`} component={LogIn} exact />
                <Route
                  path={`${url}/login-validation/`}
                  component={LogInValidation}
                  exact
                />
              </>
            )}
          />

          <Route
            path="/settings/"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={StudentSettingMenu} exact />
                <Route
                  path={`${url}/update/`}
                  component={StudentSettingUpdate}
                  exact
                />
              </>
            )}
          />

          <Route path={`/map`} component={Screen4} exact />

          <Route path={`/reports/:type`} component={Screen5} exact />

          <Route path={`/scheduale`} component={Schedule} exact />
          <Route path={`/scheduale/edit`} component={MySons} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
