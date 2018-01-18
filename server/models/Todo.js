var {mongoose} =require("./../db/mongoose");


var Todo = mongoose.model("Todo",{
    text :{
        type:String,
        required:true,
        minlength : 1,
        trim : true
    },
    completed :{
        type:Boolean,
        default:false
    },
    completedAt :{
        type : Number,
        default:null
    }
});


module.exports = {Todo};
//
// var newTodo = new Todo({
//     text:"cook dinner"
// });
// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log("unable to save");
// });

// var newTodo1 = new Todo({
//     text:"cook dinner",
//     completed:true,
//     completedAt : 123
// });
// newTodo1.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log("unable to save");
// });

//
// var newTodo1 = new Todo({
//     text:"cook dinner",
//     completed:true,
//     completedAt : 123
// });
// newTodo1.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log("unable to save");
// });

module.exports = {Todo};