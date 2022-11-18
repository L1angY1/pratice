const fs=require('fs');
// fs.readFile('./诗歌.md',(err,data1)=>{
//          fs.readFile('./让梨.md',(err,data2)=>{
//         let result=data1+'\r\n'+data2
//         console.log(result);
//          })
// })


//promise方法读取多个文件
const p=new Promise((resolve,reject)=>{
 fs.readFile('./诗歌.md',(err,data)=>{
     
resolve(data);
 })
})
p.then(value=>{
// console.log(value.toString());
return new Promise((resolve,reject)=>{
    fs.readFile('./让梨.md',(err,data)=>{
        resolve([value,data])
        
    })
   })
}).then(value=>{

    console.log(value.toString());

})
