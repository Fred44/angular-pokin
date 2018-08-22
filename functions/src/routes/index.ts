const express = require('express'),
  router = express.Router();

const pokerRoutes = require('./poker-routes');

router.use('/poker', pokerRoutes);

module.exports = router;
