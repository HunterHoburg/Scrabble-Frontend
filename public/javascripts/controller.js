function Board() {
  var boardLayout = [];

  var generateBoard = function() {
    for (var i = 0; i < 17; i++) {
      var arr = [];
      for (var j = 0; j < 17; j++) {
        var id = i.toString(16) + j.toString(16);
        var square = {
          id: id,
          row: i,
          col: j,
          value: "/"
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

app.controller('boardController', ['$scope', function($scope) {
  var vm = this;
  vm.scrabbleLetters = [
    // {letter: 'BLA', value: 0},
    // {letter: 'BLA', value: 0},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'E', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'A', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'I', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'O', value: 1},
    {letter: 'N', value: 1},
    {letter: 'N', value: 1},
    {letter: 'N', value: 1},
    {letter: 'N', value: 1},
    {letter: 'N', value: 1},
    {letter: 'N', value: 1},
    {letter: 'R', value: 1},
    {letter: 'R', value: 1},
    {letter: 'R', value: 1},
    {letter: 'R', value: 1},
    {letter: 'R', value: 1},
    {letter: 'R', value: 1},
    {letter: 'T', value: 1},
    {letter: 'T', value: 1},
    {letter: 'T', value: 1},
    {letter: 'T', value: 1},
    {letter: 'T', value: 1},
    {letter: 'T', value: 1},
    {letter: 'L', value: 1},
    {letter: 'L', value: 1},
    {letter: 'L', value: 1},
    {letter: 'L', value: 1},
    {letter: 'S', value: 1},
    {letter: 'S', value: 1},
    {letter: 'S', value: 1},
    {letter: 'S', value: 1},
    {letter: 'U', value: 1},
    {letter: 'U', value: 1},
    {letter: 'U', value: 1},
    {letter: 'U', value: 1},
    {letter: 'D', value: 2},
    {letter: 'D', value: 2},
    {letter: 'D', value: 2},
    {letter: 'D', value: 2},
    {letter: 'G', value: 2},
    {letter: 'G', value: 2},
    {letter: 'G', value: 2},
    {letter: 'B', value: 3},
    {letter: 'B', value: 3},
    {letter: 'C', value: 3},
    {letter: 'C', value: 3},
    {letter: 'M', value: 3},
    {letter: 'M', value: 3},
    {letter: 'P', value: 3},
    {letter: 'P', value: 3},
    {letter: 'F', value: 4},
    {letter: 'F', value: 4},
    {letter: 'H', value: 4},
    {letter: 'H', value: 4},
    {letter: 'V', value: 4},
    {letter: 'V', value: 4},
    {letter: 'W', value: 4},
    {letter: 'W', value: 4},
    {letter: 'Y', value: 4},
    {letter: 'Y', value: 4},
    {letter: 'K', value: 5},
    {letter: 'J', value: 8},
    {letter: 'X', value: 8},
    {letter: 'Q', value: 10},
    {letter: 'Z', value: 10}
  ];
  vm.placedTiles = [];
  vm.pushPlacedTile = function(input) {
    vm.placedTiles.push(input);
  }
  vm.listChanges = function() {
    for (var square in vm.placedTiles) {
      console.log(vm.placedTiles[square]);
    }
    console.log('board: ', vm.board.boardLayout);
  }
  // vm.movingLetter = false;
  vm.rackToBoard = function(letter) {
    // vm.movingLetter = true;
    vm.currentLetter = letter;
  };

  vm.getLetters = function() {
    var diff = 7 - vm.player1.letters.length;
    for (var i = 0; i < diff; i++) {
      console.log('test');
      var randomIndex = Math.floor(vm.scrabbleLetters.length * Math.random());
      var newLetter = vm.scrabbleLetters[randomIndex];
      vm.player1.letters.push(newLetter);
      vm.scrabbleLetters.splice(vm.scrabbleLetters.indexOf(newLetter), 1);
    }
  };

  vm.wordsCheck = function() {
    var words = [];
    for (var i = 0; i < vm.board.boardLayout.length; i++) {
      // console.log('test homie');
      var word = [];
      for (var j = 0; j < vm.board.boardLayout[i].length; j++) {
        // console.log('we are in the second for loop homie');
        // if (vm.board.boardLayout[i][j].value !== "/") {
          // console.log('test my condition homie');
          word.push(vm.board.boardLayout[i][j].value.letter);
        // }
      }
      // if (word){
      //   words.push(word);
      // }
      newWord = word.filter(function())
      word
    }
    console.log(words, 'these are my words homie');
  };

  vm.currentRow;
  vm.currentCol;
  vm.currentLetter = {};
  vm.firstLetter = true;
  // Rememeber to make vm.firstLetter false when a word is successfully submitted

  vm.letterCheck = function(event, num) {
    if (!vm.firstLetter) {
      vm.checkAdjacent(event, num);
    } else {
      vm.placeOnBoard(event, num);
      console.log('first letter placed');
      vm.firstLetter = false;
    }
  };

  vm.checkAdjacent = function(event, num) {
    if (event.target.innerText !== "") {
      console.log("can't place a letter here, dum dum!");
    } else {
      var i = num.row;
      var k = ((i - 1) > 0) ? i-1 : 0;
      var j = num.col;
      var l = ((j - 1) > 0) ? j-1 : 0;
      if(!vm.board.boardLayout[i][l].value && !vm.board.boardLayout[i][j+1].value && !vm.board.boardLayout[k][j].value && !vm.board.boardLayout[i+1][j].value) {
        console.log("not a valid place 4 letters here");
      } else {
        vm.placeOnBoard(event, num);
      }
    }
  };

  vm.placeOnBoard = function(event, num) {
    // MUST ADD LETTER TO ACTUAL BOARD LAYOUT
    console.log(event);
    event.target.innerText = vm.currentLetter.letter + vm.currentLetter.value;
    vm.pushPlacedTile(vm.currentLetter);
    vm.player1.letters.splice(vm.player1.letters.indexOf(vm.currentLetter), 1);
    vm.board.boardLayout[num.row][num.col].value = vm.currentLetter;
    vm.currentLetter = {};
  }
  vm.playedWords = [
    'feat',
    'feated'
  ];
  vm.player1 = {
    letters: [],
    score: 0,
    isTurn: true
  };
  vm.board = new Board();
  vm.board.generateBoard();
}]);
