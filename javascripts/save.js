
/*
    @Description: function takes inputted json file and parses it to correct data format.
    @Author: Vannaroth Ngoc
*/
function loadFile(){
    new_game = false;
    const load_file = document.getElementById('load-file-field').files[0];
    const reader = new FileReader();
    reader.onload = function(){
        load_data = JSON.parse(reader.result);
        init();
    }
    reader.readAsText(load_file);
}

/*
    @Description: Used to create and download metadata for set game.
    @Author: Vannaroth Ngoc
*/
function saveFile(){
    var filename = $('#save-name-field').val();
    if(filename === ""){
        filename = "set-game-save"
    }
    const save_data = {score: point_counter, load_deck: deck, load_hand: current_cards, times:each_time};
    const save_blob = new Blob([JSON.stringify(save_data)], {type: "application/json"});
    downloadFile(save_blob,filename)
}

/*
    @Description: sets up download pathway onto local machine
    @Author: Vannaroth Ngoc
*/
function downloadFile(save_blob,filename){
    const url = window.URL.createObjectURL(save_blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    setTimeout(function(){
        a.remove();
        document.addEventListener("focus", w=>{window.URL.revokeObjectURL(save_blob)});
    },100)
}
