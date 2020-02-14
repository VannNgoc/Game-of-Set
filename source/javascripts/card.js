class Card{
  constructor(number, symbol, shading, colors,id)
  {
    this.number = number.toString();
    this.symbol = symbol.toString();
    this.shade = shading.toString();
    this.id = id;
    this.color = colors.toString();
    this.object = null;
   }

   getId()
   {
    return this.id;
   }
  produce_object()
  {
	    switch (this.symbol) {
		    case "diamond":
		      switch (this.shade) {
			      case "solid":
			        this.object = "♦"
			      case "striped":
			        this.object = "⬙"
			      case "open":
			        this.object = "◇"
			    }
		    case "squiggle":
		      switch (this.shade){
			      case "solid":
			        this.object = "■"
			      case "striped":
			        this.object = "⬓"
			      case "open":
			        this.object = "□"
			    }
		    case "oval":
		      switch (this.shade){
			      case "solid":
			        this.object = "●"
			      case "striped":
			        this.object = "◒"
			      case "open":
			        this.object = "○"
			    }
	    }
  }


  isSet(card_b, card_c){
    var isSet = true
    //assume it's a set until proven otherwise
    isSet &= ((this.number == card_b.number && card_b.number == card_c.number) || (this.number != card_b.number && card_b.number != card_c.number && this.number != card_c.number));
    isSet &= ((this.symbol == card_b.symbol && card_b.symbol == card_c.symbol) || (this.symbol != card_b.symbol && card_b.symbol != card_c.symbol && this.symbol != card_c.symbol));
    isSet &= ((this.shade == card_b.shade && card_b.shade == card_c.shade) || (this.shade != card_b.shade && card_b.shade != card_c.shade && this.shade != card_c.shade));
    isSet &= ((this.color == card_b.color && card_b.color == card_c.color) || (this.color != card_b.color && card_b.color != card_c.color && this.color != card_c.color));
    return (isSet == 1);
  }

  //looks at an array of cards and determines if there is a set among them
  static set_available(cards_array){

    var possible_set = false;


    for (var i = 0; i < cards_array.length; i++){

      if (cards_array[i][0] != ""){

        for (var k = 0; k < cards_array.length; k++){

          if (cards_array[k][0] != ""){

            if (k != i){

              for (var m = 0; m < cards_array.length; m++){

                if (cards_array[m][0] != ""){

                  if (m != k && m != i) {

                    if (!(cards_array[i][0] == null) && !(cards_array[k][0] == null) && !(cards_array[m][0] == null)){

                      if (cards_array[i][0].isSet(cards_array[k][0], cards_array[m][0])) {
                        possible_set = true
                        console.log(cards_array[i][0]);
                        console.log(cards_array[k][0]);
                        console.log(cards_array[m][0]);
                        return possible_set
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return possible_set
   }

}