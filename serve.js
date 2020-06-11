const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//iniciando o mongo
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});




app.get("/",(req,res)=>{
  res.send("hello word");
})

const Port = 3001;
app.listen(Port,()=>{
  console.log(`serve run http://localhost:${Port}`);
})