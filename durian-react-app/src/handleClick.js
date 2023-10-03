import React, { useState } from "react";

function handleClick() {
    console.log("clicky")
}

function ClickToHide() {
    return (
      <button onClick={handleClick}>
      </button>
    );
  }

export default ClickToHide;