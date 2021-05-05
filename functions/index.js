const functions = require("firebase-functions");
const config = functions.config();
const cors = require("cors")({origin: true})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getConfig = functions.https.onRequest((req, res) => {
  return cors(req,res, ()=> {
    functions.logger.info("Hello logs!", {structuredData: true});
    res.send(config);
  })
});
