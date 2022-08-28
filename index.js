const express = require("express");
const BodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.use(BodyParser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(express.static("public"));

let add_ups = [];

app.get("/",function(req,res){

    // let today = new Date();
    // let day_num = today.getDay();
    
    // if(day_num%6!=0){
    //     res.sendFile(__dirname+"/index.html");
    // }
    // else{
    //     res.send("Its a weekend ! Enjoy buddy");
    // }
    
    // if(day_num%6!=0){
    //     let day = "Weekday";
    // }
    // else{
    //     let day = "Weekend";
    // }

    // let options = {
    //     weekday : "long",
    //     month : "long",
    //     day : "numeric"
    // }
    // let day = today.toLocaleDateString("en-US",options);
    var day = date();
    res.render("index",{ kindofday : day,adds : add_ups});

});

app.post("/",function(req,res){
    // let today = new Date();
    // let day_num = today.getDay();
    //  let options = {
    //     weekday : "long",
    //     month : "long",
    //     day : "numeric"
    // }
    // let day = today.toLocaleDateString("en-US",options);

    let add_up = req.body.work;
    add_ups.push(add_up);
    res.redirect("/");          // res.render("index",{ kindofday : day, add : add_up });
});
app.listen(process.env.PORT || 8080,function(){
    console.log("Server started on port 8080");
})