import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
    mob_id: 1,
    brand:'Samsung',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJUpo-hsl9gnEmYpGpqotJRmPDt5mrb9I7rRfN2hL1uZV4rSeaw',
    mob_ver: '7',
    type: 'Android',
    rate:'10,000',
    rating:5,
    description: 'One of the ancient brands.',
    cam_avl:'present',
    pixel:2
  },
  {
    mob_id: 2,
    brand:'Samsung',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJd3109p4alCbIHoTcNfYfBu6sNj-9BSYyaYhgqhZw4j2cfXv',
    mob_ver: '8',
    type: 'Android',
    rate:'30,000',
    rating:6,
    description: 'One of the modernised ancient brands.',
    cam_avl:'present',
    pixel:3
  }];
  }
});
