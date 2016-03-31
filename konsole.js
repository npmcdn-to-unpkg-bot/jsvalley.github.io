    var LOG_LEVEL = {
      ALL: parseInt('11111',2),
      DEBUG: parseInt('00001',2),
      LOG: parseInt('00010',2),
      INFO: parseInt('00100',2),
      WARN: parseInt('01000',2),
      ERROR: parseInt('10000',2),
      NONE: parseInt('00000',2)
    };

    var logLevel = LOG_LEVEL.LOG;

    var konsole = {
      debug: function() {
        logLevel <= LOG_LEVEL.DEBUG && console.debug.apply(console, arguments);
      },
      log: function() {
        logLevel <= LOG_LEVEL.LOG  && console.log.apply(console, arguments);
      },
      info: function() {
        logLevel <= LOG_LEVEL.INFO  && console.log.apply(console, arguments);
      },
      warn: function() {
        logLevel <= LOG_LEVEL.WARN && console.error.apply(console, arguments);
      },
      error: function() {
        logLevel <= LOG_LEVEL.ERROR && console.error.apply(console, arguments);
      },
    };

    konsole.debug(LOG_LEVEL);
