let beers = [
    {
        id: 3,
        brand: 'Ciuc'
    }, {
        id: 4,
        brand: 'Stella Artua'
    }
];

function getBeers(req, res) {
    res.json(beers);
}

function getBeer(req, res) {
    res.json(isNaN(req.params.id)
                ? findBeerByBrand(req.params.id)
                : findBeerById(req.params.id));
}

function findBeerByBrand(brand) {
    return beers.find( (beer) => beer.brand.toLowerCase() === brand.toLowerCase() );
}

function findBeerById(id) {
    return beers.find( (beer) => beer.id === parseInt(id) );
}

function addBeer(req, res) {
    if (req.body.hasOwnProperty('id') && req.body.hasOwnProperty('brand')) {
        beers.push(req.body);
        res.json(`Successfully added ${req.body.brand}!`);
    } else {
        res.json('You did not use a valid format for the beer...');
    }
}

function updateBeer(req, res) {
    let beerToBeUpdated = beers.findIndex(
        (beer) => beer.id === parseInt(req.params.id) || beer.brand.toLowerCase() === req.params.id.toLowerCase()
    );
    if (beerToBeUpdated > -1) {
        beers[beerToBeUpdated] = req.body;
        res.json('Beer successfully updated');
    } else {
        res.json('Specified beer was not found...');
    }
}

function removeBeer(req, res) {
    let beerToBeDeleted = beers.findIndex(
        (beer) => beer.id === parseInt(req.params.id) || beer.brand.toLowerCase() === req.params.id.toLowerCase()
    );
    if (beerToBeDeleted > -1) {
        beers.splice(beerToBeDeleted, 1);
        res.json('Beer successfully deleted');
    } else {
        res.json('Specified beer was not found...');
    }
}


module.exports = {
    getBeers,
    getBeer,
    addBeer,
    updateBeer,
    removeBeer
};