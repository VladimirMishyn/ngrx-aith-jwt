import { Document } from './../../_shared-models/document';
import { User } from './../../_shared-models/user';
import { DOCUMENTS } from './documents';
import { USERS } from './users';

export function authenticate(email: string, password: string): User {
  const user: any = Object.values(USERS).find((user) => user.email === email);
  return user && user.password === password ? user : null;
}

export function getUserById(id: string): User {
  const user: any = Object.values(USERS).find((user) => user.id === id);
  return user || null;
}

const payloadSize = 30;
export function getDocuments(id?: string): Array<Document> {
  if (!id) return DOCUMENTS.slice(0, payloadSize);
  const currentIndex = DOCUMENTS.findIndex((document) => document.id === id);
  return currentIndex > 0 ? DOCUMENTS.slice(currentIndex + 1, currentIndex + payloadSize + 1) : [];
}

export function getDocumentById(id: string): Document {
  return DOCUMENTS.find((document) => document.id === id);
}
