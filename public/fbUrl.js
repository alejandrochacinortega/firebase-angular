angular
  .module('app')
  .constant('FirebaseUrl', 'https://expense-tracker-angu.firebaseio.com/')
  .service('rootRef', ['FirebaseUrl', Firebase]);


