var knowledgeInfo = {
  getAllInfo: function (param) {
    /*SELECT N.NODEID,N.name,NC.cont_id AS CONTID,C.NAME, UOC.CONTENTS FROM node N JOIN node_cont NC JOIN content C JOIN user_object_common UOC WHERE N.NODEID = C.contid AND N.NODEID = NC.node_id AND UOC.CONT_ID = N.NODEID AND N.NODEID=*/
    return $sql = 'SELECT U.cont_id,U.contents,C.NAME FROM user_object_common U JOIN content C  JOIN node_cont NC  WHERE U.cont_id = C.contid  AND NC.cont_id = U.cont_id AND NC.node_id =' + param;
  }
}
module.exports = knowledgeInfo;
