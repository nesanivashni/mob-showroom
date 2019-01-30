import DS from 'ember-data';

export default DS.Model.extend({
  //id:DS.attr('number'),
  brand:DS.attr('string'),
  img:DS.attr('string'),
  mob_ver: DS.attr('number'),
  //type: DS.attr('string'),
  rate:DS.attr('number'),
  rating:DS.attr('number'),
  launch_date:DS.attr('string'),
  description: DS.attr('string'),
  //mob_list_arr: DS.attr()
});
