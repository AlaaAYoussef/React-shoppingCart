const Order = require('../models/orderModel')
const express = require('express');
const router = express.Router()


router.get('/api/orders',async (req,res)=>{
    const order = await Order.find();
    res.send(order)
})
router.post('/api/orders',async(req,res)=>{
    const orders = await new Order(req.body).save()
    res.send(orders)
})
router.delete('/api/orders/:id',async(req,res)=>{
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    res.send(deletedOrder)
})
module.exports=router
