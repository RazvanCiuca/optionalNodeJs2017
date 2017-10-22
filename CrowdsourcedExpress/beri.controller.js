let beers = [
    {
        id: 0,
        brand: 'Ciuc'
    }, {
        id: 1,
        brand: 'Stella Artua'
    }
];

function getBeers(req, res) {
    res.json(beers);
}

function getBeer(req, res) {
    res.json(beers[req.params.id]);
}

function addBeer(req, res) {
    console.log(req.body);
    res.json('wow');
}


module.exports = {
    getBeers,
    getBeer,
    addBeer
};