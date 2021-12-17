const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");

const replaceResults = (template, baseDir) => {
  const regexp = new RegExp("\\{\\{:([^:\\}]+)\\}\\}", "g");

  return template.replace(regexp, function (match) {
    match = match.substr(3, match.length - 5);
    let [loadDir, query = ""] = match.split("?");
    const filePath = path.join(baseDir, loadDir);
    // 读取文件夹下文件
    const files = fs.readdirSync(filePath);
    files.sort((a, b) => {
      const a1 = a.replace("example", "").replace(".vue", "");
      const b1 = b.replace("example", "").replace(".vue", "");
      return +a1 - +b1;
    });
    const vueArr = [];
    const templateArr = [];
    let importStr = "";
    let exampleStr = "";
    let templateStr = "";
    files.forEach((el, index) => {
      // 只处理vue文件
      if (el.indexOf(".vue") > -1) {
        exampleStr = fs.readFileSync(path.join(filePath, el), "utf-8");
        // 存储示例文件名
        el = el.replace(".vue", "");
        vueArr.push(el);
        importStr += `import ${el} from './${el}';\n`;
        // 存储template数据
        const templateStr1 = `<template>
        <demo-block>
        <template #demo-title>{{${el}.title}}
        <div class="demo-sub-title">{{${el}.subTitle || ''}}</div>
        </template>
        <template #component-body>
        <${el}></${el}>
        </template>
        <template #component-code>\n
        \`\`\`vue\n`;
        const templateStr2 = `\n\`\`\`
        </template>
        </demo-block>
        </template>`;
        // 保证示例代码的格式
        templateStr = `${replaceSpace(templateStr1)}${exampleStr}${replaceSpace(
          templateStr2
        )}`;
        templateArr.push(templateStr);
      }
    });
    // 加载示例组件
    source = `
    <script>
    ${importStr}
    export default {
      components: { ${vueArr.join(",")}},
      data: function () { return { ${vueArr.join(",")}} }
    }
    </script>\n`;
    source = replaceSpace(source);
    // 展示示例组件
    source += `${templateArr.join("\n")}`;
    // console.log('////////////////////////////////////////////', source)
    return source;
  });
};

const replaceSpace = (str) => {
  str = str.replace(/\x20+</g, "<");
  str = str.replace(/\x20+\`\`\`/g, "```");
  return str;
};

const parser = new MarkdownIt({
  html: true,
  highlight: (str, lang) => {
    return (
      '<pre class="hljs"><code>' +
      MarkdownIt().utils.escapeHtml(str) +
      "</code></pre>"
    );
  },
});

const wrapper = (content) => `
<template>
  <div v-html="content" v-once />
</template>
<script>
export default {
  created() {
    this.content = decodeURIComponent(\`${encodeURIComponent(content)}\`);
  }
};
</script>
`;

module.exports = function (source, options) {
  source = replaceResults(source, process.cwd());
  // return wrapper(parser.render(source));
  return source;
};
