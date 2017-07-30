// event listener on load trigger counter
$(document).on("pageload",clock);


// timer
let time = 0;
var clock = setInterval(function () {
  $('.time').text (time + ' secs');
	time ++;
},1000);


// score tracker code.
let points = 0.5;
$('.card button').click(function(){

	if (points < 9.5){
	$('.stars').html(Math.round(points) + ' moves <span>&#9733; &#9733; &#9733;</span>' );
	}

	if (points >= 9.5){
	$('.stars').html(Math.round(points) + ' moves <span>&#9733; &#9733; &#9734;</span>' );
  }

	if (points >= 13.5){
	$('.stars').html(Math.round(points) + ' moves <span>&#9733; &#9734; &#9734;</span>' );
  }

	points += 0.5;

});


//reset button
$('.reset').click(function() {
    window.location.reload();
});
