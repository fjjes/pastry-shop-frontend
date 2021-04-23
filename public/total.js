function total(){
    fetch("/api/orders/list")
    .then(response => response.json()
    .then(orderlist => {
        console.log(orderlist)
        //cake=$40, cookies=$5, macarons=$20, cakepops=$15
        let totalcake = 0
        let totalcookies = 0
        let totalmacarons = 0
        let totalcakepops = 0

        for(let i=0; i<orderlist.length; i++){

            let totalprice= document.getElementById("total")
    
            let tableRef=document.getElementById("billTable")
            let newRow = tableRef.insertRow(tableRef.rows.length-1)//insert a row at the end of the table
            let newCell1 = newRow.insertCell(0)//insert a cell at index 0
            let newtext1= document.createTextNode(orderlist[i].name)
            newCell1.appendChild(newtext1)

            let newCell2 = newRow.insertCell(1)
            let newtext2= document.createTextNode(orderlist[i].quantity)
            newCell2.appendChild(newtext2)
            
            let up,lt //unitprice & linetotal
            if(orderlist[i].name === "buttercake"){
                up = 40
                lt= up * orderlist[i].quantity
                totalcake=lt
                
            }else if(orderlist[i].name === "cookies"){
                up  = 5
                lt= up * (orderlist[i].quantity)
                totalcookies=lt
            }else if(orderlist[i].name === "macarons"){
                up = 20
                lt= up * (orderlist[i].quantity)
                totalmacarons=lt
            }else if(orderlist[i].name === "cakepops"){
                up = 15
                //console.log("unitprice",unitprice)
                lt= up * (orderlist[i].quantity)
                totalcakepops=lt
            }
            let newCell3 = newRow.insertCell(2)
            let newtext3= document.createTextNode(up)
            newCell3.appendChild(newtext3)

            let newCell4 = newRow.insertCell(3)
            let newtext4= document.createTextNode(lt)
            newCell4.appendChild(newtext4)
          
            totalprice.innerHTML= totalcake + totalcookies + totalmacarons + totalcakepops
        }
           
    })
    )
    
}

