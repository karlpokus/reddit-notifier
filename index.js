var notifier = require('./lib/notifier'),
    sub = 'https://www.reddit.com/r/node/new.json',
    targets = 'node';

notifier(sub, targets, function(err, res){
  if (err) {
    return console.error(err);
  }
  
  console.log(res);
});