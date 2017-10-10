var $sql = require('./registerSqlMapping')
var $mysqlUtil = require('../../util/mysqlUtil')
module.exports = {
  registerInfo: function (param, callback) {
    var sql = $sql.registerInfo(param);
    $mysqlUtil.queryStrSql(sql,callback);
  }
}
