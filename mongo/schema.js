/**
 * New node file
 */
//add to separate file later
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
	
var wordSchema = new Schema({
	word: {type: String, index: 1, required: true, unique: true },
	first: {type: String, index: 1},
	last: String,
	size: Number,
	letters: [String],
	stats:{
		vowels: Number, consonants: Number
	},
	charsets: [{ type: String, chars: [String]}]
},
{
	collection: 'words'
});	

exports.wordSchema = wordSchema;
//var Words = mongoose.model('Words', wordSchema);
