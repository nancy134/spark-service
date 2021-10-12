const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const sparkService = require('./spark');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.post('/properties', (req, res) => {
    sparkService.getProperties(req.body).then(function(properties){
        res.json(properties);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/members', (req, res) => {
    sparkService.getMembers(req.body).then(function(members){
        res.json(members);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/offices', (req, res) => {
    sparkService.getOffices(req.body).then(function(offices){
        res.json(offices);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});



app.post('/openhouses', (req, res) => {
    sparkService.getOpenHouses(req.body).then(function(openhouses){
        res.json(openhouses);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/', (req, res) => {
    res.send("spark-service");
});


app.listen(PORT, HOST);