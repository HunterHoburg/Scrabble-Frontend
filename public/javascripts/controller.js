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
// var parseString = require('xml2js').parseString;
app.controller('boardController', ['$scope', '$http', function($scope, $http) {
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
 //
 //  vm.wordsCheck = function() {
 //   var words = [];
 //   for (var i = 0; i < vm.board.boardLayout.length; i++) {
 //     var word = [];
 //     for (var j = 0; j < vm.board.boardLayout[i].length; j++) {
 //       if(vm.board.boardLayout[i][j].value){
 //         word.push(vm.board.boardLayout[i][j].value.letter);
 //       }
 //     }
 //     var newWord = word.filter(function(elem, index, arr) {
 //       if (elem !== null) {
 //         return elem;
 //       }
 //     })
 //     if (word[0]) {
 //       words.push(newWord);
 //     }
 //   }
 //
 //   for(var h = 0; h < words.length; h++) {
 //     var newWord = words[h].join('');
 //     if (newWord.length >= 2) {
 //       $http({
 //         method: 'GET',
 //         url: 'http://icant.co.uk/sandbox/scrabblr/?word=' + newWord
 //       }).then(function(response) {
 //         console.log('json output homie', response);
 //         if(response.data === "0") {
 //           console.log('not a word, nerd');
 //         } else {
 //           console.log('word length',words[h]);
 //           console.log('that is a word');
 //          // 1. Push these into the actual board
 //          // 2. Push the words into an array
 //          // 3. Tally up the points for the word
 //          // for (var t = 0; t < words[h].length; t++) {
 //          //   console.log(words[h][t]);
 //          //   vm.player1.score += words[h][t].score;
 //          // }
 //          // console.log(vm.player1.score);
 //
 //         }
 //       });
 //     }
 //   }
 // };
  vm.wordsCheck = function() {
   var words = [];
   for (var i = 0; i < vm.board.boardLayout.length; i++) {
     var word = [];
     for (var j = 0; j < vm.board.boardLayout[i].length; j++) {
       if(vm.board.boardLayout[i][j].value){
         word.push(vm.board.boardLayout[i][j].value.letter);
       }
     }
     var newWord = word.filter(function(elem, index, arr) {
       if (elem !== null) {
         return elem;
       }
     })
     if (word[0]) {
       words.push(newWord);
     }
   }

   for(var h = 0; h < words.length; h++) {
     var newWord = words[h].join('');
     if (newWord.length >= 2) {
       $http({
         method: 'GET',
         url: 'http://www.wordgamedictionary.com/api/v1/references/scrabble/' + newWord + '?key=1.0879498205544081e30'
       }).then(function(response, words) {
         var x2js = new X2JS();
         var parsedResponse = x2js.xml_str2json(response.data);
         console.log('json output homie', parsedResponse);
         if(parsedResponse.entry.scrabble === "0") {
           console.log('not a word, nerd');
         } else {
          //  console.log('word length',words[h]);
           console.log('that is a word');
          // 1. Push these into the actual board
          // 2. Push the words into an array
          // 3. Tally up the points for the word
          console.log(vm.board.boardLayout);
          vm.player1.score += 10;
          console.log(vm.player1.score);
         }
       });
     }
   }
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
