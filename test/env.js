var test = require('tape');

test('Should be running in a browser environment', function(t) {
  t.plan(1);
  t.ok(typeof window !== 'undefined', 'window should be defined');
  t.end();
});
