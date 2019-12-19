function request(){
    console.log("REST-Abfrage gestartet.");

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    //your backend url
    request.open('GET', '');
    request.onload = function() {
        var data = JSON.parse(this.response)
        teachers = data;

        if (request.status >= 200 && request.status < 400) {
            console.log(teachers);
            addItemsToHTML(teachers);
        } else {
            console.log('error')
        }
    }

    // Send request
    request.send();
}

function addItemsToHTML(list){
    var itemsDiv = $("#items-wrapper");
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var html =
          '<li>' +
          '<a class="download cursor" onclick="chooseTeacher(\'' + 
          item.room.name + '\',\'' + item.firstname + '\',\'' + item.lastname + '\',\'' + item.time + 
          '\')"' +
          '>' +
          item.lastname + " " + item.firstname + " (Raum: " + item.room.name +
          ")</a></li>";
        itemsDiv.append(html);
      }
}

function chooseTeacher(room, firstname, lastname, time){
    chooseRoom(room, firstname, lastname, time);
}