console.time('Regular require');
require('./schema1');
console.timeEnd('Regular require');

require('./');
console.time('Deep-frozen require');
require('./schema2');
console.timeEnd('Deep-frozen require');
