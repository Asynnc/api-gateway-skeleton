import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import logger from 'morgan'
import GlobalError from './middlewares/GlobalError';
import { LogRequests } from './middlewares/LogRequests';
import routes from './routes';
import '../redis';

const app = express();
app.use(cors())
app.use(express.json());

app.use(logger('dev'));
app.use(LogRequests);
app.use('/api', routes);
app.use(GlobalError);





export { app };
