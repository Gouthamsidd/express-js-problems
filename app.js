//express creation
const express = require ('express');
const bodyparser = require('body-parser');

const app = express();

//creating the port number
const port = process.env.PORT || 3000;

//file stored json file
const data = require('./data.json');

const path = require('path');

//parse/ x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: false}))

//parse application /json
app.use(bodyparser.json())


//route for displaying or getting the data
app.get('/customer/customernames',(req,res)=>{
    res.send(data);
});

app.listen(port,()=>{
    console.log('server started http://localhost : ${port}');
})