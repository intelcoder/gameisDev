/**
 * Created by fiddlest on 05/12/15.
 */
var rootPath = require('app-root-path'),
    fs = require('fs');
var publicKey = fs.readFileSync(rootPath+'/config/public.pem');

function getAuthElement(element){
    var authElement = {
        passPhrase :'sSvkZ6AdvVDU11L9z41ujEQhCT0OG7MDQKYl6Ff0LWw',
        publicKey:publicKey
    }
    return authElement[element] ? authElement[element] : null;
}
exports.getAuthElement = getAuthElement;