import angular from 'angular';
import ngRouteModuleName from 'angular-route';
import oclazyload from 'oclazyload';
import mainView from './mainView';
import lazyLoadService from './lazyLoadService';
import view1ModuleName from './view1/view1';
//import view2ModuleName from './view2/view2';

const APP_NAME = 'testWebpackApp';

// Declare app level module which depends on views, and components
var app = angular.module(APP_NAME, [
  ngRouteModuleName,
  oclazyload,
  view1ModuleName//,
  //view2ModuleName
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/view2', {
      controller: 'View2Ctrl',
      templateUrl: 'view2/view2.html',
      resolve: {
        versionModule: ['$q', '$timeout', '$ocLazyLoad', loadExtraStuff],
        angularModule: ['lazyLoadService', function (lazyLoadService) {
          var importView2Fn = function () { return import(/* webpackChunkName: "../dist/view2" */ './view2/view2'); }
          lazyLoadService
            .loadModule(importView2Fn)
            .then(function (mod) {
              console.log('Module Loaded', mod);
            });
        }]
      }
    })
    .otherwise({ redirectTo: '/view1' });


  function loadExtraStuff($q, $timeout, $ocLazyLoad) {
    var def = $q.defer();
    var promise = loadScript($q, $ocLazyLoad);
    promise
      .then(function (result) {
        def.resolve(result);
      });
    return def.promise;
  }

  function loadScript($q, $ocLazyLoad) {
    var outer = $q.defer();
    import(/* webpackChunkName: "../dist/version" */ './components/version/version')
      .then(function (module) {
        var version = module.default;
        $ocLazyLoad.inject(version)
        outer.resolve(version)
      });
    return outer.promise;
  }


}]);

mainView(app);
lazyLoadService(app);

export default APP_NAME;
