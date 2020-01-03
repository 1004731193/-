const express=require("express");
const bodyParser=require('body-parser');
const cors = require("cors");
const userRouter=require('./routes/user.js');
var app=express();
app.listen(5050);

//进入方式 http://localhost:5050/public-login/reg.html

app.use(cors({
  origin : ["http://localhost:5050","http://127.0.0.1:5500"],
  creadentials : true
}))
//使用body-parser中间件
app.use( bodyParser.urlencoded({
    extended:false
  }));
// app.use(express.static('public-login') );
// app.use(express.static('public-index') );
app.use(express.static('public'));
app.use('/user',userRouter);