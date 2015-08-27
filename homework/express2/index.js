var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var path = require("path");
var views = path.join(process.cwd (), "views");

//server file 
app.use("/static", express.static("public"));

app.get("/contact", function(req, res) {
	var contact_path = path.join(views, "contact.html");
	res.sendFile(contact_path);
});

app.get("/home", function(req, res) {
	var home_path = path.join(views, "home.html");
	res.sendFile(home_path);
});

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.post("/burgers", function(req, res) {
	console.log("post to me!")
	var burger = req.body.burger;
	burgers.push(burger.name)
	res.redirect("/burgers")
	// res.send(burgers.join("</br>"))
});


app.get("/burgers", function(req, res) {
	res.send(burgers.join("</br>"));
});

app.get("/tacos", function(req, res) {
	res.send(tacos.join("</br>"));
});

app.get("/tacos/:id", function(req, res) {
	var id = req.params.id;
	var selction = tacos[id]
	res.send(selction);
});

app.get("/burgers/:id", function(req, res) {
	var id = req.params.id;
	var selction = burgers[id]
	res.send(selction);
});


//routes
// app.get("/", function(req, res) {
// 	res.send("HOME!!!!!!")
// });

// app.get("/pick-a-number/:num", function(req, res) {
// 	var number = req.params.num;
// 	res.send(number);
// });

// app.get("/multiply", function(req, res) {
// 	var x = req.query.x;
// 	var y = req.query.y;
// 	var total = x*y;
// 	res.send(total.tostring() );
// });

// app.get("/add", function(req, res) {
// 	var x = req.query.x;
// 	var y = req.query.y;
// 	var total = x+y;
// 	res.send(total);
// });



app.listen(3000, function(){
	console.log("server running on localhost:3000")
});