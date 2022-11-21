var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);

	/* The find() method returns all occurrences in the selection. */
	dbo.collection(collectionName).find().limit(5).toArray(function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
});