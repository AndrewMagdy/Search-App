import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = lazy(() => import("../components/Home"));
const Items = lazy(() => import("../containers/Items.container"));
const All = lazy(() => import("./all"));

const Routes: React.FC = () => (
  <Switch>
    <Suspense fallback={<CircularProgress />}>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/all/:query?">
        <All />
      </Route>

      <Route path="/people/:query?">
        <Items itemType="people" />
      </Route>

      <Route path="/files/:query?">
        <Items itemType="files" />
      </Route>

      <Route path="/apps/:query?">
        <Items itemType="apps" />
      </Route>
    </Suspense>
  </Switch>
);

export default Routes;
