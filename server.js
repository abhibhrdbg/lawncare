const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');

const port      =   3000;
const app       =   express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , 'public')));
app.listen(port, () =>{
    console.log(`Starting server on server port ${port}`);
});
