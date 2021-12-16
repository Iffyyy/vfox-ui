require('shelljs/global');

const inquirer = require('inquirer');
const chalk = require('chalk');
const config = require('../../package.json');

let run = function () {
	// 更新
	exec(`git pull`);
	
	console.log(chalk.blueBright(`编译组件总包`));
	// 编译组件总包
	exec(`vue-cli-service build --target lib --formats=umd-min --name index --no-clean --dest lib packages/index.js`);
	console.log(chalk.green(`编译已完成`));
	compPublish();
};

let compPublish = function () {
	inquirer.prompt([{
		name: 'conform',
		message: `是否发布工程到仓库？`,
		type: 'list',
		default: 1,
		choices: [{
			name: '是',
			value: 1
		}, {
			name: '否',
			value: 0
		}]
	}]).then(function (answers) {
		if (answers.conform) {
			console.log(`npm unpublish ${config.name}@${config.version} --force`);
			exec(`npm unpublish ${config.name}@${config.version} --force`);
			console.log(`npm publish`);
			exec('npm publish');
			console.log(chalk.green(`已发布`));
		}
	});
};

run();

