var models = require ('../models/models.js');

//Autoload - factoriza el codigo si ruta incluye :quizId
exports.load = function(req, res, next, quizId){
	models.Quiz.find(quizId).then(
		function(quiz){
			if (quiz){
				req.quiz = quiz;
				next();
			}
			else {
				next(new Error('No existe quizId='+quizId));
			}
		}).catch(function (error){next(error);});
};

//get quizes
exports.index = function (req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index', {quizes: quizes});	
	}).catch(function (error){next(error);});
};

//get quizes/:id
exports.show = function (req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show', {quiz: req.quiz});	
	})  
};

//get quizes/:id/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta.toLowerCase()== req.quiz.respuesta.toLowerCase()){
	        resultado: 'Correcto';
	    }
	res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};