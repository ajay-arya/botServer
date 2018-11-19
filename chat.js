var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');

var { mongoose } = require('./mongoDB/database');
var { user } = require('./models/user');
var { review } = require('./models/reviews');

var chat = express();
chat.use(cors());

chat.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' });
})


chat.use(bodyParser.json());

chat.post('/user', (req, res) => {
    var newUser = new user({
        uname: req.body.uname,
        password: req.body.password,
        email: req.body.email,
        fname: req.body.fname
    });

    newUser.save().then((doc) => {
        console.log('successssssssssssssssssssssssssss! ', doc),
            res.send(doc);
    }, (e) => {
        console.log('Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr! ', e);
        res.send(e);
    });
});

chat.get('/user', (req, res) => {

    console.log("Get User: ", req.body);
    user.find().then((users) => {
        res.send({
            users
        });
    }, (e) => {
        res.status(400).send(e);
    })
});

chat.post('/review', (req, res) => {
    console.log("review: ", req.body);
    var reviews = new review({
        name: req.body.name,
        message: req.body.message
    });

    reviews.save().then((doc) => {
        console.log('successssssssssssssssssssssssssss! ', doc),
            res.send(doc);
    }, (e) => {
        console.log('Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr! ', e);
        res.send(e);
    });
});

chat.get('/review', (req, res) => {

    console.log("Get Reviews: ", req.body);
    review.find().then((reviews) => {
        res.send({
            reviews
        });
    }, (e) => {
        res.status(400).send(e);
    })
});


chat.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000');
})

// module.exports = { chat };
