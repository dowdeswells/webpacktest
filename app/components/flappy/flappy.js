
import angular from 'angular';

import something from '../something';

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


  vm.parts = something;
  
}

export default MODULE_NAME;