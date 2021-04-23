function formatSceneAsText(scene) {
    console.log("scene", scene)
    let body = scene.description.message+"\n\n"
    if(scene.description.orders){
        body += JSON.stringify((scene.description.orders), null, " ")

    }
    if(scene.sceneName === 'intro'){
        body+= JSON.stringify((scene.description.menu), null, " ")+"\n"
        //scene.description.products.forEach(product => {
            //body += product.name + ": $" + product.price + "\n" 
        //})
    }

   
    if (scene.options.length > 0) {
        body += "\nWhat would you pick?\n\n"
        scene.options.forEach((option) => {
            body += "IF YOU PICK: " + option.ifYouPick + ",\n"
            body += "GO TO: " +option.goto + "\n"
            body += "THEN GO TO: " +option.thenGoto + "\n\n"
            
        })
    }
    return body
}
module.exports = formatSceneAsText