/**
 * Created by fiddlest on 06/12/15.
 */

var express = require('express'),
    router = express.Router(),
    rootPath = require('app-root-path'),
    User = require(rootPath+'/app/models/user');


router.post('/',function(req,res){

    //if body is not empty
    if(req.body==='undefined' && !req.body ){
        res.status(500).send("Invalid register");
    }

    //find user from db
    User.findOne({'email' : req.body.email}).then(function(err, user){
        if(err){
            throw Error(err);
        }


        //if user is exist create jwt web token






    })

    //if not found return error


    //if found generate token and save into local


});