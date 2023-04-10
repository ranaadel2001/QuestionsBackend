var express = require('express');
var bodyParser = require ('body-parser');

var  questionRoute = require ("./router/questionRoute");


var cors = require('cors');
var app = express()
const port = 3000

app.use(cors())
app.get ("/", function (req,res){
    res.send ("Server started");
})

app.use("/api/v1",questionRoute);


app.get ('/',(req,res)=> {
    res.send('hello world')
})

app.listen(port, ()=> {
    console.log(`example app listening at http://localhost:${port}`)

}) 