const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando o app
const app = express();

//iniciando o mongo
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get("/",(req,res)=>{
  Product.create({
    title:"React Native",
    description:"Buld Native apps with React",
    url:"http://github.com/facebook/react-native",
  })
  return res.send("hello word");
});

const Port = 3001;
app.listen(Port,()=>{
  console.log(`serve run http://localhost:${Port}`);
})