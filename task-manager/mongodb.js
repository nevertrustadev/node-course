// CRUD Create Read, Update, Delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id);
console.log(id.getTimestamp());



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client)  => {

	if(error) {
		return console.log('Unable to connect to database!');
	}

	const db = client.db(databaseName);

	// db.collection('users').insertOne({
	// 	name: 'Christopher Lampert',
	// 	age: 30
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert user');
	// 	}
	//
	// 	console.log(result.ops);
	//
	// });
	//
	// db.collection('users').insertMany([
	// 	{
	// 		name: 'Jen',
	// 		age: 28
	// 	}, {
	// 		name: 'Gunther',
	// 		age: 27
	// 	}
	// ], (error, result) => {
	//
	// 	if (error) {
	// 		return console.log('Unable to insert documents!');
	// 	}
	//
	// 	console.log(result.ops);
	// })


	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'Buy milk',
	// 		completed: true
	// 	},
	// 	{
	// 		description: 'Buy bread',
	// 		completed: true
	// 	},
	// 	{
	// 		description: 'Buy toilet roll',
	// 		completed: false
	// 	}
	// ], (error, result) => {
	//
	// 	if (error) {
	// 		return console.log('Could not insert tasks!');
	// 	}
	//
	// 	console.log(result.ops);
	//
	//
	// })
});

