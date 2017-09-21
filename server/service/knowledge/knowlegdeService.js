var $util = require('../../util/util');
var async = require('async');
var KnowledgeDao = require('../../dao/Knowledge_dao/knowledgeDao');
module.exports = {
  getKnowledgeInfo: function (req, res, next) {
    return KnowledgeDao.getAllInfo('*',function (err, result) {
      res.json(result)
    });
    /* try {
     var param = req.query || req.params;
     param = JSON.parse(param.JSONPARAM);
     } catch (error) {
     $util.resJSONError(error, res);
     return;
     }*/
  }
}
