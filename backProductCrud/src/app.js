import express from "express";
import passport from "passport";
import initializePassport from './config/passport.config.js';
import mongoDB from './dao/mongo.js';
import cors from 'cors';
import env from './config/dotEnv.config.js';
import { __mainDirname } from "./utils/path.utils.js";

import { productRouter } from './routes/index.router.js';

const app = express();
mongoDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__mainDirname}/document`));

initializePassport();
app.use(passport.initialize());

app.use('/api/product', productRouter);

app.listen(env.port, () => console.log('Server conected'));