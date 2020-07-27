import React from "react";
import "react-app-polyfill/stable";
import { hydrate, render } from "react-dom";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

const startApp = () => {
  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement, rootElement.firstElementChild);
  } else {
    render(<App />, rootElement);
  }
  // registerServiceWorker();
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
