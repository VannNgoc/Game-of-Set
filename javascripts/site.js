
/*
	@Description: Acts as the controller for the program.
	@Authors: Vannaroth Ngoc & Enrique Rosen
*/
function eventListener (id){
	if (id == "start-btn")
	{
		setGameStartView(true);
		init();
	}
	else if(id == "load-btn")
	{
		setLoadGameView();
	}
	else if (id == "save-btn")
	{
		saveFile();
	}
	else if (id == "no-match-btn")
	{
		matchPossible();
	}
	else if (id == "load-file-field")
	{
		update_continue_btn();
	}
	else if(id == "save-name-field")
	{
		update_save_btn();
	}
	else if (id == "continue-btn")
	{
		loadFile();
	}
	else if (id == "back-btn")
	{
		setHomeView();
	}
	else
	{
		cardHandler(parseInt(id));
	}
}