import test from 'ava';

require('./');

test('Deep freezes objects', t => {
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

test('Does not deep-freeze any requires() in a node_modules folder', t => {
  var test = require('deep-freeze/package');

  test.whatever = 1;
  let x = {
    nested: {
      more: {
        things: {
          a: 1,
          b: 2
        }
      }
    }
  };

  test.x = x;

  t.ok(test.whatever === 1);
  t.same(test.x, x);
});
