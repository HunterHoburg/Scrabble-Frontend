require('../helper');

var http = require('http');
var server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Scrabble Board Acceptance', function() {
  describe('Given I visit /', function() {
    it('should see a header', function() {
      browser.get('/');
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('Testaroony');
      });
    });

    it('should have a parent div with many cells', function() {
      browser.get('/');
      element(by.id('board')).isPresent().then(function(elm) {
        expect(elm).to.be.true;
      });
    });
  });
});
