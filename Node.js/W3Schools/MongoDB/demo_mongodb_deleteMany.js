var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	var query = { address: /^5/};
	dbo.collection(collectionName).deleteMany(query, function(err, obj){
		if(err) throw err;
		console.log(obj.deletedCount + ' records have been deleted!');
		db.close();
	});
});