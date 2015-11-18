var http = require('http'),
			fs = require('fs');

http.createServer(function(request, response){
	fs.readFile('./data.csv','utf-8',function(err, data){
		var responseData = {};
		var lines = data.split('\n');

		//native forEach support in node.js
		lines.forEach(function(line){			
			var parts = line.split(',');
			responseData[parts[0]] = parts[1];
		});

		response.writeHead(200, {
			'Content-Type':'application/json'
		});

		console.log(JSON.stringify(responseData));
		response.end(JSON.stringify(responseData));
	});

}).listen(3000);
