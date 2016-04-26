angular
  .module('app')
  .factory('Auth', Auth);

Auth.$inject = ['$firebaseAuth', 'rootRef'];

/* @ngInject */
function Auth($firebaseAuth, rootRef) {
  var service = {
    auth: auth
  };

  return service;

  ////////////////

  function auth() {
    return $firebaseAuth(rootRef)
  }


}
