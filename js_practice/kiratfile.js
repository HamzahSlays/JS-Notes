//Custom Asynchronous File Reader with Callbacks in Node.js
const fs = require("fs");
function kiratsReadFile(cb) {
    fs.readFile("file.txt", "utf-8", function(err, data) {
        cb(data);
    });
}
function onDone(data) {
    console.log(data);
}

kiratsReadFile(onDone);