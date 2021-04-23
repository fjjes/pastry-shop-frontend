const onTreatClick = (event) => {

    event.preventDefault()
    
    let itemPicked = document.querySelector('input[name="menuOption"]:checked').value
    let itemQuantity = document.getElementById('quantity').value
    
    if(itemPicked !== "checkout"){
        if(!itemQuantity){
            alert("Please enter the quantity of the picked item!")
        }else{
            const postOptions = {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: itemPicked, 
                    quantity: itemQuantity 
                })
            }
            fetch("/api/orders/create",postOptions)
            .then(response => response.json())
            .then(message => {
                console.log(message)
            })
            location.href= "index3.html"
        }        
    }else{
        //get rid of placeholder if the radio selection is to go to checkout
        // let selectPlaceholder = document.getElementById('quantity')
        // itemPicked.addEventListener("click",removePlaceholder)
        total()
        location.href= "checkout.html" 
    }
          
}



        

        // function removePlaceholder(){
        //     selectPlaceholder.value=""
        // }
