define(["backbone",
    "underscore",
    "jquery"
], function(Backbone, _, $) {
    var game = Backbone.Model.extend({
        defaults: {
            players: 1,
            level: 'easy',
            grid: 5,
            againstComputer: false
        }
    });
    return game;
});