import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import config from '../database/config/config';
import router from './routes';
import cors from 'cors';
dotenv.config();

// Set up express app
const app = express();
app.use(cors());

// Log incoming requests
app.use(logger('dev'));

// Parse the body of incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', router);

app.get('/', (request, response) => {
	const welcome = 'Welcome to Bunny TO-DO API Version 1.0';
	response.status(200).send(welcome);
});

const env = process.env.NODE_ENV || 'development';
const port = config[env].PORT;

// Start server
app.listen(port, () => {
	console.log(`Express server listening on ${port}`);
});

export default app;
