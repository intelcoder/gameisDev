/**
 * Created by fiddlest on 2016-01-26.
 */
var express = require('express'),
    router = express.Router(),
    rootPath = require('app-root-path'),
    User = require(rootPath+'/app/models/user'),
    mAuth = require(rootPath+'/app/middleware/authentication');

router.get('/',mAuth,function(req,res){
    User.find({}).then(function(users){
        res.json({
            data:users
        })
    });
})



module.exports = router;

