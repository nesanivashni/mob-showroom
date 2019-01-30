import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    updatearrival()
    {
      var mbid=this.get('controller').get('mobid');
      var mbrt=this.get('controller').get('mobrt');
      var dltrec = this.store.peekRecord('mobiles', mbid);
      //dltrec.set('model.rate',this.get('controller').set(mobrt))
      //dltrec.set('',this.get('controller').set('mobnm'));
      console.log(dltrec);
      console.log(mbrt);
      dltrec.set('rate',mbrt);
      alert('Mobile Rate Updated successfully as '+mbrt);
      //this.store.unloadRecord(dltrec);
      //dltrec.deleteRecord();
      //console.log(dltrec.isDeleted);
    }
  }
});
