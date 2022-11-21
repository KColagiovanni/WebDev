var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	/* First way... */
	dbo.collection(collectionName).drop(function(err, delOk){
	/* Second way... */
//	dbo.dropCollection(collectionName, function(err, delOk){
		if(err) throw err;
		if(delOk) console.log(collectionName + ' has been deleted!');
		db.close();
	});
});