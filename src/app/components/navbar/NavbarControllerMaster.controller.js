(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .controller('NavbarControllerMaster', NavbarControllerMaster);
  
    /** @ngInject */
    function NavbarControllerMaster($timeout, webDevTec, toastr, $rootScope, $scope,$window,ServiceAuth) {
      var vm = $scope;  
      var rs = $rootScope;

    //   $("#menu-toggle").click(function(e) {
    //     console.log("venga");
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    //  });
    //  $("#menu-toggle-2").click(function(e) {
      
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled-2");
    //     $('#menu ul').hide();
    //     console.log("abrir menu lateral");
    //  });
       //   switch($location.path()){
    //     case '/es':
    //         rs.$emit('languaje', 'es');
    //         vm.languaje = 'es'
    //     break;
    //     case '/en':
    //         rs.$emit('languaje', 'en');
    //         vm.languaje = 'en'
    //     break;
    // }
  
    
  
    // vm.changeLanguaje = function(x){
    //   console.log("Español");
    //     switch($location.path()){
    //         case '/es':
    //             $location.path('/en');
    //             console.log("Español");
                
    //         break;
    //         case '/en':
    //             $location.path('/es');
    //             console.log("Ingles");
    //         break;
    //     }
    // }

    //   $("#menu-toggle").click(function(e) {
    //     console.log("venga");
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    //  });
    //  $("#menu-toggle-2").click(function(e) {
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled-2");
    //     $('#menu ul').hide();
    //  });
    
    
      // $(".en").hide();
      // $(".de").show();
      // $( "#de" ).addClass("active");
      // $( "#en" ).removeClass("active");

      // ServiceAuth.lenguajeCredentials($scope.lenguage);

      vm.res = rs.lenguage.currentUser;
      console.log(vm.res);
      
      // if (rs.lenguage.currentUser != undefined) {
      //   vm.res = rs.lenguage.currentUser.lenguaje;
      //   console.log(vm.res);
      //   switch (vm.res) {
      //     case 0:
      //         console.log("español");
      //         $(".en").hide();
      //         $(".de").show();
      //         $( "#español" ).addClass("resaltar");
      //         $( "#ingles" ).removeClass("resaltar");
      //       break;
      //       case 1:
      //         console.log("ingles");
      //         $(".de").hide();
      //         $(".en").show();
      //         $( "#ingles" ).addClass("resaltar");
      //         $( "#español" ).removeClass("resaltar");
      //       break;
      //   }
      // }else{
      //   $(".en").hide();
      //   $(".de").show();
      //   ServiceAuth.lenguajeCredentials(0);
      //   $( "#español" ).addClass("resaltar");
      //   $( "#ingles" ).removeClass("resaltar");
      // }
      
      
      
      // if(vm.res != undefined){
      //   vm.resultado = vm.res.lenguaje;
      // }else{
      //   vm.resultado = 0;
      // }
      // console.log(vm.resultado);
      
      
      
            
            //  console.log(vm.active);
            // if (vm.resultado == 0) {
            //   $(document).ready(function() {
            //     $(".en").hide();
            //   $(".de").show();
            //   // $( "#de" ).addClass("active");
            //   // $( "#en" ).removeClass("active");
            // });
            // }
            // if (vm.resultado == 1) {
            //   $(document).ready(function() {
            //     $(".de").hide();
            //   $(".en").show();
            //   // $( "#en" ).addClass("active");
            //   // $( "#de" ).removeClass("active");
            // });
            // }
       
    //  rs.$on('views', function(e, data){
    //     console.log(data);
    // })

      //anterior

      // vm.res = rs.lenguage.currentUser.lenguaje;
      // console.log(vm.res);
      
            
      //       //  console.log(vm.active);
      //       if (vm.res == 0) {
      //         $(document).ready(function() {
      //           $(".en").hide();
      //         $(".de").show();
      //         $( "#de" ).addClass("active");
      //         $( "#en" ).removeClass("active");
      //       });
      //       }
      //       if (vm.res == 1) {
      //         $(document).ready(function() {
      //           $(".de").hide();
      //         $(".en").show();
      //         $( "#en" ).addClass("active");
      //         $( "#de" ).removeClass("active");
      //       });
      //       }
       
    //  rs.$on('views', function(e, data){
    //     console.log(data);
        
    // })

    vm.logout= function(){
      ServiceAuth.ClearCredentials();
      $window.location.reload();
  }

     function initMenu() {
        $('#menu ul').hide();
        $('#menu ul').children('.current').parent().show();
        //$('#menu ul:first').show();
        $('#menu li a').click(
           function() {
              var checkElement = $(this).next();
              if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                 return false;
              }
              if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                 $('#menu ul:visible').slideUp('normal');
                 checkElement.slideDown('normal');
                 return false;
              }
           }
        );
     }
     $(document).ready(function() {
        initMenu();
     });



/***********************************************************Register */
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
"sexo": "Hombre",
}, {
"sexo": "Mujer",
}];

vm.datatable = [];

     angular.forEach(vm.radioOptions, function(x){
         
         vm.datatable.push({
             genero : x.sexo,                 
         })
         // console.log(vm.datatable);
     })

vm.selectOptions = [{
"estadocivil": "Soltero(a)",
}, {
"estadocivil": "Casado(a)",
}, {
"estadocivil": "Viudo(a)",
}, {
"estadocivil": "Divorciado(a)",
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
"profesion": "Preparatoria",
}, {
"profesion": "Universidad",
}, {
"profesion": "Maestria",
}, {
"profesion": "Doctorado",
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
  