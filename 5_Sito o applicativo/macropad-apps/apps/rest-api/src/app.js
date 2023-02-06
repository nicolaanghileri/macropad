//Express
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import caneRouter from './routes/cane.js' //perchè usiamo import / export nuovo

dotenv.config();

const app = express();
const {BASE_URL} = process.env; //da usare come lista, basta aggiungere alle parentes

if(BASE_URL == undefined) {
    console.log('no BASE_URL set, von on .env')
}



console.log("BASEURL: " + BASE_URL);

//middlewares
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// tuoi middlewares
// ... (mid per i log / autenticazione)


app.use(BASE_URL, caneRouter); // /api/v1/cane


//routes + routers
app.get(`${BASE_URL}/test`, (_, res) => {
    res.status(200).json({
      message: 'OK VALSA!',
    });
});

app.use(morgan());

export default app;

