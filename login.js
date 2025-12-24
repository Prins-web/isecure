document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "admin@isecure.com" && password === "12345"){
    alert("Login Successful");
    // redirect later
  } else {
    alert("Invalid Credentials");
  }
});
