(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .directive('navLateral', navLateral);
  
    /** @ngInject */
    function navLateral() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/nav-lateral/nav-lateral.html',
        controller: 'NavbarControllerMaster'
      };
    }
  
  })();
  


  