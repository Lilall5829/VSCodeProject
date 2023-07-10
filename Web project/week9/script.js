// alert("Hello user!");
// console.log(document.getElementById("main"));
// document.getElementById("main").style.fontSize = "large";
// document.getElementById("main").style.color = "lightgrey";

document.querySelector(".userName").addEventListener("click", function () {
  const number1 = prompt("Enter a number1");
  const number2 = prompt("Enter a number2");
  if (number1 - number2 > 0) {
    alert("Result is a positive number!");
  } else if (number1 - number2 < 0) {
    alert("Result is a negative number!");
  } else {
    alert("Result is 0");
  }
});

document.querySelector(".selectNumber").addEventListener("click", function () {
  const number = parseInt(prompt("Please rank this webpage:"));
  switch (number) {
    case 1:
      alert("Very bad!");
      break;
    case 2:
      alert("Bad!");
      break;
    case 3:
      alert("Not too bad!");
      break;
    case 4:
      alert("Good!");
      break;
    case 4:
      alert("Very good!");
      break;
    default:
      alert("Say something");
  }
});
