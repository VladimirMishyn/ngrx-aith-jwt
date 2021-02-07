const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import { accessTokenSecret } from '../auth/access.token';
import { authenticate } from '../db/db-acessors';

export function loginUser(req: Request, res: Response) {
  console.log('User login');
  const { email, password } = req.body;

  const user = authenticate(email, password);
  if (user) {
    const accessToken = jwt.sign({ email: user.email, id: user.id }, accessTokenSecret);
    setTimeout(() => {
      res.status(200).json({ user, token: accessToken });
    }, 2000);
  } else {
    res.sendStatus(403);
  }
}
