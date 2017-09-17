require.config({
    shim: {
        "backbone": {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        }
    },
    paths: {
        "backbone": "../node_modules/backbone/backbone",
        "underscore": "../node_modules/underscore/underscore",
        "jquery": "../node_modules/jquery/dist/jquery",
        "hbs": "../node_modules/require-handlebars-plugin/hbs"
    },
    waitSeconds : 30
});

require([
    "backbone",
    "views/mainView"
], function(Backbone, mainView) {
    Backbone.history.start();
    this.mainview = new mainView();
    this.mainview.render();
});
