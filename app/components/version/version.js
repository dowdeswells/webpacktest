import angular from 'angular';
import versionDirective from './version-directive';
import interpolateFilter from './interpolate-filter';

const MODULE_NAME = 'version';

var mod = angular.module(MODULE_NAME, []);

mod.value('version', '0.1');
versionDirective(mod);
interpolateFilter(mod);

export default MODULE_NAME;
