import React from "react";
import JOOBLE_data from './JOOBLE.json'
import USA_JOBS_data from './USA_JOBS.json'

function handleClick() {
  console.log(JOOBLE_data[0][2]);
  console.log(USA_JOBS_data);
  //okay, getting it to log the data.
  //now render html that puts the data in it.
}

function GoodClick() {
  return (
    <button onClick={handleClick}>
      Search
    </button>
  );
}
  
export default GoodClick;
