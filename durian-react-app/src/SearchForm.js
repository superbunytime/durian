import React, { useState } from "react";
import ButtonClick from "./ButtonClick.js";

function SearchForm() {
  const [formData, setFormData] = useState({
    jobSearch: "", // title, keywords, company
    location: "", // blank for anywhere
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    // this is where we'll call a function to parse the data
    // based off the search form inputs
    console.log(formData)
    setFormData({ jobSearch: "", location: "" });
    // returning the search form back to default empty string
    // don't necessarily need to do that but here's how it's done.
  };

  // need to change the return value because it's gonna render stuff that's not referenced
  // it's literal copy-paste from the boxes assignment
  return (
    <div>
    <form onSubmit={gatherInput}>
      <div>
        <label htmlFor="jobSearch">Job Search</label>
        <input
          onChange={handleChange}
          type="text"
          name="jobSearch"
          value={formData.jobSearch}
          id="height"
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          onChange={handleChange}
          type="text"
          name="location"
          id="location"
          value={formData.location}
        />
      </div>
    </form>
    <ButtonClick/>
    
  </div>
);
 // line 52, the search button makes it crash because that's not been properly implemented.
}

export default SearchForm;
