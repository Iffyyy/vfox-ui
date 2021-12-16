require('shelljs/global');
const path = require('path');
const fs = require("fs");

exec(`vuepress build docs --no-cache`)

const CopyDirectory = (src, dest) => {
  if (fs.existsSync(dest) == false) {
    fs.mkdirSync(dest);
  }
  if (fs.existsSync(src) == false) {
    return false;
  }
  // console.log("src:" + src + ", dest:" + dest);
  // 拷贝新的内容进去
  const dirs = fs.readdirSync(src);
  dirs.forEach(function(item){
    const item_path = path.join(src, item);
    const temp = fs.statSync(item_path);
    if (temp.isFile()) { // 是文件
      fs.copyFileSync(item_path, path.join(dest, item));
    } else if (temp.isDirectory()){ // 是目录
      CopyDirectory(item_path, path.join(dest, item));
    }
  });
}

CopyDirectory('docs/unit-test-coverage', 'docs/.vuepress/dist/unit-test-coverage');
