const express = require('express')
const app = express()

const port = 8000

app.get('/',(req,res)=>{
    res.send('hello world')
    let user ={
        firstname : "แสกกลาง",
        lastname : "ใจผม",
        age : "40",
        gander :"male",

    }
    res.json(user)
})

app.listen(port,(req,res)=>{
    
    console.log("https run at" + port)
})