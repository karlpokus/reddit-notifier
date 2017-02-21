var https = require('https');

function callReddit(sub, cb) {
  https
    .get(sub, function(res){
      res.setEncoding('utf8');
      var data = '';
      
      res
        .on('data', function(chunk){
          data += chunk;
        })
        .on('end', function(){
          
          try {
            cb(null, JSON.parse(data));
          } catch (e) {
            cb(e.message);
          }
        });
    })  
    .on('error', cb);
}

function filterByRegex(res, targets, cb) {
  var re = new RegExp(targets),
      out;
  
  out = res.data.children.filter(function(o){
    return re.test(o.data.title) || re.test(o.data.selftext);
  });
  
  if (out.length) {
    out = out.map(function(o){
      return o.data.url || 'no url found on post';
    });
  }
  cb(null, out);
}

function main(sub, targets, cb){
  if (!sub || !targets || !cb) {
    throw new Error('Arguments missing. See readme');
  }
  
  callReddit(sub, function(err, res){
    if (err) return cb(err);

    filterByRegex(res, targets, cb);
  });
}

module.exports = main;