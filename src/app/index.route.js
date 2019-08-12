(function() {
  'use strict';

  angular
    .module('kriptoRedeem')
    .config(routerConfig)
    .run(run);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/es',
        templateUrl: 'app/components/unsecure/main/main.html',
        controller: 'MainController',
      })
      .state('homeen', {
        url: '/en',
        templateUrl: 'app/components/unsecure/main/mainen.html',
        controller: 'MainController',
      })
      .state('widget', {
        url: '/widgetes',
        templateUrl: 'app/components/templates/card-1.html',
        controller: 'MainController',
      })
      .state('widgeten', {
        url: '/widgeten',
        templateUrl: 'app/components/templates/card-1-1.html',
        controller: 'MainController',
      })
      .state('mini1', {
        url: '/mini1',
        templateUrl: 'app/components/templates/card-2.html',
        controller: 'MiniController',
      })
      .state('mini1en', {
        url: '/mini1en',
        templateUrl: 'app/components/templates/card-2-2.html',
        controller: 'MiniController',
      })
      .state('hreferencia', {
        url: '/hreferencia',
        templateUrl: 'app/components/templates/card-3.html',
        controller: 'ReferenciaController',
      })
      .state('hreferenciaen', {
        url: '/hreferenciaen',
        templateUrl: 'app/components/templates/card-3-3.html',
        controller: 'ReferenciaController',
      })
      .state('RedSocial', {
        url: '/RedSocial',
        templateUrl: 'app/components/templates/card-4.html',
        controller: 'WindowsController',
      })
      .state('RedSocialen', {
        url: '/RedSocialen',
        templateUrl: 'app/components/templates/card-4-4.html',
        controller: 'WindowsController',
      })
      .state('RedSocialMini', {
        url: '/RedSocialMini',
        templateUrl: 'app/components/templates/card-5.html',
        controller: 'MiniController',
      })
      .state('RedSocialMinien', {
        url: '/RedSocialMinien',
        templateUrl: 'app/components/templates/card-5-5.html',
        controller: 'MiniController',
      })
      .state('motivacion', {
        url: '/motivacion',
        templateUrl: 'app/components/templates/card-6.html',
        controller: 'WindowsController',
      })
      .state('motivacionen', {
        url: '/motivacionen',
        templateUrl: 'app/components/templates/card-6-6.html',
        controller: 'WindowsController',
      })
      .state('motivacionMini', {
        url: '/motivacionMini',
        templateUrl: 'app/components/templates/card-7.html',
        controller: 'MiniController',
      })
      .state('motivacionMinien', {
        url: '/motivacionMinien',
        templateUrl: 'app/components/templates/card-7-7.html',
        controller: 'MiniController',
      })
      .state('encuesta', {
        url: '/encuesta',
        templateUrl: 'app/components/templates/card-8.html',
        controller: 'WindowsController',
      })
      .state('encuestaen', {
        url: '/encuestaen',
        templateUrl: 'app/components/templates/card-8-8.html',
        controller: 'WindowsController',
      })
      .state('encuestaMini', {
        url: '/encuestaMini',
        templateUrl: 'app/components/templates/card-9.html',
        controller: 'MiniController',
      })
      .state('encuestaMinien', {
        url: '/encuestaMinien',
        templateUrl: 'app/components/templates/card-9-9.html',
        controller: 'MiniController',
      })
      .state('testimonios', {
        url: '/testimonios',
        templateUrl: 'app/components/templates/card-10.html',
        controller: 'WindowsController',
      })
      .state('testimoniosen', {
        url: '/testimoniosen',
        templateUrl: 'app/components/templates/card-10-10.html',
        controller: 'WindowsController',
      })
      .state('Maxi', {
        url: '/Maxi',
        templateUrl: 'app/components/templates/card-11.html',
        controller: 'MiniController',
      })
      .state('Maxien', {
        url: '/Maxien',
        templateUrl: 'app/components/templates/card-11-11.html',
        controller: 'MiniController',
      })
      .state('negocio', {
        url: '/negocio',
        templateUrl: 'app/components/templates/card-12.html',
        controller: 'WindowsController',
      })
      .state('negocioen', {
        url: '/negocioen',
        templateUrl: 'app/components/templates/card-12-12.html',
        controller: 'WindowsController',
      })
      .state('loyalty', {
        url: '/loyalty',
        templateUrl: 'app/components/templates/card-13.html',
        controller: 'WindowsController',
      })
      .state('loyaltyen', {
        url: '/loyaltyen',
        templateUrl: 'app/components/templates/card-13-13.html',
        controller: 'WindowsController',
      })
      .state('prueba', {
        url: '/prueba',
        templateUrl: 'app/components/templates/card-prueba.html',
        controller: 'MiniController',
      });
      
    $urlRouterProvider.otherwise('/es');
  }
  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookies.getObject('globals') || {};
      $rootScope.almacenamiento = $cookies.getObject('almacenamiento') || {};
      $rootScope.lenguage = $cookies.getObject('lenguaje') || {};
      if ($rootScope.globals.currentUser) {
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
          
      }
      
      // $rootScope.$on('$locationChangeStart', function (event, next, current) {
      //     // redirect to login page if not logged in and trying to access a restricted page
          
      //     var restrictedPage = $.inArray($location.path(), ['/es']) === -1;
      //     var loggedIn = $rootScope.globals.currentUser;
      //     if (restrictedPage && !loggedIn) {
      //         $location.path('/es');
      //     }
      // });
  }
})();
