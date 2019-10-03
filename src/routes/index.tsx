import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = lazy(() => import("../components/Home"));
const Dashboard = lazy(() => import("../components/Dashboard"));

const All = lazy(() => import("./all"));

const Routes: React.FC = () => (
  <Switch>
    <Suspense fallback={<CircularProgress />}>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/all/:query?">
        <All tabIndex={0} />
      </Route>

      <Route path="/people/:query?">
        <All tabIndex={1} />
      </Route>

      <Route path="/files/:query?">
        <All tabIndex={2} />
      </Route>

      <Route path="/apps/:query?">
        <All tabIndex={3} />
      </Route>

      <Route path="/dashboard/">
        <Dashboard />
      </Route>
    </Suspense>
  </Switch>
);

export default Routes;
