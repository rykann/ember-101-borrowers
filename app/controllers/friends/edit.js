import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this._super();
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
