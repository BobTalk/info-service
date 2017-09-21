var express = require('express')
var router = express.Router()
var KnowledgeInfo = require('../service/knowledge/knowlegdeService')
router.get("/", function (req, res, next) {
 res.send('成功')
 })
//查询信息
router.get('/getKnowledgeInfo', function (req, res, next) {
  KnowledgeInfo.getKnowledgeInfo(req, res, next)
})
module.exports = router;

