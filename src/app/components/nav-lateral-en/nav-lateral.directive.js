(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .directive('navLateralen', navLateralen);
  
    /** @ngInject */
    function navLateralen() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/nav-lateral-en/nav-lateral.html',
        controller: 'NavbarControllerMaster'
      };
    }
  
  })();