/**
 * Created by Jayce on 2017/4/19 0019.
 */

var MongodbClient = require('mongodb');
var DB_CONN_STR='mongodb://localhost:27017/kaola';

MongodbClient.connect(DB_CONN_STR,function (err,db) {
	if(err){
		console.log(err);
	}else{
		var users=db.collection('users');
		users.find().toArray(function (err,arr) {
			if(err){
				console.log(err);
			}else{
				console.log(arr);
			}
		})
	}
});