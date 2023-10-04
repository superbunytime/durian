import React, { useState } from "react";
import logo from "./duriantransparent.png";
import "./App.css";

function Preload() {
  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() => {
          document
            .getElementsByClassName("App-logo")[0]
            .style.setProperty("display", "none");
          document
            .getElementsByClassName("dIsCome")[0]
            .style.setProperty("display", "none");
          document
            .getElementsByClassName("App-header")[0]
            .style.setProperty("display", "none");
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p className="dIsCome">Durian is coming...</p>
      </header>
      <body>
        <p>hey here's some body text</p>
      </body>
    </div>
  );
}

export default preload;