/* var words = ["программа", "макака", "пробирка", "прекрасный", "оладушек"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;
var countGuess = 0;
while (remainingLetters > 0 && countGuess < 10) {
  countGuess++;
  alert(answerArray.join(" "));
  var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одну букву!");
  } else
    for (var j = 0; j < word.length; j++) {
      guess = guess.toLowerCase();
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word); */

//функциональное представление
var pickWord = function () {
  var words = ["программа", "макака", "пробирка", "прекрасный", "оладушек"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};

var setupAnswerArray = function () {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};

var showPlayerProgress = function () {
  alert(answerArray.join(" "));
};

var getGuess = function () {
  return prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
};

var updateGameState = function (guess, word, answerArray) {
  var appearances;
  for (var j = 0; j < word.length; j++) {
    guess = guess.toLowerCase();
    if (word[j] === guess && answerArray[j] === "_") {
      answerArray[j] = guess;
      appearances++;
    }
  }
  return appearances;
};

var showAnswerAndCongratPlayer = function () {
  showPlayerProgress(answerArray);
  alert("Отлично! Было загадано слово " + word);
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var countGuess = 0;
while (remainingLetters > 0 && countGuess < 10) {
  countGuess++;
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одну букву!");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratPlayer(answerArray);
