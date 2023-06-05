const express = require("express");
const app = express();
const https = require("https");

// NOTES: use 1. https instead of request
//            2. app.use(express.json()); instead of app.use(bodyParser());

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", function(req,res) {
    
    res.sendFile(__dirname + "/signup.html")

})



app.post("/", function (req,res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const emailAddress = req.body.email;
    console.log(firstName, lastName, emailAddress);

})








app.listen(3000, function(){
    console.log("Server is running; listening to port 3000")
})