var mongoose = require('mongoose');

var review = mongoose.model('review', {
    name: {
        type: String
    },
    message: {
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

module.exports = {review}
