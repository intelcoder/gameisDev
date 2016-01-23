/**
 * Created by fiddlest on 03/12/15.
 */

function getDatabaseUrl(dbName){

    var database = {
        mongoose: 'mongodb://localhost:27017/gamies',
        mysql:''
    };
    if( database[dbName] !=='undefined')
        return  database[dbName];
    return null;
}
exports.getDatabaseUrl = getDatabaseUrl;
