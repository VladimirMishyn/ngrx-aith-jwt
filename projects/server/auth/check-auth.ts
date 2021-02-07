import { Request, Response, NextFunction } from 'express';
import { accessTokenSecret } from './access.token';
const jwt = require('jsonwebtoken');

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, accessTokenSecret);
      res.locals.id = decoded.id;
      next();
    } catch (e) {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
}
