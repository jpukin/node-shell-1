const request = require('request');
function curlFunc(urlName, doneFunc) {
  request(urlName, function(err, response, body) {
    if (err) {doneFunc(err)}
    else {
      doneFunc(body)
    }
  })
}

module.exports = curlFunc;
