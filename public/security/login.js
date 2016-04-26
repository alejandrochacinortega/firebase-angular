angular
  .module('app')
  .component('login', {
    templateUrl: '/security/login.html',
    controller: function (Auth, $location, $state) {


      this.anonLogin = function () {
        Auth.auth().$authAnonymously()
          .then(function() {
            console.log('Anonymous login');
            /*$location.path('/home');*/
            $state.go('home')
          })
          .catch((function (err) {
            this.errorMessage = err.code;
        }).bind(this))
      }
    }
  });

