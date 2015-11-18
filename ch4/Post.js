// Require mongoose
var mongoose = require('mongoose');


// Configure conenction URL (only needs to happen once per app)
mongoose.connect('mongodb://localhost/blog'); //27017 is default you can even ommit it

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
	console.log('connection successful!');

	var postSchema = mongoose.Schema({
	    title:String,
	    body:String,
	    author:String,
	    permalink:String,
	    comments:[String],
	    date:{type:Date, default:Date.now}
	});

	console.log('schema set!');

	// Create a model object constructor that will have ODM functionality like .save()...
	var Post = mongoose.model('posts', postSchema);
	
	// Expose out model as the module interface
	module.exports = Post;
});

mongoose.set('debug', function (coll, method, query, doc) {
 	console.log('debug message collection: ' + coll);
 	console.log('debug message method: ' + method);
 	console.log('debug message query: ' + query);
});

