function generateRandomNumbers(min, max, count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

function pickWinner(participants) {
  const randomNumber = Math.floor(Math.random() * participants.length);
  return participants[randomNumber];
}

module.exports = { generateRandomNumbers, pickWinner };
