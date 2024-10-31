const express =require('express')
const app=express()
const mongoose =require('mongoose')
const cors = require('cors')



app.use(cors())
app.use(express.json());

app.use(require('./My-route/allroute'));
const DB='mongodb+srv://rahmansyedsabeeha:f5lz5BLLm9Y8dV4S@resume-cluster.h3jyanz.mongodb.net/?retryWrites=true&w=majority&appName=Resume-Cluster'

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('ResumeCreator Database Connected Succesful')
})
.catch((err)=>{
    console.log("sorry Not connected to db",err)
})

app.get('/' ,(req,res)=>{
    res.send('hello world ')
})



app.listen(5000,()=>{
    console.log('resume server start running at port 5000')
})