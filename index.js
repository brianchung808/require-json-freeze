var deepFreeze = require('deep-freeze');
var path = require('path');

var oldJsonRequire = require.extensions['.json'];

var cwd = process.cwd();

function getRelativePath(filename) {
  return path.relative(cwd, filename);
}

function shouldIgnore(filename) {
  return getRelativePath(filename).split(path.sep).indexOf("node_modules") >= 0;
}

require.extensions['.json'] = function(module, filename) {
  // this modifies module.exports
  oldJsonRequire(module, filename);

  if(shouldIgnore(filename)) {
    return;
  }

  module.exports = deepFreeze(module.exports);
};
