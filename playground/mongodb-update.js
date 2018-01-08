
const {MongoClient , ObjectID} = require("mongodb"); // destructuring

MongoClient.connect("mongodb://localhost:27017/TodoApp" , (err,db)=>{
    if(err){
        return console.log("unable to connect to mongoDB server");
    }
    console.log("connected to MongoDB server");

    // db.collection("Todos").findOneAndUpdate({
    //     _id : new ObjectID("5a52718dda2774947379fd6f")
    // },{
    //     $set : {
    //         completed : true
    //     }
    // },{
    //     returnOriginal : false
    // }).then((result)=>{
    //     console.log(result);
    // });


    db.collection("Users").findOneAndUpdate({
        _id : new ObjectID("5a5210ecd95f6118fc76f472")
    },{
        $set : {
            name : "abcd"
        },
        $inc : {age : 1}

    },
    {
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    });
    //db.close(); // closes the connection
} );