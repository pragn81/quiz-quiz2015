var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var creditsController = require('../controllers/credits_controller');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Quiz' });
});

//definicion de rutas de /quizes
router.get('/quizes', 						quizController.index);
router.get('/quizes/:quizId(\\d+)', 		quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', 	quizController.answer);

router.get('/author', creditsController.credits);

/*  //Forma alternativa sin usar controllers
router.get('/author', function (req, res, next) {
  res.render('author', {});
});
*/

module.exports = router;