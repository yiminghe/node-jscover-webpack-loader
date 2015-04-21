var jscover = require('node-jscover');
var path = require('path');

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable();
  }
  var relative= path.relative(process.cwd(),this.resourcePath);
  return jscover.instrument(source, relative);
};
