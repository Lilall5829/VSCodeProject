function validateForm() {
  var userId,
    password,
    name,
    country,
    zipCode,
    email,
    lang1,
    lang2,
    p,
    validation;
  const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  userId = document.getElementById("userId").value.length;
  password = document.getElementById("password").value.length;
  name = document.getElementById("name").value;
  country = document.getElementById("country").value;
  zipCode = document.getElementById("zipCode").value;
  email = document.getElementById("email").value;
  lang1 = document.getElementById("lang1");
  lang2 = document.getElementById("lang2");
  p = document.getElementsByTagName("p");
  validation = true;

  // Verify if userId is valid
  if (userId == 0 || userId < 5 || userId > 12) {
    p[0].innerText = "Please enter userID(length 5-12)";
    validation &= false;
  } else {
    p[0].innerText = "";
    validation &= true;
  }

  // Verify if password is valid
  if (password == 0 || password < 7 || password > 12) {
    p[1].innerText = "Please enter password(length 7-12)";
    validation &= false;
  } else {
    p[1].innerText = "";
    validation &= true;
  }

  // Verify if name is valid
  if (name.length == 0 || name != name.replace(/[^a-zA-Z]/g, "")) {
    p[2].innerText = "Please enter name(Alphabates only)";
    validation &= false;
  } else {
    p[2].innerText = "";
    validation &= true;
  }

  // Verify if country is valid
  if (country == "") {
    p[3].innerText = "Please select your country";
    validation &= false;
  } else {
    p[3].innerText = "";
    validation &= true;
  }

  // Verify if zipCode is valid
  if (
    zipCode.length < 5 ||
    zipCode.length > 6 ||
    zipCode != zipCode.replace(/\D/g, "")
  ) {
    p[4].innerText = "Please enter zip code(length 5-6)";
    validation &= false;
  } else {
    p[4].innerText = "";
    validation &= true;
  }

  // Verify if email is valid
  if (!regex.test(email)) {
    p[5].innerText = "Please enter valid email";
    validation &= false;
  } else {
    p[5].innerText = "";
    validation &= true;
  }

  // Verify if language is valid
  if (!lang1.checked && !lang2.checked) {
    p[6].innerText = "Please select your language";
    validation &= false;
  } else {
    p[6].innerText = "";
    validation &= true;
  }

  // Verify if all inputs are valid
  if (validation == true) window.location = "../login.html";
}
