'use strict';

let routeApp = angular.module('routeApp', [
    'ngRoute',
    'routeAppControllers'
]);

routeApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/default/index.html',
                controller: 'IndexController'
            })
            .when('/register',{
                templateUrl: 'views/default/home.html',
                controller: 'HomeController'
                // })
                // .otherwise({
                //     redirectTo: '/user'
            });
    }
]);

let routeAppControllers = angular.module('routeAppControllers', []);

routeAppControllers.controller('IndexController', ['$scope', '$http',
    function($scope , $http){
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8000'
        }).then(function successCallback(response) {
            console.log(response);
            // if (response.data.length > 0) {
            //     $scope.message = response.data[0];
            // }
        });
    }
]);

routeAppControllers.controller('RegisterController', ['$scope', '$http',function($scope, $http) {

    $scope.send = function () {

        var data = {
            login    : $scope.login,
            lastname : $scope.lastname,
            firstname : $scope.firstname,
            password : $scope.password
        };

        $http.post("http://localhost:8000/register", data)

            .then(function(response) {
                // $scope.data = data;
                console.log(response.data);
            })

            .catch(function(data, status) {
                $scope.status = status;
                console.log(data);
            });
    }
}]);

