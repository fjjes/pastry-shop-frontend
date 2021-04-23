const express = require('express')
const scenes= require('../model/scenesInMemory')
const formatSceneAsText= require('../views/formatScenesAsText')

let router = express.Router();

router.get('/:sceneName', (req, res)=> {
    let sceneName = req.params.sceneName
    try{
        
        let scene = scenes.findSceneByName(sceneName)
        res.send(formatSceneAsText(scene))
    }
    catch(error){
        console.log(error)
        res.status(404).send("Scene " +sceneName + " not found.\n")
    }
})

module.exports = router
