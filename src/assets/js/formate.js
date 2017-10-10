export default{
  //解析路径参数
  urlFormate: function (url) {
    var obj = {};
    try {
      var arr = url.split("?");
      var params = arr[1].split("&");
      for (var i = 0; i < params.length; i++) {
        var param = params[i].split("=");
        obj[param[0]] = param[1]
      }
    } catch (e) {
      console.error(e);
    }
    return obj;
  }
}

