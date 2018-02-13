'use strict';
app.service('AuthService', function($http,$q){
  this.getCurrentUserInfo = function(email,password) {
    var deferred = $q.defer();
    var result ={};
    return $http({
      method: 'GET',
      url: '../../data/user.json'
    }).then(function (response) {
      if (typeof response.data == 'object') {
        result.msg='FAIL';
        angular.forEach(response.data, function (item) {
          if ((email == item.email) && (password == item.password)) {
            result.name=email;
            result.pass=password;
            result.msg='SUCCESS';
          return result;
          }
        })
        return result;
      }
    })

  }
})
