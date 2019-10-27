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
  return path.resolve(__dirname, '../../', 'server', 'validators');
}

/**
 * Get the stub for the generator.
 *
 * @function
 * @name getStub
 * @returns {string}
 */
function getStub() {
  return path.resolve(__dirname, '../stubs', 'validator.stub');
}

module.exports = {
  /**
   * The name and signature of the command.
   *
   * @var string
   */
  signature: 'generate:validator <file>',

  /**
   * The alias of the command.
   *
   * @var {string}
   */
  alias: 'gv',

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
  description: 'Create a new validator',

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
    CopyFile(getStub().toString(), path.join(getDestination(), `${file}.js`)).then(() => {
      log(chalk.green('Validator successfully generated'));
    });
  },
};
