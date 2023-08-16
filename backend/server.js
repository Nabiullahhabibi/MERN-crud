const express = require('express');
const server = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect("mongodb://127.0.0.1/schoolDB", {useNewUrlParser:true}).then(function () {
        console.log("Successfully connected to DB");
      }).catch(function (err) {
        console.log(err);
      });;
 
server.use(cors());
server.use(express.json());
server.use(routes);
 
server.listen(8000,function check(error)
{
    if(error)
    {    console.log("errorr")}
    else
    {   console.log("startedddddd") }
});