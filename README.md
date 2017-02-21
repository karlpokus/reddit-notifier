# reddit-notifier
> Notify [e-mail] when [word] is posted on [subreddit]

That's the gists of it. Get notified when posts on a subreddit include certain topics of your choosing. A work in progress.

# Requirements
- A means to get notified like [mailgun](http://www.mailgun.com/)
- For a free of charge simple working cron I'd pick [webtasks](https://webtask.io/docs/cron)

# usage
```javascript
// index.js
var notifier = require('./lib/notifier'),
    sub = 'https://www.reddit.com/r/node/new.json', // use .json to avoid authentication
    targets = 'bot'; // separate multiple targets by pipes |

notifier(sub, targets, function(err, res){
  // res is an array of matched urls
});

# TODOs
- [ ] parallel async calls across multiple subs
- [ ] npm maybe
- [ ] better regex

# Licence
MIT