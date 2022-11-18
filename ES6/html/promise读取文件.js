//引入fs模块
const fs= require('fs');
//调用方法读取文件
// fs.readFile('./诗歌.md',(err,data)=>{
//       if(err) throw err;
//       console.log(data.toString());
// })

const p=new Promise(function(resolve,reject){
fs.readFile('./诗歌.md',(err,data)=>{
      if(err)    reject(err);
      resolve(data)
    
})
})
p.then(function(value){
       console.log(value.toString());
},function(reson){
 console.log("读取失败");

})