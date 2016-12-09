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
        regex: 'bot'
      }
    });

bot.test();
