## Mernless Command Line Interface

Mernless boilerplate provides three primary tools for interaction through command-line namely: `geek`.

## Introduction

Geek is the command line interface frequently used in Mernless and it includes a set of helpful commands for developing a web application.
One of the biggest benefits of the Mernless CLI is the rapid scaffolding of the application. It allows you to generate controllers, routes and models with a simple `generate` command.

## Example

Here is a list of few commands along with their respective functionalities :

##### Generate new controller

```sh
node geek generate:controller <file>
```

##### Generate new model

```sh
node geek generate:model <file>
```

##### Generate new validator

```sh
node geek generate:validator <file>
```

## Writing Commands

In addition to the commands listed a user can also create a custom command which can be used in the web application. Please note that commands are stored in `console/commands/`.

The default command for creating user defined command is shown below :
```sh
node geek generate:command <file>
```

#### Example

```sh
node geek generate:command DefaultCommand
```

The file created for DefaultCommand is named as DefaultCommand.js and is shown below :

```JS
export default {
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  signature: '',

  /**
   * The alias of the console command.
   *
   * @var {string}
   */
  alias: '',

  /**
   * The options of the command.
   *
   * @var {string}
   */
  option: '',

  /**
   * The console command description.
   *
   * @var string
   */
  description: '',

  /**
   * Execute the console command.
   *
   * @export
   * @function
   * @name handle
   * @returns {void}
   */
  handle() {
    //
  },
};

```

## Registering Commands

You shoud manually register commands by adding its path to the `commands` property of your `providers/consoleProvider.js` file :

```JS
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
```