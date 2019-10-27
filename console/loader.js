const program = require('commander');

/**
 * The version of the console.
 *
 * @var string
 */
const version = '0.1.0';

/**
 * Register all of the commands in the given directory.
 *
 * @export
 * @function
 * @name Run
 * @param registerCommands
 * @returns {void}
 */
exports.load = function(registerCommands = []) {
  if (Array.isArray(registerCommands)) {
    // loop inside all register commands.
    registerCommands.forEach(command => {
      exec(command);
    });
  } else {
    return;
  }
  // The process.argv property returns an array containing the command line arguments passed when
  // the Node.js process was launched.
  program.parse(process.argv);
};

/**
 * Execute the given command.
 *
 * @function
 * @name run
 * @param command
 * @returns {void}
 */
function exec({signature, alias, description, option, handle}) {
  // GitHub : https://github.com/tj/commander.js/
  program
    .version(version)
    .command(signature)
    .alias(alias)
    .description(description)
    // A command's options on the command line are validated when the command is used.
    // Any unknown options will be reported as an error.
    // However, if an action-based command.stub does not define an action, then the options are not validated.
    .option(option)
    .action(handle);
}
