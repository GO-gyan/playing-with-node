process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

//Is the file being executed in master mode?
if(cluster.isMaster) {
	// cause index.js to be excecuted *again* but
	// in child mode
	cluster.fork();
	cluster.fork();
} else {
	// I am child, I am going to act like a server
	// and do nothing else
	const express = require('express');
	const crypto = require('crypto');
	const app = express();

	app.get('/', (req, res) => {
		crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
			res.send('Hi there');
		});
	});

	app.listen(3000);

}