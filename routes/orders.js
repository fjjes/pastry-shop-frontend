const express = require('express')
const orders = require('../model/orders/ordersInMongo')

let router = express.Router();
router.use(express.json())


router.post('/create', async (req, res) => {
    let name = req.body.name
    let quantity = parseInt(req.body.quantity)
    console.log(name)
    let orderId = await orders.createOrders(name,quantity)
    res.send({message: `Order is created order with the id: ${orderId}`})
})

router.post('/update/:orderName', async (req, res) => {
    let orderName = req.params.orderName
    let quantity= parseInt(req.body.quantity)
    //console.log("updating", orderName)
    //console.log("updating", quantity)
    let result = await orders.updateOrders(orderName, quantity)
    console.log("updating", quantity)
    res.send({message: `updated the order, ${result}`})
})

router.delete('/:orderName', async (req, res) => {
 let orderName = req.params.orderName
 let deletedOrder = await orders.deleteOrders(orderName)
 res.send(`deleted: ${deletedOrder}`)

})

router.get('/list', async (req,res)=> {
    let orderList = await orders.listOrders()
    res.send(orderList)
})

module.exports = router