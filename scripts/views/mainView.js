define(["backbone",
    "underscore",
    "jquery",
    //templates,
    //views
    "views/startGame",
    //models
    "models/game"
], function(Backbone, _, $, startGame, Game) {
    var minesweeper = Backbone.View.extend({

        events: {

        },

        initialize: function() {
            //subviews: start ,game view, end game
            this.model = new Game();
            this.start = new startGame({ model: this.model });
        },

        render: function() {
            this.start.render();
        }



    });

    return minesweeper;
});