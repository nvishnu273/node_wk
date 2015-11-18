var _ = require('underscore');

function Person(properties){
	_.extend(this,{
		knowsKungFu:false
	}, properties);
}

/*
Person.prototype.info = function(){
	console.log(this.name);
};
*/

module.exports = Person;