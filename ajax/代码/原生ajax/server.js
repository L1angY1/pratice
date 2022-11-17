//1.引入express
const express=require('express');
//2.创建app引用对象
const app=express();
//3.创建路由规则
//request是对请求报文的封装，response是对响应报文的封装
app.get('/server',(request,response)=>{
//设置响应头 设置允许跨域
response.setHeader('Access-Control-Allow-Origin','*');
//设置响应体
response.send('hello ajax');



})
app.all('/server',(request,response)=>{
   //设置响应头 设置允许跨域
   response.setHeader('Access-Control-Allow-Origin','*');
   response.setHeader('Access-Control-Allow-Headers','*')
   //设置响应体
   response.send('hello ajax all');
   
   
   
   })

app.post('/server',(request,response)=>{
   //设置响应头 设置允许跨域
   response.setHeader('Access-Control-Allow-Origin','*');
   // response.setHeader('Access-Control-Allow-Headers','*')
   //设置响应体
   response.send('hello ajax post');
   
   
   
   })
//4.监听
app.listen(8000,()=>{

   console.log("服务器已经启动,8000端口监听中.....");


})
