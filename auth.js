const container = document.getElementById("container");

document.getElementById("signUpBtn").onclick = () =>
  container.classList.add("right-panel-active");

document.getElementById("signInBtn").onclick = () =>
  container.classList.remove("right-panel-active");
