var generator = require("../utl/generator");

var memStorage = require ("../utl/memory.storage");

var model = require ('../model/question.model');

exports.getAllQuestions = (req,res )=>{
  //  var seqId = generator.generate();
   // memStorage.store.setItem(seqId, "1st key");
   // var seqId_2 = generator.generate();
   // memStorage.store.setItem(seqId_2, "2nd key");
   // var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getValues(memStorage.store);
  console.log("Values..........." + JSON.stringify(values));

   // var Questions = model.Question;
    //var questionObj = new Question (seqId, "xxx" , "xxxx" , "dddd" , new Date ());
    
//res.send("get all questions..... KEYS.......... " + JSON.stringify(questionObj));
    return res.status(200).send(JSON.stringify(values));
}

exports.saveQuestion = (req,res)=> {
    var seqId = generator.generate();
//req body
    var title =req.body.title;
    var createdBy = "admin";
    var createdOn = new Date ();
    var content = req.body.content;
    if (!title || !content ){
       return  res.status(500).send ({error : 'title and content should not be empty'})

    }

   var questionItem= memStorage.store.getItem(questionId);
   if(!questionItem){
    return res.status(500).send({error:"question Id is not exist"})
   }
   
    var Question= model.Question;
    var questionObj = new Question(seqId, title , content  , createdBy, createdOn);
    memStorage.store.setItem(seqId, question);
    return res.status(201).send("Question save successfully");
    

}


exports.updateQuestion = (req, res)=> {
    var title =req.body.title;
    var createdBy = "admin";
    var questionId = req.body.questionId
    var createdOn = new Date ();
    var content = req.body.content;
    if (!questionId){
        return res.status(500)({error: "question Id shouldn't be empty "})
    }
    if (!title || !content ){
       return  res.status(500).send ({error : 'title and content should not be empty'})

    }


   
    var Question= model.Question;
    var questionObj = new Question (questionId, title , content  , createdBy, createdOn);
    memStorage.store.setItem(questionId, questionObj);
    return res.status(200).send("Question update successfully");
}

exports.deleteQuestion = (req,res)=> {

    var questionId = req.params.questionId;
    // validate not emptyyyy
    if (!questionId){
        return res.status(500)({error: "cannot delete empty questionId "})
    }

    var questionItem = memStorage.store.getItem(questionId);

    //validate already exists
    if (!questionItem)
    {
        return res.status(500).send({error: "questionId is not exist"})
    }

   memStorage.store.removeItem(questionId);
   return res.status(200).send("successfully question deleted");

}
