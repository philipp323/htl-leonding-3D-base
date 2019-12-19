var divElement;
function showTooltip() {
  divElement = document.getElementById("tooltip");

  //element found and mouse hovers some object?
  if (selectedRoom != undefined) {
    //hide until tooltip is ready (prevents some visual artifacts)
    divElement.style.display = "block";

    //!!! === IMPORTANT ===
    // DIV element is positioned here
    var canvasHalfWidth = renderer.domElement.offsetWidth / 2;
    var canvasHalfHeight = renderer.domElement.offsetHeight / 2;

    var tooltipPosition = latestMouseIntersection.clone().project(camera);
    tooltipPosition.x =
      tooltipPosition.x * canvasHalfWidth +
      canvasHalfWidth +
      renderer.domElement.offsetLeft;
    tooltipPosition.y =
      -(tooltipPosition.y * canvasHalfHeight) +
      canvasHalfHeight +
      renderer.domElement.offsetTop;

    var tootipWidth = divElement.offsetWidth;
    var tootipHeight = divElement.offsetHeight;

    divElement.style.left = `${tooltipPosition.x - tootipWidth / 2}px`;
    divElement.style.top = `${tooltipPosition.y - tootipHeight - 5}px`;

    divElement.style.opacity = 1.00;
  }
}

function updateTooltip(RoomName, firstname, lastname, time, pictureNeeded) {

    if(pictureNeeded){
      divElement.innerHTML = "<img id='teacherImage' height='160' width='120'></img>";
      divElement.innerHTML +=
      "<br> Raum: " + RoomName + "<br>";
    }else {
      divElement.innerHTML =
      "Raum: " + RoomName + "<br>";
    }

    if(firstname != "-"){
      divElement.innerHTML += "Lehrer: " + firstname + " " + lastname;
    }else {
      divElement.innerHTML += lastname;
    }

    if(time != "-"){
      divElement.innerHTML += "<br>" +
      "Zeit: " + time;
    }
}

function hideTooltip(){
    $("#tooltip").hide();
    TOOLTIP_VISIBLE = false;
    if (selectedRoom != undefined) {
      selectedRoom.material.color = white;
    }
    selectedRoom = undefined;
}
