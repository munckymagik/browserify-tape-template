var lib = require('../js/lib');
var test = require('tape');

test('lib.example_func', function(t) {
  t.plan(1);
  t.equal(lib.example_func(), 42, 'it should return 42');
  t.end();
});
