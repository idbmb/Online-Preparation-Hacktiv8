$(document).ready(function() {
$('h1').hide().delay(500).fadeIn('slow');
$('.status').hide().delay(700).fadeIn('slow');
generateQuestions();
generateAnswers();
submit();
restart();
});

var currentQuestion = 0;
var selectedAnswer = "";
var score = 0;
var questions = new Array();


//daftar pertanyaan
function Question(currentQuestion,answers,correct) {
	this.currentQuestion = currentQuestion;
	this.answers = answers;
	this.correct = correct;
}

questions [0] = new Question ("Apa itu HACKTIV8?",["Kelas Pemrograman Full-Stack JavaScript di Jakarta", "Program pelatihan Developer", "Program pelatihan PHP MYSQL", "Program pelatihan Database.", "None of the above"], 0);
questions [1] = new Question ("Berikut ini yang bukan termasuk INSTRUCTOR HACKTIV8?",["Rubi Henjaya", "Vanessa Alexandra", "Haidar Hanif", "Windiyana Krismanuyar", "Akbar Sahata"], 1);
questions [2] = new Question ("Siapa CHIEF EXECUTIVE OFFICER HACKTIV8 yang berpengalaman lebih dari 10 tahun di industri IT sebelumnya menjabat sebagai CTO di Gift Card Indonesia?",["Ronald Ishak", "Riza Fahmi", "Akbar Sahata", "Haidar Hanif", "Rubi Henjaya"], 0);
questions [3] = new Question ("HEAD OF MARKETING di HACKTIV8?",["Johanes Irsan", "Ria Fransiska", "Vanessa Alexandra", "Adhy Wiranata", "Juventia Vicky"], 4);
questions [4] = new Question ("BUSINESS OPERATIONS MANAGER di HACKTIV8?",["Ria Fransiska", "Vanessa Alexandra", "Johanes Irsan", "Juventia Vicky", "Rubi Henjaya"], 2);
questions [5] = new Question ("CAREER DEVELOPER di HACKTIV8?",["Johanes Irsan", "Ria Fransiska", "Vanessa Alexandra", "Windiyana Krismanuyar", "Juventia Vicky"], 1);
questions [6] = new Question ("ADMISSIONS COUSELOR di HACKTIV8?",["Akbar Sahata", "Riza Fahmi" , "Adhy Wiranata", "Ronald Ishak", "Vanessa Alexandra"], 4);
questions [7] = new Question ("CAMPUS OPERATIONS DIRECTOR di HACKTIV8?",["Ness", "Adhy Wiranata", "Lucas", "Kumatora", "Poo"], 1);
questions [8] = new Question ("Siapa CURRICULUM DIRECTOR HACKTIV8 yang berpengalaman lebih dari 10 tahun dalam industri IT dan Web sebelumnya menjabat sebagai CTO di CitizenLab?",["Akbar Sahata", "Ronald Ishak", "Haidar Hanif", "Riza Fahmi", "None of the above"], 3);
questions [9] = new Question ("Codename Dalam program HACKTIV8 Batch 4?",["Cross Fox", "Alpha's Fox", "Darwin's Fox", "Beta's Fox", "Delta's Fox"], 2);


//tampilkan pertanyaan
function generateQuestions() {
var q = questions [currentQuestion].currentQuestion;
$('#heading').append('<h4>' + q + '</h4>').hide().delay(1200).fadeIn('slow');
}

//tampilkan jawaban
function generateAnswers(){
var write = "";
var a1 = questions [currentQuestion].answers;
for (var i = 0; i < a1.length; i++) {
    write += "<li><input type='radio' name='radio' class='option' value=" +(i)+ ">" + a1[i]+ "</li>";
}
$("#answers").append(write).hide().delay(1200).fadeIn('slow');
}

//tombol radio diklik
function submit(){
$('.option').click(function() {
   if($("input[type='radio'][name='radio']").is(':checked')) {
   	evaluation();
   	$('.option').attr('disabled',true);
   }
});
}

//mengevaluasi jawaban
function evaluation() {
var selected = $("input[type='radio'][name='radio']:checked");
	if (selected.length >= 0) {
    	selectedAnswer = selected.val();
	}
	if (selectedAnswer == questions [currentQuestion].correct) {
		$('#correct').append("<p>Correct!</p>").hide().delay(400).fadeIn('400');
		$('#next').append("<p>Next</p>").hide().delay(400).fadeIn('400');
		$('#correct-answer').append("<p>The correct answer is" + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(400).fadeIn('400');
		nextQuestion();
		playerScore();
		currentQuestion++;
	}

	else {
		$('#incorrect').append("<p>Incorrect.</p>").hide().delay(400).fadeIn('400');
		$('#next').append("<p>Next</p>").hide().delay(400).fadeIn('400');
		$('#correct-answer').append("<p>The correct answer is" + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(400).fadeIn('400');
		nextQuestion();
		currentQuestion++;
	}
}

//pertanyaan selanjutnya
function nextQuestion() {
 	$("#next").click(function() {
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();

if (currentQuestion >= 10) {
	complete();
	restart();
	return;
	}
else {
	questionNumber();
	generateQuestions();
	generateAnswers();
	submit();
	}
});

}

//set score
function playerScore() {
	$('#score p').remove();
	score++;
	$('#score').append(" " + '<p>' + score + '</p>');

}

//penanda pertanyaan
function questionNumber() {
	$('#question p').remove();
	$('#question').append(" " + '<p>' + (currentQuestion +1) + '/10</p>');
}

//penghitungan akhir
function complete() {
	$('.status').hide();
	$('#heading').append("<h4>You scored" + " " + score + " " + "out of 10 <br>" + "<div class='restart'><p>Restart</p></div></h4>").hide().fadeIn('400');
	$('.restart').addClass('quiz-end');
}

//tombol restart
function restart() {
	$('.restart').click(function() {
		$('.restart').removeClass('quiz-end');
		currentQuestion = 0;
		score = (score-(score+1));
		questions [0];
		$('#score').hide().delay(400).fadeIn('slow');
		$('#question').hide().delay(400).fadeIn('slow');
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();
		questionNumber();
		generateQuestions();
		generateAnswers();
		submit();
		playerScore();
		$('.status').show();
	});
}
