var http = require("http");

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

function boardTest() {
  //var board = new Board();
};

boardTest.prototype.verifyArray = function(arr) {
  http.get('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=808ecb41-280e-4178-9526-faa0edc005bb', function(reponse) {
    console.log(response);
  });
  return true;
}

module.exports = {boardTest: boardTest, Board: Board};
