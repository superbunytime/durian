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

console.log(JOOBLE)
// alright, now extract the title, url, and description from each data set.

// trying to use typeof or instanceof isn't getting me anywhere.
// time to just brute force harvest the data
// nightmare nightmare nightmare nightmare

//jooble is a string
// we must perform string operations on it to extract the delicious data within.