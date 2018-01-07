//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require("mongodb"); // destructuring

// var obj = new ObjectID();
// console.log(obj);

// destructure
// var user = {name : "bhavya" , age : 20};
// var{name } = user




MongoClient.connect("mongodb://localhost:27017/TodoApp" , (err,db)=>{
    if(err){
        return console.log("unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");

    // db.collection("Todos").insertOne({
    //     text : "something to do",
    //     completed : false
    // } , (err,result)=>{
    //     if(err){
    //         return console.log("unable to insert to database",err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    //
    // })
    // db.collection("Users").insertOne({
    //     name : "bhavya",
    //     age : 20,
    //     location : "abcd"
    // } , (err,result)=>{
    //     if(err){
    //         return console.log("unable to insert user",err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops));
    //
    // })
    //


    db.close(); // closes the connection
} );