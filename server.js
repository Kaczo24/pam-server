var fs = require('fs');
const https = require('https');
const http = require('http');
require('dotenv').config()

const app = require('./app');

const privateKey  = fs.readFileSync('./ssl/server.key', 'utf8');
const certificate = fs.readFileSync('./ssl/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const server = https.createServer(credentials, app);
const unsecureServer = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});

unsecureServer.listen(process.env.PORT_U, () => {
    console.log("Unsecure server running on port " + process.env.PORT_U);
});