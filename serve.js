const express = require('express');
const app = express();



app.get("/",(req,res)=>{
  res.send("hello word");
})

const Port = 3001;
app.listen(Port,()=>{
  console.log(`serve run http://localhost:${Port}`);
})