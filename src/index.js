const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewarees
app.use(morgan('dev'));
app.use(express.json())

//Routes
app.use('/app/tasks',require('./routes/tasks.routes'));


//static files
app.use(express.static(path.join(__dirname, 'public')))


//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});