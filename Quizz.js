var questionPosition = 0;

var correctAnswer = 0;

var test,Quizz_status,questions,choice,choices, choA,choB,choC,choD;

var questions=[
{
	question:"In wich year did Tunisia been under Colonization ?",
	a:"1956",
	b:"1881",
	c:"1887",
	d:"1971",
	answer:"B"

},
{
	question:"What is the name of the first party created in tunisia ?",
	a:"Tunisian Constitutional Free Party",
	b:"Tunisian Party",
	c:"The New Tunisian Constitutional Free Party",
	d:"Tahya Tounes",
	answer:"A"
},
{
	question:"Who was the Leader of the Resistance ?",
	a:"Mahmoud Matri",
	b:"taher sfar",
	c:"Mohamed Habib Bourguiba",
	d:"Abdelaziz Thaalbi",
	answer:"C"
},
{
	question:"In wich day Tunisia became an Indepndent Country ?",
	a:"17 of December",
	b:"13 of August",
	c:"9 of April",
	d:"20 of March",
	answer:"D"
},
{
	question:"In Which year Tunisia have been Qualified to Foot-Ball World Cup Finals for the first time ?",
	a:"1978",
	b:"1996",
	c:"2004",
	d:"2020",
	answer:"A"
},
{
	question:"When the Revolution has started in Tunisia ?",
	a:"7 of November",
	b:"Today haha",
	c:"14 of january",
	d:"17 of December",
	answer:"D"
},
{
	question:"When the Real Revolution will start ?",
	a:"when all Tunisians stand up and work hard",
	b:"when Tunisians Mentality evoluate",
	c:"when Tunisia try to find solutios ",
	d:"when Tunisians decide to at least try those prvious",
	answer:"D"
}

];

function getId(x){
	return document.getElementById(x);
};

function getClass(x){
	return document.getElementsByClassName(x);
};

function getName(x){
	return document.getElementByName(x);
}

function runderQuestions(){

	test = getId("test");

	if(questionPosition>=questions.length){

		test.innerHTML='<h1> you collect ' + correctAnswer + 'of ' + questions.length + 'right answers </h1>';

		getId("Quizz_status").innerHTML = "Quizz Completed";

		questionPosition = 0;

		correctAnswer = 0;

		 return false;

	}


getId("Quizz_status").innerHTML = "Question" + (questionPosition+1) + "of " + questions.length;
  
  question = questions[questionPosition].question;
  choA = questions[questionPosition].a;
  choB = questions[questionPosition].b;
  choC = questions[questionPosition].c;
  choD = questions[questionPosition].d;

  test.innerHTML = "<h2>" + question + "</h2>";

  test.innerHTML += '<label><input type="radio" name="choices" value="A">' + choA + '<label><br>';
  test.innerHTML += '<label><input type="radio" name="choices" value="B">' + choB + '<label><br>';
  test.innerHTML += '<label><input type="radio" name="choices" value="C">' + choC + '<label><br>';
  test.innerHTML += '<label><input type="radio" name="choices" value="C">' + choD + '<label><br>';
  test.innerHTML += '<button id="bttn" type="submit">Next</button>'

}

runderQuestions()

function checkAnswers(){

	getName("choices");

	for(var i = 0; i<choices.length; i++){

		if(choices[i].checked){

			choice=choices[i].value;


		}
	}

	if(choice === questions[questionPosition].answer){

		correctAnswer++;
	}

	questionPosition++;

	runderQuestions();

}



