import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | deletion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:deletion');
    assert.ok(route);
  });
});
