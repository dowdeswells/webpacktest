import angular from 'angular';
import ngRouteModuleName from 'angular-route';
import flappyModuleName from '../components/flappy/flappy';

const MODULE_NAME = 'myApp.view2';


var mod = angular.module(MODULE_NAME, [ngRouteModuleName, flappyModuleName]);

mod
  .config(['$routeProvider', configFn]);
//  .controller('View2Ctrl', ['$scope', 'versionModule', 'version', View2CtrlFn]);


function View2CtrlFn($scope, versionModule) {
  $scope.hello = 'Controller has initialised';
  //$scope.version =  version;
}

function configFn($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: ['$scope', 'versionModule', View2CtrlFn],
    resolve: {
      versionModule: ['$q', '$timeout', '$ocLazyLoad', loadExtraStuff]
    }
  });
}

function loadExtraStuff($q, $timeout, $ocLazyLoad) {
  var def = $q.defer();
  var promise = loadScript($q, $ocLazyLoad);
  promise
    .then(function (result) {
      def.resolve(result);
    });
  return def.promise;
}

function loadScript($q,$ocLazyLoad) {
  var outer = $q.defer();
  import(/* webpackChunkName: "../dist/version" */ '../components/version/version')
    .then(function (module) {
      var version = module.default;
      $ocLazyLoad.inject(version)
      outer.resolve(version)
    });
  return outer.promise;
}

export default MODULE_NAME;