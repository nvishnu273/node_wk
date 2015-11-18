var logger = require('./logger'), 
		Person = require('./Person');

var kevin = new Person({
	firstName:'Kevin',
	lastName:'Whinnery',
	age:31,
	knowsKungFu:false
});

logger.info('Does '+ kevin.firstName +' know kung-fu?');
logger.info(kevin.knowsKungFu ? 'You better believe it!' : 'Nope.');