




/*
* Model
*/


currentlySelected = [];
/*
	@Description: Handles the selected cards in the current hand
	@author: Enrqiue Rosen
*/
function cardHandler(id)
{
	if (currentlySelected.includes(id))
	{
		currentlySelected.splice(currentlySelected.indexOf(id),1);
		document.getElementById(id).style.borderColor = "black";
	}
	else
	{
		currentlySelected.push(id);
		document.getElementById(id).style.borderColor = "red";

	}


	if (currentlySelected.length >= 3)
	{

		document.getElementById(currentlySelected[0]).style.borderColor = "black";
		document.getElementById(currentlySelected[1]).style.borderColor = "black";
		document.getElementById(currentlySelected[2]).style.borderColor = "black";

		evalSelected(currentlySelected);
		currentlySelected = [];

	}

}

/*
	@Description: Populates the current hand div
	@Author: Enrique Rosen
*/
function drawCards()
{
	clearTable();

	var element = document.createElement("table");
	var currentNode = document.getElementById("tableDiv");;
	var temp;

	element.id = "cardTable";

	currentNode.appendChild(element);

	element = document.createElement("tbody");
	temp  = currentNode.appendChild(element);
	currentNode = temp;
	var tBody = temp;

	for (i = 0; i < current_cards.length; i++)
	{
		if (i % 4 == 0)
		{
			element = document.createElement("tr");
			temp  = tBody.appendChild(element);
			currentNode = temp;

			element = document.createElement("td");
			temp  = currentNode.appendChild(element);
			currentNode = temp;
		}
		currentNode.insertAdjacentHTML('beforeend','<input type="image" src="images/' + current_cards[i][0].id + '.jpg" class = "cards" id = "' + current_cards[i][0].id + '" onclick = "eventListener($(this).attr(\'id\'))"/>');
	}
}

/*
	@Description:  Updates the view to the game after loading or starting a new game.
	@authors: Enrique Rosen & Vannaroth Ngoc & Ben  Brucoli
*/
function setGameStartView(load_game)
{
	document.getElementById('score').style.display = "block"
   	var el = document.getElementsByTagName('body')[0];
	el.insertAdjacentHTML('beforeend', '<button id = "no-match-btn" class = "no-match" onclick = "eventListener($(this).attr(\'id\'))">No Possible Matches</button>');
	el.insertAdjacentHTML('beforeend', '<div><input type = "text" id = "save-name-field" class ="savegame"></input><button id = "save-btn" onclick = "eventListener($(this).attr(\'id\'))">Save Game</button></div>');
	updateScore(point_counter);
	if(load_game){
		document.getElementById('start-btn').remove();
		document.getElementById('load-btn').remove();
	}else{
		document.getElementById('back-btn').remove();
		document.getElementById('load-file-field').remove();
		document.getElementById('continue-btn').remove();
		drawCards();
	}
}
/*
	@Description: Updates view after load button is pressed to load game view
	@author: Vannaroth Ngoc & Ben Brucoli
*/
function setLoadGameView()
{
	var el = document.getElementById('start-btn');
	el.remove();
	document.getElementById('load-btn').remove();
	el = document.getElementsByTagName('body')[0];
	el.insertAdjacentHTML('beforeend', '<div><input type = "file" id = "load-file-field" onchange = "eventListener($(this).attr(\'id\'))"></Input></div>');
	el.insertAdjacentHTML('beforeend', '<button id = "back-btn" class = "strtbutton" onclick = "eventListener($(this).attr(\'id\'))">Back</button>');
	el.insertAdjacentHTML('beforeend', '<button type="button" id = "continue-btn" onclick = "eventListener($(this).attr(\'id\'))" style = "display: none">Continue</button>');
}
/*
	@Description: Updates view after back button is pressed to return to the start screen.
	@Author: Vannaroth Ngoc & Ben Brucoli
*/
function setHomeView()
{
	document.getElementById('back-btn').remove();
	document.getElementById('load-file-field').remove();
	document.getElementById('continue-btn').remove();
	el = document.getElementsByTagName('body')[0];
	el.insertAdjacentHTML('beforeend', '<button id = "start-btn" class = "strtbutton" onclick = "eventListener($(this).attr(\'id\'))">Start Game!</button>');
	el.insertAdjacentHTML('beforeend', '<button id = "load-btn" onclick = "eventListener($(this).attr(\'id\'))">Load Game!</button>');
}

/*
	@Description: hides/shows the continue button if there is no/a selected save file.
	@Author: Vannaroth Ngoc
*/
function update_continue_btn()
{
	if ($('#load-file-field').get(0).files.length === 0) {
		document.getElementById('continue-btn').style.display = "none";
	}else{
		document.getElementById('continue-btn').style.display = "inline";
	}
}

/*
	@Description: clears to current hand div.
	@Author: Enrique Rosen
*/
function clearTable()
{
	document.getElementById("tableDiv").innerHTML = "";
}
function updateTime(time)
{
	//todo: implement
}
/*
	@Description: updates the page to current score
	@Author: Enrique Rosen
*/
function updateScore(points)
{
	document.getElementById("score").innerHTML = "Score: " + points;
}
