const express = require("express"); // server creation
const app = express();
const fs = require('fs'); // for reading file
const main = require('./convert');  // main logic function
app.use(express.json());

let data = fs.readFileSync('input_user_story_1.txt', 'utf8') // reaidng the text file

const ans = main(data); 

app.get('/',function(req,res){ // get request at '/'
    res.send(ans);     // sends answer
  
})


app.listen(process.env.PORT||8081, function () {    // server listening on port 8081
    console.log("server started");
})