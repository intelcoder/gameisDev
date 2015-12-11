/**
 * Created by fiddlest on 05/12/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var user = new Schema({
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
        validate:/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
    },
    password:{type:String,required:true,min:8,max:16}
});



module.exports =mongoose.model('User',user);
/*
var user = new Schema({
    email:{type:String,required:true, max:50},
    password:{type:String,required:true,min:8,max:16},
    full_name:{type:String,max:20},
    phone_number:{type:String,validate:"^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$"},
    access_token : {type:String},
    passPhrase:{type:String},
    created_at :{type:Date,default: Date.now},
    updated_at :{type:Date,default: Date.now}
});*/
