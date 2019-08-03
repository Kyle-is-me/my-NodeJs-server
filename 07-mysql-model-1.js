
const mysql = require('mysql');
const model = {}

let conn = mysql.createConnection({
   host:'127.0.0.1',
   port:'3306',
   user:'root',
   password:'root',
   database:'heros'
})


// 读取数据
function getData(){
   
}


// 执行语句
conn.query(sql,(err,result,filed)=>{
   
})


module.exports = model;