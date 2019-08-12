(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .controller('MiniController', MiniController);
  
    /** @ngInject */
    function MiniController($timeout, webDevTec, toastr, $scope, ServiceAuth,$window,  $rootScope, $location) {
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
     
      var vm =$scope;
      var rs = $rootScope;
      vm.access = $rootScope.globals.currentUser;
      console.log(vm.access);
      vm.stockRetailer = $rootScope.almacenamiento.currentUser;
      console.log(vm.stockRetailer);

      if (vm.stockRetailer != undefined) {
        
        vm.userNameRegister = vm.stockRetailer.nombre;
        console.log(vm.userNameRegister);
        
      }else{
        vm.userNameRegister = "";
      }

      switch($location.path()){
        case '/widgetes':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/widgeten':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
        case '/mini1':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/mini1en':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
        case '/hreferencia':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/hreferenciaen':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
        case '/encuesta':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/encuestaen':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
        case '/encuestaMini':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/encuestaMinien':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
        case '/testimonios':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/testimoniosen':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
        case '/loyalty':
            if(vm.access != undefined){
            
            }else{
              $location.path('/es');
            }
        break;
        case '/loyaltyen':
            if(vm.access != undefined){
            
            }else{
              $location.path('/en');
            }
        break;
          }

      vm.logout= function(){
        ServiceAuth.ClearCredentials();
        $window.location.reload();
    }


    $(document).ready(function(){
      $("#SelectRegister").click(function(){
        $('#SelectButton').hide();
        $('#LoginForm').hide();  
        $('#RegisterForm').show();
        
        $('#L-Username').val('');
        $('#L-Email').val('');
        $('#L-Password').val('');
        $('#AcceptRelogin').prop('checked', false);
      });	
    });
    // function openRegister() {
    //   $('#SelectButton').hide();
    //   $('#LoginForm').hide();  
    //   $('#RegisterForm').show();
      
    //   $('#L-Username').val('');
    //   $('#L-Email').val('');
    //   $('#L-Password').val('');
    //   $('#AcceptRelogin').prop('checked', false);
    // }
    
    // function openLogin() {
    //   $('#SelectButton').hide();
    //   $('#RegisterForm').hide();  
    //   $('#LoginForm').show();
      
    //   $('#Username').val('');
    //   $('#Email').val('');
    //   $('#Password').val('');
    //   $('#C-Password').val('');
    //   $('#AcceptNewsletter').prop('checked', false);
    //   $('#AcceptPolicy').prop('checked', false);
    // }
    
    // function backBegin() {
    //   $('#SelectButton').show();
    //   $('#RegisterForm').hide();
    //   $('#LoginForm').hide();
      
    //   $('#Username').val('');
    //   $('#Email').val('');
    //   $('#Password').val('');
    //   $('#C-Password').val('');
    //   $('#AcceptNewsletter').prop('checked', false);
    //   $('#AcceptPolicy').prop('checked', false);
    //   $('#L-Username').val('');
    //   $('#L-Email').val('');
    //   $('#L-Password').val('');
    //   $('#AcceptRelogin').prop('checked', false);
    // }
    $(document).ready(function(){
      $(".backBtn").click(function(){
        $('#SelectButton').show();
      $('#RegisterForm').hide();
      $('#LoginForm').hide();
      
      $('#Username').val('');
      $('#Email').val('');
      $('#Password').val('');
      $('#C-Password').val('');
      $('#AcceptNewsletter').prop('checked', false);
      $('#AcceptPolicy').prop('checked', false);
      $('#L-Username').val('');
      $('#L-Email').val('');
      $('#L-Password').val('');
      $('#AcceptRelogin').prop('checked', false);
      });	
    });
    

    /* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
  $(this).children('select').css('display', 'none');
  
  var $current = $(this);
  
  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));
      
      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));
      
      return;
    }
    
    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();
  
  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');
  
  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});



vm.radioOptions = [{
  "sexo": "Man",
}, {
 "sexo": "Woman",
}];

vm.datatable = [];

        angular.forEach(vm.radioOptions, function(x){
            
            vm.datatable.push({
                genero : x.sexo,                 
            })
            // console.log(vm.datatable);
        })

vm.selectOptions = [{
  "estadocivil": "single",
}, {
  "estadocivil": "married",
}, {
  "estadocivil": "widower",
}, {
  "estadocivil": "divorced",
}];

// console.log(vm.selectOptions);

vm.dataSelect = [];

        angular.forEach(vm.selectOptions, function(x){
            
          vm.dataSelect.push({
                rayos : x.estadocivil               
            })
            // console.log(vm.dataSelect);
            
        })

vm.selectProfesion = [{
  "profesion": "high school",
}, {
  "profesion": "college",
}, {
  "profesion": "master's degree",
}, {
  "profesion": "doctorate",
}];

// console.log(vm.selectOptions);

vm.dataSelectProfesion = [];

        angular.forEach(vm.selectProfesion, function(x){
            
          vm.dataSelectProfesion.push({
            educational : x.profesion               
            })
            // console.log(vm.dataSelect);
            
        })
vm.registerRetailer= function(){
  console.log(vm.register);
  rs.$emit('complementoRegister', vm.register);
}


    }
  })();
  