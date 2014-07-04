/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;
			
MongoClient.connect("mongodb://localhost:27017/admin", function(err, db)
{
	if(err)
	{
		console.log("Connect failed");
	}	
	else
	{
		console.log("connections successful");
		
		var adminDB = db.admin();	
		
		//listing collections
		db = db.db("test_archive");
		
		console.log("List of collections in test_archive database");
		db.collectionNames(function(err,collections){
			console.log(collections);
		});				
		
		//List database		
		adminDB.listDatabases(function(err, results){	
			console.log("--------------------------------------");
			console.log("List of databases using admin account");
			console.log(results);		
		});
		
		//db.each(function(err,item){
		//	console.log(item);
			//db.close();
		//});
		
		//getting collection information
		/*db.collections(function(err,stats){
			console.log(stats);
			db.close();
		});*/
		
		/*adminDB.serverStatus(function(err, status){
			console.log(status);
		});*/
		//Delete a database
		/*db.dropDatabase(function(err, results){
			if(!err)
			{
				console.log("Database was deleted!");
			}
		});*/
			
	}
	
	//	
	
  }
);


MongoClient.connect("mongodb://localhost:27017/test_archive",{
	db: {w: 1, native_parser: false},
	server:{
		poolSize: 5,
		socketOptions: {connectTimeoutMS: 500 },
		auto_connect: true
	},
	replSet: {},
	mongos: {}
	}, function(err, db)
	{
		if(err)
		{
			console.log("Connect failed");
		}	
		else
		{
			console.log("connections successful");
			var db = db.db("newTestDB");
			var adminDB = db.admin();
				
			//Delete a database
			/*db.dropDatabase(function(err, results){
				if(!err)
				{
					console.log("Database was deleted!");
				}
			});*/
			
			//listing collections
			/*db = db.db("test_archive");
			db.collectionNames(function(err,collections){
				console.log(collections);
			});*/
			
			//Create a database
			/*db.createCollection("newTestDB", function(err, collection){
				console.log("Database was created");
			});*/		
			
			db.close();
			
			/*adminDB.serverStatus(function(err, status){
				console.log("Mongo Server status %s " + status);
			});*/
		}	
	}
);