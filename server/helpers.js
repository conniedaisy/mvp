// var Q = require('q');

module.exports = {
  collectData: function(request, callback) {
    var data = '';
    request.on('data', function(chunk) {
      data += chunk;
    });
    request.on('end', function() {
      callback(data);
    });
  }

  // getMovieTitle: function(movieTitle) {

  // }

  // getUrlTitle: function (url) {
  //   return Q.Promise(function (resolve, reject) {
  //     request(url, function (err, res, html) {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         var tag = /<title>(.*)<\/title>/;
  //         var match = html.match(tag);
  //         var title = match ? match[1] : url;
  //         resolve(title);
  //       }
  //     });
  //   });
};