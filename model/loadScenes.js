const scenes = require('./scenesInMemory')
const products = require('./products/products')
const orders = require("./orders/ordersInMongo");


scenes.createScene("intro",
    {
        message: 'WELCOME TO TreatOTreat! WE HAVE BUNCH OF YUMMY GOODIES!!!!\n (Below the prices are in $)',
        menu:products.menu
    },
    [
        {
            ifYouPick: "buttercake", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"buttercake","quantity":"1"}' http://localhost:3000/api/orders/create`   ,
            thenGoto: "curl http://localhost:3000/api/waiter/option1_picked"
        },
        {
            ifYouPick: "cookies", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cookies","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/option2_picked"
        },
        {
            ifYouPick: "macarons", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"macarons","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/option3_picked"
        },
        {
            ifYouPick: "cakepops", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cakepops","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/option4_picked"
        }
    ]         
)

scenes.createScene("option1_picked",
    {
        message: 'WOULD YOU LIKE TO ADD MORE ITEMS TO YOUR LIST?',
    },
    [
        {
            ifYouPick: "buttercake", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"buttercake","quantity":"2"}' http://localhost:3000/api/orders/update/buttercake`   ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cookies", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cookies","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "macarons", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"macarons","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cakepops", 
            goto: 
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cakepops","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "No I am done with my order",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        }
    ]         
)

scenes.createScene("option2_picked",
    {
        message: 'WOULD YOU LIKE TO ADD MORE ITEMS TO YOUR LIST?',
    },
    [
        {
            ifYouPick: "buttercake", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"buttercake","quantity":"1"}' http://localhost:3000/api/orders/create`   ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cookies", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cookies","quantity":"2"}' http://localhost:3000/api/orders/update/cookies` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "macarons", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"macarons","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cakepops", 
            goto: 
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cakepops","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "No I am done with my order",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        }
    ]         
)

scenes.createScene("option3_picked",
    {
        message: 'WOULD YOU LIKE TO ADD MORE ITEMS TO YOUR LIST?',
    },
    [
        {
            ifYouPick: "buttercake", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"buttercake","quantity":"1"}' http://localhost:3000/api/orders/create`   ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cookies", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cookies","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "macarons", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"macarons","quantity":"2"}' http://localhost:3000/api/orders/update/macarons` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cakepops", 
            goto: 
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cakepops","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "No I am done with my order",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        }
    ]         
)
   
scenes.createScene("option4_picked",
    {
        message: 'WOULD YOU LIKE TO ADD MORE ITEMS TO YOUR LIST?',
    },
    [
        {
            ifYouPick: "buttercake", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"buttercake","quantity":"1"}' http://localhost:3000/api/orders/create`   ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cookies", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cookies","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "macarons", 
            goto:
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"macarons","quantity":"1"}' http://localhost:3000/api/orders/create` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "cakepops", 
            goto: 
            `curl -X POST -H "Content-Type: application/json" -d '{"name":"cakepops","quantity":"2"}' http://localhost:3000/api/orders/update/cakepops` ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_picked"
        },
        {
            ifYouPick: "No I am done with my order",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/checkout"
        }
    ]         
)

async function listingOrders(){
    return await orders.listOrders()
}

listingOrders().then((orderlist)=>{
    console.log("orderlist", orderlist)

    let totalcake = 0
    let totalcookies = 0
    let totalmacarons = 0
    let totalcakepops = 0
    for(let i=0; i<orderlist.length; i++){
        if (orderlist[i].name === "buttercake"){
            totalcake += orderlist[i].quantity * 40
        }else if(orderlist[i].name === 'cookies'){
            totalcookies += orderlist[i].quantity * 5
        }else if (orderlist[i].name === "macarons"){
            totalmacarons += orderlist[i].quantity * 20
        }else if(orderlist[i].name === 'cakepops'){
            totalcakepops += orderlist[i].quantity * 15
        }
    }
     let totalprice = totalcake + totalcookies + totalmacarons + totalcakepops
     console.log('total', totalprice) 

    scenes.createScene("after_picked",
    {
        message: `ARE YOU READY FOR CHECKOUT?, HERE'S THE LIST OF YOUR ORDERS:`,
        orders: orderlist
    },
    [
        {
            ifYouPick: " Remove buttercake from my list", 
            goto:`curl -X DELETE http://localhost:3000/api/orders/buttercake`  ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_item_removed"
        },
        {
            ifYouPick: " Remove cookies from my list", 
            goto:`curl -X DELETE http://localhost:3000/api/orders/cookies`  ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_item_removed"
        },
        {
            ifYouPick: " Remove macarons from my list", 
            goto:`curl -X DELETE http://localhost:3000/api/orders/macarons`  ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_item_removed"
        },
        {
            ifYouPick: " Remove cakepops from my list", 
            goto:`curl -X DELETE http://localhost:3000/api/orders/cakepops`  ,
            thenGoto: "curl http://localhost:3000/api/waiter/after_item_removed"
        },
        {
            ifYouPick: "Ya I am happy with my order",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/checkout"
        }
    ]         
)

scenes.createScene("after_item_removed",
    {
        message: `ARE YOU READY FOR CHECKOUT?, HERE'S THE LIST OF YOUR ORDERS:`,
        orders: orderlist
    },
    [
        {
            ifYouPick: "Ya I am happy with my order",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/checkout"
        },
        {
            ifYouPick: "No, I didn't like anything",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/empty_order"
        },
        {
            ifYouPick: "No, I changed my mind. I'll come again another time to buy these.",
            goto: "next line", 
            thenGoto: "curl http://localhost:3000/api/waiter/empty_order"
        }
    ]         
)

scenes.createScene("empty_order",
    {
        message: `NO PROBLEM....HAVE A GOOD DAY!!`,
        orders: orderlist
    },
    []         
)

   

scenes.createScene("checkout",
    {
        message: `YOUR TOTAL IS $${totalprice}, YOUR LIST OF ORDERS IS BELOW.. PLEASE PROCEED WITH PAYMENTS & HAVE A GOOD DAY!`,
        orders: orderlist
        
    },
    []         
)
})

