import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('samsung');
  this.route('nokia');
  this.route('apple');
  this.route('addentry');
  this.route('view');
  this.route('deletion');
  this.route('updation');
});

export default Router;
