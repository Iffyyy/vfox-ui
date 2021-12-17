const themeSetting = require("../../config/antdv/theme");

module.exports = (options, context) => ({
  title: "vfox-ui组件库",
  description: "基于antdv封装的UI组件库",
  base: '/vfox-ui/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "单测覆盖率",
        link: "https://iffyyy.github.io/vfox-ui/unit-test-coverage/lcov-report/index.html",
      },
    ],
    sidebar: [
      {
        title: "组件库说明",
        path: "/pages/guide/",
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          {
            title: "Button 按钮",
            path: "/pages/components/vf-button/vf-button",
          },
        ],
      },
    ],
    sidebarDepth: 0,
    lastUpdated: "Last Updated", // string | boolean
  },
  less: {
    lessOptions: {
      modifyVars: themeSetting,
      javascriptEnabled: true,
      math: "always", // 此处指定为兼容 less-loader 3.x 的默认选项
    },
  },
  chainWebpack(config) {
    config.resolve.alias.set("vfox-ui", process.cwd() + "/packages");
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader(require.resolve("./loader/replaceFile"))
      .options({
        replaceFiles: true, // 默认true, 是否将文件填充进md
        wrapper: false, // 默认true,默认输出Vue Component ,false 时输出html片段
      })
      .end();
  },
});
