var $sql = require('./getUserInfoSqlMapping')
var $mysqlUtil = require('../../util/mysqlUtil')
module.exports = {
  userInfo: function (param, callback) {
    var sql = $sql.getUserInfo(param);
    $mysqlUtil.queryStrSql(sql,callback);
  }
}
