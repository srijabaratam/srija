p.config(['$routeProvider','$locationProvider' , function($routeProvider,$locationProvider){

    $routeProvider
        .when('/home',{

            templateUrl:'settings.html'
        })
        .when('/home.focus',{
            templateUrl:'focus.html'
        })
}]);

