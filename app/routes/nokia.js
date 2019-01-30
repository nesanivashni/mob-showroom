import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return {
      mob_id: 3,
      brand: 'Nokia',
      img:'https://images.ctfassets.net/wcfotm6rrl7u/5zMaxqvVlu26yymcmiae4E/935bacff5bf8687866045426e393d011/Nokia_105-Hero.png?fm=png',
      mob_ver: '1100',
      type: 'basic',
      rate:'3000',
      launch_date:'13.05.1998',
      rating:8,
      description: 'Strongest mobile',
      cam_pres:'-'
  };
}
});
