var path = require('path')
exports.resolve = {
  root: [
    path.join(__dirname, 'src'),
    path.join(__dirname, 'bower_components'),
  ],
}
