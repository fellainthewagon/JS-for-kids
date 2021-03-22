/* // var headingText = document.getElementById("main-heading");
// console.log(headingText.innerHTML);
var newHeadingText = prompt("Введите новый заголовок");
// headingText.innerHTML = newHeadingText;
$("#main-heading").text(newHeadingText); */

//$("body").append("<p>New paragraph</p>");

/* for (var i = 0; i < 3; i++) {
  var hobby = prompt("Let me say your hobby!");
  $("body").append("<p>" + hobby + "</p>");
} */

//$("h1").fadeOut(3000);

//$("h1").text("Этот заголовок скоро исчезнет").fadeOut(3000);

//$("h1").fadeOut(3000).fadeIn(2000);

//$("h1").slideUp(3000).slideDown(3000);

//$("body").append("<p>New paragraph</p>");
//$("h1").slideUp(2000).slideDown(2000);
//$("h1").fadeOut(3000).fadeIn(2000);
// $("h1").fadeOut(3000);
// $("h1").fadeIn(3000);

/* for (var i = 0; i < 3; i++) {
  $("h1").fadeOut(1000);
  $("h1").fadeIn(1000);
} */

//$("h1").hide(2000).show(1000);

/* $("#main-heading").text("My friends");

var friends = ["Joe", "Trisha", "Max"];

for (var i = 0; i < friends.length; i++) {
  $("body").append("<p>" + friends[i] + "</p>");
}

$("p").hide(2000).fadeIn(2000);

$("p").append(" is the best!"); */

/* var timeUp = function () {
  alert("Время вышло!");
};
setTimeout(timeUp, 3000); */

/* var doHomework = function () {
  alert("Пора делать домашку!");
};
var timeoutId = setTimeout(doHomework, 60000);
clearTimeout(timeoutId); */

/* var counter = 5;
var printMessage = function () {
  console.log("Ты смотришь в консоль " + counter + " сек.");
  counter += 5;
};
var intervalId = setInterval(printMessage, 5000);
clearInterval(intervalId); */

/* var leftOffset = 0;
var moveHeading = function () {
  $("#main-heading").offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 300) {
    leftOffset = 0;
  }
};
setInterval(moveHeading, 20); */

/* var clickHandler = function (event) {
  console.log("КЛик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler); */

/* $("html").mousemove(function (event) {
  $("#main-heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
}); */

/* $("html").click(function (event) {
  $("#main-heading").offset({
    left: event.pageX,
    top: event.pageY,
  });
}); */

/* var dog = {
  name: "Fletcher",
  type: "curly",
  isAwesome: true,
};
console.log(dog.name);
dog.age = 6;
console.log(dog);

dog.bark = function () {
  console.log("Гав-гав! Меня зовут " + this.name);
};
console.log(dog);
dog.bark(); */

/* var speakAnimal = function () {
  console.log(this.sound + ". My name is " + this.name);
};

var cat = {
  name: "Fluffy",
  sound: "Murrrr...",
  speak: speakAnimal,
};

var horse = {
  name: "Buddy",
  sound: "Igo-go-o-o",
  speak: speakAnimal,
};

var bird = {
  name: "Chivi",
  sound: "Chick-chirick",
  speak: speakAnimal,
};

cat.speak();
horse.speak();
bird.speak(); */

/* var Car = function (x, y) {
  this.x = x;
  this.y = y;
};

var drawCar = function (car) {
  var carHtml = '<img src= "car.png">';
  var carElement = $(carHtml);
  carElement.css({
    position: "absolute",
    left: car.x,
    top: car.y,
  });
  $("body").append(carElement);
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);
drawCar(tesla);
drawCar(nissan); */

/* var Car = function (x, y) {
  this.x = x;
  this.y = y;
};

Car.prototype.draw = function () {
  var carHtml = '<img src= "car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
  this.x += 5;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveLeft = function () {
  this.x -= 5;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveUp = function () {
  this.y -= 5;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveDown = function () {
  this.y += 5;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);

tesla.draw();
nissan.draw();

tesla.moveRight();
tesla.moveDown(); */

/* var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var position = 0;
setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);
  ctx.fillRect(position, 0, 20, 20);
  position++;
  if (position > 200) {
    position = 0;
  }
}, 30); */

/* var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var size = 0;
setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);
  ctx.fillRect(0, 0, size, size);
  size++;
  if (size > 200) {
    size = 0;
  }
}, 30); */
