const express = require('express');
const router = express.Router();
const controller = require('./03-controller');

router.get('/index',(req,res)=>{
  controller.getIndex(req,res);
})


// 约定以  /edit  返回编辑页面
router.get('/edit',(req,res)=>{
  controller.getEdit(req,res);
})

router.get('/edit2',(req,res)=>{
  controller.getEdit2(req,res);
})

// 给前端一个根据id获取原来的数据的接口
router.get('/getHeroById',(req,res)=>{
  controller.getHeroById(req,res);
});


// 此时需要一个可以让前端修改英雄的接口
router.post('/editHeroById',(req,res)=>{
  controller.editHeroById(req,res);
})

//新增页面请求的接口
router.get('/add',(req,res)=>{
  controller.getAdd(req,res)
})

//新增英雄的请求
router.post('/addNewHeroById',(req,res)=>{
  controller.addNewHeroById(req,res);
})


//删除英雄的请求
router.get('/deleteHero',(req,res)=>{ 
  controller.deleteHero(req,res);
})

module.exports = router;