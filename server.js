// require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URL || "mongodb://heroku_3gtc8qbb:heroku_3gtc8qbb@ds129050.mlab.com:29050/heroku_3gtc8qbb";

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI,options)
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

app.listen(3000, () => console.log('Server Started'));