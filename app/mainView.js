
var componentDef = {
    templateUrl: 'app/mainView.template.html',
    controller: controllerFn,
    controllerAs: 'vm'
};

controllerFn.$inject=['lazyLoadService'];

function controllerFn(lazyLoadService) {
    
    //var importView2Fn = function(){ return import(/* webpackChunkName: "view2" */ './view2/view2');}
    var vm = this;

    //vm.showView2 = showView2;
    return;

    // function showView2() {
    //     lazyLoadService
    //         .loadModule(importView2Fn, '/view2')
    //         .then(function(mod){
    //             console.log('Module Loaded', mod);
    //         });
    // }
}

export default function (app) {
    app.component('mainView', componentDef);
}