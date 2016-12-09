var Snoocore = require('snoocore');

function notifier(opts) {
  if (!opts) throw new Error('Args missing');
  
  this.opts = opts;
  
  this.r = new Snoocore({
    userAgent: 'reddit-notifier',
    oauth: { 
      type: 'script',
      "key": opts.key,
      "secret": opts.secret,
      "username": opts.username,
      "password": opts.password,
      scope: [ 'read']
    }
  });
}

notifier.prototype.test = function() {
  var self = this;
  
  self.query(function(err, titles){
    var res = self.filterByRegex(titles);
    console.log(res);
  });
}

notifier.prototype.query = function(cb) {
  var sub = this.opts.query.sub,
      opts = {limit: 50};
  
  this.r(sub).get(opts).then(function(result) {
  
    var titles = result.data.children
      .map(function(o){
        return o.data.title || null;
      })
      .filter(function(str){
        return str;
      });
    
    cb(null, titles);
  });  
}

notifier.prototype.filterByRegex = function(titles) {
  var regex = this.opts.query.regex;
  
  return titles.filter(function(title){
    return new RegExp(regex, 'i').test(title);
  });
}

notifier.prototype.start = function() {
  // cron
}

module.exports = notifier;