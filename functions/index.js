const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    // get user and add custom claim
    return admin.auth().getUserByEmail('harryharanr@gmail.com').then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            superadmin: true
        })
    }).then(() => {
        return {
            message: `Success !! Hari has been made a superadmin !`
        }
    }).catch(err => {
        return err;
    });

});
