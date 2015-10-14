import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
   editPost(editedPost) {
     editedPost.save();
     this.transitionTo('posts');
   }
  }
});
