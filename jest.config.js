module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "jsx", "json", "vue"], // 告诉jest要处理哪些文件
  transform: {
    "^.+\\.vue$": "vue-jest", // 用 vue-jest 处理.vue文件 
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // // 支持源代码中相同的 `@` -> `src` 别名
    // "vfox-ui/(.*)$": "<rootDir>/packages/$1"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(cloud-common|ant-design-vue)/)"],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)",
  ],
  testURL: "http://localhost/",
  verbose: true,
  collectCoverage: true, // 生成测试覆盖率报告
  coverageDirectory: './docs/unit-test-coverage', // 目标输出目录
  collectCoverageFrom: [ // 定义需要收集测试覆盖率信息的文件
    "packages/**/*.{js,ts,vue}",
    "!packages/cloud-upload/*.{js,ts,vue}",
    "!packages/cloud-double-upload/*.{js,ts,vue}",
    "!packages/cloud-navTabs/*.{js,ts,vue}",
    "!src/App.vue", // 入口文件排除
    "!src/main.js", // 设置文件排除
    "!src/router/index.js",
    "!**/node_modules/**",
  ],
}
