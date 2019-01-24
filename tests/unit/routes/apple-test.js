import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | apple', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:apple');
    assert.ok(route);
  });
});
