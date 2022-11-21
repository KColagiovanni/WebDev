var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	var query = { address: /^1/}
	/* Can update one or many fields of one record at a time */
	var updatedValues = { $set: { name: 'New Company Inc'}};
	dbo.collection(collectionName).updateMany(query, updatedValues, function(err, res){
		if(err) throw err;
		console.log(res.modifiedCount + ' documents/records Updated');
		db.close();
	});
});