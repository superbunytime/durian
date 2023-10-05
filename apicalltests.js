import axios, * as others from "axios";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
import dotenv from "dotenv";

dotenv.config();
const token = process.env.USA_JOBS_API_KEY;
const jooble_token = process.env.JOOBLE_API_KEY;

const request = require("request");

const host = "data.usajobs.gov";
const userAgent = "led.ecodyswhite@gmail.com";
const authKey = token;

// USAJOBS API CALL TESTS

request(
  {
    url: "https://data.usajobs.gov/api/search?JobCategoryCode=2210",
    //&Keyword=Software Development&LocationName=Washington, DC tack this on at the end to get swe
    method: "GET",
    headers: {
      Host: host,
      "User-Agent": userAgent,
      "Authorization-Key": authKey,
    },
  },
  function (error, response, body) {
    let data = JSON.parse(body);
    // console.log(data.SearchResult.SearchResultItems[0])

    for (let i = 0; i < 5; i++) {
      // console.log(
      //   data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
      //     .PositionURI
      // );
      //this console logs just the uri of 10 job posts

      // instead of logging all the links directly to the json file and causing obnoxious errors
      // let's make an object, have it put the title, link, in the object,
      // and then write that object to the file.
      const dArr = []
      dArr.push(data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionURI,
        data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor.PositionTitle)
      fs.appendFile('USA_JOBS.json', JSON.stringify(dArr), (error) => {
          if (error) throw error;
        });
    }
  }
);

// JOOBLE API CALL TESTS

const jooble_url = "https://jooble.org/api/";
const jooble_key = jooble_token;
const jooble_params = "{ keywords: 'software', location: 'Remote'}";

//create xmlHttpRequest object
const http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", jooble_url + jooble_key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");

//Callback when the state changes
http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {

    console.log(JSON.parse(http.responseText));
    fs.writeFile('JOOBLE.json', JSON.stringify(http.responseText), (error) => {
      if (error) throw error;
    });

  }
};
// Send request to the server
http.send(jooble_params);

