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
    var newUser;
    User.findOne({email : req.body.email},'email').then(function(user){
        newUser = user;
        return jwtSign({email:user.email},authConfig.getAuthElement('publicKey'),{ algorithm: 'HS256'});
    }).then(function(token){
        newUser.access_token = token;
        newUser.save();
        res.json({data:newUser});
    }).catch(function(error){
        console.log(error);
        res.status(500).send(error);
    });
});


module.exports = router;
