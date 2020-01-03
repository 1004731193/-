const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
var router=express.Router();
//添加路由
// 注册()
router.post('/reg',function(req,res){
    //1.1获取数据
    var obj=req.body;
    console.log(obj);
    var no = 400;
    //1.2验证数据是否为空
    for(var item in obj){
      if(!obj[item]){
        res.send(`{code:${no++},msg:${item} required}`);
        return;
      }
    }
    // if(!obj.uname){
    //   res.send({code:401,msg:'uname required'});
    //   //阻止往后继续执行
    //   return;
    // }
    // if(!obj.phone){
    //   res.send({code:405,msg:'phone required'});
    //   return;
    // }
    // if(!obj.upwd){
    //   res.send({code:402,msg:'upwd required'});
    //   return;
    // }
    // if(!obj.cpwd){
    //     res.send({code:403,msg:'upwd required'});
    //     return;
    //   }
    // if(!obj.email){
    //   res.send({code:404,msg:'email required'});
    //   return;
    // }
    //1.3执行SQL语句 
    pool.query('INSERT INTO sc_user SET?',[obj],function(err,result){
      if(err) throw err;
      console.log(result);
      if(result.affectedRows > 0){
        //插入成功
        res.send({code:200,msg:'注册成功'});
      }else{
        res.send({code:201,msg:"注册失败!"});
      }
    })
  });







  //**********************登录
router.post('/login',function(req,res){
    //1.1获取数据
    var obj=req.body;
    // console.log(obj);
    //1.2验证数据是否为空
    if(!obj.uname){
      res.send({code:401,msg:'uname required'});
      //阻止往后继续执行
      return;
    }
    if(!obj.upwd){
      res.send({code:402,msg:'upwd required'});
      return;
    }
    //1.3执行SQL语句 
    pool.query('select * from sc_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
      if(err) throw err;
      console.log(result);
      if(result.length>0){//查询到了
        res.send({code:200,msg:'login suc'});
      }else{//没有查询到
        res.send({code:301,msg:'uname or upwd err'});
      }
    })
  });
  module.exports=router;