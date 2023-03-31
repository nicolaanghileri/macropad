//Express
import express from 'express';
import cors from 'cors';
//import morgan from 'morgan'; logging
import dotenv from 'dotenv';


//import all routes from ./routes/...
import authRouter from './routes/auth.js';
import keyRouter from './routes/key.js';
import socketRouter from './routes/socket.js';
//Environment configuration
dotenv.config();

//Initialize
const app = express();
const {BASE_URL} = process.env; //da usare come lista, basta aggiungere alle parentes

if(BASE_URL == undefined) {
    console.log('no BASE_URL set, von on .env')
}



console.log("BASEURL: " + BASE_URL);

//middlewares
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,               //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// tuoi middlewares
// ... (mid per i log / autenticazione)
app.use(BASE_URL, authRouter);
app.use(BASE_URL, keyRouter);
app.use(BASE_URL, socketRouter);
//routes + routers
//app.use(morgan());

export default app;

