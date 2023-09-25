function signup(e) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("emailid").value;

  localStorage.setItem("username", username);
  localStorage.setItem("pass", password);
  console.log("User added");
  window.location.href = "./login.html";
}



function login(e) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let a = localStorage.getItem("username");
  let b = localStorage.getItem("pass");

  if (username === null) {
    alert("Wrong username");
  } else if (username === a && password === b) {
    window.location.href = "./main.html";
  } else {
    alert("Wrong password");
  }

  username='';
  password='';
}
