var deepFreeze = require('deep-freeze');

var oldJsonRequire = require.extensions['.json'];

require.extensions['.json'] = function(module, filename) {
  // this modifies module.exports
  oldJsonRequire(module, filename);

  if(! module.exports) {
    throw new Error('Something went terribly wrong.');
  }

  return deepFreeze(module.exports);
};
