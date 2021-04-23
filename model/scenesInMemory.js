
let scenes = {}

function createScene(sceneName, description, options){
    if (!options){
        options= []
    }
    scenes[sceneName]={
        sceneName, 
        description,
        options
    }
}

function findSceneByName(sceneName){
    let scene = scenes[sceneName]

    if (!scene){
        throw new Error("Scene " + sceneName + " does not exist!")
    }
    return scene
}

module.exports = {
    createScene,
    findSceneByName
}