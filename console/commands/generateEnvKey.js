const path = require('path');
const chalk = require('chalk');
const {
  generate
} = require('randomstring');
const replace = require('replace-in-file');
// Converting callbacks to promises.
const {
  log
} = console;

module.exports = {
  /**
   * The name and signature of the command.
   *
   * @var string
   */
  signature: 'generate:key <file>',

  /**
   * The alias of the command.
   *
   * @var {string}
   */
  alias: 'gk',

  /**
   * The options of the command.
   *
   * @var {string}
   */
  option: '',

  /**
   * The command description.
   *
   * @var string
   */
  description: 'Set the application key',

  /**
   * Execute the command.
   *
   * @export
   * @function
   * @name handle
   * @returns {*}
   */
  handle(file = '.env', option) {
    //
    const randomKey = generate(70);
    // we will replace the application key in the environment file so it is
    // automatically setup for this developer.
    const options = {
      files: path.resolve(__dirname, '../../', file),
      from: /APP_KEY/g,
      to: `APP_KEY=${randomKey}`,
    };
    replace(options).then(results => {
      log(chalk.green('Application key set successfully!'));
      log(chalk.white.bold(`APP_KEY=${randomKey}`));
    });
  },
};