const express = require('express')

const app = express();

app.use(express.static('build'));
app.set('views', './build');

app.get('/api/data', function(req, res){
	res.send({chinese: "你好", english: "Hello"});
});

app.get('*', function (req, res) {
  res.sendFile(`${process.cwd()}/build/index.html`)
});

console.log("Connecting...")
	app.listen(3001, function(){
		console.log('now running on port 3001')
	});
