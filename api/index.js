const Express = require('express');
const oneYearInMilliseconds = 31536000000;
const app = Express();
const SERVER_PORT = 3001;

app.set('view cache', true);
app.set('view engine', 'html');
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


app.use(
	'/api/media',
	Express.static(__dirname + '/media', { maxAge: oneYearInMilliseconds })
);

app.use(
	'/api/works/all',
	Express.static(__dirname + '/data/works.json', {
		maxAge: oneYearInMilliseconds,
	})
);

app.use(
	'/api/data/*',
	Express.static(__dirname + '/data/works.json', {
		maxAge: oneYearInMilliseconds,
	})
);

app.use('/api/work/:id', function(req, res) {
	res.sendFile(req.params.id + '.json', { root: __dirname + '/data/' });
});

app.listen(SERVER_PORT);

console.log('listening port : ' + SERVER_PORT);
