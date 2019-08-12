(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .controller('NavbarController', NavbarController);
  
    /** @ngInject */
    function NavbarController($timeout, webDevTec, toastr, $rootScope) {
        var rs = $rootScope;
      $("#menu-toggle").click(function(e) {
        console.log("venga");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
     });
     $(document).ready(function(){

      $("#menu-toggle-2").click(function(e) {
      
        e.preventDefault();
        e.stopImmediatePropagation();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
        console.log(e);
     });
     
    })
    
     
    }
  })();
  