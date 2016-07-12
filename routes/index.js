var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../public/views/index.html');
});

// var options = {
//   host: 'www.dictionaryapi.com',
//   path: '/api/v1/references/collegiate/xml/test?dog',
//   'api-key': '808ecb41-280e-4178-9526-faa0edc005bb',
//   method: 'GET'
// }
//
// router.get('/word', function(req, res, next) {
//   http.request(options, function(response) {
//     console.log(response);
//     res.render('../public/views/index.html');
//   });
//   // console.log('test');
//   // res.end();
// })

module.exports = router;
