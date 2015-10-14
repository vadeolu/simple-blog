import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(post) {
      this.sendAction('removePost', post);
    },
    editPost(post) {
      this.sendAction('modifyPost', post);
    }
  }
});
