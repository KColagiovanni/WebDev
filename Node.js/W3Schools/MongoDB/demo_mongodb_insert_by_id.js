var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	var myobj = [
		{_id: 206, name:'Company206 Inc'},
		{_id: 207, name:'Company207 Inc'},
		{_id: 208, name:'Company208 Inc'},
		{_id: 209, name:'Company209 Inc'},
		{_id: 210, name:'Company210 Inc'}
	];
	dbo.collection(collectionName).insertMany(myobj, function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
});