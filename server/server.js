// Express requirements
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import Loadable from 'react-loadable';

import loader from './loader';

// Controllers
const contact = require('./controllers/contactController');
const users = require('./controllers/userController');

// db instance connection
require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

//API endpoints
app.post('/consult', bodyParser.json(), contact.emailAdmin);
app.post('/jobenquiry', bodyParser.json(), contact.jobEnquiry);
app.post('/users/add', bodyParser.json(), users.createNewUser);
app.get('/users', bodyParser.json(), users.listAllUsers);
app.get('/login/send', bodyParser.json(), users.readUser);

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(loader);

// Use React Loadable to load required assets
Loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

// Handle errors
app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
