/**
 * Created by fiddlest on 06/12/15.
 */

var express = require('express'),
    router = express.Router(),
    rootPath = require('app-root-path'),
    User = require(rootPath+'/app/models/user'),
    authConfig = require(rootPath + '/config/auth'),
    jsonwebtoken = require('jsonwebtoken'),
    Promise = require('bluebird'),
    jwtSign = new Promise.promisify(jsonwebtoken.sign);

router.post('/',function(req,res,next){
    //if body is not empty
    if(req.body==='undefined' && !req.body ){
        res.status(500).send("Invalid register");
    }
    //find user from db

    User.findOne({email : req.body.email},'email').then(function( user){
        //if user is exist create jwt web token
     /*   jwtSign({email:user.email},authConfig.getAuthElement('publicKey'),{ algorithm: 'HS256'}).then(function(token){
            console.log(token);
            res.send(token);
        })*/

    });
});


module.exports = router;
