import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log("articles index model hook: " + this.modelFor('friends/show').get('articles'));
    return this.modelFor('friends/show').get('articles');
  },
  actions: {
    save(model) {
      model.save();
      return false;
    }
  }
});
