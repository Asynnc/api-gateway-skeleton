import httpProxy from 'express-http-proxy'
import express, { Request, Response } from 'express';
import logger from 'morgan'
import { selectProxyHost } from './middlewares/selectProxyHost';

const app = express();
app.use(logger('dev'));
console.log(() => logger('dev'))

app.use((req: Request, res: Response, next) => {
  httpProxy(selectProxyHost(req as any) as string)(req, res, next);
});

app.get('/status', (request: Request, response: Response) => {
  return response.json({
    message: 'Api Gateway Nodejs Online'
  })
})

app.listen(10000, () => {
  console.info('Api Gateway running!')
});