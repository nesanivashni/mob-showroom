import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 4,
      type: 'mobiles',
      brand:'Apple',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhj7Y7pdAxSgAYxluEAZxNbHelNNw6no45weoSy9KK2YPaLYiFZg',
      mob_ver:'I7',
      rate:'50,000',
      rating: 9,
      description: 'Apple - Name is enough.',
      cam_avl:'present',
      pixel:5
  },
  {
     id: 5,
     type: 'mobiles',
     brand:'Apple',
     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ltIrLEYuf0TesMgQBnHwdhBQkX9KB6V2NWGHsE9D34R7J2rE',
     mob_ver:'I9',
     rate:'80,000',
     rating: 8,
     description: 'Apple - The Name is enough.',
     cam_avl:'present',
     pixel:8
   }];
  }
});
