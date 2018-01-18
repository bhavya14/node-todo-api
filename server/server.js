var express = require("express");
var bodyParser = require("body-parser");

var {ObjectID} = require("mongodb")
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/Todo");
var {User} = require("./models/User");

var app = express();
app.use(bodyParser.json());



app.listen(3000,()=>{
    console.log("started on port 3000");
});


app.post("/todos",(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    //console.log(req.body);
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get("/todos/:id" ,(req,res)=>{

    var id  = req.params.id;
    if(ObjectID.isValid(id)){
        Todo.findById(id).then((todo)=>{
            if(!todo)
               return res.status(404).send();
            else {
                // return res.send(todo);
                //or
                return res.send({todo});
            }
        }).catch((e)=>{
            return res.status(400).send();
        })
    }
})


app.get("/todos",(req,res)=>{
   Todo.find().then((todos)=>{
       res.send({todos});
   },(e)=>{
       res.status(400).send(e);
   })

});

