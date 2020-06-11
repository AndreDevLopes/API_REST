const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando o app
const app = express();
app.use(express.json());

//iniciando o mongo
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});

requireDir('./src/models');

// routas
app.use("/api", require("./src/routes"));

const Port = 3001;
app.listen(Port,()=>{
  console.log(`serve run http://localhost:${Port}`);
})