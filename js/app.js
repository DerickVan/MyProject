/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   -2450976 loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var moves =0;
var block = false;
$('.moves').text('0');


$('.card').on('click',function(){
	if(!$(this).hasClass('match') && !block){
		var card = $(this).addClass('open show');
		var val =  $('.open').val('n').length;
		
		if(val >= 2){
			block = true;
			var select1 = $('.open').first();
			var select2 = $('.open').last();
			if(select1.children().hasClass(select2.children().attr('class'))){
				$(select1).addClass('match');
				$(select2).addClass('match');
				$(select1).effect("bounce",500);
				$(select2).effect("bounce",500);
				
				setTimeout(function(){
	        	$(select1).removeClass('open show');
				$(select2).removeClass('open show');
				},400);
				
			}else{
				$('.open').effect("shake",500);
				$('.open').css('background-color','red');

				setTimeout(function(){
		        	$(select1).removeClass('open show');
					$(select2).removeClass('open show');
				},400);

			}
			moves++;
			$('.moves').text(moves);

		}
		var timer =	 setInterval(function(){
			block = false;
		}, 1000);
	}

});
$('.restart').on('click',function(){
	console.log('restart');
	$('.card').removeClass('open show match');
	moves = 0;
	$('.moves').text(0);
});

$('.card').on('click',function(){
	var totalMatch = $('.match').val('n').length;
	console.log(totalMatch);
	if(totalMatch >= 16){
		$('#modal1').modal({clickClose:false});
	}
});

$('#button1').on('click',function(){
	$('#modal1').modal('hide');
});

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
