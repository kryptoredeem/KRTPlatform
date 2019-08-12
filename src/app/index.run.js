(function() {
  'use strict';

  angular
    .module('kriptoRedeem')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
