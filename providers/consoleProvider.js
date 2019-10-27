/**
 * Register the commands for the application.
 *
 * @export
 * @type {Array}
 */
exports.commands = [
  require('../console/commands/generateController'),
  require('../console/commands/generateException'),
  require('../console/commands/generateMiddleware'),
  require('../console/commands/generateModel'),
  require('../console/commands/generateSchema'),
  require('../console/commands/generateValidator'),
  require('../console/commands/generateCommand'),
  require('../console/commands/generateEnvKey'),
];