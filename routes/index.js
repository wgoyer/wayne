var theMongo = require('./theMongo.js');

exports.index = function(req, res){
    theMongo.consoleUsers(function(userArray){
        res.render('index', {users: userArray});    
    });
	
};