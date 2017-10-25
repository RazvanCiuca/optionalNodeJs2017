const express = require('express');
const bodyParser = require('body-parser');
const beersController = require('./beri.controller.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = express.Router();

router.get('/beers', beersController.getBeers);
router.get('/beers/:id([0-9]+)', beersController.getBeer);
router.get('/beers/:id([^0-9]+)', beersController.getBeer);
router.post('/beers', beersController.addBeer);
router.put('/beers/:id', beersController.updateBeer);
router.delete('/beers/:id', beersController.removeBeer);


app.use('/', router);
app.listen(port);

console.log('Listening on ', port);