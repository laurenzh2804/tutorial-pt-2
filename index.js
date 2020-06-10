const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
	host: "testdb.cbmtnpuqjiek.us-east-2.rds.amazonaws.com",
	user: "root",
	password: "Hilgi2209$",
	database: "testdb"
});


app.get('/', function(req, res) {
	res.send('Hey Maus!');
	con.connect(function(err) {
		if(err) throw err;
		console.log("Connected!");
		con.query("SELECT name1, street, house_number FROM testdb.suppliers", function(err, result) {
			if (err) throw err;
			//console.log("Result: " + result);
			var reply = "";
			for(var i = 0; i < result.lenght; i++) {
				reply += result[i].name1 + " wohnt in " + result[i].street + " " + result[i].house_number + "\n";
			}
			res.send(reply);
		});
	});
});
//app.use(express.static('public'));

app.listen(3000, () => console.log('Server running on port 3000'));



