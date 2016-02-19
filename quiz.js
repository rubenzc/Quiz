ITERATION 1. Lectura, comprobación y muestra por pantalla de respuesta

var read = require('read')

var Question = function(statement, answer){
  this.statement = statement;
  this.answer = answer;
  this.id = 1;

  this.print_question = function(){
    options = {prompt: statement}
    read(options, displayName)
  }

  function displayName(err, answer){
    if (answer === 'yes'){
      console.log("Are you sure?? Go to bed!!");
    }
    else{
      console.log("Ok, congratulations!!")
    }
  }
}

// var Quiz = function(question){
//   this.question = question;
// }

var question = new Question("Under 18?", "yes");
question.print_question();

