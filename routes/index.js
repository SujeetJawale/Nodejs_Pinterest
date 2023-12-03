var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postsModel = require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



module.exports = router;
