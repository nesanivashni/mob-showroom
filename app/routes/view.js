import Route from '@ember/routing/route';

export default Route.extend({
  /*actions:
  {
    viewValues() {
        let mb= this.store.peekAll('mobiles');
        console.log(mb);*/
        /*this.store.findRecord('mobiles', this.get('controller').get('mob-id')).then(function(mobiles) {
            console.log(mobiles.get('brand'));*/
          /*let mb=this.store.peekRecord('mobiles', this.get('controller').get('mob-id'));//this.get('controller').get('mob-id'));
          */
          //let mb= this.store.peekRecord('mobiles').get('isLoaded');  console.log(mb);
        //mb=DS.get('defaultStore.defaultTransaction.records.list').filterProperty('isLoaded', true)
        /*for(const val of mb)
            console.log(val);
            /*for(let i=0;i<mb.length;i++)
                 console.log(mb[i]);*/
      //});
    //}
  //}
  /*<h2>VIEW</h2>
  <div>
  <label>Model Id</label>
  {{input type="text" placeholder="Enter id" value=mob-id}}
  <br>
  </div>*/
  actions:
  {
    delete()
    {
      this.transitionTo('deletion');
    },
    update()
    {
      this.transitionTo('updation');
    }
  }
});
