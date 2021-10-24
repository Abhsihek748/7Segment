const express = require("express");
const app = express();
const fs = require('fs');
const main = require('./convert');
app.use(express.json());

let data = fs.readFileSync('input_user_story_1.txt', 'utf8')

const ans = main(data);

app.get('/',function(req,res){
    res.send(ans);
 
})


app.listen(process.env.PORT||8081, function () {
    console.log("server started");
})