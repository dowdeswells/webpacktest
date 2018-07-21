import angular from 'angular';
import ngRouteModuleName from 'angular-route';

const MODULE_NAME = 'myApp.view1';
angular.module(MODULE_NAME, [ngRouteModuleName])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', [function () {

  }]);

export default MODULE_NAME;