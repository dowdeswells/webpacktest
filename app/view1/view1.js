import angular from 'angular';
import ngRouteModuleName from 'angular-route';

const MODULE_NAME = 'myApp.view1';
angular.module(MODULE_NAME, [ngRouteModuleName])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'app/view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', function ($scope) {
      $scope.message = 'Controller fffff View 1';
  }]);

export default MODULE_NAME;