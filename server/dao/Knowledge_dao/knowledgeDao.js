var $sql = require('./knowledgeSqlMapping')
var $mysqlUtil = require('../../util/mysqlUtil')
module.exports={
  getAllInfo:function (param,callback) {
    var sql = $sql.getAllInfo(param);
    $mysqlUtil.queryStrSql(sql,callback);
  }
}
