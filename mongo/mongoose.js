/**
 * New node file
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var wordSchema = require('./schema.js').wordSchema;

//creates model reference

var Words = mongoose.model('Words', wordSchema);

Words.schema.path('word').validate(function(value){
	return value.length > 1;
},"Word to small");

mongoose.connection.on('open', function(){
	//console.log(mongoose.connection.collection);
	
	/*mongoose.connection.db.collectionNames(function(err, names){
		console.log(names);		
	});	*/		
	var n =  Words({
		word: 'food'
	});
		
	n.save(function(err,r){		
		if(!err)
		{
			Words.find({word: 'food'},function(err,obj){
				console.log(obj);
			});		
		}
		else
		{
			console.log(err);
		}
	});
		//console.log("Required Paths");
		//console.log(wordSchema.requiredPaths());
		
		//console.log("Indexes");
		//console.log(wordSchema.indexes());
		
		
		//console.log("Compiled Schema");
		//var model = mongoose.model('Words');
		//console.log('Model created');	
		
		//var q = Words.findOne({});
		/*q.distinct('first', function(err,result){
			console.log(result);
			mongoose.disconnect();
		});*/
		
		//q.where('word','the');	
		//q.and('size').gt(4);
		//q.select('word size');
		//q.where('word','the');
		//.or([{size:{$lt:1}},{size:{$gt:6}}]);
		//q.gt('size',4);
		//q.skip(1);
		
		//q.comment('This is a comment');
		
		/*q.find(function(err,result){
			console.log(result);
		});*/
		
		
		/*q.exec(function(err,result){
			console.log(result);			
			mongoose.disconnect();
		});	*/
		
		/*q.exec(function(err,result){
			console.log("Word " + result.word);
			console.log("Size " + result.size);
			mongoose.disconnect();
		});	*/
		
		
		//declares anew document
		var newWord = {
			word: "googled",
			first: 'g',
			last: 'l',
			letter: ['g','o','o','g','l','e','d'],
			stats: {vowels: 3, consonants: 3}
		};
		
		//create using mongoose
		/*Words.create(newWord,function(err,result){
			console.log("Created" + result);
			Words.find({word: 'googled'},function(err,word){
				console.log("Found");
				console.log(word);
			});
		});*/
		
		//update document using mongoose
		//var query = Words.find({});
		//query.limit(2);
		//query.skip(5);
		//query.where('first','t');
		
		/*query.exec(function(err, result){
			console.log(result);
		});*/
		
		//updating a document
		/*query.exec(function(err,doc){			
			doc.set('word','Binged');
			doc.set('first','b');
			doc.set('last','d');
			doc.set('letters',['b','i','n','g','e','d']);
			doc.set({vowels: 2, consonants: 4});
			doc.set('size',6);
			
			doc.save(function(err,savedDoc){
				Words.findOne({word: 'Binged'},function(err,result){
					console.log("Found " + result);
				});				
			});
			
		});*/
		
		/*query.exec(function(err,doc){
			console.log(doc.word);
		});*/			
		
		//delete document
		/*var q2 = Words.findOne();
		q2.where('__v','0');		
		q2.remove();		
		q2.exec(function(err,result){
			console.log(result);
		});
			
		//looping though documents
		/*Words.find({word: 'googled'},function(err,result){
			console.log(result);
			for(var d in result)
			{
				console.log(result);
			}
		});*/
		
		setTimeout(function(){
			mongoose.disconnect();
		}, 750);
	
});