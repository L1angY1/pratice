 function getStyle(obj, name) {
        // if (window.getComputedStyle) {
        //     return getComputedStyle(obj, null)[name]; //适用于所有浏览器
        // } else {
        //     return obj.currentStyle[name]; //元素.currentstyle.样式名（读取的当前的）只可以用于ie
        // }
        return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];//使用了三步运算符
    }           
window.onload=function(){
       var imgList=document.getElementById("imglist");
       var imgArr=document.getElementsByTagName("img");
       // var ul=document.getElementsByTagName("ul")
       imgList.style.width=imgArr.length*420+"px";
       var navDiv=document.getElementById("navDiv");
       navDiv.style.left=(400-navDiv.offsetWidth)/2+"px";
       var allA=document.getElementsByTagName("a");
       //默认索引
       var index=0;
       
         for(var i=0;i<allA.length;i++){
             allA[i].num=i;
             allA[i].onclick=function(){
             
              index=this.num;
               imgList.style.left=-420*index+"px"
             
               setA();



       }

    


         }



       //   var timer=setInterval(function(){
              
       //         var num=imgArr.length;
       //          if(index>=num) {
       //                index=0;
       //          } 
       //          imgList.style.left=-420*index+"px"; 
       //          index++;
       //          setA();
       //   },1000)
             function setA(){

              for(var i=0;i<allA.length;i++){
                       allA[i].style.backgroundColor="";
       
              }

              allA[index].style.backgroundColor="rgb(76, 143, 182)";









             }





} 
function move(obj,target,speed){
          
       
       if (target > 0) {
           clearInterval(timer);
           timer = setInterval(function () {
           oldLeft = parseInt(getStyle(obj, "left"));
           newLeft = oldLeft +speed
           obj.style.left = newLeft + "px";

               if (newLeft > target) {
                   newLeft = target;
                   clearInterval(timer)
               }

            }, 30)
       }
       else{

           clearInterval(timer);
           timer = setInterval(function () {
           oldLeft = parseInt(getStyle(obj, "left"));
           newLeft = oldLeft-speed
           obj.style.left = newLeft + "px";

               if (newLeft < target) {
                   newLeft = target;
                   clearInterval(timer)
               }

            }, 30)




       }
       
       }


//         var timer=setInterval(
   




// }