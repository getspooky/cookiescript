const util = require('util');
const path = require('path');
const chalk = require('chalk');
const {copy} = require('fs-extra');
// Converting callbacks to promises.
const copyDirectory = util.promisify(copy);
const {log} = console;

module.exports = {
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  signature: 'generate:app <directory>',

  /**
   * The alias of the console command.
   *
   * @var {string}
   */
  alias: 'ga',

  /**
   * The options of the command.
   *
   * @var {string}
   */
  option: '--name <name>',

  /**
   * The console command description.
   *
   * @var string
   */
  description: 'Mernless installer',

  /**
   * Execute the console command.
   *
   * @export
   * @function
   * @name handle
   * @param directory
   * @param option
   * @returns {void}
   */
  handle(directory, {name = 'Mernless_app'}) {
    //
    if (typeof name === 'function') {
      return;
    }
    copyDirectory(path.join(__dirname, '../../'), `${directory}/${name}`).then(() => {
      log(chalk.green(`${name} successfully generated!`));
    });
  },
};
