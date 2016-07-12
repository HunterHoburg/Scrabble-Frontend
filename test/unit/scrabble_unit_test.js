var expect = require('chai').expect;
var BoardTest = require('./board').boardTest;
var Board = require('./board').Board;

describe('verify board', function() {
  describe('checking array', function() {
    it('a blank array should return true', function() {
      var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];

      var newBT = new BoardTest();

      expect(newBT.verifyArray(arr)).to.equal(true);
    })
    it('an array with a nonexistant word should return false', function() {
      var arr = [null,null,'C','B','K',null,null,null,null,null,null,null,null,null,null,null];

      var newBT = new BoardTest();

      expect(newBT.verifyArray(arr)).to.equal(false);
    })
    xit('an array with a single existant word should return true', function() {
      var arr = [null,null,'C','A','T',null,null,null,null,null,null,null,null,null,null,null];

      var newBT = new BoardTest();

      expect(newBT.verifyArray(arr)).to.equal(true);
    });
  })
});
