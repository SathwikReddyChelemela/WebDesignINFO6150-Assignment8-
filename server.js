var express= require("express");
var http = require("http");
var mongoose=require("mongoose");
var app=express();
var bodyParser = require('body-parser');
var Users = require('./model/users.model');
const success = "User created successfully";

const failure = "User creation failure due to ";
app.use(express.json());
app.use(bodyParser.json());
//import routes
const usersRoute = require('./route/users.route'); 
app.use('/',usersRoute);

var server=http.createServer(app);
mongoose.connect("mongodb://localhost:27017/Assignment8DB")
mongoose.connection.on('connected',()=>{
    console.log("connected to Mongoose");
});
mongoose.connection.on('error',()=>{
    console.log("error in connecting to Mongoose");
});

//accept node express
app.get('/', (req,res) =>{
    res.send('hello from Homepage');

});


server.listen(3000, ()=>{
    console.log("hello server init");
});

