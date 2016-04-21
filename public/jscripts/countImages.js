var imagesClassmates = document.getElementsByTagName('img');
var imagesClicked = [];
var imageCounter = 0;

function gameStarts() {
  if(startStopBtn.getAttribute("data-state") === "stop"){
    if (this.getAttribute("data-state") === "notclicked") {
      this.setAttribute("data-state", "clicked");
      this.setAttribute("style", "border-color: red");
      imageCounter++;
    } else { 
      //alert("You have already clicked this image");
    $("#clickedModal").modal('show');

   }  
  }
}

//adds click to all images
for(var i = 0; i < imagesClassmates.length; i++) {
  imagesClassmates[i].addEventListener("click", gameStarts);
}

