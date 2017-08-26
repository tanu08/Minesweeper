define(["backbone",
    "underscore",
    "jquery",
    //views
], function(Backbone, _, $, gameGrid) {
    var inGame = Backbone.View.extend({

        className: 'gameGrid',

        events: {
            'click .tile': 'showValue'
        },

        initialize: function() {
            _.bind(this);
        },

        render: function() {
            return this.el;
        },

        creatingGrid: function() {
            var n = this.model.get('grid');
            this.matrix = new Array(n);
            for (i = 0; i < n; i++) {
                this.matrix[i] = new Array(n);
            }
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    matrix[i][j] = 0;
                }
            }
            this.gameIntensity();
            this.setCountOfTiles();
            this.appendToView();
        },

        gameIntensity: function() {
            switch (this.model.get('level')) {
                case 'easy':
                    for (i = 0; i < Math.ceil(n * 0.4); i++)
                        this.placingBombs();
                    break;

                case 'medium':
                    for (i = 0; i < Math.ceil(n * 0.7); i++)
                        this.placingBombs();
                    break;

                case 'hard':
                    for (i = 0; i < Math.ceil(n * 0.9); i++)
                        this.placingBombs();
                    break;

            }
        },

        placingBombs: function() {
            var placeBombInX = _.random(0, this.model.get('grid'));
            var placeBombInY = _.random(0, this.model.get('grid'));
            this.matrix[placeBombInX][placeBombInY] = 'BOMB';
        },

        isSafe: function(cur_x, cur_y) {
            if ((this.matrix[cur_x][cur_y] === 'BOMB') && (cur_x < n && cur_x >= 0) && (cur_y < n && cur_y >= 0))
                return true;
            return false;
        },

        setCountOfTiles: function() {
            var x_moves = [-1, 0, 1, 1, 1, 0, -1, -1];
            var y_moves = [1, 1, 1, 0, -1, -1, -1, 0];
            for (col = 0; col < n; col++) {
                for (var row = 0; row < n; row++) {
                    for (i = 0; i < 8; i++) {
                        cur_x = x_moves[i];
                        cur_y = y_moves[i];
                        if (isSafe()) {
                            this.matrix[cur_x][cur_y] += 1;
                        }

                    }
                }
            }

        },

        appendToView: function() {
            for (row = 0; row < n; row++) {
                this.$el.append($('div.row-' + row));
                for (var i = 0; i < n; i++) {
                    this.$el.find('div.row-' + row).append($('div').addClass('tile-' + i).attr('data-value', this.matrix[row][i]))
                }
            }
        },

        showValue: function(event) {
            var el = event.currentTarget;
            var tileClicked = $(el).attr('data-value');
            $(el).text(tileClicked);
            if (tileClicked === "BOMB") {
                this.showAllBombs();
                this.endGame();
            }
        },

        showAllBombs: function() {
            _.each(this.$el.find('[data-value=' + '"BOMB"]'), function(el) {
                $(el).text($(el).attr('data-value'));
            });
        },

        endGame: function() {

        }
    });
    return inGame;
});