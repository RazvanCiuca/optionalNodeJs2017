const express = require('express');
const bodyParser = require('body-parser');
const beersController = require('./beri.controller.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = express.Router();

router.get('/beers', beersController.getBeers);
router.post('/beers', beersController.addBeer);
router.get('/beers/:id([0-9]+)', beersController.getBeer);
//router.get('/beers/:id()', beersController.getBeer);
//
//Vreau sa pot sa:
//- adaug o bere
//- sterg o bere
//- vad o bere dupa id sau nume
//- updatez detalii despre o bere



app.use('/', router);
app.listen(port);

console.log('Listening on ', port);