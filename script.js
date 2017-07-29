// event listener on load trigger counter
$(document).on("pageload",clock);
// timer
let time = 0;
var clock = setInterval(function () {
   $('.time').text (time + ' secs');
	time ++;
},1000);

// score tracker
let points = 0.5;
$('.card button').click(function(){

	if (points < 9.5){
	$('.stars').text(Math.round(points) + ' moves' + ' ★★★' );
	}

	if (points >= 9.5){
	$('.stars').text(Math.round(points)+ ' moves ' + ' ★★☆' );
	}

	if (points >= 13.5){
	$('.stars').text(Math.round(points)+ ' moves ' + ' ★☆☆');
	}
	points += 0.5;
});

//reset button
$('.reset').click(function() {
    window.location.reload();
});
