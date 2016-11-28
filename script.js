$(document).ready(function() {
  $(".question").hide();

	var score = 0;

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
$("#A1").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The \"MVP\" quarterback whose team is 14-6 when he doesn’t play.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score); //what is this doing, in words?
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});
 
$("#A2").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The quarterback who really stupid people think is better than Peyton Manning.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});

//would prefer instead of writing question in the h3 tags, say the ID and go grab it from JSON
//I had to change the p to an h4 or something; better way?

$("#A3").click(function() {
				var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The quarterback who was named Super Bowl MVP after his first SB win thanks to his whopping 145 passing yards.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 

				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});

$("#A4").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>An undeniably attractive quarterback married to a supermodel who isn\'t as hot as she\'s made out to be, ya know?.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#A5").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>This quarterback has the greatest discrepancy in completion percentage between when he has time to throw and when he\'s hurried.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tom Brady" || answer == "Brady" || answer == "brady" || answer == "tom brady") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});

$("#B1").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The most badass midget of all\-time.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "Tyrion Lannister" || answer == "tyrion lannister" || answer == "tyrion lanister" || answer == "Tyrion"  ) {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#B2").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The show that from season 3 to season 4 had the greatest discrepancy in awesomeness between two seasons in history. Right, Heisenberg?</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "breaking bad" || answer == "Breaking Bad") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#B3").click(function() {
				var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>The greatest show of all-time, despite all the dude junk.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "game of thrones" || answer == "Game of Thrones" || answer == "a game of thrones" || answer == "A Game of Thrones") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#B4").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>A hilarious sitcom starring Rob Lowe as a famous TV lawyer who gets involved with his brother and father\’s law firm that was cancelled after 1 season because the morons gave it the name of a gay hookup app.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "grinder" || answer == "The Grinder" || answer == "the grinder" || answer == "Grinder") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#B5").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Greatest comedy show of all-time, despite the half-assed animation style.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "south park" || answer == "South Park") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#C1").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Thinks he\’s superman after walking 3 yards untouched into the endzone. Has frosted tips on his tiny goatee. While crying like a baby about not feeling safe b/c he\’s getting hit, was dressed like the Joker.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "cam newton" || answer == "Cam Newton" || answer == "Newton") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#C2").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Used an hour long special to make an announcement that required a maximum of 2 words - he used a different two words, anyway. And just because…</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "lebron james" || answer == "lebron" || answer == "LeBron James" || answer == "Lebron James") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#C3").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Ruined the career of nearly every wide receiver he played with, got every coach he played for fired, used part of his $130 million contract to fund dog murder, is dumb as a brick and has herpes.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "vick" || answer == "michael vick" || answer == "Michael Vick" || answer == "Vick" || answer == "Mike Vick" || answer == "mike vick" || answer == "Ron Mexico" || answer == "ron mexico") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#C4").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Whether you\'re excited he won or not, you\'ve gotta admit he\'s a d-bag.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "trump" || answer == "donald trump" || answer == "Donald Trump" || answer == "Donald J. Trump") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#C5").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>Finally accepted that he\’s a gay fish.</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "kanye" || answer == "Kanye" || answer == "Kanye West" || answer == "kanye west") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#D1").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score); 
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#D2").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#D3").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#D4").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#D5").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#E1").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#E2").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#E3").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#E4").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
});
							});


$("#E5").click(function() {
var questionValue = $(this).data("questionvalue");
				 $(".question").show();
				 $('<h4>XXXXXXXXXXXXXX</h4>').appendTo('.question');
				 $('#submit').click(function() {
				 	 $("#answer").on('input')
				        var answer = $('#answer').val(); //what does this mean in words? 
				       
												
				        if 
				        	(answer == "XXXX" || answer == "XXX" || answer == "XX" || answer == "XXXX") {
				        	$('.question').replaceWith('<h3>omg you\'re so smart</h3>')      //using h3 because it'll be unique, but there must be a better way
				        	score += questionValue;
				        	$(".score").text("$" + score);
				        }
				        else 
				        	{
				        	$('.question').replaceWith('<h3>could NOT have been more wrong</h3>');
				        	score -= questionValue;
				        	$(".score").text("$" + score);
        	 }
        
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



