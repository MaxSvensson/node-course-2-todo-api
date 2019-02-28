// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//delete many


// db.collection('Todos').deleteMany({
//   text:'Eat lunch'
// }).then((result)=>{
//   //If succses
//   console.log(result);
// })
//deleteOne


// db.collection('Todos').deleteOne({
//   text:'Eat lunch'
// }).then((result)=>{
//   console.log(result);
// })
//findOneAndDelete


// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// })

db.collection('Users').deleteMany({name:'Maximilian Persson'}).then((result)=>{
  console.log('Succefuly deleted all Maximilian Persson');
})
db.collection('Users').findOneAndDelete({_id: new ObjectID('5c77da098dabcc0aa0c3c338')}).then((result)=>{
  console.log('Succefuly deleted', result);
});
// client.close();
});
