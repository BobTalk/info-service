var express = require('express')
var router = express.Router()
var GetAllInfo = require('../service/getAllInfo/AllInfoService')
var GetUserInfo = require('../service/userinfo/getUserService')
//查询所有信息
router.get('/getAllInfo', function (req, res, next) {
  GetAllInfo.getAllInfo(req, res, next)
}),
  router.post('/userInfo', function (req, res, next) {
    GetUserInfo.UserInfo(req, res, next)
  })
module.exports = router;

