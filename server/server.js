var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var path = require("path");
var expressJwt = require('express-jwt');
var session = require('express-session');
var sessionstore = require('sessionstore');
var scret_key = 'tops?123';
// var appConfig =  require("./appConfig");
var app  = express();
// var session = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../app'));
app.use(session({
	secret:scret_key,
	resave:false,
	saveUninitialized:true,
	store: sessionstore.createSessionStore({
      type: 'mongodb',
      host: 'localhost',         // optional
      port: 27017,               // optional
      dbName: 'BombyxPLM_Development',       // optional
      collectionName: 'sessions',// optional
      timeout: 1000             // optional
      // authSource: 'authedicationDatabase',        // optional
      // username: 'technicalDbUser',                // optional
      // password: 'secret'                          // optional
      // url: 'mongodb://user:pass@host:port/db?opts // optional
  	}),
      cookie: {
            maxAge: 1000 * 60 * 60 // Milliseconds (3600000ms -> 60min)
      }
}));
app.use('/api', expressJwt({ secret: scret_key, credentialsRequired: true }).unless({ path: ['/api/getToken'] }));

app.use((err,req,res,next) => {
  if(err.name === 'UnauthorizedError'){
    res.send(err);    
  }
});
app.use('/api',require('./controller/main.controller'));
var server = app.listen(8001,function(){
	console.log("connected server");
});

