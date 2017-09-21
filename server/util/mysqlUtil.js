var $writelog = require('../libs/logHelper');
var $conf = require('../conf/db');
var $util = require('../util/util');
var mysql = require('mysql');
//执行多条SQLs
//var mysqlQ = require('mysql-queries').init($conf.mysql);
var mysqlQ = mysql.createConnection($conf.mysql);
mysqlQ.connect();
module.exports = {
  /* 执行单个sql
   * params
   * @sql  sql语句
   * @params 参数集合 [p1,p2,p3......],无参数可不传递
   *
   * return callback();
   * */
  queryStrSql: function (sql, params, callback) {
    if (callback === undefined) {//没有传递参数params时，params是回调函数
      callback = params;
      params = [];
    }
    mysqlQ.query(sql, params, function (err, results) {
      if (err != null) {
        $writelog.helper.writeErr("执行sql发生错误：" + sql + "/n 错误信息：" + err.stack);
        callback(err, results);
        return;
      }
      // 返回结果给service
      callback(err, results);
    });
  },

  /* 执行多个sql
   * byx 2017-5-11 14:45:47
   * params
   * @sql  sql语句数组 ["","","".......]
   * @params 参数数组集合[[p1,p2,p3......],[p1,p2,p3......],[p1,p2,p3......]......],无参数可不传递
   *
   * return callback();
   * */
  queryArrSql: function (sqls, params, callback) {
    if (callback === undefined) {//没有传递参数params时，params是回调函数
      callback = params;
      params = [];
    }
    mysqlQ.queries(sqls, params, function (err, results) {
      if (err != null) {
        $writelog.helper.writeErr("执行sql发生错误：" + sqls + "/n 错误信息：" + err.stack);
        callback(err, results);
        return;
      }
      // 返回结果给service
      callback(err, results);
    });
  }
}
