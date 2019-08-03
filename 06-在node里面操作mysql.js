
/**
 * 1.下载引入
 * 2.创建一个连接对象
 * 3.需要一个sql语句
 * 4.执行语句
 * 
 * 
 */

 const mysql = require('mysql');
//  创建一个连接对象
let conn = mysql.createConnection({
   // ip
   host:'127.0.0.1',
   port:'3306',
   user:'root',
   password:'root',
   database:'heros'
})

// 需要一个sql语句
// let sql = `select * from heros`;
// let sql = `insert into heros set name = '墨子',gender='男',birthday = '2008-08-09' `;
// let sql = 'delete from heros where id = 9 '
let sql = `update heros set birthday = '2008-09-07' where id = 4`


// 执行sql语句
conn.query(sql,(err,result,filed)=>{
   if(err) console.log(err);
   console.log(result);
   console.log(filed);
})