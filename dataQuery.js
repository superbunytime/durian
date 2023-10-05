import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

let USA_JOBS = fs.readFileSync('USA_JOBS.json', 'utf-8', function(err, data){
    return data
    // needs readFileSync
})

let JOOBLE = fs.readFile('JOOBLE.json', 'utf-8', function(err, data){
    return data
    // does not need readFileSync
})
console.log(USA_JOBS)