const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
//const MongoClient = require("mongodb").MongoClient;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
// app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
// const client = await new MongoClient(process.env.MONGODB_URI,{ useNewUrlParser: true});
//  client.connect();
// mongoose.connection.once('open', () => { console.log('MongoDB Connected'); });
// mongoose.connection.on('error', (err) => { console.log('MongoDB connection error: ', err); });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/user');
const eventsRouter = require('./routes/events');
const savedeventsRouter = require('./routes/savedevents');

app.use('/user', userRouter);
app.use('/events', eventsRouter);
app.use('/savedevents', savedeventsRouter);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));
  // Handle React routing, return all requests to React app
   // app.get('*', function(req, res) {
      //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //});
  }

  app.listen(port, () => console.log(`Server started on port ${port}`));