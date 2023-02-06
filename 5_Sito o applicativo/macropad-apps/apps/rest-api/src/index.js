//Server http
import dotenv from 'dotenv';
import http from 'http';
import app from './app.js';


dotenv.config(); // da fare solo nell'entry point

const port = process.env.PORT || 3000;

console.log("BASE_URL " + process.env.BASE_URL);

const server = http.createServer(app); // <- app express
server.listen(port, () => console.log('Server up and running on port ' + port));