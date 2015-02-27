var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Principal!"});
});
router.get('/chat', function(req ,res, next){
	res.render('chat/chat', { title: 'Chat'})
})

module.exports = router;
