const express = require("express");
const aiRoutes= require('./routes/ai.routes')
//express banaya 
const cors= require('cors')

const app= express();
//server create hogya pr run nhi hua

app.use(cors())

//middle wear if not used then user body undefined
app.use(express.json())

//agr koi / route pe req aegi toh hello world respond krega
app.get('/',(req,res)=>{
    res.send('hello world')
})


//koi bhi req jo /ai se shuru hogi vo jaegi ai routes pe
app.use('/ai', aiRoutes)

module.exports =app;