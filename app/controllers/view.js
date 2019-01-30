import Controller from '@ember/controller';

export default Controller.extend({
  /*init() {
    this._super(...arguments);
    this.mob_list_arr= [];
  },*/
  // mob_list_arr: '',
  actions:
  {
    viewValues() {
        let mb= this.store.peekAll('mobiles');
        // console.log(mb);
        this.set('mob_list_arr', mb);
        console.log(mb);
        console.log(this.mob_list_arr);

        /*let mb = this.store.peekAll('mobiles');
        // this.get('model').set('mob_list_arr' , mb);
        this.set('model.mob_list_arr' , mb);
        //console.log(this.mob_list_arr);*/
     }
  }
});
