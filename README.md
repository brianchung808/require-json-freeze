# Usage
Works like `require('babel-register')`

``` js
require('require-json-freeze');

var json = require('some-json');

// Throws error if in strict mode
json.whatever = 'herro';
```
