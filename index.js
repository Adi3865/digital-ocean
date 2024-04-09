const express = require("express");
const { config } = require("nodemon");


const app = express();
// const PORT= process.env.PORT;

require("dotenv").config();
const PORT= process.env.PORT;

app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"working"
    })
})
app.get('/working_process',(req,res)=> {
    return res.status(200).json({
        msg:"working prosess"
    })
})
app.get('/style',(req,res)=> {
    return res.status(200).json({
        msg:"style"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"COMPUTER PROGRAAMMING"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"INDIAN"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"DEV OPS"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"FRONT-END"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"DATABASE"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"NODE.JS"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"MY SQL"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"JAVASCRIPT"
    })
})
app.get('/',(req,res)=> {
    return res.status(200).json({
        msg:"HTML , CSS "
    })
})

// app.use("/api",(req,res)=>{
//    console.log("ll")
//    res.send("Aditya");
// });

app.listen(PORT,function(){
    console.log(`server is ready ${PORT}`);
})  