"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const fireBaseClient = require('./firebase-client');
const auth = require('./auth');
const utils_1 = require("./utils");
const utils = new utils_1.Utils();
// The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
// admin.initializeApp();
const firestore = fireBaseClient.firestore();
const express = require('express');
const cors = require('cors')({ origin: true });
const app = express();
app.use(cors);
app.use(auth.validateFirebaseIdToken);
app.post('/poker', auth.authorizedOnly, (req, res) => __awaiter(this, void 0, void 0, function* () {
    const pokerOptions = req.body.pokerOptions;
    const user = req.user;
    console.log(pokerOptions, req.user);
    // const id = firestore.createId();
    const ref = yield firestore.collection('/pokers').add({
        userId: user.uid,
        options: Object.assign({}, pokerOptions),
        cards: pokerOptions.cardSet === 'Custom' ? pokerOptions.cards : ['1', '3', '5'],
        creationDate: utils.getUTCTimeStamp()
    });
    res.send({
        pokerId: ref.id
    });
}));
// Expose the API as a function
exports.api = functions.https.onRequest(app);
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
// export const helloWorld = functions.https.onRequest((request, response) => {
//   console.log('HelloWorld');
//   response.send("Hello Fred from Firebase!");
// });
//# sourceMappingURL=index.js.map