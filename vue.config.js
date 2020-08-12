module.exports = {
    devServer:{
        //每次修改该文件需重新启动生效
        //mock数据模拟后端
        before(app,server){
            //接口
            app.get('/api/cartList',(req,res)=>{
                res.json({
                    result:[
                        {id: 1,title: "Vue实战开发",price: 188,active: true,count: 1},
                        {id: 2,title: "React实战开发",price: 198,active: true,count: 1},
                    ]
                })
            })
        }
    }
}