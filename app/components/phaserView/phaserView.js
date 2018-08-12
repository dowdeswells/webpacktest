

import angular from 'angular';

import phaserApp from './phaserApp/appMain';

const MODULE_NAME = 'phaserView.module';

var mod = angular.module(MODULE_NAME, []);

mod.component('phaserView', {
  templateUrl: 'app/components/phaserView/phaserView.template.html',
  controller: phaserViewCtrl,
  controllerAs: 'vm'
});


function phaserViewCtrl() {
  var vm = this;


  vm.phaserApp = phaserApp();
  
}

export default MODULE_NAME;