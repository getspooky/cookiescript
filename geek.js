const {commands} = require('./providers/consoleProvider');

const {load} = require('./console/loader');

/**
 * Bootstrap the console application.
 *
 * @function
 * @name Run
 * @return {void}
 */

(function bootstrap() {
  //
  load(commands);
})();
