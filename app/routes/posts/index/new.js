import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },
  actions: {
   newPost(newPostContent) {
      newPostContent.set('createdDate', new Date());
      newPostContent.save();
   }
  }
});
