const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get("/mail-box", function(req, res){
    
    res.render("main");
});

app.listen("8887", function(){
})