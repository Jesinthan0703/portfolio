function invertPage() {
  var a = document.getElementById("colour_mode");
  if (a.classList.contains("invert") != true) {
    document.getElementById("darkButton");
    a.classList.add("invert");
  } else {
    document.getElementById("darkButton");
    a.classList.remove("invert");
  }
}
