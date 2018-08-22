import { PokerService } from '../poker-service';

const express = require('express'),
  router = express.Router();

import { Utils } from '../utils';
const utils: Utils = new Utils();

const fireBaseClient = require('../firebase-client');
const firestore = fireBaseClient.firestore();

const auth = require('../auth');

const pokerSvc: PokerService = require('./poker-service');

router.post('/poker', auth.authorizedOnly, async (req, res) => {
  const pokerOptions = req.body.pokerOptions;
  const user = req.user;

  console.log(pokerOptions, req.user);

  // const id = firestore.createId();
  const ref = await firestore.collection('/pokers').add({
    userId: user.uid,
    options: {
      pokerName: pokerOptions.pokerName,
      cardSet: pokerOptions.cardSet
    },
    cards: pokerOptions.cardSet === 'Custom' ? pokerOptions.cards : pokerSvc.getCards(pokerOptions.cardSet),
    creationDate: utils.getUTCTimeStamp()
  });

  res.status(201).send({
    pokerId: ref.id
  });

});
