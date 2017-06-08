var express = require('express');
var router =  express.Router();
router.get("/login",test);
router.get("/getToken",getToken);

function test (req, res) {
	// ?console.log("tesst");
	res.json({"welcome":"this test for my side"}).end();
}

function getToken(req, res){
	// console.log(req);
	res.json({"token":req.sessionID});
}

module.exports = router;