const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express()
const dev = app.get('env') !== 'production'

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
			to: 'robert.ridley@ef.com',
			from: `${name} <${email}>`,
			subject: 'Test',
			text: message,
		};
		sgMail.send(msg);
		console.log("Email sent");
});

 
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
	})
}



if (dev) {
	app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
	if (err) throw err

	console.log('Server started! Port: ' + PORT)
});
