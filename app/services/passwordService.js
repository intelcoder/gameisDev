/**
 * Created by seong on 12/10/2015.
 */
var Promise = require('bluebird'),
    bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    bcryptGenSalt = Promise.promisify(bcrypt.genSalt),
    bcryptGenHash = Promise.promisify(bcrypt.hash)



exports.getHash =function(passPhrase,salt){
        return bcryptGenHash(passPhrase,salt);
}

exports.genRandomPassPhrase=function(passPhraseSize){
    return new Promise(function(resolve){
        var randomString = crypto.randomBytes(passPhraseSize).toString('base64').slice(0,passPhraseSize).replace(/\+/g, '0').replace(/\//g, '0');
        if(!randomString)
            return "";
        return  resolve(randomString);
    });
}

exports.getSalt=function(saltSize){
        return bcryptGenSalt(saltSize);
}


/*function PasswordService(){
    this.defaultSaltsize = 12;
    this.defaultPassphraseSize = 32;
    this.passPhrase='';
}


var test = new  PasswordService();
PasswordService.prototype.getHash = function(saltSize, passPhraseSize){
    return Promise.join(bcryptGenSalt(saltSize),genRandomString(passPhraseSize),function(salt,passPhrase){
        this.passPhrase=passPhrase.toString('base64').slice(0,passPhraseSize).replace(/\+/g, '0').replace(/\//g, '0');
        console.log(test)
        return bcryptGenHash(this.passPhrase,salt);
    })
};
PasswordService.prototype.getPassPhrase = function(){
    return this.passPhrase;
}



test.getHash(12,32).then(function(hash){
    console.log(hash);
    console.log(test);

});*/
