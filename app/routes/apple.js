import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return[{
      id: 'mob-3',
      brand:'Apple',
      mob_ver:'I7',
      type: 'IoS',
      rate:'50,000',
      rating: 9,
      description: 'Apple - Name is enough.'
    }]
  }
});
