

const express=require('express');
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.status(200);
    res.send("first node js project"); 


})


app.listen(PORT,(error) =>{
    if(!error)
        console.log('server is succesfull'+PORT);
    else 
    console.log("error occured",error);
});