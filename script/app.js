var armstrong = angular.module('armstrong',['ui.router'])

armstrong.config(['$stateProvider',function($stateProvider)
{
    $stateProvider.state('result',{
        url:'/result',
        templateUrl:'../view/result.html',
        controller: 'amrCtrl'
    })

}]);
