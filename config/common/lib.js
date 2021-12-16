require('shelljs/global');

var inquirer = require('inquirer');
var chalk = require('chalk');
var package = require('../../package.json');
var fs = require('fs');

// 驼峰处理
function tranformName(str) {
	var strArr = str.split('-');
	for (var i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
	}
	return strArr.join('');
}

let run = function () {
	// 更新
	exec(`git pull`);
	
	// let files = fs.readdirSync('packages').filter(name => name.indexOf('cloud') > -1);
	// console.log(chalk.blueBright(`正在编译---packages文件夹\n`));
	// files.forEach((name) => {
	//     console.log(chalk.blueBright(`正在编译---${name} -> ${tranformName(name)}`));
	//     exec(`vue-cli-service build --target lib --formats=umd-min --name ${tranformName(name)} --dest lib/${name} packages/${name}/index.js`)
	// })
	
	// files = fs.readdirSync('packages-plugin').filter(name => name.indexOf('cloud') > -1);
	// if (files && files.length) {
	//     console.log(chalk.blueBright(`正在编译---packages-plugin文件夹\n`));
	//     files.forEach((name) => {
	//         console.log(chalk.blueBright(`正在编译---${name}->${tranformName(name)}`));
	//         exec(`vue-cli-service build --target lib --formats=umd-min --name ${tranformName(name)} --dest lib/${name} packages-plugin/${name}/index.js`)
	//     })
	// }
	
	console.log(chalk.blueBright(`编译组件总包`));
	// 编译组件总包
	exec(`vue-cli-service build --target lib --formats=umd-min --name index --no-clean --dest lib packages/index.js`);
	console.log(chalk.green(`编译已完成`));
	compPublish();
};

// 获取文件夹名称
let compPublish = function (componentsJson) {
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
			console.log(`npm unpublish ${package.name}@${package.version} --force`);
			exec(`npm unpublish ${package.name}@${package.version} --force`);
			console.log(`npm publish`);
			exec('npm publish');
			console.log(chalk.green(`已发布`));
		}
	});
};

run();

