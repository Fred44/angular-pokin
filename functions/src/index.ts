import * as functions from 'firebase-functions';

const fireBaseClient = require('./firebase-client');

const auth = require('./auth');

const express = require('express');
const cors = require('cors')({ origin: true });

const app = express();

app.use(cors);
app.use(auth.validateFirebaseIdToken);

app.use(require('./routes'));


// Expose the API as a function
exports.api = functions.https.onRequest(app);
