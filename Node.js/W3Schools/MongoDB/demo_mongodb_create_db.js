var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log('Database Created!')
	db.close();
})