/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const execSync = require('child_process').execSync;
const compareVersions = require('compare-versions');
const commander = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');

// Npm and Yarn minimal version.
var minimalNPMVersion = packageJson.engines.npm;
var minimalYarnVersion = packageJson.engines.yarn;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .option('--use-npm')
  .allowUnknownOption()
  .on('--help', () => {
    console.log(` Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
  })
  .parse(process.argv);

if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(`${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`);
  console.log();
  console.log(`${chalk.cyan(program.name())} ${chalk.green('my-app')}`);
  process.exit(1);
}

createCookieScript(projectName, program.useNpm);

// Create Cookie Script.
function createCookieScript(directory, useYarn = false) {
  console.log(`Creating a new CookieScript app in ${chalk.green(directory)}.`);
  if (!useYarn) {
    npmVersion = execSync('npm --version')
      .toString()
      .trim();
    if (compareVersions(npmVersion, minimalNPMVersion) !== -1) {
      console.log(`Npm version compatible ${chalk.green('✓')}`);
    } else {
      console.log();
      console.log(
        chalk.yellow(`'You need NPM v${minimalNPMVersion} or above but you have v${npmVersion}'`),
      );
      process.exit(0);
    }
  }
  yarnVersion = execSync('yarn --version')
    .toString()
    .trim();
  if (compareVersions(yarnVersion, minimalYarnVersion) !== -1) {
    console.log(`Yarn version compatible ${chalk.green('✓')}`);
  } else {
    console.log();
    console.log(
      chalk.yellow(`'You need Yarn v${minimalNPMVersion} or above but you have v${yarnVersion}'`),
    );
    process.exit(0);
  }
  // Clone the repository from GitHub
  const attemptCloneRepository = execSync('git clone https://github.com/getspooky/CookieScript.git ' + directory);
  // Check GitHub CookieScript repository is cloned.
  // https://github.com/getspooky/CookieScript.git
  const isRepositoryCloned = execSync('git remote -v').toString().split(/\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('origin'))
    .filter((line) => new RegExp(/getspooky\/CookieScript\.git/).test(line));
  //
  if (!Array.isArray(isRepositoryCloned) &&
    isRepositoryCloned.length !== 0) {
    console.log();
    console.error('CookieScript repository not found');
    process.exit(0);
  }
  console.log(chalk.green('Success! App created at ' + directory));
  console.log('Inside that directory, you can run several commands : ');
  console.log(
    chalk.cyan('yarn start') + '\n' + 'Starts the development server.'
  );
  console.log(
    chalk.cyan('yarn test') + '\n' + 'Starts the test runner.' + '\n'
  );
  console.log('Happy Coding ');
  process.exit(0);
}
