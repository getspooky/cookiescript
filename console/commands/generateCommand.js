const util = require('util');
const path = require('path');
const chalk = require('chalk');
const {copyFile} = require('fs');
// Converting callbacks to promises.
const CopyFile = util.promisify(copyFile);
const {log} = console;

/**
 * Get the folder destination for the generator.
 *
 * @function
 * @name getDestination
 * @returns {string}
 */
function getDestination() {
  return path.resolve(__dirname, '../', 'commands');
}

/**
 * Get the stub for the generator.
 *
 * @function
 * @name getStub
 * @returns {string}
 */
function getStub() {
  return path.resolve(__dirname, '../stubs', 'command.stub');
}

module.exports = {
  /**
   * The name and signature of the command.
   *
   * @var string
   */
  signature: 'generate:command <file>',

  /**
   * The alias of the command.
   *
   * @var {string}
   */
  alias: 'gc',

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
  description: 'Create a new command',

  /**
   * Execute the command.
   *
   * @export
   * @function
   * @name handle
   * @returns {*}
   */
  handle(file = 'index', option) {
    //
    const destination = path.join(getDestination(), `${file}.js`);
    CopyFile(getStub(), destination).then(() => {
      log(chalk.green('Command successfully generated!', destination));
    });
  },
};
