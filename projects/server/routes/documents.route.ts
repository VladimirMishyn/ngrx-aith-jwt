import { Request, Response } from 'express';
import { getDocumentById, getDocuments as getDocumentsFromDB } from '../db/db-acessors';

export function getDocuments(req: Request, res: Response) {
  console.log('Documents retreive');
  try {
    const { id } = req.query;
    id ? res.status(200).json(getDocumentsFromDB(`${id}`)) : res.status(200).json(getDocumentsFromDB());
  } catch (e) {
    res.sendStatus(400);
  }
}

export function getDocument(req: Request, res: Response) {
  console.log('Single Documents retreive', req.params.id);
  try {
    res.status(200).json(getDocumentById(req.params.id));
  } catch (e) {
    res.sendStatus(400);
  }
}
