import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {path: ''}, function() {
    this.route('index', {path: ''}, function(){
      this.route('new', {path: ''});
    });
    this.route('show', {
      path: ':post_id'
    });

    this.route('edit', {
      path: ':post_id/edit'
    });
  });
});

export default Router;
