/**
 * Created by fiddlest on 2016-01-26.
 */
var express = require('express'),
    router = express.Router(),
    rootPath = require('app-root-path'),
    user = require('./user');


router.use('/user',user);

router.use('/',function(req,res){
    console.log("test");
    res.send('test')

});
module.exports = router;