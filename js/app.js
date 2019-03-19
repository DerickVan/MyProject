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
var moves =0;
var block = false;
var inicioTemp= false;
var intervalo;

function tempo(op) {
	if(op == "inicio"){
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) $('#hora').text("0" + h + "h"); else $('#hora').text(h + "h");
		if (s < 10) $('#segundo').text("0" + s + "s"); else $('#segundo').text(s + "s");
		if (m < 10) $('#minuto').text("0" + m + "m"); else $('#minuto').text(m + "m");		
		s++;
	},1000);
	}else if(op == "parar"){
		window.clearInterval(intervalo);
		console.log("teste parar");
		var hora = 	$('#hora').text() + 
					$('#minuto').text() +
					$('#segundo').text();
		$('.temp').text(hora);
	}else if(op == "limpar"){
		window.clearInterval(intervalo);
		s = 0;
		m = 0;
		h = 0;
		$('#hora').text("00h");
		$('#minuto').text("00m");
		$('#segundo').text("00s");
	}
}

	

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
function createArray(array){
  let cards = [
  "fa fa-diamond", 
  "fa fa-paper-plane-o", 
  "fa fa-anchor", 
  "fa fa-bolt", 
  "fa fa-cube", 
  "fa fa-leaf", 
  "fa fa-bicycle", 
  "fa fa-bomb"]; // save all the initial symbols into one array.
	let arryElem = [...cards, ...cards]; 
 	arryElem = shuffle(arryElem);
	array = arryElem;
    return array;

}

function prepareGame(){
   $(this).addClass(array.pop());
}
function removeGame(){
	$(this).removeClass();	
}
function effect(select1,select2,boolean){
 	if(boolean){
 		$(select1).effect("bounce",500);
		$(select2).effect("bounce",500);
		
		setTimeout(function(){
        	select1.removeClass('open show');
			select2.removeClass('open show');
		},400);
 	}else{
 		$('.open').effect("shake",500);
		$('.open').css('background-color','red');

		setTimeout(function(){
        	select1.removeClass('open show');
			select2.removeClass('open show');
		},400);
 	}
}
function starsProcess(moves){
	if(moves == 20){
		$('.stars').children().last().remove();
	}
	if(moves == 28){
		$('.stars').children().last().remove();	
	}
}
function compareSelects(select1,select2){
	if(select1.children().hasClass(select2.children().attr('class'))){
		select1.addClass('match');
		select2.addClass('match');
		effect(select1,select2,true);
	}else{
		effect(select1,select2,false);
	}
	moves++;
	starsProcess(moves);
	$('.moves').text(moves);
}

var timer =	 setInterval(function(){
	block = false;
}, 1000);

var array = createArray();

$('.card i').each(prepareGame);
$('.moves').text('0');


$('.card').on('click',function(){
	if(!inicioTemp){
		tempo("inicio");
		inicioTemp=true;
	}
	if(!$(this).hasClass('match') && !block){
		var card = $(this).addClass('open show');
		var val =  $('.open').val('n').length;
		if(val >= 2){
			block=true;
			var select1 = $('.open').first();
			var select2 = $('.open').last();
			compareSelects(select1,select2);
			}
		}
	});

$('.restart').on('click',function(){
	tempo("limpar");
	$('.card').removeClass('open show match');
	$('.moves').text(0);
	$('.card i').each(removeGame);
	array = createArray();
	$('.card i').each(prepareGame);
	inicioTemp = false;
	if(moves >= 20){
	var elem ='<li><i class="fa fa-star"></i></li>';
	}
	if(moves >= 26){
	elem = + elem +' <li><i class="fa fa-star"></i></li>';
	}
	$('.stars').append(elem);
	moves = 0;
});

$('.card').on('click',function(){
	var totalMatch = $('.match').val('n').length;
	if(totalMatch >= 2){
		tempo("parar");
		$('#myModal').modal('show');
		$('.nstar').text($('.stars li').length);

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
