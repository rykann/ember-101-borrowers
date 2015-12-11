import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this._super();
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
