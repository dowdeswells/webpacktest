import angular from 'angular';
import ngRouteModuleName from 'angular-route';
import flappyModuleName from '../components/flappy/flappy';

const MODULE_NAME = 'myApp.view2';


var mod = angular.module(MODULE_NAME, [ngRouteModuleName, flappyModuleName]);

mod
  //.config(['$routeProvider', configFn])
  .controller('View2Ctrl', ['$scope', 'versionModule', View2CtrlFn]);


// function configFn($routeProvider) {
//   $routeProvider.when('/view2', {
//     templateUrl: 'view2/view2.html',
//     controller: 'View2Ctrl',
//     resolve: {
//       versionModule: ['$q', '$timeout', '$ocLazyLoad', loadExtraStuff]
//     }
//   });
// }

function View2CtrlFn($scope, versionModule) {
  $scope.hello = 'Controller has initialised';
  //$scope.version =  version;
}



export default MODULE_NAME;