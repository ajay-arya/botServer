var mongoose = require('mongoose');

var user = mongoose.model('user', {
    fname: {
        require: true,
        type: String
    },
    uname: {
        require: true,
        type: String
    },
    email:  {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }
});

// var newUser = new user({
     
// });

// newUser.save().then((doc) => {
//     console.log('Saved: ', doc);
// }, (err) => {
//     console.log('Errorrrrrrrrrrrrr!: ', err);
// });

module.exports = {user}