/**
 * Created by baird on 17/11/20.
 */
let mysql = require('mysql')
let models = require('./db')
let conn = mysql.createConnection(models.mysql)  //连接数据库

conn.connect()
export class jsonmodel {
  jsonWrite (res, code, msg, data) {
    res.json({
      code: code,
      msg: msg,
      data: data
    })
  };
}
export class mysqlquery {
  find (table, where) {
    conn.query('select * from' + table + 'where' + where, function (err, result) {

    })
  }
}
