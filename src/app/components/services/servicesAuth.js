(function () {
    'use strict';
  
    angular
        .module('kriptoRedeem')
        .factory('ServiceAuth', ServiceAuth);
  
    function ServiceAuth($location, $http, $cookies, $rootScope, $timeout,$q,$log,toastr,$filter) {
    
      var rs = $rootScope;
    var service = {};
  
    service.Login = Login;
    service.LoginTemp = LoginTemp;
    service.Info = Info;
    service.InfoUser = InfoUser;
    service.SetCredentials = SetCredentials;
    service.ClearCredentials = ClearCredentials;
    service.RecoveryPassword = RecoveryPassword;
    service.GetByUsername = GetByUsername;
    service.Create = Create;
    service.registerRetailer = registerRetailer;
    service.lenguajeCredentials = lenguajeCredentials;
    service.ClearLenguage = ClearLenguage;
    // service.registerCredentials = registerCredentials;

    return service;

    function registerRetailer(registerR, callback) {

        $timeout(function () {
            var response;
            GetByUsername(registerR.username)
                .then(function (user) {
                    console.log(user);
                    
                    // if (user !== null && user.password === registerR.password) {
                        

                        // $timeout(function () {
                        //     GetByUsername(user.username)
                        //         .then(function (duplicateUser) {
                            // var otraVariableX = registerR.username;
                            // console.log(otraVariableX);
                            var users = getUsers();
                            console.log(users.length);

                            // console.log(users);
                            // var b = users.indexOf(null);
                            // users.splice(b, 1);
                            
                            // var a = users.indexOf(null);
                            //   users.splice(a, 1);

                            var c = users.indexOf(null);
                                console.log(c);
                                if (c != -1) {
                                    users.splice(c, 1);
                                }

                            for (var i = 0; i < users.length; i++) {

                                if (registerR.username == users[i].username) {
                                    console.log(users[i]);
                                    console.log(users[i].username);-
                                    delete users[i];
                                }
                              }
                            
                            var a = users.indexOf(null);
                            console.log(a);
                            if (a != -1) {
                                users.splice(a, 1);
                            }

                            console.log(users);

                            //   users.keys(null);
                              
                            console.log(users);
                            console.log(users.city);
                            if (user !== null && user.city !== undefined) {
                                toastr.error('Username is already registered');
                            } else {
                                toastr.success('You have been registered successfully!');
                                // response = { success: true };
                                
                                console.log('bien');
                                
                                const newRegister = Object.assign(user, registerR);
                                console.log(newRegister);
        
                                // var users = getUsers();
                                
                                // users.pop();
                                users.push(newRegister);
                                console.log(users);
                                var b = users.indexOf(null);
                                console.log(b);
                                if (b != -1) {
                                    users.splice(b, 1);
                                }
                                setUsers(users);
                            }
                        //         });
                        // }, 1000);

                    // } else {
                    //     console.log('mal');
                    // }
                    // callback(response);
                });
        }, 1000);

    }
    
    function LoginTemp(username, password, callback) {

        $timeout(function () {
            var response;
            GetByUsername(username)
                .then(function (user) {
                    if (user !== null && user.password === password) {
                        // console.log(user);
                        // console.log(user.password);
                        // console.log(password);
                        response = { success: true };
                        // $location.path('/widget');
                        console.log("Entrando");
                        toastr.success('a kryptoRedeem', 'Bienvenido', {timeOut: 5000});//, {positionClass: "toast-bottom-full-width"}
                        // switch($location.path()){
                        //     case '/widgetes':
                        //             toastr.success('a kryptoRedeem', 'Bienvenido', {timeOut: 5000});//, {positionClass: "toast-bottom-full-width"}
                        //     break;
                        //     case '/widgeten':
                        //             toastr.success('to kryptoRedeem', 'Welcome', {timeOut: 5000});//, {positionClass: "toast-bottom-full-width"}
                        //     break;
                        // }
                       
                        // $(".welcome").show();
                        // $(".welcome").fadeOut(10000);
                        // modalcurrent();
                        // document.write("venga", 1000);
                        // document.getElementById(".welcome").innerHTML = "Hello <b>bro</b>!";
                        
                        // rs.$emit('usuario', user);
                        // $rootScope.almacenamiento=user;
                        registerCredentials(user.username, user.password, user.nombre, user.id, user.confirmpassword, user.apellido);
                    } else {
                        response = { success: false, message: 'Username or password is incorrect' };
                        toastr.error('El correo electrónico o la contraseña son incorrectos');
                    }
                    callback(response);
                });
        }, 1000);

        /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });
      
        // var myUserDemo ={
        //     id: 666,
        //     email :'demo@kredeem.com',
        //     password : '123',
        //     nick: 'oeste',
        //     role : 'usuario'
        // }


        // if(username == myUserDemo.email && password == myUserDemo.password){
        //     SetCredentials(myUserDemo.id, myUserDemo.nick, myUserDemo.email,myUserDemo.password, myUserDemo.role)
        //     $location.path('/widget')

        // }
        // else{
        //     toastr.error('El correo electrónico o la contraseña son incorrectos');
        // }

    }

    function setUsers(users) {
        localStorage.users = JSON.stringify(users);
        console.log(localStorage.users);
    }
    function getUsers() {
        console.log(localStorage.users);
        if(!localStorage.users){
            localStorage.users = JSON.stringify([]);
             
        }

        return JSON.parse(localStorage.users);
    }
    
    function GetByUsername(username) {
        var deferred = $q.defer();
        var filtered = $filter('filter')(getUsers(), { username: username });
        var user = filtered.length ? filtered[0] : null;
        deferred.resolve(user);
        return deferred.promise;
    }

    function Create(user) {
        var deferred = $q.defer();


        // simulate api call with $timeout
        $timeout(function () {
            GetByUsername(user.username)
                .then(function (duplicateUser) {
                    console.log(duplicateUser);
                    if (duplicateUser !== null) {
                        deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
                        toastr.error('Username "' + user.username + '" is already taken');
                    } else {
                        toastr.success('You have been registered successfully!');
                        var users = getUsers();
                        // console.log(users);
                        
                        // assign id
                        var lastUser = users[users.length - 1] || { id: 0 };
                        user.id = lastUser.id + 1;

                        // save to local storage
                        users.push(user);
                        console.log(user);
                        console.log(users);
                        // rs.$emit('usuario', user);
                        setUsers(users);

                        deferred.resolve({ success: true });
                    }
                });
        }, 1000);
        console.log(deferred.promise);
        return deferred.promise;
    }


    function Login(username, password) {
      var dfd = $q.defer();

      var authdata = Base64.encode(username + ':' + password);
      
      var config = {
          method: "GET",
          url: "/ibh/user/",
          headers: {'Authorization': 'Basic '+authdata}
      };

      var errorRespo = {
          data : {
          Authenticated : 'false' 
          }
      }

      $http(config)
      .then(
          function success(response) {
              return dfd.resolve(response);
          },
          function error(response) {
              var status = response.status;
              if (status == 401) {
                  
                  return dfd.resolve(response);;
              }
              return $q.reject(errorRespo);
          }
      );
      return dfd.promise;

    }

    function Info(username){

      var dfd = $q.defer();
      var config = {
        method: "GET",
        url: "/ibh/admin/info?email="+username
      };

      $http(config)
      .then(
          function success(response) {
              return dfd.resolve(response);
          },
          function (errResponse) {
            return dfd.reject(errResponse);
          }
      );
      return dfd.promise;
    }

    function InfoUser(username){

      var dfd = $q.defer();
      var config = {
        method: "GET",
        url: "/ibh/api/info?email="+username
      };

      $http(config)
      .then(
          function success(response) {
              return dfd.resolve(response);
          },
          function (errResponse) {
            return dfd.reject(errResponse);
          }
      );
      return dfd.promise;
    }
    

    function SetCredentials(username, password) { //id, username, email,password, role

        var authdata = Base64.encode(username + ':' + password);
        // var authdata = Base64.encode(email + ':' + password);
        // $rootScope.globals = {
        //     currentUser: {
        //         id : id,
        //         username: username,
        //         email : email,
        //         authdata : authdata,
        //         role : role
        //     }
        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata,
                role : 'usuario'
            }
        };


        // set default auth header for http requests
        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 1);
        $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
    }

    function registerCredentials(username, password, nombre, id, confirmpassword, apellido) { //id, username, email,password, role

        // var authdata = Base64.encode(username + ':' + password);
        // var authdata = Base64.encode(email + ':' + password);
        $rootScope.almacenamiento = {
            currentUser: {
                id : id,
                username: username,
                password : password,
                nombre : nombre,
                confirmpassword : confirmpassword,
                apellido : apellido
            }
        };


        // set default auth header for http requests
        // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 1);
        $cookies.putObject('almacenamiento', $rootScope.almacenamiento, { expires: cookieExp });
    }

    function lenguajeCredentials(lenguaje) { //id, username, email,password, role

        // var authdata = Base64.encode(username + ':' + password);
        // var authdata = Base64.encode(email + ':' + password);
        $rootScope.lenguage = {
            currentUser: {
                lenguaje : lenguaje
            }
        };


        // set default auth header for http requests
        // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 1);
        $cookies.putObject('lenguaje', $rootScope.lenguage, { expires: cookieExp });
    }


    function ClearCredentials() {
        $rootScope.almacenamiento = {};
        $cookies.remove('almacenamiento');
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
    }
    function ClearLenguage() {
        $rootScope.lenguage = {};
        $cookies.remove('lenguaje');
    }

    function RecoveryPassword(username){

        var dfd = $q.defer();
        var config = {
          method: "POST",
          url: "/ibh/public/recoveryPassword?email="+username
        };

        $http(config)
        .then(
            function success(response) {
                return dfd.resolve(response);
            },
            function (errResponse) {
              return dfd.reject(errResponse);
            }
        );
        return dfd.promise;
    }
}

// Base64 encoding service used by AuthenticationServices
var Base64 = {

    keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this.keyStr.charAt(enc1) +
                this.keyStr.charAt(enc2) +
                this.keyStr.charAt(enc3) +
                this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);

        return output;
    },

    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            window.alert("There were invalid base64 characters in the input text.\n" +
                "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                "Expect errors in decoding.");
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        do {
            enc1 = this.keyStr.indexOf(input.charAt(i++));
            enc2 = this.keyStr.indexOf(input.charAt(i++));
            enc3 = this.keyStr.indexOf(input.charAt(i++));
            enc4 = this.keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";

        } while (i < input.length);

        return output;
    }
};
  })();