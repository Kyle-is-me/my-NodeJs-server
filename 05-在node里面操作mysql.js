
/**
 * 使用：
 *  1.下载 - npm i -s mysql
 *  2. 引入
 *  3. 记住操作数据库的步骤：
 *    3.1 创建一个连接对象
 *    3.2 开始连接(新版的mysql会自动连接)
 *    3.3 准备一个你想要执行的sql语句
 *    3.4 把sql语句执行
 *    3.5 关闭连接
 */



const mysql = require('mysql');
//创建连接对象
let conn = mysql.createConnection({
   // ip
   host: '127.0.0.1',
   // 端口
   port: '3306',
   // 用户名
   user: 'root',
   // 密码
   password: 'root',
   // 数据库名称
   database: 'heros'
});

// // 2.连接
// conn.connect();

// 需要一个sql语句
// let sql = `select * from heros`;
// let sql = `select * from heros where isDel = 1`
// let sql = `update heros set isDel = 1 where id = 1 `;
let sql = `UPDATE heros set img='../assets/image/4.jpg',birthday = '2010-01-01' WHERE id = 8`;

// 执行sql语句
conn.query(sql, (err, result, filed) => {
   if (err) console.log(err);
   console.log(result);
   console.log(filed);
})

//5关闭
conn.end();