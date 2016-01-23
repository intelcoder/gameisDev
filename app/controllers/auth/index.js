/**
 * Created by fiddlest on 05/12/15.
 */
var express = require('express'),
    router = express.Router(),
    register = require('./register'),
    login = require('./login');

router.use('/register',register);
router.use('/login',login);

module.exports = router;