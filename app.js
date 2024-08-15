const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes');
const path=require('path');
const app=express();

app.use(bodyparser.json());
app.use(router);
app.use(express.static(path.join(__dirname,'./public')));


const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});

