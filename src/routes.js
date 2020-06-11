const express = require('express');
const routes  = express.Router();


routes.get("/",(req,res)=>{
 /* Product.create({
    title:"React Native",
    description:"Buld Native apps with React",
    url:"http://github.com/facebook/react-native",
  })*/
  return res.send("hello word");
});

module.exports = routes;