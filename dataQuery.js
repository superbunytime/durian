import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

let USA_JOBS = fs.readFileSync('USA_JOBS.json', 'utf-8', function(err, data){
    return data
    // needs readFileSync
})

let JOOBLE = fs.readFileSync('JOOBLE.json', 'utf-8', function(err, data){
    return data
    // does not need readFileSync
})

let jooble_regex = /link/g;
let link_arr = [...JOOBLE.matchAll(jooble_regex)]
let trimmed_link_arr = []
for (let i = 0; i < link_arr.length; i++){
    trimmed_link_arr.push(
        link_arr[i][5, link_arr[i].indexOf("link")]
    )
}
console.log(trimmed_link_arr[0])
// alright, now extract the title, url, and description from each data set.

// trying to use typeof or instanceof isn't getting me anywhere.
// time to just brute force harvest the data
// nightmare nightmare nightmare nightmare

//jooble is a string
// we must perform string operations on it to extract the delicious data within.

//okay now make the regex more specific to get from 'link' to the end of that data point
//which should be a closing ]

//no
//better idea. use a string indexof ']' to create a substring going up to ']'

//this should work and it doesn't and it's driving me insane
//it's returning undefined 20 times, when it should be returning the LINK for the job post
//20 TIMES. WHAT IS HAPPENING???

//when i set it to find index of "link" and push that, it's pushing just link, instead of
//all the way up to the next link. i think that may be indicative of the error.