define([], function() {
    var game = Backbone.Models.extend({
        defaults: {
            players: 1,
            level: 'easy',
            grid: 5,
            againstComputer: false
        }
    });
    return game;
});