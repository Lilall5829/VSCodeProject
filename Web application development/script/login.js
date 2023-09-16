function login() {
  var username, password, validation;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  p = document.getElementsByTagName("p");
  validation = true;

  // Verify if username is valid
  if (username != "8906736") {
    p[0].innerText = "Please enter correct username";
    validation &= false;
  } else {
    p[0].innerText = "";
    validation &= true;
  }

  // Verify if password is valid
  if (password != "la.li") {
    p[1].innerText = "Please enter correct password";
    validation &= false;
  } else {
    p[1].innerText = "";
    validation &= true;
  }
  if (validation == true) window.location = "../index.html";
}
