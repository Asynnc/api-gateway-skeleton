import { Request } from 'express'

export function selectProxyHost(req: Request) {
  // In test call goBarber Api because the app.listen function is called /api
  if (req.path.startsWith('/api')) {
    return 'http://localhost:3333/api/'
  }
  else if (req.path.startsWith('/feedbacks')) {
    return 'http://localhost:3334/'
  }
}