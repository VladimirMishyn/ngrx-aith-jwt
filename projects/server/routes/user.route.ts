import { Request, Response } from 'express';
import { getUserById } from '../db/db-acessors';

export function getUser(req: Request, res: Response) {
  console.log('User retreive');
  res.status(200).json(getUserById(res.locals.id));
}
