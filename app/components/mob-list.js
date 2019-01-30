import Component from '@ember/component';
//import EmberObject, { computed } from '@ember/object';

/*const Mobile = EmberObject.extend({
  // these will be supplied by `create`
  brand: null,
  version: null,

  mobName: computed('brand', 'version', function() {
    return `${this.brand} ${this.version}`;
  })
});

let mobileIns = Mobile.create({
  /*brand: this.get('list.brand'),
  version: this.get('list.version')
  brand:'apple',
  version:'orange'
});
console.log(mobileIns.mobName);*/

export default Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
