const db = require("./db");

async function createOrders(name, quantity){
    let newOrder = {
        name,
        quantity
    }
    let ordersCollection = await db.getCollection("orders") 
    let insertingOrder = await ordersCollection.insertOne(newOrder)
    return insertingOrder.ops[0]._id                       
}

async function updateOrders(orderName, newQuantity){  
    let ordersCollection = await db.getCollection('orders')
    let findOrder = await ordersCollection.findOne({name: orderName})
    let orderId = await findOrder._id
    return ordersCollection.updateOne({_id: orderId}, {$set: { quantity: newQuantity}})   
}

async function deleteOrders(orderName){      
    let ordersCollection = await db.getCollection('orders')
    let findOrder = await ordersCollection.findOne({ name :orderName})
    let orderId = findOrder._id
    return ordersCollection.deleteOne({_id: orderId})
}

async function listOrders(){
    let ordersCollection = await db.getCollection("orders")
    let cursor = await ordersCollection.find({})
    return cursor.toArray()
}

module.exports ={
    createOrders,
    updateOrders,
    deleteOrders,
    listOrders
}