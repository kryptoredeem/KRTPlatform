// import { emit } from "cluster";

(function() {
  'use strict';

  angular
    .module('kriptoRedeem')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location, ServiceAuth,$scope,$rootScope,toastr,$window,FlashService) {

    var vm = $scope;
    var rs = $rootScope;
    
    // $rootScope.lenguage = 1;
    // $scope.lenguageEsp = false;
    // $(".de").hide();
    // $(".en").show();
    // $(".en").hide();
    // $(".de").show();
    // console.log($rootScope.lenguage);
    // console.log($scope.lenguageEsp);
    // $( "#de" ).addClass("active");
    // $( "#en" ).removeClass("active");

    

    // $( "#de" ).click(function() {
      //  $(".en").hide();
      //  $(".de").show();
    //   // $( "#de" ).addClass("active");
    //   // $( "#en" ).removeClass("active");
    //   $scope.lenguage = 0;
    //   ServiceAuth.lenguajeCredentials($scope.lenguage);
    //   // $rootScope.$emit('lenguaje', $rootScope.lenguage);
    //   //  console.log($rootScope.lenguage);
    // });
    // $( "#en" ).click(function() {
    //   $(".de").hide();
    //   $(".en").show();
    //   // $( "#en" ).addClass("active");
    //   // $( "#de" ).removeClass("active");
    //   $scope.lenguage = 1;
    //   ServiceAuth.lenguajeCredentials($scope.lenguage);
    //   // $rootScope.$emit('lenguaje', $rootScope.lenguage);
    //   // console.log($rootScope.lenguage);
    // });

    // console.log($rootScope.lenguage);
  //  if ($rootScope.lenguage == 0) {
  //   $(document).ready(function() {
  //     $(".en").hide();
  //   $(".de").show();
  //   $( "#de" ).addClass("active");
  //   $( "#en" ).removeClass("active");
  //  });
    
  //   console.log($rootScope.lenguage);
  //  }
  //  if ($rootScope.lenguage == 1) {
  //   $(document).ready(function() {
  //     $(".de").hide();
  //   $(".en").show();
  //   $( "#en" ).addClass("active");
  //   $( "#de" ).removeClass("active");
  //  });
  //   console.log($rootScope.lenguage);
  // }

    //anterior
    
    // $(".en").hide();
    // $(".de").show();
    
    // $( "#de" ).addClass("active");
    // $( "#en" ).removeClass("active");

    // $( "#de" ).click(function() {
    //   $(".en").hide();
    //   $(".de").show();
    //   $( "#de" ).addClass("active");
    //   $( "#en" ).removeClass("active");
    //   $scope.lenguage = 0;
    //   ServiceAuth.lenguajeCredentials($scope.lenguage);
      
    // });
    // $( "#en" ).click(function() {
    //   $(".de").hide();
    //   $(".en").show();
    //   $( "#en" ).addClass("active");
    //   $( "#de" ).removeClass("active");
    //   $scope.lenguage = 1;
    //   ServiceAuth.lenguajeCredentials($scope.lenguage);
      
    // });
  
    // $(".en").hide();
    // $(".de").show();
    $( "#español" ).addClass("resaltar");
    $( "#ingles" ).addClass("resaltar");
    // vm.idioma = 0;

    // $( "#en" ).removeClass("active");
    
    // $scope.changeLanguaje = function(x){
      
    //   $(".en").show();
    //   ServiceAuth.ClearLenguage();
    //   vm.idioma = x;
    //   ServiceAuth.lenguajeCredentials(vm.idioma);
    //   // rs.$emit('idioma', vm.idioma);
    //   console.log(vm.idioma);
    //     switch(x){
    //         case 0:
    //           console.log("español");
    //           $(".en").hide();
    //           $(".de").show();
    //           $( "#español" ).addClass("resaltar");
    //           $( "#ingles" ).removeClass("resaltar");
    //         break;
    //         case 1:
    //           console.log("ingles");
    //           $(".en").show();
    //           $(".de").hide();
              
    //           $( "#ingles" ).addClass("resaltar");
    //           $( "#español" ).removeClass("resaltar");
    //         break;
    //     }
    // }

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

    vm.changeLanguaje = function(x){
      console.log(x);
      // rs.idioma = x;
      
      switch(x){
          case '/es':
              rs.$emit('languaje', x);
              $location.path('/es')
          break;
          case '/en':
              rs.$emit('languaje', x);
              $location.path('/en')
          break;
      }
  }
  
  
    // !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    var intervalHandle;
    var secondsRemaining;
    var totalsegundosd;
    var totalsegundosh;
    var totalsegundosm;
    
    var dias = 0;
    var horas = 0;
    var minutos = Math.floor((Math.random() * 30) + 7);
    
    function tick() {
      var timeDisplay = document.getElementById("time");
      

      // var d = Math.floor(totalsegundosd / 86400);
      // var h = Math.floor(totalsegundosh / 3600);
      var m = Math.floor(totalsegundosm / 60);
      var s = totalsegundosm - (m * 60);

      if (m == -1) {
        m = 59;
        totalsegundosm=3600;
        horas--;
      }
      if (horas == -1) {
        horas = 23;
        m = 59;
        totalsegundosm=3600;
        dias--;
      }
      if (dias == 0 && horas == 0 && m == 0 && totalsegundosm==0) {
        // clearInterval(intervalHandle);
        //  resetPage();
        console.log("detente tiempo");
        // var reset = 7;
        // dias = 0;
        // horas = 0;
        // m = 7;
        totalsegundosm = Math.floor((Math.random() * 420) + 60);
        // totalsegundosm=420; //7 minutos
      }
     
      
      if(m < 10) {
        m = "0" + m;
      }
      
      if(s < 10) {
        s = "0" + s;
      }
      
      // var message = days + ":" + hours + ":" + min + ":" + sec;
      var message = dias + ":" + horas + ":" + m + ":" + s;
      timeDisplay.innerHTML = message;
      
     
      totalsegundosm--;
    }
    
    function startCountdown() {
      
      
      //var minutes = 25;//document.getElementById("minutes").value;
      
       //check if it is a number
      // totalsegundosd =dias * 86400;
      // totalsegundosh =horas * 3600;
      totalsegundosm =minutos * 60;
      //get the seconds
      //secondsRemaining = minutes * 60;
      //reoccuring function
      intervalHandle = setInterval(tick, 1000);
      //hide input form once running
      
    }
    //refresh page with button
    
    window.onload = function() {
      //break button
      startCountdown();
      
     
    };
    
  

$('.menu-toggle').click(function() {
  $('.contenedor').toggleClass('ancho-min');
  if (window.matchMedia('(min-width: 1017px)').matches) {
		/* Changes when we reach the min-width  */
			

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
      if (!$('.contenedor').hasClass("ancho-min")) {
			  // $('.main').css('margin-left', '250px');
      }  
      else {
        // $('.main').css('margin-left', '70px');
      }
		}
  
});

$('.menu-boton').click(function() {
  $('.menu-nav-seg').toggleClass('open-menu-nav-seg');
  $('.menu-boton i').toggleClass('fa-caret-right');
  $('.menu-boton i').toggleClass('fa-caret-down');
});

(function($) {
	
	/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
	*/
	
	function mediaSize() { 
		/* Set the matchMedia  992 + 250*/
		if (window.matchMedia('(min-width: 1017px)').matches) {
		/* Changes when we reach the min-width  */
			$('.contenedor').removeClass('ancho-min');
      // $('.sidebar').css('position', 'static');
      // $('.main').css('margin-left', '0');

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$('.contenedor').addClass('ancho-min');
      // $('.sidebar').css('position', 'absolute');
      // $('.main').css('margin-left', '70px');
		}
	};
	
	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);

//showandhide
$(document).ready(function(){
  $("#pruebahideshow1").show("slow");
  $("#pruebahideshow2").hide();
  $("#pruebahideshow3").hide();
  $("#pruebahideshow4").hide();
	$("#botonMenuSecundario1").click(function(){
		$("#pruebahideshow1").show("slow");
  $("#pruebahideshow2").hide("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").hide("slow");
	});	
});

$(document).ready(function(){
	$("#botonMenuSecundario2").click(function(){
		$("#pruebahideshow1").hide("slow");
  $("#pruebahideshow2").show("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").hide("slow");
	});	
});
$(document).ready(function(){
	$("#botonMenuSecundario3").click(function(){
    $("#pruebahideshow1").hide("slow");
    $("#pruebahideshow2").hide("slow");
    $("#pruebahideshow3").show("slow");
    $("#pruebahideshow4").hide("slow");
	});	
});
$(document).ready(function(){
	$("#botonMenuSecundario4").click(function(){
		$("#pruebahideshow1").hide("slow");
  $("#pruebahideshow2").hide("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").show("slow");
	});	
});

$scope.checkedItems = [];
		$scope.items = [{
				id: 1,
				name: 'I agree to the Privacy Policy and Terms of Service',
				checked: false
		}];
		$scope.checkedCount = 0;
		angular.forEach($scope.items, function(item) {
				if (item.checked === true) {
						$scope.checkedCount++;
						$scope.checkedItems.push(item.id);
						console.log(item.name)
				}
		});

		$scope.checkedFun = function(item) {
				if (item.checked) {
						console.log('++' + item.name);
						$scope.checkedCount++;
						item.checked = true;
						$scope.checkedItems.push(item.id)
				} else {
						$scope.checkedCount--;
						console.log('--');
						item.checked = false;
						var findId = $scope.checkedItems.indexOf(item.id);
						$scope.checkedItems.splice(findId, 1);
				};

    };
    
   

var vmt = this;

  vmt.priceSlider = {
    value: 10,
    options: {
      floor: 0,
      ceil: 10
    }
  };
  vmt.priceSliderVenta = {
    value: 1199,
    options: {
      floor: 0,
      ceil: 1199
    }
  };
  // $('#login-button').click(function() {
  //   $('.login-form').toggleClass('open');
  // })

  $(window, document, undefined).ready(function() {
  
  
    // Show overlay & Open modal
    
    $( ".login-modal-overlay" ).click(function() {
      $(this).fadeOut(200);
    });
    $( ".openb" ).click(function() {
      $(".login-modal-overlay").fadeIn(200);
    });
    $(".login-modal").click(function(event) {
      event.stopPropagation();
    });
    
    
    // Input label
  
    $('input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
    
    
    // Animations
  
    var $ripples = $('.ripples');
  
    $ripples.on('click.Ripples', function(e) {
  
  
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.ripplesCircle');
  
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
  
      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
  
      $this.addClass('is-active');
  
    });
  
    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
      // console.log(e);
      $(this).removeClass('is-active');
    });
  
  });

//login****************************************************************************************************
      

      vm.access = $rootScope.globals.currentUser;
      console.log(vm.access);
      

      vm.username='';
      vm.password='';
      
      vm.stockRetailer = $rootScope.almacenamiento.currentUser;
      console.log(vm.stockRetailer);

      $(".welcome").hide();
      // // vm.modalwelcome = 0;
      // // vm.modalwelcome= 1;
      // // if (vm.modalwelcome == 1) {
      //   // console.log("vamos vamos");
      //   modalcurrent();
        if (vm.stockRetailer != undefined) {
        
          vm.userNameRegister = vm.stockRetailer.nombre;
          console.log(vm.userNameRegister);
          // modalcurrent();
        }else{
          vm.userNameRegister = "";
        }
        // vm.seeLogin = function(){
        //   modalcurrent();
        // };

        // if (vm.modalcurrent == 1) {
        //   if (vm.vamosmodal == 13) {
        //     $(document).ready(function(){
        //       //  vm.userNameRegister = vm.stockRetailer.nombre;
        //       // console.log(vm.userNameRegister);
        //         $(".welcome").show();
        //         $(".welcome").fadeOut(10000);
        //         // vm.modalwelcome = 0;
        //       });
        //       vm.vamosmodal = 0;
        //   }
        // }

        function modalcurrent() {
          $(".welcome").show();
          $(".welcome").fadeOut(10000);
        }
        
        
        // $(".welcome").fadeIn(4000);
        // $(".welcome").fadeOut(10000);
        
      // }

      // if ($location.path() == "/en") {
      //   console.log("enenenene");
      // }
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
        case '/es':
            // rs.$emit('languaje', 'es');
            // vm.languaje = 'es'
            console.log("español");
            if(vm.access != undefined){
              console.log("no te metas");
              switch(vm.access.role){
                  // case 'admin':
                  //     $location.path('/admin')
                  // break;
                  case 'usuario':
                      $location.path('/widgetes');
                                   
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
      
              // rs.$on('languaje', function(e,d){
              //   vm.lang = d;
              //   switch (vm.lang) {
              //     case '/es':
              //       $location.path('/es');
              //       console.log(vm.access);
                    
              //   break;
              //   case '/en':
              //       $location.path('/en');
              //       console.log(vm.access);
              //   break;
              //   }
      // vm.cinco = 5;
      // if (vm.lang == '/es') {
        $location.path('/es');
      // }
                
                // console.log(vm.lang);
            // })
              
          }
        break;
        case '/en':
            // rs.$emit('languaje', 'en');
            // vm.languaje = 'en'
            console.log("ingles");
            if(vm.access != undefined){
              console.log("no te metas");
              switch(vm.access.role){
                  // case 'admin':
                  //     $location.path('/admin')
                  // break;
                  case 'usuario':
                      $location.path('/widgeten');
                                   
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
      
              // rs.$on('languaje', function(e,d){
              //   vm.lang = d;
              //   switch (vm.lang) {
              //     case '/es':
              //       $location.path('/es');
              //       console.log(vm.access);
                    
              //   break;
              //   case '/en':
              //       $location.path('/en');
              //       console.log(vm.access);
              //   break;
              //   }
      // vm.cinco = 5;
      // if (vm.lang == '/es') {
        $location.path('/en');
      // }
                
                // console.log(vm.lang);
            // })
              
          }
        break;
    }
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

    
    
      

      vm.logines = function(){
        vm.dataLoading = true;
        ServiceAuth.LoginTemp(vm.username, vm.password, function (response) {
                if (response.success) {
                  ServiceAuth.SetCredentials(vm.username, vm.password);
                    $location.path('/widgetes');
                    
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
      }
      vm.loginen = function(){
        vm.dataLoading = true;
        ServiceAuth.LoginTemp(vm.username, vm.password, function (response) {
                if (response.success) {
                  ServiceAuth.SetCredentials(vm.username, vm.password);
                    $location.path('/widgeten');
                    vm.ahuevo = 0;
                    rs.$emit('functionModal', ahuevo);
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
      }

      
    vm.logout= function(){
      ServiceAuth.ClearCredentials();
      $window.location.reload();
      // $location.path('/es');
  }

//   rs.$on('languaje', function(e,d){
//     vm.lang = d;
//     console.log(vm.lang);
//     ServiceAuth.lenguajeCredentials(vm.lang);
//     $location.path('/'+vm.lang);
// })
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
  // console.log(e);
  
  // e.stopImmediatePropagation();
	$('ul.tabs li').click(function(e){
     
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})



}
})();
