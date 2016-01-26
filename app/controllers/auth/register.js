/**
 * Created by fiddlest on 05/12/15.
 */

var express = require('express'),
    router = express.Router(),
    rootPath = require('app-root-path'),
    User = require(rootPath+'/app/models/user'),
    PasswordService = require(rootPath+'/app/services/passwordService');


router.get('/',function(req,res){
   res.send("Register");
});


router.post('/',function(req,res,next){
    if(req.body==='undefined' && !req.body ){
        res.status(500).send("Invalid register");
    }
    console.log(req.body);
    User.create({
        email:req.body.email,
        password:req.body.password
    },function(err,user){
        if(err){
            return  res.status(500).send(err);
        }
        return res.json({
            data:user
        })
    })
});


module.exports = router;


/*  */