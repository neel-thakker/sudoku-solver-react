import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Game from "./components/GameComponent";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
