var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const authFireBaseClient = require('./firebase-client');
exports.validateFirebaseIdToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
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
            const decodedIdToken = yield authFireBaseClient.auth().verifyIdToken(idToken);
            console.log('ID Token correctly decoded', decodedIdToken);
            req.user = decodedIdToken;
            return next();
        }
        catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(419).send('Token Expired');
            return;
        }
        ;
    }
});
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
//# sourceMappingURL=auth.js.map