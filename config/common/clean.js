require('shelljs/global');
const rimraf = require('rimraf')
const chalk = require('chalk');

const options = process.argv;
const type = options[2];
switch (type) {
  case 'test':
  case 't':
    rimraf.sync('tests/unit/__snapshots__/*')
    rimraf.sync('docs/unit-test-coverage/*')
    break;

  default:
    console.log(chalk.red(`请输入参数`));
    break;
}