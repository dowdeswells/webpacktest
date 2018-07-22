
import angular from 'angular';

const MODULE_NAME = 'flappy.module';

var mod = angular.module(MODULE_NAME, []);

mod.component('flappy', {
  templateUrl: 'app/components/flappy/flappy.template.html',
  controller: flappyCtrl,
  controllerAs: 'vm',
  bindings: {
    hero: '<'
  }
});


function flappyCtrl() {
  var vm = this;


}

export default MODULE_NAME;