

document.addEventListener("keydown", function buttonClick(event) {
  switch (event.key) {
    case "w":
      let tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      let tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      let crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;

    default:
      break;
  }
  buttonAnimation(event.key);
  buttonAnimationDown(event.key);
});

function buttonAnimation(keyPressed) {
  let activeButton = document.querySelector("." + keyPressed);
      activeButton.classList.add("pressed");

  setTimeout(function () {
      activeButton.classList.remove("pressed");

}, 200);
}

// function buttonAnimationDown() {
//   const classExist = document.getElementsByClassName("pressed").length > 0;

  
//   if (classExist) {
//     activeButton.classList.remove("pressed");
//   }
// }

// addEventListener("keydown" , function(){
// alert("key was pressed")})
