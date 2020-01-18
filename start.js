const fs = require('fs');

const isEnvFileCreated = () => {
    if (fs.existsSync('.env')) {
        console.log('\n.env file already exists on project root. \n');
        console.log('exit\n');
    } else {
        console.log('\n.env does not exists. Create .env file with default values \n');
        createEnvFile();
        writeDefaultValuesToEnvFile();
        createScriptsFile();
    }
};

const createEnvFile = () => {
    let createStream = fs.createWriteStream(".env");
    createStream.end();
    console.log('\n.env-file created. \n');
};

const writeDefaultValuesToEnvFile = () => {
    fs.readFile('fields.txt', 'utf8', (err, data) => {
          let writeStream = fs.createWriteStream(".env");
          writeStream.write(data);
          writeStream.end();
    });
    console.log('\nadd default values on fields.txt-file to .env-file \n');
};

const createScriptsFile = () => {
    let writeStream = fs.createWriteStream("public/script2.js");
    writeStream.write("let script = document.createElement(\"script\");");
    writeStream.write("script.src = \"https://maps.googleapis.com/maps/api/js?key=YOUR_OWN_GOOGLE_API_KEY\";");
    writeStream.write("script.type = \"text/javascript\";");
    writeStream.write("document.head.appendChild(script);");
    writeStream.end();
    console.log('\nscripts2.js file created on folder public/ \n');
};

isEnvFileCreated();
