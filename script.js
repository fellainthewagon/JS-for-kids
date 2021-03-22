// var drawCats = function (howManyTimes) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//   }
// };
// drawCats(10);

// var age = 13;
// var withAdult = false;
// var resultAge = age >= 12;
// var resultAdult = withAdult === true;
// var all = resultAdult || resultAge;
// console.log(all);

// var age = 11;
// var withAdult = false;
// var result = age >= 12 || withAdult === true;
// console.log(result);

// var arr = ["Dafna", "Gorgia", ["Hoodah", "Burnut", "Lodris"], "Brolan"];
// arr[8] = "Joleen";
// console.log(arr);
// console.log(arr[2][1]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);
// arr.push("Dodlyn");
// console.log(arr);
// arr.unshift("Erica");
// console.log(arr);
// var arrLast = arr.pop();
// console.log(arrLast);
// console.log(arr);
// arr.unshift(arrLast);
// console.log(arr);
// var arrFirst = arr.shift();
// console.log(arrFirst);
// console.log(arr);
// arr.push(arrFirst);
// console.log(arr);

// var arrCat = ["Murzik", "Barsik", "Kotik"];
// var arrDog = ["Sharik", "Tuzik", "Chappi"];
// var arrCatDog = arrCat.concat(arrDog);
// console.log(arrCatDog);
// var arrBird = ["Kivi", "Gosha", "Sparrow"];
// var arrCatDogBird = arrCatDog.concat(arrBird);
// console.log(arrCatDogBird);
// console.log(arrCatDogBird.indexOf("Tuzik"));
// console.log(arrCatDogBird[4]);
// console.log(arrCatDogBird.indexOf("Hookie"));
// console.log(arrCatDogBird.join());
// console.log(arrCatDogBird.join(", "));
//console.log(Math.random());
//console.log(Math.floor(Math.random() * 10));

// var arr = ["Dafna", "Gorgia", "Hoodah", "Burnut", "Lodris", "Brolan"];
// console.log(arr.length);
// console.log(Math.floor(Math.random() * arr.length));
// console.log(arr[Math.floor(Math.random() * arr.length)]);

// var arr = [3, 2, 1];
// var str = [arr[0], "больше,", "чем", arr[1], "больше,", "чем", arr[2]];
// console.log(str.join(" "));

// var cat = {};
// cat.legs = 4;
// cat.name = "Kimbo";
// cat.type = "Schotland";
// cat.color = "Turtle";
// console.log(cat);
// console.log(cat.parent);

// var arr = [
//   { name: "Kolya", lastName: "Filipov" },
//   { name: "Roma", lastName: "Protas" },
//   { name: "Lola", lastName: "Raspizdovich" },
// ];
// console.log(arr[2]);
// console.log(arr[1].name);

// var anna = { name: "Anna", age: 29, luckyNum: [3, 77, 9] };
// var roma = { name: "Roma", age: 24, luckyNum: [5, 7, 0] };
// var vika = { name: "Vika", age: 39, luckyNum: [8, 88, 888] };
// var friends = [anna, roma, vika];
// console.log(friends[2]);
// console.log(friends[2].name);
// console.log(friends[2].luckyNum);
// console.log(friends[2].luckyNum[2]);

// var bank = {};
// bank.Jimmy = 5;
// bank.Anna = 7;
// console.log(bank);
// bank.Jimmy += 3;
// console.log(bank.Jimmy);

// var anna = { name: "Anna", age: 29, luckyNum: [3, 77, 9] };
// console.log(Object.keys(anna));

// var obj = {
//   name: "Нелепый объект",
//   "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//   "random animal": "Банановая акула",
// };
// console.log(obj.name);
// console.log(obj["some array"][2].number);

// var nameQ = "Olesya";
// if (nameQ === "Andrey") {
//   console.log("Hi me!");
// } else if (nameQ === "Oleg") {
//   console.log("Hi, ancle Oleg!");
// } else if (nameQ === "Olesya") {
//   console.log("Hi, Mom!");
// } else {
//   console.log("Hi, strenger!");
// }

// var sheepCounted = 0;
// while (sheepCounted < 10) {
//   console.log("Посчитано овец: " + sheepCounted + "!");
//   sheepCounted++;
// }
// console.log("Pssssss.....");

//или

// var catCounted;
// for (catCounted = 0; catCounted < 10; catCounted++) {
//   console.log("Посчитано котов: " + catCounted + "!");
// }
// console.log("Pssssss.....");

// var countHello = 3;
// for (var i = 0; i < countHello; i++) {
//   console.log("Hello!");
// }

// var zoo = ["Lion", "Snake", "Zebra", "Monkey"];
// for (var i = 0; i < zoo.length; i++) {
//   console.log("There is a " + zoo[i] + " in the Zoo!");
// }
// console.log("Have a nice Zooday!");

// for (var x = 2; x < 1000000; x *= 2) {
//   console.log(x);
// }

// var y = 3;
// while (y < 10000) {
//   console.log(y);
//   y *= 3;
// }

// var animals = ["Kat", "Dog", "Snake", "Chicken"];
// for (var i = 0; i < animals.length; i++) {
//   animals[i] = animals[i] + " is cute animal";
// }
// console.log(animals);

// var alphabet = "абвгдеёжзийклмнопрстуфхцчъыьэюя";
// var randomString = "";
// while (randomString.length < 6) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var randomString = "";
// for (var i = 0; i < 6; i++) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

/* var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += 4;
  } else if (input[i] === "e") {
    output += 3;
  } else if (input[i] === "i") {
    output += 1;
  } else if (input[i] === "o") {
    output += 0;
  } else {
    output += input[i];
  }
}
console.log(output); */

/* var name = prompt("Как вас зовут?");
console.log("Привет, " + name);
var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
  console.log("Красава");
} else {
  console.log("Ну это как-то не очень, друг...");
}
var hello = alert("Здарова, чувак из повозки"); */

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

/* var lett = "H";
console.log(lett.toLowerCase(lett)); */

/* var firstFunction = function () {
  console.log("Hi, fella!");
};
firstFunction(); */

/* var sayHiTo = function (name) {
  console.log("hi, " + name + "!");
};
sayHiTo("Fella"); */

/* var sayWhat = function (howMany, whatSay) {
  for (var i = 0; i < howMany; i++) {
    console.log("Say " + howMany + " times " + " word " + whatSay);
  }
};
sayWhat(5, "basement"); */

/* var double = function (num) {
  return num * 2;
};
alert(double(7)); */

/* var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
var wordsArr = ["Giga", "Metro", "Fibo", "Santi"];
alert(pickRandomWord(wordsArr)); */

/* var lang = ["English", "French", "Dutch", "Spanish"];
var nick = ["bushwacker", "motherfucker", "son of Gun", "tramp"];
var questions = ["do you know it", "do you speak it", "do you remember it"];
var randomQuest = function (part) {
  return part[Math.floor(Math.random() * part.length)];
};

alert(
  randomQuest(lang) +
    " " +
    randomQuest(nick) +
    " " +
    randomQuest(questions) +
    "?"
); */

/* var fifthLetter = function (name) {
  if (name === "null" || name.length === 0) {
    return "Пока!";
  } else if (name.length < 5) {
    return "Ваше имя короче 5 букв!";
  } else return "Пятая буква вашего имени, " + name + ", есть буква " + name[4];
};

var name = prompt("Напишите ваше имя");
alert(fifthLetter(name)); */

/* var areArraysSame = function (arr1, arr2) {
  while (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
alert(areArraysSame([1, 2, 3], [4, 5, 6]));
alert(areArraysSame([1, 2, 3], [1, 2, 3]));
alert(areArraysSame([1, 2, 3], [1, 2, 3, 4])); */

/* var pickWord = function () {
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
showAnswerAndCongratPlayer(answerArray); */

var dog = {
  name: "Fletcher",
  type: "curly",
  isAwesome: true,
};

console.log(dog.name);
