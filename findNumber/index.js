const minNumber = 1;
const maxNumber = 100;
const secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let chance = 10;

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
  const guessedNumber = parseInt(input.trim(), 10);

  if (isNaN(guessedNumber)) {
    console.log("Veuillez entrer un nombre valide.");
  } else if (guessedNumber < minNumber || guessedNumber > maxNumber) {
    console.log(
      `Veuillez entrer un nombre entre ${minNumber} et ${maxNumber}.`
    );
  } else {
    chance--;

    if (guessedNumber === secretNumber) {
      console.log(
        `Félicitations ! Vous avez trouvé le nombre secret ${secretNumber} !`
      );
      process.exit(); // Terminer le processus
    } else if (chance === 0) {
      console.log(
        `Désolé, vous avez épuisé toutes vos tentatives. Le nombre secret était ${secretNumber}.`
      );
      process.exit(); // Terminer le processus
    } else {
      const hint = guessedNumber < secretNumber ? "plus grand" : "plus petit";
      console.log(
        `Mauvaise réponse. Le nombre secret est ${hint}. Il vous reste ${chance} tentatives.`
      );
    }
  }
});
