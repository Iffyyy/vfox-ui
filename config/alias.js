const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '../'+dir)
}
module.exports = {
  '_lib': resolve('lib'),
  '_src': resolve('src'),
  '_pkg': resolve('packages')
}