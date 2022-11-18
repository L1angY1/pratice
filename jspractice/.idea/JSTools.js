function getStyle(obj, name) {
    // if (window.getComputedStyle) {
    //     return getComputedStyle(obj, null)[name]; //适用于所有浏览器
    // } else {
    //     return obj.currentStyle[name]; //元素.currentstyle.样式名（读取的当前的）只可以用于ie
    // }
    return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];//使用了三步运算符
}  



function move(obj,attr,target,speed,callback){
            clearInterval(obj.timer);
            //关闭定时器
            var current=parseInt(getStyle(obj,attr))
 if (current>target){
     //判断当前是大于目标，到达则将速度变成负的
         speed=-speed;
 }
       obj.timer=setInterval(function(){
              var oldValue=parseInt(getStyle(obj,attr));
              //获取当前的数值
              var newValue=oldValue+speed;

if((speed<0&&newValue<target)||(speed>0&&newValue>target)){
             newValue=target;
       }
       obj.style[attr]=newValue+"px";
        if(newValue==target){

           clearInterval(obj.timer)





        }
    
     callback();
    
    
    },50 )

}
//定义一个函数向指定对象添加一个class属性值
function addClassName(obj,cn){
    if(!hascn(obj,cn)){
        obj.className +=" "+cn;
  }
    

}
  
 function hasClassName(obj,cn){
  // 正则表达式检查是否含有class
      // var reg=/\bb2\b/;
       var reg=new RegExp("\\b"+cn+"\\b")
    return reg.test(obj.className)

 }
//    删除一个元素中追定的class属性
 function removeclassName(obj,cn){
  var reg=new RegExp("\\b"+cn+"\\b")
     obj.className= obj.className.replace(reg,"");
 }

// 如果有就删除，没有就增加
function toggleClass(obj,cn){
      if(hasClassName(obj,cn)){
        removeclassName(obj,cn)
      }
      else{
        addClassName(obj,cn)
      }
      





}