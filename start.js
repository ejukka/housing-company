const fs = require('fs');

function createEnvFile() {
    let createStream = fs.createWriteStream(".env_test");
    createStream.end();
}

function writeDefault() {
    let writeStream = fs.createWriteStream(".env_test");
    writeStream.write("TEST");
    writeStream.end();
}

function readFile() {
    fs.readFile('fields.txt', 'utf8', function(err, data) {
          console.log(data);
           let writeStream = fs.createWriteStream(".env_test");
          writeStream.write(data);
          writeStream.end();
    });
}

createEnvFile();
writeDefault();
readFile();
