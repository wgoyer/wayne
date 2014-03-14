var MongoClient = require('mongodb').MongoClient;

var dbConnect = function(callback){
    MongoClient.connect('mongodb://writer:writer1a@ds033439.mongolab.com:33439/heroku_app22956783', function(err, db){
       if(err) throw err;
       callback(db);
    });
};

var getUsers = function(collection, callback){
    var users = [];
    dbConnect(function(db){
        db.collection(collection).find().toArray(function(err, doc){
           db.close();
           callback(doc);
        });
    });
};

var getData = function(collection, users, callback){
    console.log('I was called.');
};

var consoleUsers = function(callback){
    getUsers('users', function(userArray){
        // console.log(userArray);
        callback(userArray);
    });
};

module.exports.consoleUsers = consoleUsers;