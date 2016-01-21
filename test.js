import test from 'ava';

require('./');

test('Deep Freezes Objects', t => {
  var json = require('./testjson');

  const modifyJson = json => {
    json.what = 'WUT';
    json.nested.this = 'helloooooo';
  };

  t.throws(modifyJson.bind(json));
});

test('Propagates error for requiring non-existing json', t => {
  t.throws(require.bind('./nonexistantjson'));
});
