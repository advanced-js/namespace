QUnit.test("works for two-level namespaces", function(assert) {
  namespace('app.models');
  assert.deepEqual(app, {
    models: {}
  });
});

QUnit.test("works for three-level namespaces", function(assert) {
  namespace('foo.lib.external');
  assert.deepEqual(foo, {
    lib: {
      external: {}
    }
  });
});

QUnit.test("doesn't squash the namespace if it exists already", function(assert) {
  var User = function(){};
  app.models.User = User;

  namespace('app.models');
  namespace('app.views');

  assert.deepEqual(app, {
    models: {
      User: User
    },
    views: {}
  });
});
