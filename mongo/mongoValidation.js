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

Words.schema.pre('init', function(next){
	console.log('Word is being retrieved');
	next();
});

Words.schema.pre('save', function(next){
	console.log('Word getting ready to be written');
	next();
});

mongoose.connection.on('open', function(){
	//console.log(mongoose.connection.collection);
	
	/*mongoose.connection.db.collectionNames(function(err, names){
		console.log(names);		
	});	*/		
	var n =  Words({
		word: 'f',
		first: 'f',
		last: 'd',
		letters: ['f','o','o','d'],
		stats: { vowels: 2, consonants: 2 }
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
		
	setTimeout(function(){
		mongoose.disconnect();
	}, 750);
	
});