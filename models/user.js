var mongoose = require('mongoose');

var user = mongoose.model('user', {
    fname: {
        type: String
    },
    uname: {
        type: String
    },
    email:  {
        type: String
    },
    password: {
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