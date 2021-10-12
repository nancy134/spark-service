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


app.post('/properties/:id', (req, res) => {
    sparkService.getProperty(req.params.id, req.body).then(function(property){
        res.json(property);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/members/:id', (req, res) => {
    sparkService.getMember(req.params.id, req.body).then(function(member){
        res.json(member);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.post('/offices/:id', (req, res) => {
    sparkService.getOffice(req.params.id, req.body).then(function(office){
        res.json(office);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});



app.post('/openhouses/:id', (req, res) => {
    sparkService.getOpenHouse(req.params.id, req.body).then(function(openhouse){
        res.json(openhouse);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/', (req, res) => {
    res.send("spark-service");
});


app.listen(PORT, HOST);
