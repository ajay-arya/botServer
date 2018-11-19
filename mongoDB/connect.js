// mongoUrl = "mongodb+srv://ajay:ajay123@user-iiwhv.mongodb.net/test?retryWrites=true";
mongoUrl = "mongodb://localhost:27017/chatbot";

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(mongoUrl, (err, db) => {
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
