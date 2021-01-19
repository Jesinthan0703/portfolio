function invertPage() {
  var a = document.getElementById("about_me");
  if (a.classList.contains("invert") != true) {
    document
      .getElementById("darkButton")
      .classList.add("bg-dark", "text-white");
    a.classList.add("invert");
  } else {
    document
      .getElementById("darkButton")
      .classList.add("bg-white", "text-dark");
    a.classList.remove("invert");
  }
}
