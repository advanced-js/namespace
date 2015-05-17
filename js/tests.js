QUnit.test("works for two-level namespaces", function(assert) {
  namespace('drawingpad.pencil');
  assert.deepEqual(drawingpad, {
    pencil: {}
  });
});


  namespace('drawingpad.pencil');
 
