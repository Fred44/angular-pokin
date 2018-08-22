const authFireBaseClient = require('./firebase-client');

exports.validateFirebaseIdToken = async (req, res, next) => {
  // Get user from auth headers.
  // If found set req.user
  // If not found, go to next middleware, the next middleware needs to check for req.user to allow/deny unauthorized access

  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    return next();
  }

  console.log('Check if request is authorized with Firebase ID token');

  const idToken = req.headers.authorization.split('Bearer ')[1];

  if (idToken) {
    try {
      const decodedIdToken = await authFireBaseClient.auth().verifyIdToken(idToken);
      console.log('ID Token correctly decoded', decodedIdToken);
      req.user = decodedIdToken;
      return next();
    } catch(error) {
      console.error('Error while verifying Firebase ID token:', error);
      res.status(419).send('Token Expired');
      return;
    };
  }

};

/**
 *  Route middleware to ensure user is authenticated.
 */
exports.authorizedOnly = (req, res, next) => {
  if (!req.user || !req.user.uid) {
    console.error('User not authenticated');
    res.status(403).send('Unauthorized');
  }
  next();
};
