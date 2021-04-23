const onTreatClick = (event) => {
    event.preventDefault()
    let itemPicked = document.querySelector('input[name="menuOption"]:checked').value
    
        const deleteOptions = {
            method: "delete",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({       
                name: itemPicked, 
                
            })
        }
        let orderName= itemPicked
        fetch(`/api/orders/${orderName}`,deleteOptions) 
        .then(response => response.json())
        .then(message => {
            console.log(message)
        })
        total()
        location.href= "checkout.html"
    
        
}