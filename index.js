const express = require('express'), /* express import */
app = express(),
port = 3000;
bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.set("view engine","ejs");


app.get("/", function(req,res){
    res.render("home")
});

app.get("/navbar",function(req, res){
    res.render("navbar")
})

app.get("/sidebar",function(req, res){
    res.render("sidebar")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`),function(){
	console.log("Server is now started-!");
});

