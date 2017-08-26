define(["backbone",
    "underscore",
    "jquery",
    //templates,
    //views
    "views/inGame"
], function(Backbone, _, $, inGame) {
    var startGame = Backbone.View.extend({
        initialize: function() {

        },

        render: function() {
            var game = new inGame({ model: this.model });
            $('body').append(game.render());
        }


    });
    return startGame;
});