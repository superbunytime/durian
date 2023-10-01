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

// request(
//   {
//     url: "https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=Software Development&LocationName=Washington, DC",
//     method: "GET",
//     headers: {
//       Host: host,
//       "User-Agent": userAgent,
//       "Authorization-Key": authKey,
//     },
//   },
//   function (error, response, body) {
//     let data = JSON.parse(body);
//     console.log(
//       data.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionURI
//     );
//     for (let i = 0; i < 10; i++) {
//       console.log(
//         data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
//           .PositionURI
//       );
//     }
//   }
// );

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
    // console.log(http.responseText);
    // for (let i = 0; i < 10; i++){
    //   console.log(JSON.parse(http.responseText))
    //spelling the variable 'responsText' isn't going to give me
    //the results i'm looking for
    //i think i need to use JSON.parse
    // }
    console.log(JSON.parse(http.responseText));
    // ??? ???????
    // data = JSON.parse(http.responseText);
  }
};
//Send request to the server
// http.send(jooble_params);


let obj = {"totalCount": 1, "jobs": ["foo"]}
console.log(obj.jobs[0])