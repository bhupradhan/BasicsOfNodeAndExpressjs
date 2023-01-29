var express = require('express')
const app =express()

//First
app.get('/',function(req,res){
    res.send("Hello World")

})


//Second
app.get('/next',function(req,res){
    res.send("Next page")
})

//Third:
app.get('/folks/:id', function(req, res){
    const id = req.params.id
    res.send("welcome back folks"+id)
})

app.listen(9000,function(req,res){
    console.log("running..")
})
