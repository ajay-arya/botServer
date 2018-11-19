// mongoUrl = "mongodb+srv://ajay:ajay123@user-iiwhv.mongodb.net/test?retryWrites=true";
mongoUrl = "mongodb://localhost:27017/chatbot";

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(mongoUrl, (err, db) => {
    if (err) {
        return console.log('error', err);
    }
    
    var database = db.db('Chatbot');

    database.collection('user').find().toArray().then(( data ) => {
        console.log('user');
        console.log(JSON.stringify(data, undefined, 2));
    }, ((err) => {
        console.log('Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', err);
    }));

    db.close();

});
