import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  resetController: function(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      // Because we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the backend.
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  },
  actions: {
    save: function() {
      var model = this.modelFor('articles/new');
      model.save().then(() => {
        this.transitionTo('articles');
      });
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});
