const express = require("express");
const app = express();

app.get("/mail-box", function(req, res){
    res.render("main.ejs");
});

app.listen("8887", function(){
})