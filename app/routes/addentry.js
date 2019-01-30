import Route from '@ember/routing/route';
import DS from 'ember-data';

export default Route.extend({
  /*model() {
    return this.store.createRecord('mobiles');
  },*/
  actions: {
    insertValues() {
    this.store.createRecord('mobiles', {
        /*id:this.get('this',mob-id);*/
         id:this.get('controller').get('mob-id'),
         /*mob_id:this.controller.get('mobiles.mob-id');
         brand:this.controller.get('mobiles.brnd'),
         img:this.controller.get('mobiles.lnk'),
         mob_ver:this.controller.get('mobiles.name'),
         type:this.controller.get('mobiles.type'),
         rate:this.controller.get('mobiles.rate'),
         rating:this.controller.get('mobiles.rating'),
         launch_date:this.controller.get('mobiles.date'),
         description:this.controller.get('mobiles.desc')*/
         brand:this.get('controller').get('brnd'),
         img:this.get('controller').get('lnk'),
         mob_ver:this.get('controller').get('name'),
         type:this.get('controller').get('type'),
         rate:this.get('controller').get('rate'),
         rating:this.get('controller').get('rating'),
         launch_date:this.get('controller').get('date'),
         description:this.get('controller').get('desc')
      });
      //alert(mob_id);
      // let tempObj = this.store.peekRecord('mobiles', '1');
      // console.log(tempObj);
      //  mobile.save();
       // console.log("After save");
       // let tempObj1 = this.store.peekRecord('mobiles', '1');
       // console.log(tempObj1);
       // alert('values inserted successfully');
    }
  }
});
