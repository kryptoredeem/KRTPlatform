(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .controller('LoginController', LoginController);
  
    /** @ngInject */
    function LoginController($location, ServiceAuth,$scope,$log,$rootScope,toastr,$cookies,$http,$window,FlashService) {
  
    var vm = $scope;
    var rs = $rootScope;
  
  //login****************************************************************************************************
        
  
        vm.access = $rootScope.globals.currentUser;
        console.log(vm.access);
        
  
        vm.username='';
        vm.password='';
        
        vm.stockRetailer = $rootScope.almacenamiento.currentUser;
        console.log(vm.stockRetailer);
  
        // rs.$on('usuario', function(e, data){
        //   var usuario = data;
        //   console.log(usuario);
        //   // $rootScope.datosRegister = usuario;
        //   // console.log(usuario);
        //   // console.log(rs.datosRegister.username);
        //   // ServiceAuth.SetCredentials(rs.datosRegister.username, rs.datosRegister.password);
        //   //     console.log("ahuevo");
        rs.$on('complementoRegister', function(e, data){
          var register = data;
          const returnedTarget = Object.assign(vm.stockRetailer, register);//vm.stockRetailer
          console.log(returnedTarget);
  
          ServiceAuth.registerRetailer(returnedTarget, function (response) {//returnedTarget
            if (response.success) {
              
            } else {
                
            }
        });
  
        })
      // })
  
      
      
        
  
        vm.login = function(){
          vm.dataLoading = true;
          ServiceAuth.LoginTemp(vm.username, vm.password, function (response) {
                  if (response.success) {
                    ServiceAuth.SetCredentials(vm.username, vm.password);
                      $location.path('/widget');
                  } else {
                      FlashService.Error(response.message);
                      vm.dataLoading = false;
                  }
              });
        }
  
        if(vm.access != undefined){
          switch(vm.access.role){
              // case 'admin':
              //     $location.path('/admin')
              // break;
              case 'usuario':
                  $location.path('/widget');
                               
              break;
              // case 'visitor':
              //     $location.path('/visitor')
              // break;
          }
  
          // vm.actions = {
          //     login : false,
          //     logout : true,
          //     filter : true
          // }
      }
      else{
          // vm.actions = {
          //     login : true,
          //     logout : false,
          //     filter : false
          // }
          $location.path('/')
      }
      vm.logout= function(){
        ServiceAuth.ClearCredentials();
        $window.location.reload();
    }
  
  
  //   vm.active = {
  //     table : 'active',
  //     square : ''
  // }
  // rs.$emit('views', vm.active);
  //Register
  // vmt.register = register;
   vm.register= function(){
  
    if (vm.user.password == vm.user.confirmpassword ) {
       // vm.dataLoading = true;
    ServiceAuth.Create(vm.user)
    .then(function (response) {
      console.log(response);
        if (response.success) {
            FlashService.Success('Registration successful', true);
            // $location.path('/login');
        } else {
            FlashService.Error(response.message);
            // vm.dataLoading = false;
        }
    });
    } else {
      toastr.error('Passwords do not match');
    }
    // console.log("puto");
    
   
  }
  
  
  
  
  /* Creator of this Jquery https://codepen.io/cssjockey/pen/jGzuK */
  $(document).ready(function(){
      $('ul.tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');
  
          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');
  
          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
      })
  })
  
  
  
  }
  })();
  