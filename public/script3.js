const onTreatClick = (event) => {
    event.preventDefault()

    let itemPicked = document.querySelector('input[name="menuOption"]:checked').value
    let itemQuantity = document.getElementById('quantity').value

    if(itemPicked !== "checkout"){
            //checkItemIsInTheOrderList()
            if(!itemQuantity){
                alert("Please enter the new quantity of the picked item!")
            }else{
                const updateOptions = { 
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: itemPicked, 
                        quantity: itemQuantity 
                    })
                }
                let orderName = itemPicked
                fetch(`/api/orders/update/${orderName}`,updateOptions) //!!!!!!!!!!!!!
                .then(response => response.json())
                .then(message => {
                    console.log(message)
        
                    location.href= "index4.html" 
                })     
            }   
    }else{
        total()
        location.href= "checkout.html" 
    }
}

// function checkItemIsInTheOrderList(){
//     let itemPicked = document.querySelector('input[name="menuOption"]:checked').value

//     fetch("/api/orders/list")
//     .then(response => response.json()
//     .then(orderlist => {
//             console.log(orderlist)
//             if(!(itemPicked in orderlist)){
//                 alert("The item is not previously selected! Please select an item you added to the cart")
//             }else{
                
//             }
            
//         }))
// }