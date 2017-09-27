var async = require('async');
var getAllInfo = require('../../dao/GetAllInfo_dao/GetAllInfoeDao');
module.exports = {
  getAllInfo: function (req, res, next) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    return getAllInfo.getAllInfo(param.id, function (err, result) {
      res.json(result)
    });
  }
}
