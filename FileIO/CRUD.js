/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/", function(err, db)
{
		var people = db.db("test_archive");
	
		//creates collection
		people.collection("people2", function(err,people2){
		
		//add document
		/*addObject(people2, 
			{"name" : "Alex Baird", "age" : 7, "home" : { "phone" : "123-345-6789", "address" : "6705 w 157th St", "city" : "OP" } 
			}, db );*/
	
		//find one item
		/*people2.findOne({name: 'Jaelyn Sides'}, function(err, item){
			console.log("Found");
			console.log(item);
		});*/
		
		
		//finding a document and updating only one document
		/*people2.findOne({name: 'Sheldon Sides'}, function(err,items){
			people2.update({name: 'Sheldon Sides', $isolated:1},
					{$set: {name: 'Alex Baird'}},
					{upsert: false, multi:false, w:1},
					function(err,result){
						people2.findOne({name: 'Sheldon Sides'}, function(err, item){
							console.log("Item after update");
							console.log(item);
						});
					});
		});*/
		
		//finds a document and modifies it in one call
		/*people2.findAndModify({name: 'Sheldon Sides'},[['name', 1]],
				{$set: {name: 'Brycen Gunn', "updated" : true}},
				{w:1, new: true}, function(err,doc){
					console.log("After Modify");
					console.log(doc);
				});*/
		
		
		//Delete all items with specific value		
		/*people2.remove({name: "Alex Baird"}, function(err,item){
			console.log("Document Deleted ");					
		});*/
		
		//find and remove a document
		people2.findAndRemove({name: "Alex Baird"}, null, {w: 1}, function(err,item){
			console.log("Document Deleted " + item.name);				
		});
		
		//gets each individual document
		/*people2.find(function(err,items){
			items.each(function(err,item){
				console.log("Single Document");
				console.log(item);
			});
		});*/
		
		//gets all documents as an array
		/*people2.find(function(err,items){
			items.toArray(function(err,item){
				console.log("Document Array");
				console.log(item);
			});
		});*/
		
	});		
	
	setTimeout(function(){
		db.close();
	}, 3000);
	
});

function addObject(collection, object, db)
{
	//inserts record into collection
	collection.insert(object, function(err,result){
		console.log("Inserted");
		console.log(result);		
	});		
}