document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: document.getElementById("role").value
  };

  // Store demo user (replace with DB later)
  localStorage.setItem("isecure_user", JSON.stringify(user));

  alert("Secure registration successful");
  window.location.href = "login.html";
});
