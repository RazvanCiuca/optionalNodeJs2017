let users = [];
let id = 1;
let currentUser = null;

function createUser(req, res) {
    users.push({
        email: req.body.email,
        password: req.body.password,
        id: id++
    });
    res.redirect('/');
}

function login(req, res) {
    const userToBeLoggedIn = users.find((user) => {
        return user.email = req.body.email;
    });
    if (userToBeLoggedIn && req.body.password === userToBeLoggedIn.password) {
        currentUser = userToBeLoggedIn;
        res.redirect('/');
    } else {
        res.json('Invalid Credentials');
    }
}

function getUsers() {
    return users;
}
function getCurrentUser() {
    return currentUser;
}

module.exports = {
    createUser,
    login,
    getUsers,
    getCurrentUser
}