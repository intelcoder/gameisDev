/**
 * Created by fiddlest on 05/12/15.
 */
var express = require('express'),
    router = express.Router(),
    register = require('./register');

router.use('/register',register);

module.exports = router;