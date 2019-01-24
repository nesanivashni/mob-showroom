import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return [{
      id: 'mob-2',
      brand: 'Nokia',
      mob_ver: '1100',
      type: 'basic',
      rate:'3000',
      rating:8,
      description: 'Strongest mobile'
  }]
}
});
