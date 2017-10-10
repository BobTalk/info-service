var getUserInfo = require('../../dao/getUserInfo/getUserDao');
module.exports = {
  UserInfo: function (req, res, next) {
    getUserInfo.userInfo(req.body, function (err, result) {
      if (err == null) {
        res.send(result)
      } else {
        res.send("数据返回失败！")
      }
    });
  },
  selectUserInfo: function (req, res, next) {
    var param = req.query || req.params;
    getUserInfo.selectUserInfo(param, function (err, result) {
      if (err == null) {
        res.send(result)
      } else {
        res.send("数据返回失败！")
      }
    });
  }
}
