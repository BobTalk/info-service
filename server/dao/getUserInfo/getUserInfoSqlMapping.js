var getUserInfo = {
  getUserInfo: function (param) {
    return $sql = 'SELECT USER_NAME AS username FROM USER WHERE USER_NAME =' + param.name + 'AND USER_PASSWORD =' + param.password;
  }
}
module.exports = getUserInfo;