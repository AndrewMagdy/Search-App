import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store/configureStore";
import Routes from "./routes/";
import AppBar from "./components/AppBar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppBar />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
