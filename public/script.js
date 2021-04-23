const onTreatClick = (event) => {
    let itemPicked = document.querySelector('input[name="menuOption"]:checked').value
    let itemQuantity = document.getElementById('quantity').value
    
        console.log("item picked", itemPicked)
        console.log("item quantity", itemQuantity)
        
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
            console.log(message);
        })
        
        if(itemPicked === 'buttercake'){
            location.href= "index2ncake.html"
        }else if(itemPicked === 'cookies'){
            location.href= "index2ncookie.html" 
        }else if(itemPicked === 'macarons'){
            location.href= "index2nmacaron.html" 
        }else if(itemPicked === 'cakepops'){
            location.href= "index2npops.html" 
        } 
    }
}