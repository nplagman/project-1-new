var score = 0;
var originalState;
var waitingForNextQuestion = false;

// var questions = [
// 	{ question: 'What is 1 + 1?', answers: ['2', 'two' ] },
// 	{ question: 'What is 2 + 3?', answers: ['5', 'five' ] }
// ];
// questions[0].question
// questions[0].answers


function addHoverEvents() {
	console.log('adding hover events');
	$(".well").hover(function() {
    	$(this).addClass('yellow');
	}, function() {
        $(this).removeClass('yellow');
	});
}

function removeHoverEvents() {
	console.log('removing hover events');
	$(".well").off('mouseenter mouseleave');
}

function doAnswer(element, questionValue, answers) {

 	// $("#answer").on('input')

    var answer = $('#answer').val(); //what does this mean in words? 
					
    let match = answers.find(function(item) {
		return answer.toLowerCase() === item;
	});

	match = match ? true : false;


    if (match) {
    	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
    	score += questionValue;
    	console.log('updated score:', score);
    	$(".score").text("$" + score); //what is this doing, in words?
    }
    else  {
    	$('.question').html('<h3>could NOT have been more wrong</h3>');
    	score -= questionValue;
    	console.log('updated score:', score);
    	$(".score").text("$" + score);
	}

	$("#moveon").show();
	$("#moveon").on('click', function() {
		$(".question").html(originalState);
		$(".question").hide();
		$("#moveon").hide();
		element.css("background","white");	//I have to do this b/c if I remove #A1, the other squares shift, why? And what's the better way?
		waitingForNextQuestion = false;
		addHoverEvents();
	});
}

function doQuestion(element, questionText, answers) {
	if (waitingForNextQuestion) {
		return;
	}

	removeHoverEvents();

	waitingForNextQuestion = true;

	var questionValue = element.data("questionvalue");
	console.log('questionValue:', questionValue);

	// var clickHandler= $(this).data("events")['click'];  
	// $('.well').off("click");
	// $('.well').disable("click");
	// $('div:not(.question)').attr('disabled');
	
	$(".question").show();				
	$('<h4>' + questionText + '</h4>').appendTo('.question');
	$('#submit').one("click", function() {
		doAnswer(element, questionValue, answers);
	});

	// $('#answer').keyup(function(e) {
 //      if (e.keyCode == 13) {
 //      	doAnswer(element, questionValue, answers);
 //      }
 //    });
}

//scoreboard, next question button, category headers, game over, disable board when question posed
// cursor in input field, prettier scoreboard, Trebek, sound fx

$(document).ready(function() {
    $(".question").hide();
	$("#moveon").hide();

    originalState = $('.question').html();

	addHoverEvents();

	// if ($('.well').is('#A1', '#B1', '#C1', '#D1', '#E1')) {
	// questionValue = 100;
	// }
	// else if ($('.well').is('#A2', '#B2', '#C2', '#D2', '#E2')) {
	// questionValue = 200;
	// }
	// else if ($('.well').is('#A3', '#B3', '#C3', '#D3', '#E3')) {
	// questionValue = 300;
	// }
	// else if ($('.well').is('#A4', '#B4', '#C4', '#D4', '#E4')) {
	// questionValue = 400;
	// }
	// else if ($('.well').is('#A5', '#B5', '#C5', '#D5', '#E5')) {
	// questionValue = 500;
	// }

	//would prefer to not have to do one of these for every question; there must be a better way.
	$("#A1").one('click', function() {
		doQuestion($(this), '<h4>The "MVP" quarterback whose team is 14-6 when he doesn’t play.</h4>', ["tom brady", "brady"]);
	});
	 
	$("#A2").one('click', function() {
		doQuestion($(this), '<h4>The quarterback who really stupid people think is better than Peyton Manning.</h4>', ["tom brady", "brady"]);
	});

	$("#A3").one('click', function() {
		doQuestion($(this), '<h4>The quarterback who was named Super Bowl MVP after his first SB win thanks to his whopping 145 passing yards.</h4>', ["tom brady", "brady"]);
	});

	$("#A4").one('click', function() {
		doQuestion($(this), "<h4>An undeniably attractive quarterback married to a supermodel who isn't as hot as she's made out to be, ya know?.</h4>", ["tom brady", "brady"]);
	});

	$("#A5").one('click', function() {
		doQuestion($(this), "<h4>This quarterback has the greatest discrepancy in completion percentage between when he has time to throw and when he's hurried.</h4>", ["tom brady", "brady"]);
	});

	//would prefer instead of writing question in the h3 tags, say the ID and go grab it from JSON
	//I had to change the p to an h4 or something; better way?

	$("#B1").one('click', function() {
		doQuestion($(this), "<h4>The most badass midget of all-time.</h4><h3>Hint: GoT<br>Hint#2: character's name</h3>", ["tyrion", "tyrion lannister","tyrion lanister"]);
	});

	$("#B2").one('click', function() {
		doQuestion($(this), "<h4>The show that from season 3 to season 4 had the greatest discrepancy in awesomeness between two seasons in history. Right, Heisenberg?</h4>", ["breaking bad"]);
	});

	$("#B3").one('click', function() {
		doQuestion($(this), "<h4>The greatest show of all-time, despite all the dude junk.</h4>", ["game of thrones"]);
	});

	$("#B4").one('click', function() {
		doQuestion($(this), "<h4>A hilarious sitcom starring Rob Lowe as a famous TV lawyer who gets involved with his brother and father\’s law firm that was cancelled after 1 season because the morons gave it the name of a gay hookup app.</h4>", ["grinder","the grinder"]);
	});

	$("#B5").one('click', function() {
		doQuestion($(this), "<h4>Greatest comedy show of all-time, despite the half-assed animation style.</h4>", ["south park"]);
	});

	$("#C1").one('click', function() {
		doQuestion($(this), "<h4>Thinks he\’s superman after walking 3 yards untouched into the endzone. Has frosted tips on his tiny goatee. While crying like a baby about not feeling safe b/c he\’s getting hit, was dressed like the Joker.</h4>", ["cam newton"]);
	});

	$("#C2").one('click', function() {
		doQuestion($(this), "<h4>Used an hour long special to make an announcement that required a maximum of 2 words - he used a different two words, anyway. And just because…</h4>", ["lebron james","lebron"]);
	});

	$("#C3").one('click', function() {
		doQuestion($(this), "<h4>Ruined the career of nearly every wide receiver he played with, got every coach he played for fired, used part of his $130 million contract to fund dog murder, is dumb as a brick and has herpes.</h4>", ["mike vick", "michael vick", "vick"]);
	});

	$("#C4").one('click', function() {
		doQuestion($(this), "<h4>blah</h4>", ["south park"]);
	});


	// 			 $('<h4>Finally accepted that he\’s a gay fish.</h4>').appendTo('.question');
	//  (answer == "kanye" || answer == "Kanye" || answer == "Kanye West" || answer == "kanye west") {
	$("#C5").one('click', function() {
		doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// $('<h4>The name of the episode featuring \'you\'re gonna have a bad time</h4>').appendTo('.question');
	// $('.question').html('<h3>I\'d be impressed if that wasn\'t so f\'ing easy.</h3>')      //using h3 because it'll be unique, but there must be a better way
	$("#D5").one('click', function() {
		doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// $('<h4>The name of the hot chick.</h4>').appendTo('.question');
	//
	$("#D2").one('click', function() {
		doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// $('<h4>They used the same song during one of these in \'Team America\'.</h4>').appendTo('.question');

	$("#D3").one('click', function() {
		doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// $('<h4>The final race was down this mountain.</h4>').appendTo('.question');
	$("#D4").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// 				 $('<h4>The nickname the douche skier gave Stan.</h4>').appendTo('.question');
	$("#D1").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// 				 $('<h4>Concrete walls, floor and ceiling cause this really annoying acoustic effect.</h4>').appendTo('.question');
	$("#E1").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// 				 $('<h4>\$19 chairs with no lumbar support are most likely to cause pain in this area of the body.</h4>').appendTo('.question');
	$("#E2").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// 				 $('<h4>You should avoid driving during this phenomenon that occurs once in the am and again in the evening if you don\'t want to sit in traffic all freaking day.</h4>').appendTo('.question');
	$("#E3").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// 			 $('<h4>Nearly every single person of this gender SUCKS at driving and contributes to traffic.</h4>').appendTo('.question');
	$("#E4").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// 				 $('<h4>This company sells $2400 laptops with $600 specs, removes USB ports and charges you $20 for the necessary adapter, takes a month to ship a new purchase - from China - solders components to the machine so you can\'t upgrade it, and just plain sucks.</h4>').appendTo('.question');
	$("#E5").one('click', function() {
	  doQuestion($(this), "<h4>Whether you're excited he won or not, you've gotta admit he's a d-bag.</h4>", ["trump", "donald trump", "donald j. trump"]);
	});

	// Initialize Firebase
	var config = {
	    apiKey: "",
	    authDomain: "",
	    databaseURL: "",
	    storageBucket: "",
	};
	firebase.initializeApp(config);


//   var answer = prompt("Which river flows through Washington, D.C.?");
//     if (answer === "Potomac River"){
//       var questionValue = 200;
//       currentTotal+= questionValue;
//       $("#currentTotal").text("$" + currentTotal);
//       alert("Correct!");
//     }
//     else {
//       var questionValue = 200;
//       currentTotal -= questionValue;
//       $("#currentTotal").text("$" + currentTotal);
//       alert("Sorry, " + name + ", that's not correct.");
//     }
//    $("#one200").text("");
// })
             

});
