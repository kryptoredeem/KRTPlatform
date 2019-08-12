(function() {
    'use strict';
  
    angular
      .module('kriptoRedeem')
      .controller('ReferenciaController', ReferenciaController);
  
    /** @ngInject */
    function ReferenciaController($timeout, webDevTec, toastr, $scope, ServiceAuth,$window, $rootScope, $location) {
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    var vm = $scope;
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

      var intervalHandle;
    var secondsRemaining;
    var totalsegundosd;
    var totalsegundosh;
    var totalsegundosm;
    
    var dias = 0;
    var horas = 0;
    var minutos = 25;
    
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
      if (dias == 0 && horas == 0 && m == 0) {
        // clearInterval(intervalHandle);
        // resetPage();
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
  $("#pruebahideshow5").hide("slow");
	$("#botonMenuSecundario1").click(function(){
		$("#pruebahideshow1").show("slow");
  $("#pruebahideshow2").hide("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").hide("slow");
  $("#pruebahideshow5").hide("slow");
	});	
});

$(document).ready(function(){
	$("#botonMenuSecundario2").click(function(){
		$("#pruebahideshow1").hide("slow");
  $("#pruebahideshow2").show("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").hide("slow");
  $("#pruebahideshow5").hide("slow");
	});	
});
$(document).ready(function(){
	$("#botonMenuSecundario3").click(function(){
    $("#pruebahideshow1").hide("slow");
    $("#pruebahideshow2").hide("slow");
    $("#pruebahideshow3").show("slow");
    $("#pruebahideshow4").hide("slow");
    $("#pruebahideshow5").hide("slow");
	});	
});
$(document).ready(function(){
	$("#botonMenuSecundario4").click(function(){
		$("#pruebahideshow1").hide("slow");
  $("#pruebahideshow2").hide("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").show("slow");
  $("#pruebahideshow5").hide("slow");
	});	
});
$(document).ready(function(){
	$("#botonMenuSecundario5").click(function(){
		$("#pruebahideshow1").hide("slow");
  $("#pruebahideshow2").hide("slow");
  $("#pruebahideshow3").hide("slow");
  $("#pruebahideshow4").hide("slow");
  $("#pruebahideshow5").show("slow");
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
      $(this).removeClass('is-active');
    });
  
  });

//   rs.$on('views', function(e, data){
//     vm.active = data;
// })

//   rs.logout= function(){
//     ServiceAuth.ClearCredentials();
//     $window.location.reload();
// }

// rs.$on('out', function(e,x){
//   console.log(x);
// })
  // (function() {
  //   var copylinkbtn = document.getElementById("copy-link-btn-1"),
  //       copylink = document.getElementById("copy-link-wrapper-1"),
  //       overlay = document.getElementById("overlay-1");
  
  //   copylinkbtn.addEventListener("click", function() {
      
  //     var error = document.getElementsByClassName('error');
        
  //     while (error[0]) {
  //       error[0].parentNode.removeChild(error[0]);
  //     }
  
  //     document.body.className += ' active';
      
  //     copylink.children[2].value = window.location.href; //aqui es donde se pone el link :/window.location.href
  //     copylink.children[2].focus();
  //     copylink.children[2].select();
  //   }, false);
  
  //   overlay.addEventListener("click", function() {
  //     document.body.className = '';
  //   }, false);
  
  //   copylink.children[2].addEventListener("keydown", function(e) {
  
  //     var error = document.getElementsByClassName('error');
  
  //     while (error[0]) {
  //       error[0].parentNode.removeChild(error[0]);
  //     }
  
  //     setTimeout(function() {
  
  //       if((e.metaKey || e.ctrlKey) && e.keyCode === 67 && isTextSelected(copylink.children[2])) {
  //         document.body.className = '';
  //       } else if((e.metaKey || e.ctrlKey) && e.keyCode === 67 && isTextSelected(copylink.children[2]) === false) {
  //         var error = document.createElement('span');
  //         error.className = 'error';
  //         var errortext = document.createTextNode('The link was not copied, make sure the entire text is selected.');
          
  //         error.appendChild(errortext);
  //         copylink.appendChild(error);
  //       }
  //     }, 100);
  
  //     function isTextSelected(input) {
  //       if (typeof input.selectionStart == "number") {
  //         return input.selectionStart == 0 && input.selectionEnd == input.value.length;
  //       } else if (typeof document.selection != "undefined") {
  //         input.focus();
  //         return document.selection.createRange().text == input.value;
  //       }
  //     }
  //   }, false);
  // })();
      (function() {
        var copylinkbtna = document.getElementById("copy-link-btn-2"),
            copylinka = document.getElementById("copy-link-wrapper-2"),
            overlaya = document.getElementById("overlay-2");
      
        copylinkbtna.addEventListener("click", function() {
          
          var errora = document.getElementsByClassName('error');
            
          while (errora[0]) {
            errora[0].parentNode.removeChild(errora[0]);
          }
      
          document.body.className += ' active';
          
          copylinka.children[2].value = window.location.href; //aqui es donde se pone el link :/window.location.href
          copylinka.children[2].focus();
          copylinka.children[2].select();
        }, false);
      
        overlaya.addEventListener("click", function() {
          document.body.className = '';
        }, false);
      
        copylinka.children[2].addEventListener("keydown", function(e) {
      
          var errora = document.getElementsByClassName('error');
      
          while (error[0]) {
            errora[0].parentNode.removeChild(errora[0]);
          }
      
          setTimeout(function() {
      
            if((e.metaKey || e.ctrlKey) && e.keyCode === 67 && isTextSelected(copylinka.children[2])) {
              document.body.className = '';
            } else if((e.metaKey || e.ctrlKey) && e.keyCode === 67 && isTextSelected(copylinka.children[2]) === false) {
              var errora = document.createElement('span');
              errora.className = 'error';
              var errortext = document.createTextNode('The link was not copied, make sure the entire text is selected.');
              
              errora.appendChild(errortext);
              copylinka.appendChild(error);
            }
          }, 100);
      
          function isTextSelected(input) {
            if (typeof input.selectionStart == "number") {
              return input.selectionStart == 0 && input.selectionEnd == input.value.length;
            } else if (typeof document.selection != "undefined") {
              input.focus();
              return document.selection.createRange().text == input.value;
            }
          }
        }, false);
      })();
  }
  })();
  