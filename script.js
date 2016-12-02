//scoreboard, next question button, category headers, game over, disable board when question posed, enter submit
//PERFECT WORLD: toggle player, sound fx, cursor in input field

$(document).ready(function() {
  $(".question").hide();
  $("#moveon").hide();



	var score = 0;
	var originalState = $('.question').html();

	$(".well").hover(function() {
  	$(this).addClass('blue');
	}, function() {
  $(this).removeClass('blue');
	});

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
var questionValue = $(this).data("questionvalue");
				 $(".question").show();				
				 $('<h4>The \"MVP\" quarterback whose team is 14-6 when he doesn’t play.</h4>').appendTo('.question');
				 $('#submit').one("click", function() {

				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 

				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score); //what is this doing, in words?
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        	 $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#A1").css("background","white");	//I have to do this b/c if I remove #A1, the other squares shift, why? And what's the better way?

        	 })
        
});
							});
 
$("#A2").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The quarterback who really stupid people think is better than Peyton Manning.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#A2").css("background","white"); })
});
							});

//would prefer instead of writing question in the h3 tags, say the ID and go grab it from JSON
//I had to change the p to an h4 or something; better way?

$("#A3").one('click', function() {
				var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The quarterback who was named Super Bowl MVP after his first SB win thanks to his whopping 145 passing yards.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 

				       												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#A3").css("background","white");
        	 })
});
							});

$("#A4").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>An undeniably attractive quarterback married to a supermodel who isn\'t as hot as she\'s made out to be, ya know?.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
                $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#A4").css("background","white"); })
});
							});


$("#A5").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>This quarterback has the greatest discrepancy in completion percentage between when he has time to throw and when he\'s hurried.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
                $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#A5").css("background","white"); })
});
							});

$("#B1").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The most badass midget of all\-time.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tyrion Lannister" || answer == "tyrion lannister" || answer == "tyrion lanister" || answer == "Tyrion"  ) {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
                $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#B1").css("background","white"); })
});
							});


$("#B2").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The show that from season 3 to season 4 had the greatest discrepancy in awesomeness between two seasons in history. Right, Heisenberg?</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "breaking bad" || answer == "Breaking Bad") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#B2").css("background","white"); })
});
							});


$("#B3").one('click', function() {
				var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The greatest show of all-time, despite all the dude junk.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "game of thrones" || answer == "Game of Thrones" || answer == "a game of thrones" || answer == "A Game of Thrones") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#B3").css("background","white"); })
});
							});


$("#B4").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>A hilarious sitcom starring Rob Lowe as a famous TV lawyer who gets involved with his brother and father\’s law firm that was cancelled after 1 season because the morons gave it the name of a gay hookup app.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "grinder" || answer == "The Grinder" || answer == "the grinder" || answer == "Grinder") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#B4").css("background","white"); })
});
							});


$("#B5").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Greatest comedy show of all-time, despite the half-assed animation style.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "south park" || answer == "South Park") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#B5").css("background","white"); })
});
							});


$("#C1").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Thinks he\’s superman after walking 3 yards untouched into the endzone. Has frosted tips on his tiny goatee. While crying like a baby about not feeling safe b/c he\’s getting hit, was dressed like the Joker.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "cam newton" || answer == "Cam Newton" || answer == "Newton") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#C1").css("background","white"); })
});
							});


$("#C2").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Used an hour long special to make an announcement that required a maximum of 2 words - he used a different two words, anyway. And just because…</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "lebron james" || answer == "lebron" || answer == "LeBron James" || answer == "Lebron James") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#C2").css("background","white"); })
});
							});


$("#C3").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Ruined the career of nearly every wide receiver he played with, got every coach he played for fired, used part of his $130 million contract to fund dog murder, is dumb as a brick and has herpes.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "vick" || answer == "michael vick" || answer == "Michael Vick" || answer == "Vick" || answer == "Mike Vick" || answer == "mike vick" || answer == "Ron Mexico" || answer == "ron mexico") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#C3").css("background","white"); })
});
							});


$("#C4").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Whether you\'re excited he won or not, you\'ve gotta admit he\'s a d-bag.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "trump" || answer == "donald trump" || answer == "Donald Trump" || answer == "Donald J. Trump") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#C4").css("background","white"); })
});
							});


$("#C5").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Finally accepted that he\’s a gay fish.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "kanye" || answer == "Kanye" || answer == "Kanye West" || answer == "kanye west") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#C5").css("background","white"); })
});
							});


$("#D5").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The name of the episode featuring \'you\'re gonna have a bad time</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "asspen" || answer == "Asspen") {
				        	$('.question').html('<h3>I\'d be impressed if that wasn\'t so f\'ing easy.</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score); 
				        }
				        else 
				        	{
				        	$('.question').html('<h3>Figures. Loser.</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#D5").css("background","white"); })
});
							});


$("#D2").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The name of the hot chick.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "heather" || answer == "Heather" || answer == "who cares, she\'s hot") {
				        	$('.question').html('<h3>what, are you in love with her or something? She\'s animated you perv</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>just as well, you had no shot with her, anyway</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#D2").css("background","white"); })
});
							});


$("#D3").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>They used the same song during one of these in \'Team America\'.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "montage" || answer == "training montage") {
				        	$('.question').html('<h3>please, that one was easy</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>how the f%*$ did you miss that one?!?!</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#D3").css("background","white"); })
});
							});


$("#D4").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The final race was down this mountain.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "K13" || answer == "k13" || answer == "k-13" || answer == "K-13") {
				        	$('.question').html('<h3>Good memory. JK, clearly you cheated.</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>You suuuuuuuuuuuuuuck.</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#D4").css("background","white"); })
});
							});


$("#D1").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The nickname the douche skier gave Stan.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "darsh" || answer == "Darsh" || answer == "Stan Darsh" || answer == "stan darsh") {
				        	$('.question').html('<h3>you were probably guessing. Whatever.</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>WRONG! You\'re the darsh!</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#D1").css("background","white"); })
});
							});


$("#E1").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Concrete walls, floor and ceiling cause this really annoying acoustic effect.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "echo" || answer == "reverb") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
         $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#E1").css("background","white"); })
});
							});


$("#E2").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>\$19 chairs with no lumbar support are most likely to cause pain in this area of the body.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "back" || answer == "lower back" || answer == "lumbar" || answer == "spine") {
				        	$('.question').html('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#E2").css("background","white"); })
});
							});


$("#E3").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>You should avoid driving during this phenomenon that occurs once in the am and again in the evening if you don\'t want to sit in traffic all freaking day.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "rush hour") {
				        	$('.question').html('<h3>Yes. Or, people could learn how to drive. HAHAHHAHAHA!</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#E3").css("background","white"); })
});
							});


$("#E4").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Nearly every single person of this gender SUCKS at driving and contributes to traffic.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "men" || answer == "women" || answer == "male" || answer == "female") {
				        	$('.question').html('<h3>The answer is both because all of you suuuuuuuuck at driving.</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>Both men and women were correct, how did you get this wrong?!</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#E4").css("background","white"); })
});
							});


$("#E5").one('click', function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>This company sells $2400 laptops with $600 specs, removes USB ports and charges you $20 for the necessary adapter, takes a month to ship a new purchase - from China - solders components to the machine so you can\'t upgrade it, and just plain sucks.</h4>').appendTo('.question');
				 $('#submit').one('click', function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "apple" || answer == "mac" || answer == "Apple") {
				        	$('.question').html('<h3>Yay you accepted the truth, or you\'re willing to compromise your values to win a game - I respect that.</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').html('<h3>you know the answer, loser. Lying to yourself doesn\'t make Apple any less exploitative.</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        $("#moveon").show();
        	 $("#moveon").on('click', function() {
        	 	$(".question").html(originalState);
        	 	$(".question").hide();
        	 	$("#moveon").hide();
        	 	$(".well#E5").css("background","white"); })
});
							});






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



