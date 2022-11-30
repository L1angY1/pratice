const path=require('path')


module.exports={
mode:"development",//指定构建模式 有production 和development两种  此为配置文件
//development打包速度快
//上线用production
entry:path.join(__dirname,'./src/index.js') ,  //打包入口文件的路径
output:{
path:path.join(__dirname,'dist'), 
//目录
//打包出口文件的路径
filename:'bundle.js'//文件名

}
}