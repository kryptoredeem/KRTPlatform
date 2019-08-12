(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .directive('navDown', navDown);
  
    /** @ngInject */
    function navDown() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/nav-down/navDown.html',
        controller: 'NavDownController'
      };
    }
  
  })();
  


  