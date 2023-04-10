exports.Question = class Question {

    constructor(questionId , title , content, createdBy , createdOn) {
        this.questionId =questionId;
        this.title= title;
        this.content= content;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
    }
}


