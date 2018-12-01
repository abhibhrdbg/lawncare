const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');
const config     = require('./config/database');
const lawnRouter = require('./models/lawn');

mongoose.connect(config.database)
    .then(() => console.log('connected to mongodb'))
    .catch((err) => console.log(err));

const port      =   3000;
const app       =   express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , 'public')));

app.use('/lawns', lawnRouter);
/*
app.get('/:id', (req, res, next) => {
    res.send(req.params);
});
*/


app.listen(port, () =>{
    console.log(`Starting server on server port ${port}`);
});
