var {mongoose} =require("./../db/mongoose");

var User = mongoose.model("User",{

    email :{
        type  :String,
        required : true,
        trim : true,
        minlength:1
    }

});
module.exports = {User};

// var user = new User({
//     email : "abcd@njnxjs"
// });
//
// user.save().then((doc)=>{
//     console.log(doc);
// },(err)=>{
//     console.log("unable to save user",err);
// })
