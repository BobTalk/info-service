var ContentInfo = {
  ContentInfo: function (param) {
    return $sql = 'SELECT U.cont_id AS CONTID,U.contents,C.NAME,N.NAME AS nodeName FROM user_object_common U JOIN content C  JOIN node_cont NC JOIN node N WHERE U.cont_id = C.contid  AND N.NODEID = NC.node_id AND NC.cont_id = U.cont_id AND U.cont_id ="' + param.id+'"';
  }
}
module.exports = ContentInfo;
