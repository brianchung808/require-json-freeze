import test from 'ava';

require('./');

test('Deep Freezes Objects', t => {
  var json = require('./testjson');

  const modifyTop = json => {
    json.what = 'WUT';
  };

  const modifyNested = json => {
    json.nested.this = 'helloooooo';
  };

  t.throws(modifyTop.bind(null, json));
  t.throws(modifyNested.bind(null, json));
});

test('Propagates error for requiring non-existing json', t => {
  t.throws(require.bind(require, './nonexistantjson'));
});
