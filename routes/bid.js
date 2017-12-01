var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('bid', { title: '竞价广播服务' });
});

module.exports = router;