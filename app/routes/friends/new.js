import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },
  activate: function() {
    console.log('----- activate hook called -----');
  },
  deactivate: function() {
    console.log('----- deactivate hook called -----');
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
    save() {
      console.log('+-- save action bubbled up to friends new route');
      return true;
    },
    cancel() {
      console.log('+-- cancel action bubbled up to friends new route');
      return true;
    }
  }
});
