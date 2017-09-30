var getUserInfo = require('../../dao/getUserInfo/userDao');
module.exports = {
  UserInfo: function (req, res, next) {
    getUserInfo.userInfo(req.body, function (err, result) {
      console.log(result);
      res.send(result)
    });
  }
}
