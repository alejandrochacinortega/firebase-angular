angular.module('app', [
  'ui.router', 'firebase'
])


.config([
  '$stateProvider',
  '$urlRouterProvider',

  function ($stateProvider,
            $urlRouterProvider) {

    $urlRouterProvider.otherwise('login');
    //--------------------------------------------------------------- authConfig/login routing

    $stateProvider.state('home', {
        url        : '/home',
        template: '<home></home>'
      }
    );

    $stateProvider.state('login', {
        url        : '/login',
        template: '<login></login>'
      }
    );

    //-------------------------------------------------------------------------------------------
  }
]);