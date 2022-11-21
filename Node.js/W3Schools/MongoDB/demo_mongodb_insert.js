var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	var myobj = {name:'Company Inc', address: 'Highway 101'};
	dbo.collection(collectionName).insertOne(myobj, function(err, res){
		if(err) throw err;
		console.log('1 document/record inserted!');
		db.close();
	});
});