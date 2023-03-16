//Express
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';


//import all routes from ./routes/...
<<<<<<< Updated upstream
import userRouter from './routes/auth.js';
import testRouter from './routes/test.js';
=======
import authRouter from './routes/auth.js';
>>>>>>> Stashed changes

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
  credentials:true,            //access-control-allow-credentials:true
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


<<<<<<< Updated upstream
app.use(BASE_URL, userRouter);
app.use(BASE_URL, testRouter);
=======
app.use(BASE_URL, authRouter);
>>>>>>> Stashed changes

//routes + routers
//app.use(morgan());

export default app;

