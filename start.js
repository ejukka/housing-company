const fs = require('fs');

function createEnvFile() {
    let createStream = fs.createWriteStream(".env");
    createStream.end();
}

function writeDefault() {
    let writeStream = fs.createWriteStream(".env");
    writeStream.write("TEST");
    writeStream.end();
}

function readFile() {
    fs.readFile('fields.txt', 'utf8', function(err, data) {
          console.log(data);
           let writeStream = fs.createWriteStream(".env");
          writeStream.write(data);
          writeStream.end();
    });
}

function createScriptsFile() {
    let writeStream = fs.createWriteStream("public/script2.js");
    writeStream.write("let script = document.createElement(\"script\");");
    writeStream.write("script.src = \"https://maps.googleapis.com/maps/api/js?key=YOUR_OWN_GOOGLE_API_KEY\";");
    writeStream.write("script.type = \"text/javascript\";");
    writeStream.write("document.head.appendChild(script);");
    writeStream.end();
}

createEnvFile();
writeDefault();
readFile();
createScriptsFile();
