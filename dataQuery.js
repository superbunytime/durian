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
        link_arr[i][0, link_arr[i].indexOf("")]
    )
}
console.log(trimmed_link_arr[0])
