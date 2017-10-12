var app = require('../app')
var debug = require('debug')('info-service:server');
var http = require('http')
var port = normalizePort(process.env.PORT || '9090')
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening)
console.log("监听端口: " + port + " 成功");


function normalizePort(val) {
  var port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}
function onListening() {
  var addr = server.address();
  var bind = typeof  addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
}
