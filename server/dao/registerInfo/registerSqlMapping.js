var registerInfo = {
  registerInfo: function (param) {
    return $sql = 'INSERT INTO USER (user_name,user_password) VALUE("' + param.username + '","' + param.password + '")';
  }
}
module.exports = registerInfo;
