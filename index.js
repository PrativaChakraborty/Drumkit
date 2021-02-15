var n;
document.addEventListener("keydown", (event) => logkey(event));
function logkey(event) {
  drumSound(event.key);
  buttonAnimation(event.key);
}
var list = document.querySelectorAll(".drum");

for (let index = 0; index < list.length; index++) {
  list[index].addEventListener("click", (event) => {
    var drumButton = list[index].innerHTML;
    drumSound(drumButton);
    buttonAnimation(drumButton);
  });
}


function drumSound(key) {
  var drumButton = key.innerHTML;
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    default:
      console.log(drumButton);
      break;
  }
}

function buttonAnimation(currentKey)
{
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(() => {
     activeButton.classList.remove("pressed");
   }, 100);
}