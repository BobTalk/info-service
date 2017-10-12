var getUserInfoDao = require('../../dao/getUserInfo/getUserDao');
var $util = require('../../util/util');
module.exports = {
  UserInfo: function (req, res, next) {
    getUserInfoDao.userInfo(req.body, function (err, result) {
      if (err == null && result != '') {
        $util.resJSON.resultnum = $util.resConfig.ok;
        $util.resJSON.resultdata = result;
        res.json($util.resJSON);
      } else {
        $util.resJSON.resultnum = "1111";
        $util.resJSON.resultdata = '数据返回失败';
        res.json($util.resJSON);
        return;
      }
    });
  },
  selectUserInfo: function (req, res, next) {
    var param = req.query || req.params;
    getUserInfoDao.selectUserInfo(param, function (err, result) {
      if (err == null) {
        res.send(result)
      } else {
        res.send("数据返回失败！")
      }
    });
  }
}
