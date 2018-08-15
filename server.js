const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const fs = require('fs');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = require('./src/App');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express()
const dev = app.get('env') !== 'production'
require('ignore-styles');

if (!dev) {
	app.disable('x-powered-by')
	app.use(compression())
	app.use(morgan('common'))

	app.use(express.static(path.resolve(__dirname, 'build')))

	app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

	app.post("/consult", function(req, res){
		var name = req.body.name;
		var email = req.body.email;
		var message = req.body.message;
		console.log("Post Received: %s %s %s", name, email, message);

		//email
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		const msg = {
			to: '',
			from: `${name} <${email}>`,
			subject: 'Test',
			text: message,
		};
		sgMail.send(msg);
		console.log("Email sent");
});

 
	app.use(express.static('./build'));

	app.get('/*', (req, res) => {
		const app = ReactDOMServer.renderToString(<App />);

		const indexFile = path.resolve('./build/index.html');
		fs.readFile(indexFile, 'utf8', (err, data) => {
			if (err) {
				console.error('Something went wrong:', err);
				return res.status(500).send('Oops, better luck next time!');
			}

			return res.send(
				data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
			);
		});
	});
}



if (dev) {
	app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
	if (err) throw err

	console.log('Server started! Port: ' + PORT)
});
