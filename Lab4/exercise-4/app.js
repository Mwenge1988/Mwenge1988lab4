// Create a new directory and then create an app.js file. Open your workspace in Visual Studio Code. In the app.js file write or copy the following code to create your first Web Server with Node.js
// ** Startup code can be copied at the following link: https://nodejs.org/en/about/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Run the app.js at the command line with node. The server will start up and be waiting to handle requests:
// Open the web browser and navigate to local host port 3000 to trigger a response to the running web server