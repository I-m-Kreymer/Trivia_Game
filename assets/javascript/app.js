$(document).ready(function(){

var RemainingQuestionsArray
var CurrentQuestion
var QuestionsArray = [
	    {Question: "What is my Name?",
	     Answers:{
	    	PossibleAnswer: ["Igor","John","Mike","Alex"],
	    	CorrectAnswer:"Igor"
	    	}
	    },
        {Question: "What is my Wife's Name?",
	    Answers:{
	    	PossibleAnswer: ["Igor","Diana","Lena","Galina"],
	    	CorrectAnswer:"Diana"}
	    }
	    ];

	//Fisher-Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}; //End Fisher Yates Shuffle

console.log(QuestionsArray.length);

function StartGame () {
$('.StartButton').on('click',function (){
	 RemainingQuestionsArray = QuestionsArray;
	 NextQuestions();

}); 
}; //end of the StartGame Function
function NextQuestions () {
		CurrentQuestion = Math.floor(Math.random()*RemainingQuestionsArray.length);
		console.log(QuestionsArray[CurrentQuestion].Question);
		shuffle(QuestionsArray[CurrentQuestion].Answers.PossibleAnswer);
		console.log(QuestionsArray[CurrentQuestion].Answers.PossibleAnswer);
		
		QuestionDiv();



		RemainingQuestionsArray = RemainingQuestionsArray.splice(CurrentQuestion,1); // remove one entry from the array to avoid duplicates
		console.log(RemainingQuestionsArray);


}; // end of next question function

	//Question Divs
	function QuestionDiv() {

		$('.jumbotron').empty(); //Clear out the previous question
		var $TriviaQuestion = $('<div>' + QuestionsArray[CurrentQuestion].Question + '</div>');
			$TriviaQuestion.addClass("trivia-question");
		$('.jumbotron').append($TriviaQuestion);
		
		for (var i=0; i < QuestionsArray[CurrentQuestion].Answers.PossibleAnswer.length; i++) {
		var $AnswerOption =	$('<div>' + QuestionsArray[CurrentQuestion].Answers.PossibleAnswer[i] + '</div>');
			$AnswerOption.addClass("answer-option");
			$('.jumbotron').append($AnswerOption);
		};
		
	}; //End Question Div

	//Answer Click Function
	$('.answer-option').on('click',function(){

	}); // End click event

StartGame ();
    }); //document.ready ending

