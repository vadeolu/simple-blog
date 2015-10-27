import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy'],
  sortBy: ['createdAt:asc'],
  sortAscending: true,

  sortOrder: function() {
    return !!this.get('sortAscending') ?  ":asc" : ":desc";
  }.property('sortAscending'),

  sortedData: Ember.computed.sort('model', 'sortBy'),

  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', [fieldName + this.get('sortOrder')]);
      this.toggleProperty('sortAscending');
    }
  }
});
