const util = require('util');
const path = require('path');
const chalk = require('chalk');
const moment = require('moment');
const {readFile, writeFile} = require('fs');
const {str_capitalize} = require('../../support/helpers/common');
// Converting callbacks to promises.
const ReadFile = util.promisify(readFile);
const WriteFile = util.promisify(writeFile);
const {log, error} = console;

/**
 * Get the folder destination for the generator.
 *
 * @function
 * @name getDestination
 * @returns {string}
 */
function getDestination() {
  return path.resolve(__dirname, '../../', 'server', 'database', 'schemas');
}

/**
 * Get the stub for the generator.
 *
 * @function
 * @name getStub
 * @returns {string}
 */
function getStub() {
  return path.resolve(__dirname, '../stubs', 'schema.stub');
}

module.exports = {
  /**
   * The name and signature of the command.
   *
   * @var string
   */
  signature: 'generate:schema <file>',

  /**
   * The alias of the command.
   *
   * @var {string}
   */
  alias: 'gs',

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
  description: 'Create a new schema',

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
    ReadFile(getStub(), 'utf8')
      .then(data => {
        const destination = `${getDestination()}/${moment().format(
          'YYYY[_]MM[_]DD'
        )}_create_${file}_schema.js`;
        const result = data
          .toString()
          .replace(/SCHEMA_NAME/g, `Create${str_capitalize(file)}Schema`);
        // we will generate the path to the location where this class' file should get
        // written. Then, we will build the class and make the proper replacements on the
        // stub files so that it gets the correctly formatted class name.
        WriteFile(destination, result, 'utf8').then(() =>
          log(chalk.green('Schema successfully generated!', destination))
        );
      })
      .catch(err => error(err));
  },
};
