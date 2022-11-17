//1.引入express
const { json } = require('express');
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
//ie缓存
app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello ie3');
    
    
    
    })
//延时响应
app.all('/netdelay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    setInterval(()=>{response.send('延时响应');},1000)
    
    
    
    
    })


app.all('/json-server',(request,response)=>{
   //设置响应头 设置允许跨域
   response.setHeader('Access-Control-Allow-Origin','*');
   response.setHeader('Access-Control-Allow-Headers','*')
   const data={
          name:'niuniu'
   } 
   //对象转换为字符串
   let str=JSON.stringify(data);
   //设置响应体
   response.send(str);
   
   
   
   })

app.post('/server',(request,response)=>{
   //设置响应头 设置允许跨域
   response.setHeader('Access-Control-Allow-Origin','*');
   // response.setHeader('Access-Control-Allow-Headers','*')
   //设置响应体
   response.send('hello ajax post');
   
   
   
   })
   //jQuery直接响应
   app.all('/jquery-server',(request,response)=>{
      //设置响应头 设置允许跨域
      response.setHeader('Access-Control-Allow-Origin','*');
      //设置响应体
      // setInterval(()=>{response.send('延时响应');},2000)
      const data={name:'大哥'}
      response.send(JSON.stringify(data))
      
      
      
      })
      //axios
      app.all('/axios-server',(request,response)=>{
         //设置响应头 设置允许跨域
         response.setHeader('Access-Control-Allow-Origin','*');
         response.setHeader('Access-Control-Allow-Headers','*')
         //设置响应体
         // setInterval(()=>{response.send('延时响应');},2000)
         // const data={name:'大哥'}
         response.send('hello axios')
         
         
         
         })

          //axios
      app.all('/fetch-server',(request,response)=>{
         //设置响应头 设置允许跨域
         response.setHeader('Access-Control-Allow-Origin','*');
         response.setHeader('Access-Control-Allow-Headers','*')
         //设置响应体
         // setInterval(()=>{response.send('延时响应');},2000)
         // const data={name:'大哥'}
         response.send('hello fetch函数')
         
         
         
         })

//4.监听
app.listen(8000,()=>{

   console.log("服务器已经启动,8000端口监听中.....");


})
