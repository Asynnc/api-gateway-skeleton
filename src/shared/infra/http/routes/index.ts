import { Router, Request, Response, NextFunction } from 'express';
import httpProxy from 'express-http-proxy'
import { selectProxyHost } from '../middlewares/selectProxyHost';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    application: 'Gateway Api',
    message: 'Api Gateway Nodejs Online'
  })
})

routes.use((req: Request, res: Response, next: NextFunction) => {
  httpProxy(selectProxyHost(req as any) as string)(req, res, next);
});



export default routes;
