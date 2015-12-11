/**
 * Created by fiddlest on 05/12/15.
 */

var express = require('express'),
    router = express.Router(),
    rootPath = require('app-root-path'),
    User = require(rootPath+'/app/models/user');



router.get('/',function(req,res){
   res.send("Register");
});
router.post('/',function(req,res,next){
    if(req.body==='undefined' && !req.body ){
        res.send("Invalid register");
    }
    //passphrase

    //hash


    var newUser = new User({
        email:req.body.email,
        password:req.body.password
    });

    newUser.save(function(err,newUser){
        console.log(err,newUser);
        if(err){
            res.send(error);
        }
        res.send(newUser);
    });

    next();
});


module.exports = router;


/*  */