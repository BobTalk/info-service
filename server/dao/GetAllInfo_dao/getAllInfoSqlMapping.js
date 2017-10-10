var getAllInfo = {
  getAllInfo: function (param) {
    return $sql = 'SELECT U.cont_id AS CONTID,U.contents,C.NAME ,C.UPDATE_TIME AS updateTime FROM user_object_common U JOIN content C  JOIN node_cont NC  WHERE U.cont_id = C.contid  AND NC.cont_id = U.cont_id AND NC.node_id ="' + param+'"';
  }
}
module.exports = getAllInfo;
