const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/javascript'));
app.get("/mail-box", function(req, res){
    console.log("Starting MailBox..");
    res.render("main");
});

app.listen("8887", function(){
})