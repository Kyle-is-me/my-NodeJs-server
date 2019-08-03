const fs = require('fs');
const mysql = require('mysql');

module.exports = {
  getAllHero,addNewHeroById,deleteHero,getHeroById,editHeroById
};


let conn = mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'root',
  database:'heros'
})

//获取全部英雄
function getAllHero(callback){
  let sql = `select * from heros where isDel = 0`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  })
}

// 通过id添加新英雄
function addNewHeroById(data,callback){
  let sql = `insert into heros set \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}'`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
    console.log(result);
  })
}

//删除英雄
function deleteHero(id,callback){
  // let sql = `delete from heros where id = '${id}' `;
  // 软删除
  let sql = `update heros set isDel = 1 where id = '${id}' `;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err)
    callback(result);
  })
}

// 通过id获取英雄
function getHeroById(id,callback){
  let sql = `select * from heros where id = '${id}' `;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result[0]);
    // console.log(result)
  })
}

// 通过id修改英雄信息
function editHeroById(id,data,callback){
  console.log(data)
  let sql = `UPDATE heros set \`name\`='${data.name}',\`gender\`\='${data.gender}',\`img\`='${data.img}' WHERE id = ${id}`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
    console.log(result)
  })
}


