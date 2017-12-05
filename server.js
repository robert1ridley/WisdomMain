const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

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
		let transporter = nodeMailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
					user: '', //email account username,
					pass: '' //email account password
			},
			tls: {
				rejectUnauthorized: false
			}
	});
	let mailOptions = {
		from: '', // sender name and address 'name <email>'
		to: '',// Email address of recipient
		subject: 'TEST', // Subject line
		text: message, // plain text body
		html: '<b>html because we can</b>' // html body
};
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
			return console.log(error);
	}
	console.log('Message %s sent: %s', info.messageId, info.response);
			res.render('index');
	});
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

	console.log('Server started!')
});
