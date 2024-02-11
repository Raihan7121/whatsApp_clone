// Importing required modules using ES6 import syntax
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import route from './routes/route.js';

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', route);

// Database connection
Connection();

// Port
const PORT = 8000;

// Start server
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

