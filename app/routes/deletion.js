import Route from '@ember/routing/route';

export default Route.extend({
  actions:
  {
    deletearrival()
    {
      var mb=this.get('controller').get('mobid');
      //console.log(mb);
      var dltrec = this.store.peekRecord('mobiles', mb);
      //dltrec.set('model.rate',this.get('controller').set(mobrt))
      //dltrec.set('',this.get('controller').set('mobnm'));
      console.log(dltrec);
      this.store.unloadRecord(dltrec);
      //dltrec.deleteRecord();
      console.log(dltrec.isDeleted);
      /*store.findRecord('post', 1).then(function(post) {
  store.unloadRecord(post);
});*/
      /*this.store.peekRecord('mobiles', mb).then(function(mobiles) {
        this.store.unloadRecord(mobiles)
      })*/
      //dltrec.save();
      //post.deleteRecord();  <label>Mobile Rate</label>
        /*  {{input type="text" placeholder="Enter mobile-rate" value=mobrt}}
        <br>*/
    }
  }
});
