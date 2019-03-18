/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

$('.card').on('click',function(){
	if(!$(this).hasClass('match')){
		var card = $(this).children().attr('class');
		var card =$(this).addClass('open show');
		var val =  $('.open').val('n').length;
		
		if(val >= 2){
			var select1 = $('.open').first();
			var select2 = $('.open').last();
			if(select1.children().hasClass(select2.children().attr('class'))){
				$('.open').addClass('match');
				$('.open').effect("bounce",500);
				setTimeout(function(){
	        	$('.open').removeClass('open show');
				},510);
				
			}else{
			$('.open').effect("shake",600);
			$('.open').css('background-color','red');

			setTimeout(function(){
	        	$('.open').removeClass('open show');
				},610);

			}
		}
	}

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
