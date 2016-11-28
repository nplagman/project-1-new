
$(document).ready(function() {
  $(".question").hide();


$(".well").hover(function() {
  $(this).addClass('blue');
}, function() {
  $(this).removeClass('blue');
});


//would prefer to not have to do one of these for every question; there must be a better way.
$("#A1").click(function() {
 $(".question").show();
 $('<h4>The \"MVP\" quarterback whose team is 14-6 when he doesn’t play.</h4>').appendTo('.question');
 $('#submit').click(function() {
 	
 }


//would prefer instead of writing question in those p tags, say the ID and go grab it from JSON
//I have to change the p to an h4 or something; better way?



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
});




	
// $(".well").click(function() {


//  function() {
//     $(this).closest(".well").css("z-index", 0);
//     $(this).animate({ height: "90", width: "90", left: "+=55", top: "+=55" }, "fast");
// });​


// $('div').hover(function(){
//   $(this).addClass('green');
// });
