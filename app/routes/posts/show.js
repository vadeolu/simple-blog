import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(post) {
      post.destroyRecord();
      this.transitionTo('posts');
    },
    edit(post) {
      this.transitionTo('posts.edit', post);
      return false;
    }
  }
});
