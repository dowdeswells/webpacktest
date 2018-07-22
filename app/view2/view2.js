import angular from 'angular';
import ngRouteModuleName from 'angular-route';
import flappyModuleName from '../components/flappy/flappy';

const MODULE_NAME = 'myApp.view2';


var mod = angular.module(MODULE_NAME, [ngRouteModuleName, flappyModuleName]);

mod
  .controller('View2Ctrl', ['$scope', 'versionModule', View2CtrlFn]);

function View2CtrlFn($scope, versionModule) {
  $scope.hello = 'Controller has initialised';
}



export default MODULE_NAME;