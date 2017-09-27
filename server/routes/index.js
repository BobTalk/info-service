var express = require('express')
var router = express.Router()
var GetAllInfo = require('../service/getAllInfo/AllInfoService')
//查询所有信息
router.get('/getAllInfo', function (req, res, next) {
  GetAllInfo.getAllInfo(req, res, next)
})
module.exports = router;

