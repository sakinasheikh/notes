var express = require("express");
var app = express();

// app.get("/color/:choice", function(req, res){
// 	var choice = req.params.choice;
// 	res.send("your color is: " + choice);
// })

app.get("/pick-a-number/:choice", function(req, res) {
	var choice = req.params.choice;
	if (choice > 7) {
		res.send("too high");
	} else if (choice < 7) {
		res.send("too low");
	} else {
		res.send("got it!")
	}
})

// app.get("/", function(req, res) {
// 	res.send({name: "sakina", last: "sheikh", age: 26});
// });

var port = 3000
app.listen(3000, function () {
	console.log("server running at localhost:300")
}); //port