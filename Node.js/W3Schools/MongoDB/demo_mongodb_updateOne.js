var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	var query = { address: '20 Highway 101'}
	/* Can update one or many fields of one record at a time */
	var updatedValues = { $set: { name: 'Updated Company Inc', address: '25 Freeway 880'}};
	dbo.collection(collectionName).updateOne(query, updatedValues, function(err, res){
		if(err) throw err;
		console.log('One Document Updated!');
		db.close();
	});
});