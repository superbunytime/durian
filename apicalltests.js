import axios, * as others from "axios";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");
import dotenv from "dotenv";

dotenv.config();
const token = process.env.USA_JOBS_API_KEY;

const request = require("request");

const host = "data.usajobs.gov";
const userAgent = "led.ecodyswhite@gmail.com";
const authKey = token;

request(
  {
    url: "https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=Software Development&LocationName=Washington, DC",
    method: "GET",
    headers: {
      Host: host,
      "User-Agent": userAgent,
      "Authorization-Key": authKey,
    },
  },
  function (error, response, body) {
    let data = JSON.parse(body);
    console.log(
      data.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionURI
    );
    for (let i = 0; i < 10; i++) {
      console.log(
        data.SearchResult.SearchResultItems[i].MatchedObjectDescriptor
          .PositionURI
      );
    }
    // doesn't work???
    // i suspect this does not work because i'm incrementing the wrong thing
    // no that's not it

    // LMAO I FORGOT FOR LOOP SYNTAX
  }
);
