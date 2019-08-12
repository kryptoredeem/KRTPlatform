(function() {
  'use strict';

  angular
    .module('kriptoRedeem')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'NavbarController'
    };
  }

})();


