import React, { useState } from "react";
import logo from "./duriantransparent.png";
import "./App.css";
import SearchForm from "./SearchForm.js";


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
    </div>
  );
}

export default App;
