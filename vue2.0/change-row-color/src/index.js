//npm init -y 初始化
//npm i jquery -S 安装jquery   -S是--save 的缩写
//npm install webpack@5.42.1 webpack-cli@4.7.2 -D   配置webpack   -D是--save-dex


import $ from 'jquery'
//es6语法导入jquery
//定义入口函数
$(function(){
      $('li:odd').css('background-color','red');//偶数
      $('li:even').css('background-color','pink');//奇数

    


})