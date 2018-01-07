
const {MongoClient , ObjectID} = require("mongodb"); // destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp" , (err,db)=>{
    if(err){
        return console.log("unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");

    // db.collection("Todos").find({_id : new ObjectID("5a525e46da2774947379f8c8")}).toArray().then((docs)=>{
    //         console.log("Todos");
    //         console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("unable to fetch todos" ,err);
    // });

    db.collection("Todos").find().count().then((count)=>{
        console.log("Todos");
        console.log("count : ",count);
    },(err)=>{
        console.log("unable to fetch todos" ,err);
    });

    //db.close(); // closes the connection
} );