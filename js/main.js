var toggleButton = document.getElementById("mode-switcher__text");
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  if (currentClass === "dark-mode") {
    toggleButton.innerText = "Dark Mode";
  } else {
    toggleButton.innerText = "Light Mode";
  }
}

toggleButton.addEventListener("click", toggleDarkLight);
