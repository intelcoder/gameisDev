/**
 * Created by fiddlest on 05/12/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    rootPath = require('app-root-path'),
    passwordService = require(rootPath+'/app/services/passwordService');




var userSchema = new Schema({
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
        validate:/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
    },
    password:{type:String,required:true,min:8,max:16},
});

userSchema.pre('save',function(next,done){
    next(); //pararell
    var user = this;
    passwordService.getSalt(12).then(function(salt){
        return passwordService.getHash(user.password,salt)
    }).catch(function(genSaltError){
        next(genSaltError);
    }).then(function(hash){
        user.password = hash;
        return user;

    }).catch(function(genHashError){
        next(genHashError)
    });
});

module.exports =mongoose.model('User',userSchema);
/*
var user = new Schema({
    email:{type:String,required:true, max:50,unique:true},
    password:{type:String,required:true,min:8,max:16},
    full_name:{type:String,max:20},
    phone_number:{type:String,validate:"^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$"},
    access_token : {type:String},
    passPhrase:{type:String,required:true},
    hash:{type:String,required:true},
    created_at :{type:Date,default: Date.now},
    updated_at :{type:Date,default: Date.now}
});*/
