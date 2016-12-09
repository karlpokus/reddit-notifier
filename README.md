# reddit-notifier
> Notify [e-mail] when [word] is posted on [subreddits]

That's the gists of it. Get notified when posts on subreddits include certain topics of your choosing. A work in progress. Note: As it stands you need to host the bot yourself and include api keys for mailgun and reddit in `settings.json` in root.

# usage
```javascript
// index.js
var Notifier = require('./lib/notifier'),
    settings = require('./settings'),
    bot = new Notifier({
      // reddit api keys
      "key": settings.key,
      "secret": settings.secret,
      "username": settings.username,
      "password": settings.password,
      // query
      query: {
        sub: "/r/node/new",
        regex: 'bot' // separate multiple terms with empty space
      }
    });

// starts cron
bot.start();
```

# TODOs
- [ ] pick a cron pkg
- [ ] parallel async calls to multiple subs
- [ ] mailgun api
- [ ] options for cron and mailgun
- [ ] options defaults
- [ ] npm
- [ ] some friendly pointers on how to deploy and obtain reddit api keys

# Licence
MIT