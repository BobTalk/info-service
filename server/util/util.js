var $writelog = require('../libs/logHelper');
module.exports = {
  extend: function (target, source, flag) {
    for (var key in source) {
      if (source.hasOwnProperty(key))
        flag ?
          (target[key] = source[key]) :
          (target[key] === void 0 && (target[key] = source[key]));
    }
    return target;
  },
  resConfig: {
    ok: "0000",
    fail: "1111"
  },
  resJSON: {
    resultnum: "0000",
    resultdata: {}
  },
  resJSONError: function (error, res, errInfo) {//catch异常之后的友好返回
    console.error(error.stack);
    $writelog.helper.writeErr("错误信息：" + error.stack);
    if (errInfo !== undefined) {
      error.message = errInfo;
    }
    res.json({
      resultnum: "1111",
      resultdata: error.message
    });
  },
  GUID: function () {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
        guid += "-";
    }
    return guid;
  },

  isNull: function (param) {//判断对象是否为空
    if (typeof(param) == "undefined") {
      return true;
    }
    if (param == null) {
      return true;
    }
    if (param == "") {
      return true;
    }
    return false;
  },
  strArrayToString: function (arr) {//数组转字符串
    var resultStr = "";
    arr.forEach(function (item, index) {
      resultStr += "'" + item + "',";
    })
    resultStr = resultStr.length > 0 ? resultStr.substring(0, resultStr.length - 1) : "";
    return resultStr;
  },
  /**
   * json格式转树状结构
   * @param {json} json数据
   * @param {String} id的字符串
   * @param {String} 父id的字符串
   * @param {String} children的字符串
   * @return {Array} 数组
   */
  transTreeData: function (a, idStr, pidStr, chindrenStr) {
    var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;
    for (; i < len; i++) {
      hash[a[i][id]] = a[i];
    }
    for (; j < len; j++) {
      var aVal = a[j], hashVP = hash[aVal[pid]];
      if (hashVP) {
        !hashVP[children] && (hashVP[children] = []);
        hashVP[children].push(aVal);
      } else {
        r.push(aVal);
      }
    }
    return r;
  }
}
