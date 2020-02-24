import React from "react";
import { ToastContainer } from "react-toastify";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import MaterialUiTheme from "./styles/theme";

const theme = createMuiTheme(MaterialUiTheme);

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/error" component={() => <h1>404</h1>} />
          </Switch>
        </MuiThemeProvider>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
