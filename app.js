var express = require('express');
var cors = require('cors');
var BodyParser = require('body-parser');
var Routes = require('./Routes');

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/',Routes);

app.listen(8081,'localhost',function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Listening o port 8081..........');
    
})
