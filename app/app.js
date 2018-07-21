import angular from 'angular';
import ngRouteModuleName from 'angular-route';
import oclazyload from 'oclazyload';
import view1ModuleName from './view1/view1';
import view2ModuleName from './view2/view2';
//import versionModuleName from './components/version/version';

const APP_NAME = 'testWebpackApp';

// Declare app level module which depends on views, and components
angular.module(APP_NAME, [
  ngRouteModuleName, //'ngRoute',
  oclazyload,
  view1ModuleName,
  view2ModuleName//,
  //versionModuleName
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

export default APP_NAME;
