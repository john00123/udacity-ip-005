

// cards in play
var cards =['Boat ⛵️', 'Boat ⛵️', 'Car 🚗', 'Car 🚗','House 🏡', 'House 🏡',
'Light 💡', 'Light 💡','Lamp 🛋', 'Lamp 🛋','Bath 🛁', 'Bath 🛁','Leaf 🍁', 'Leaf 🍁','Book 📖', 'Book 📖'];

// timer
var time = 0;
var clock = setInterval(function () {
$('.time').text(time + ' secs'),
time++;
}, 1000);

//game
$(function(){
  var max = cards.length;
  var min = 1;

  // create and random assign cards
	while (max >= min){
		var randomizer = Math.floor( Math.random()*(max-min+1));
		var loopValue = cards[randomizer];
		$('.table').append('<div class =\'card\'>'
    + loopValue + '</div>'),
		max --,
		cards.splice(randomizer,1);
	}

  // score tracker
  var moves = 0.5;
  var correctAnswers = 0;
  var array = [];
  var index = 0;

  // on card click behavior
  $('.card').click(function () {
    var select = $(this).text();

    // adds and compares cards from array
    array.push(select);
    $(this).addClass('selected');
    index += 1;

    // compare cards
    if (index == 2) {

      // disables cards while animating
      $('.card').toggleClass('stop');

      // correct
      if (array[0] == array[1]) { setTimeout(function () {
          var correct = $('.selected').addClass('good');
          $('.card').toggleClass('stop');
        }, 400);
        index = 0;
        array = [];
        correctAnswers += 1;

      // incorrect
      } else { setTimeout(function () {
        $('.card').toggleClass('stop');
        $('*').removeClass('selected');
      }, 800);
        index = 0;
        array = [];
      }
    }

    // score tracker code.
    if (moves < 14.5) {
      $('.stars').html(Math.round(moves) + ' moves <span> ★ ★ ★ </span>');

    } if (moves >= 14.5) {
      $('.stars').html(Math.round(moves) + ' moves <span> ★ ★ ☆</span>');

    } if (moves >= 24.5) {
      $('.stars').html(Math.round(moves) + ' moves <span> ★ ☆ ☆</span>');
    }

    moves += 0.5;

    //victory code
    if (correctAnswers === ($('.card').length / 2)) {
      setTimeout(function () {
        $('.popup').css('pointer-events','all'),
        $('.popup').css('opacity','1');
        clearInterval(clock);
      }, 1800);
    }
  });
});

//reset button
$('.reset button').click(function () {
  window.location.reload();
});

//reset keydown
$(document).ready(function () {
  $('body').on('keydown keyup',function(e){
      if(e.which == 82){
        window.location.reload();
      }
    });
});
