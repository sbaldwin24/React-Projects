import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};

renderApp();

/**
 * @see https://webpack.github.io/docs/hot-module-replacement.html
 */
if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
