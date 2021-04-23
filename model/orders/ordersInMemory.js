//let products = require('../products/products')
let orders = [];

async function createOrders(name, quantity){
   
    let newOrder = {
        name,
        quantity,
    }
    orders.push(newOrder);
    //console.log("create", orders)
    return orders
}

async function updateOrders(orderName, newQuantity){
    let order = orders.find(item => item.name === orderName);
    order.quantity = newQuantity;
    //console.log("update", orders)
    return orders
}

async function deleteOrders(orderName){
    let order = orders.find(item => item.name === orderName);
    let index = orders.indexOf(order);
    orders.splice(index, 1);
    //console.log("delete", orders)
    return orders
}

async function listOrders(){
    //console.log("list", orders)
    return orders
}

module.exports ={
    createOrders,
    updateOrders,
    deleteOrders,
    listOrders
}