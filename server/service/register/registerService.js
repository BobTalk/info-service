var registerInfoDao = require('../../dao/registerInfo/registerDao');
module.exports = {
  registerInfo: function (req, res, next) {
    return registerInfoDao.registerInfo(req.body, function (err, result) {
      if (err != null) {
        res.json("注册失败！")
      } else {
        res.json(result)
      }
    });
  }
}
