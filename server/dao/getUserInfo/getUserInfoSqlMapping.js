var getUserInfo = {
  getUserInfo: function (param) {
    return $sql = 'SELECT USER_NAME AS username FROM USER WHERE USER_NAME ="' + param.username + '" AND USER_PASSWORD ="' + param.password + '"';
  },
  selectUserInfo: function (param) {
    return $sql = 'SELECT USER_NAME AS username FROM USER WHERE USER_NAME ="' + param.username + '"';
  }
}
module.exports = getUserInfo;
