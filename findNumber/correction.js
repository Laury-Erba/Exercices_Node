let count = 0;
console.log("Debut du jeu , choissisez un nombre entre 1 et 100");

const searchNumber = Math.floor(Math.random() * 100 + 1);

process.stdin.on("data", (chunk) => {
  count++;
  const number = parseInt(chunk);

  if (isNaN(number) === true) {
    console.log("ce n'est pas un nombre");
  }

  if (count > 10) {
    console.log("Vous avez dépasser les 10 tentatives");
    process.exit(0);
  }
  // attetion à son utilisaationq ui stop complétement tout les processus
  if (number > searchNumber) {
    console.log("Le nombre est plus petit que ${number}");
  } else if (number < searchNumber) {
    console.log("Le nombre est plus grandque ${number}");
  } else {
    console.log(
      "vous etes un winner : ${count}, le numero est bien ${searchNumber}"
    );
  }
});
