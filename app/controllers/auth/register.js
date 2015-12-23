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
/*
router.post('/isEmailExist',function(req,res){
    if(req.body.email){
        User.findOne({'email': req.body.email},'email',function(err,user){
            if(err){
                return new Error(err);
            }
            return res.json({
                data:user
            });
        });
    }
});*/

router.post('/',function(req,res,next){
    if(req.body==='undefined' && !req.body ){
        res.status(500).send("Invalid register");
    }
    var newUser = new User({
        email:req.body.email,
        password:req.body.password
    });
    newUser.save(function(err){
        if(err){
            res.send(error);
        }
        res.send(newUser);
    });
    next();
});


module.exports = router;


/*  */