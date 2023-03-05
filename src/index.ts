import express, { Express } from "express";
import { skottRouter } from "routes/skott";
import { config } from "dotenv";

config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use('/', skottRouter);

app.listen( port, () => console.log(`Up and running on ${port}`) );
