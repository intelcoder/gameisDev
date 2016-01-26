/**
 * Created by fiddlest on 2016-01-26.
 */
var express = require('express'),
    router = express.Router()


router.use('/',function(req,res,next){



    next();
});

module.exports = router;