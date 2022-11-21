var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: '<username>',
	password: '<password>'
});

con.connect(function(err){
	if(err) throw err;
	console.log('Connected to DB');
});