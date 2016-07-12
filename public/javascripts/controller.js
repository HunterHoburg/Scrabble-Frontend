function Board() {
  var boardLayout = [];

  var generateBoard = function() {
    for (var i = 0; i < 16; i++) {
      var arr = [];
      for (var j = 0; j < 16; j++) {
        var id = i.toString(16) + j.toString(16);
        var square = {
          id: id,
          row: i,
          col: j,
          value: null
        }
      arr.push(square);
      }
      this.boardLayout.push(arr);
    }
  };
  return {
    boardLayout: boardLayout,
    generateBoard: generateBoard
  }
}

var app = angular.module('scrabbleBoard', []);

app.controller('boardController', [function() {
  var vm = this;
  vm.printNum = function(number) {
    console.log(number);
  }
  vm.placedTiles = [];
  vm.pushPlacedTile = function(input) {
    console.log('pushing tile');
    vm.placedTiles.push(input);
  }
  vm.listChanges = function() {
    console.log('submitted');
    for (var square in vm.placedTiles) {
      console.log(vm.placedTiles[square]);
    }
  }
  vm.board = new Board();
  vm.board.generateBoard();
}]);
