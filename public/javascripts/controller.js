var app = angular.module('scrabbleBoard', []);

app.controller('boardController', [function() {
  var vm = this;
  vm.name = 'Alex';
  vm.board = [];

  vm.generateBoard = function() {
    for (var i = 0; i < 10; i++) {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      vm.board.push(arr);
    }
  };

  vm.printNum = function(number) {
    console.log(number);
  }

  vm.generateBoard();
}]);
