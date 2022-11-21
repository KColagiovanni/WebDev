var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	/* The findOne() method returns the first occurrence in the selection. */
	dbo.collection(collectionName).findOne({}, function(err, res){
		if(err) throw err;
		console.log(res.name);
		db.close();
	});
});