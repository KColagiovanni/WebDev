var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collectionName = 'NewCollection';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);

	/* The second parameter of the find() method is the projection object that
	describes which fields to include in the result.*/
	/*  */
	dbo.collection(collectionName).find({}, {
		projection: {
			/* if _id = 0, the item id of the item wont be returned.
			If _id = 1, the id of the item will be returned. */
			_id: 0,
			name: 1,
			address: 1
		}
	}).toArray(function(err, res){
		if(err) throw err;
		/* To display all results in the array */
		console.log(res);
		/* To display a specific item */
		console.log(res[2].address);
		db.close();
	});
});