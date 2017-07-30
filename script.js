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
var pairNumber = 0;
var array = [];
var index = 0;

$('.card button').click(function(){
  var select = $(this).text();
  // takes values from cards, and adds them to an array for comparison.
  $(this).addClass('selected');
  array.push(select);
  index += 1;

  // registers clicks and takes value, then it compares it to each other to check if it's correct or not.
  if (index == 2){
    if(array[0] == array[1]){
      pairNumber +=1;
      index = 0;
      array = [];
      // adds to number of correct answers
      $('.selected').addClass('good');
    }
    if(array[0] != array[1]){
      $('*').removeClass('selected');
      index = 0;
      array = [];
    }
  };

  if (pairNumber === 1){
    alert('You win. It took you ' +(time -1) + ' seconds and '+ points +' moves. Congratulations!');
    clearInterval(clock);
  }

  // score tracker code.
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
