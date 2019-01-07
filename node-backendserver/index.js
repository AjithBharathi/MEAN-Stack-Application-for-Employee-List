const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const route = require('./route/router');

var app = express();
const PORT = process.env.PORT || 8080;

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/employeeDetails', {
    // useMongoClient: true,
    useNewUrlParser: true
});

mongoose.connection.on('connected', ()=> {
    console.log('mongodb connected successfully');
});
mongoose.connection.on('error', (err)=> {
    console.log('connection failed at this error '+ err); 
});

app.listen(PORT, () =>{
    console.log('our serve connected successfully!! '+ PORT)
});  

app.get('/', (req, res) =>{
    res.send('getting initial');
});

// adding middleware - cors (to pass data between client and server)
app.use(cors());

// body-parser
app.use(bodyparser.json());

app.use('/api', route);