// Add animations for Wizard Spell hitting the Dragon and Dragon Fire hitting the Wizard
function wizardSpellHitDragon() {
  const spell = document.createElement("div");
  spell.className = "proj spell-proj";
  spell.style.cssText = `left: 20px; top: 80%; --sx: 20px; --sy: 80%; --ex: 90%; --ey: 20%;`;

  const arena = document.getElementById("battleArena");
  arena.appendChild(spell);

  setTimeout(() => {
    spell.remove();
    // Dragon effects on hit
    const dragon = document.getElementById("dragonWrap");
    dragon.classList.add("hit-flash");
    setTimeout(() => dragon.classList.remove("hit-flash"), 400);
  }, 600);
}

function dragonFireHitWizard() {
  const fire = document.createElement("div");
  fire.className = "proj fire-proj";
  fire.style.cssText = `right: 20px; top: 20%; --sx: 90%; --sy: 20%; --ex: 20%; --ey: 80%;`;

  const arena = document.getElementById("battleArena");
  arena.appendChild(fire);

  setTimeout(() => {
    fire.remove();
    // Wizard effects on hit
    const wizard = document.getElementById("wizardWrap");
    wizard.classList.add("hit-flash");
    setTimeout(() => wizard.classList.remove("hit-flash"), 400);
  }, 600);
}

// Bind these functions to Question Correct/Wrong logic (example)
function handleAnswer(isCorrect) {
  if (isCorrect) {
    wizardSpellHitDragon();
    // Additional logic for correct answer
  } else {
    dragonFireHitWizard();
    // Additional logic for wrong answer
  }
}

// Example Usage
// handleAnswer(true); // Simulate correct answer
// handleAnswer(false); // Simulate incorrect answer
