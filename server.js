const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/timer', { useNewUrlParser: true}, err => {
    err ? 
        console.log(`Couldn't connect to MongoDB. Error => ${err}`) : 
        console.log('Connected to MongoDB successfully ...');
});

// Configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/tasks', routes);

app.listen(port, err => {
    if (err) {
        console.log(`Couldn't connect to server. ERROR => ${err}`);
    } else {
        console.log(`Connected to server successfully. PORT => localhost:${port}`);
    }
});