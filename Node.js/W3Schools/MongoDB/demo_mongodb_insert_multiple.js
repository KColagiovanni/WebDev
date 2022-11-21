var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	var myobj = [
		{name:'order 1', address: '10 Highway 101'},
		{name:'Company2 Inc', address: '20 Highway 101'},
		{name:'Company3 Inc', address: '30 Highway 101'},
		{name:'Company4 Inc', address: '40 Highway 101'},
		{name:'Company5 Inc', address: '50 Highway 101'},
		{name:'Company6 Inc', address: '60 Highway 101'},
		{name:'Company7 Inc', address: '70 Highway 101'},
		{name:'Company8 Inc', address: '80 Highway 101'},
		{name:'Company9 Inc', address: '90 Highway 101'},
		{name:'Company10 Inc', address: '100 Highway 101'},
		{name:'Company11 Inc', address: '110 Highway 101'},
		{name:'Company12 Inc', address: '120 Highway 101'},
		{name:'Company13 Inc', address: '130 Highway 101'},
		{name:'Company14 Inc', address: '140 Highway 101'}
	];
	dbo.collection(collectionName).insertMany(myobj, function(err, res){
		if(err) throw err;
		console.log('Inserted ' + res.insertedCount + ' documents/records into ' + collectionName + '!');
		db.close();
	});
});