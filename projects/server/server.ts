import * as express from 'express';
import { Application } from 'express';
import { authenticateJWT } from './auth/check-auth';
import { getDocument, getDocuments } from './routes/documents.route';
import { loginUser } from './routes/login.route';
import { getUser } from './routes/user.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);
app.route('/api/user').get(authenticateJWT, getUser);
app.route('/api/documents').get(authenticateJWT, getDocuments);
app.route('/api/documents/:id').get(authenticateJWT, getDocument);

const httpServer: any = app.listen(9000, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
