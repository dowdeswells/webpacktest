
factoryFn.$inject = ['$q', '$timeout', '$ocLazyLoad', '$location', '$route'];

function factoryFn($q, $timeout, $ocLazyLoad, $location, $route) {

  function loadModule(moduleImportFunction, navigateTo) {
    var outer = $q.defer();
    moduleImportFunction()
      .then(function (module) {
        var version = module.default;
        $ocLazyLoad.inject(version)
        if (navigateTo) {
          $location.path(navigateTo);
          $route.reload();
        }
        outer.resolve(version)
      });
    return outer.promise;
  }

  return {
    loadModule: loadModule
  }
}

export default function (app) {
  app.factory('lazyLoadService', factoryFn);
}