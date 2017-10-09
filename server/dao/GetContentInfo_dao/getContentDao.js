var $sql = require('./getContentSqlMapping')
var $mysqlUtil = require('../../util/mysqlUtil')
module.exports = {
  ContentInfo: function (param, callback) {
    var sql = $sql.ContentInfo(param);
    $mysqlUtil.queryStrSql(sql, callback);
  }
}
