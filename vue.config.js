const webpack = require('webpack');
const devServer = require('./config/devServer.js');
const alias = require('./config/alias.js');
const themeSetting = require('./config/antdv/theme');

module.exports = {
    // 基本路径
    // baseUrl: '/',
    lintOnSave: false,
    productionSourceMap: false,
    // 输出文件目录
    outputDir: 'dist',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: devServer,
    configureWebpack: {
        output: {
            libraryTarget: 'umd'
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/),
        ],
        resolve: {
            alias: alias
        },
    },
    css: {
        extract: false,
        // sourceMap: true,
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: themeSetting,
                    javascriptEnabled: true,
                    math: 'always'   // 此处指定为兼容 less-loader 3.x 的默认选项
                }
            },
        },
    },
    chainWebpack: config => {
        // 小于10kb将会被打包成 base64
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240, esModule: false }))
    },
    transpileDependencies: ["cloud-common","cloud-components", "ant-design-vue"],
}