const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
app.set('view engine', 'ejs');
app.locals.API_KEY = process.env.API_KEY;
app.locals.CLIENT_ID = process.env.CLIENT_ID;
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/javascript'));
app.get("/mail-box", function(req, res){
    console.log("Starting MailBox..");
    res.render("main");
});

app.listen("8887", function(){
})