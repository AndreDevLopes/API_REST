const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports ={
  async index(req,res){
    const producs = await Product.find();
    res.json(producs);
  },
  async store(req,res){
    const producs = await Product.create(req.body);
    return res.json(producs);
  },
  async show(req,res){
    const product = await Product.findById(req.params.id);
    return res.json(product);
  }
}