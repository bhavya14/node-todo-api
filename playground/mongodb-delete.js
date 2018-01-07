
const {MongoClient , ObjectID} = require("mongodb"); // destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp" , (err,db)=>{
    if(err){
        return console.log("unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");


    // db.collection("Todos").deleteMany({text :"chores"}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection("Todos").deleteOne({text :"chores"}).then((result)=>{
    //          console.log(result);
    //      });

    db.collection("Todos").findOneAndDelete({completed :false}).then((result)=>{
        console.log(result);
    });

    //db.close(); // closes the connection
} );