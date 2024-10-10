function displayUserDetails() {
  //Accepts username
  let userName = prompt("Enter your username");

  // Tells user to re-enter username again if previous is greater than 10 characters
  while (validatesUserName(userName) == false) {
    userName = prompt("Invalid username.Must be lesser than 10");
  }
  //When user did not enter any value and decides to cancel the program
  if (userName == null) {
    return;
  }

  //Accepts user password
  let userPassword = prompt("Enter your password");

  // Tells user to enter password again if password is length is lesser than six
  while (validatesUserPassword(userPassword) == false) {
    userPassword = prompt("Re-enter password. Must be greater six");
  }
  //When user did not enter any value and decides to cancel the program
  if (userPassword == null) {
    return;
  }

  // User should confirm password
  let confirmPassword = prompt("User confirm password");
  while (confirmPassword != userPassword) {
    confirmPassword = prompt("Re-enter password.Password does not correlate");
  }
  if (confirmPassword == null) {
    return;
  }

  //Objects that stores user details
  const userDatabase = {
    olawale145: {
      firstName: "yaqub",
      lastName: "akanji",
      email: "yaqubakanj",
      userActivated: true,
      password: "olapass",
    },
    biodun211: {
      firstName: "Mustapha",
      lastName: "roqeeb",
      email: "mustapha@hotmail.com",
      userActivated: false,
      password: "biodun145",
    },
    ada1234: {
      firstName: "Ada",
      lastName: "Eden",
      email: "adaeden@outlook.com",
      userActivated: true,
      password: "ada1676",
    },
  };
  //Checks if username entered
  const user = userDatabase[userName];

  // Message to display when user not find
  if (user == undefined) {
    alert("User not found");
    return;
  }
  alert(`User found with the following details
    First Name : ${user.firstName}
    Last Name : ${user.lastName}
    Email : ${user.email}
    User Activated : ${user.userActivated}
    password : ${user.password}
    `);
}

displayUserDetails();
alert("You have come to the end of the program");

// Validates that username is less than ten
function validatesUserName(userName) {
  if (userName == null) {
    return true;
  }
  if (userName.length > 10) {
    return false;
  } else {
    return true;
  }
}

// Validates that user password is greater than six
function validatesUserPassword(userPassword) {
  if (userPassword == null) {
    return true;
  }
  if (userPassword.length < 6) {
    return false;
  } else {
    return true;
  }
}