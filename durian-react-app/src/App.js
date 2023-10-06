import React, { useState } from "react";
import logo from "./duriantransparent.png";
import "./App.css";
import SearchForm from "./SearchForm.js";
import RenderSearch from "./RenderSearch.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Durian is coming...
        </p>
      </header>
      <SearchForm/>
      <RenderSearch/>
    </div>
  );
}

export default App;
