var express = require ('express');
var cors = require('cors');
var bodyParser = require ('body-parser');

const app = express();
app.user (cors());

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())


app.get ('/', (req,res)=>
{res.send('express hello world')})

app.listen(3000); // listen 3al port
