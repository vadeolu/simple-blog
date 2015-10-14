import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      data: this.store.findAll('post')
    }
  },
  actions: {
    delete(post) {
      post.destroyRecord();
      return false;
    },
    edit(post) {
      this.transitionTo('posts.edit', post);
      return false;
    }
  }
});
