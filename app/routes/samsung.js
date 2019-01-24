import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return [{
    id: 'mob-1',
    brand:'Samsung',
    mob_ver: 'J7',
    type: 'Android',
    rate:'10,000',
    rating:5,
    description: 'One of the ancient brands.'
  }]
  }
});
