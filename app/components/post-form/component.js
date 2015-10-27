import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    writePost(post) {
      this.sendAction('writePost', post);
    }
  }
});
