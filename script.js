// Start Game function implementation
function startGame() {
  // Hide the home screen
  const homeScreen = document.getElementById("home");
  if (homeScreen) {
    homeScreen.classList.remove("active");
    homeScreen.classList.add("hidden");
  }

  // Display the battle screen
  const battleScreen = document.getElementById("battle");
  if (battleScreen) {
    battleScreen.classList.add("active");
  }

  console.log("Game started! Enjoy the adventure.");
}

// Ensure this script appends functionality correctly
console.log("Script updated - Start Game function added.");