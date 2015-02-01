(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('home', [
      'ui.router'
    ]);

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl as home'
      })
      .state('test-four', {
        url: '/test-four',
        templateUrl: 'home/test-four.tpl.html',
        controller: 'TestFourCtrl as testFour'
      });
  }

})();
