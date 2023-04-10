var express = require ('express');

const questionRoute = express.Router();

var questionController = require("../controller/questionController");
questionRoute.get ("/questions",questionController.getAllQuestions );
questionRoute.post ("/questions/save",questionController.saveQuestion);
questionRoute.post ("/questions/update",questionController.updateQuestion);
questionRoute.delete ("/questions/delete/:questionsId",questionController.deleteQuestion);


module.exports= questionRoute;