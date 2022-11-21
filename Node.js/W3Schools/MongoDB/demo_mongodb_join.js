var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://KColagiovanni:Cz4167kc@cluster0.jd8o7v1.mongodb.net/?retryWrites=true&w=majority";
var dbName = 'testdb';
var collection1Name = 'Orders';
var collection2Name = 'Products';

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db(dbName);
	dbo.collection(collection1Name).aggregate([
		{ $lookup:
			{
				from:collection2Name,
				localField: 'product_id',
				foreignField: '_id',
				as: 'orderDetails'
			}
		}
		]).toArray(function(err, res){
		if(err) throw err;
		console.log(JSON.stringify(res));
		db.close();
	});
});