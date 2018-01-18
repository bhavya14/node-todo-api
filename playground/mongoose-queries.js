const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} =require("./../server/models/Todo");

var id  = "a53884a6949177c18770183";

if(!ObjectID.isValid(id)){
     console.log("id not valid")
}


Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("id not found");
    }

    console.log(JSON.stringify(todo , undefined ,2))
}).catch((e)=>{
    console.log(e);
});