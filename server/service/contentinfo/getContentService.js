var getContentInfo = require('../../dao/GetContentInfo_dao/getContentDao');
module.exports = {
  ContentInfo: function (req, res, next) {
    var param = req.query || req.params;
    return getContentInfo.ContentInfo(param, function (err, result) {
      if (err != null) {
        res.json("数据返回失败！")
      } else {
        res.json(result)
      }
    });
  }
}
