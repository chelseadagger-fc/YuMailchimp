const express = require("express");
const app = express();
const https = require("https");

// NOTES: use 1. https instead of request
//            2. app.use(express.json()); instead of app.use(bodyParser());












app.listen(3000, function(){
    console.log("Server is running; listening to port 3000")
})