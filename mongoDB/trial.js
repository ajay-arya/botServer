const data = require('./data');

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(data.mongoUrl, (err, db) => {
    if (err) {
        return console.log('error', err);
    }
    console.log('cons');

    var database = db.db('Chatbot');

    // database.collection('user').insertOne({
    //     uname: 'ajay',
    // password: 'kumar'
    // },(err, res) => {
    //     if(err){
    //         return console.log('Erooooooooooooooooooooooooooooooooooooooooooooooooor', err);
    //     }
    //     console.log('Sucess', JSON.stringify(res.ops, undefined, 2));
    // });

    db.close();
});







const data = require('./data');

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(data.mongoUrl, (err, db) => {
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
