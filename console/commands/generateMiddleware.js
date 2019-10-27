const util = require('util');
const path = require('path');
const chalk = require('chalk');
const {readFile, writeFile} = require('fs');
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
  return path.resolve(__dirname, '../../', 'server', 'http', 'middlewares');
}

/**
 * Get the stub for the generator.
 *
 * @function
 * @name getStub
 * @returns {string}
 */
function getStub() {
  return path.resolve(__dirname, '../stubs', 'middleware.stub');
}

module.exports = {
  /**
   * The name and signature of the command.
   *
   * @var string
   */
  signature: 'generate:middleware <file>',

  /**
   * The alias of the command.
   *
   * @var {string}
   */
  alias: 'gm',

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
  description: 'Create a new middleware',

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
        const destination = `${getDestination()}/${file}.js`;
        const result = data.toString().replace(/MIDDLEWARE_NAME/g, file);
        // we will generate the path to the location where this class' file should get
        // written. Then, we will build the class and make the proper replacements on the
        // stub files so that it gets the correctly formatted class name.
        WriteFile(destination, result, 'utf8').then(() =>
          log(chalk.green('Middleware successfully generated!', destination))
        );
      })
      .catch(err => error(err));
  },
};
