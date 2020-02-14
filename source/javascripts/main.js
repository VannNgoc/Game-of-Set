



/*
* Model
*/
load_data = null;
var new_game = true;
var numbers = [1, 2, 3];
var symbols = ["diamond", "squiggle", "oval"];
var shading = ["solid", "striped", "open"];
var colors = ["red", "green", "purple"];
var num_cards = 11; //useful hack
var new_cards = false;
var extra_card_one = 0;
var extra_card_two = 0;
var point_counter = 0;
var deck = [];
var current_cards = [];
var each_time = []; //sets up the array to store the each round time
var date = new Date()
var start_time = date.getTime();

/*
	@Description: fills deck with cards and updates model if loading a game.
	@Authors: Enrique Rosen & Vannaroth Ngoc
*/
function init()
{
	if(new_game){
	var id = 1;

		numbers.forEach(function(number) {
				symbols.forEach(function(symbol) {
					shading.forEach(function(shade) {
							colors.forEach(function(color) {
									deck.push(new Card(number,symbol,shade,color,id));
									id += 1;
							});
					});
			});
		});

		//adds 12 random cards to current hand while removing them from the deck
		for (i = 0; i < 12; i++)
		{
			var ri = Math.floor(Math.random() * deck.length); // Random index in array
			var rs = deck.splice(ri, 1); // Splice out a random card from the deck
				current_cards.push(rs);
		}
		drawCards();
	}else{
		point_counter = load_data.score;
		deck = load_data.load_deck;
		load_data.load_hand.forEach(function(card){
				current_cards.push([new Card(card[0].number,card[0].symbol,card[0].shade,card[0].color,card[0].id)]);
		});

		each_time = load_data.times;
		load_data.times.forEach(function(time){
			each_time.push(time);
		});
		setGameStartView(false);
	}
}



/*
	@Author: Enrique Rosen
*/
function matchPossible()
{
	currentlySelected = [];
	 new_cards = Card.set_available(current_cards);
	  if (new_cards)
	  {
	  	new_cards = false;
	    alert("There is a match, look harder! -1 point");
	    point_counter -= 1;
	    updateScore(point_counter);
	  }
	  else
	  {
	    if (deck.length<= 0)
	    {
	      	alert("No More Matches and no more cards in the deck, Game Over!");

	    }
	    else
	    {
	    	alert("There were no possible matches. Adding cards to your hand now.");
	    	addCardsToHand();
	    	drawCards();
    	}
	  }
}

/*
	@Author: Enrique Rosen
*/
function addCardsToHand(){
//3 more cards will be added"


	if (deck.length > 0)
	{
		num_cards += 1;
		var randCard = Math.floor(Math.random() * Math.floor(deck.length));
	current_cards.push(deck.splice(randCard,1));	
	}

if (deck.length > 0)
	{
		num_cards += 1;
		var randCard = Math.floor(Math.random() * Math.floor(deck.length));
	current_cards.push(deck.splice(randCard,1));	
	}

if (deck.length > 0)
	{
		num_cards += 1;
		var randCard = Math.floor(Math.random() * Math.floor(deck.length));
	current_cards.push(deck.splice(randCard,1));	
	}
}

/*
	@Author: Enrique Rosen
*/
function removeCardsFromHand(first,second,third){
			//3 more cards will be added"
	num_cards = num_cards -= 3
	//has to be done in three loops because you're removing from the array as you loop through it
	for (i = 0; i < current_cards.length; i++)
	{
		if (current_cards[i][0].id == first.id)
		{
			current_cards.splice(i,1);
			break;
		}
	}
	for (i = 0; i < current_cards.length; i++)
	{
		if (current_cards[i][0].id == second.id)
		{
			current_cards.splice(i,1);
			break;
		}
	}
	for (i = 0; i < current_cards.length; i++)
	{
		if (current_cards[i][0].id == third.id)
		{
			current_cards.splice(i,1);
			break;
		}
	}


}
/*
	@Description: Checks to see if the 3 selected cards is a set.
	@Author: Enrique Rosen
*/
function evalSelected(currentlySelected)
{

	var first;
	var second;
	var third;


	for (i = 0; i < current_cards.length; i++)
	{
		if (current_cards[i][0].id == currentlySelected[0])
		{
			first = current_cards[i][0];
		}
		else if (current_cards[i][0].id == currentlySelected[1])
		{
			second = current_cards[i][0];
		}
		else if (current_cards[i][0].id == currentlySelected[2])
		{
			third = current_cards[i][0];
		}
	}

  if ( first.isSet(second, third) )
  {
  		alert("match! +1 point");
        point_counter += 1;

        removeCardsFromHand(first,second,third);
        addCardsToHand();
        drawCards();
        updateScore(point_counter);
    }
    else
    {
    	alert("not a match! -1 point");
    	point_counter -= 1;
    }
    updateScore(point_counter);
}