(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .directive('acmeNavbaren', acmeNavbaren);
  
    /** @ngInject */
    function acmeNavbaren() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/navbaren/navbar.html',
        controller: 'NavbarController'
      };
    }
  
  })();
  
  
  