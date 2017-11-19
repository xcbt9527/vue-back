let models = require('../../mysql/db');
let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let $sql = require('../../mysql/api/user');

// 连接数据库
let conn = mysql.createConnection(models.mysql);

conn.connect();
let jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/login', (req, res) => {
  console.log(1);
  let sql = $sql.getuserbyinfo;
  let params = req.body;
  console.log(params);
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

module.exports = router;
