var express = require('express');
var router = express.Router();

/* GET home page.   http://127.0.0.1:8888/hello/abc  */
router.get('/a.html', function(req, res, next) {
    res.render('index.ejs', { title: 'Express' , age : 30});
    // res.send("abc")
});
/* GET home page. */
// http://127.00.0l.1:8888/hello
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send("aaa")
});

module.exports = router;
