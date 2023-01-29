const express = require('express')
const bodyparser = require('body-parser')
const { endianness } = require('os')
const router= express.Router()
const app = express()
const port = 3000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

/*
app.post('/',function(req,res){

    var userNamee=req.body.userName;
    //console.log(userNamee)
   
})
*/
app.get('/',function(req,res){

    res.sendFile(__dirname+'/views/index.html')
})

app.listen(port, function()  {
    console.log(`Example app listening at http://localhost:${port}`)
  })