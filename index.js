var toggleState = false;
var toggle = document.getElementById("toggle");
var moon = document.getElementById("moon");
var amazon = document.getElementById("amazon-img");
var footer = document.getElementById("footer");
var date = new Date();
function enableDarkMode() {
    var atags = document.querySelectorAll("a");
    var ptags = document.querySelectorAll("p");
    for (var i = 0; i < atags.length; i++) {
        atags[i].classList.add("dark");
    }
    for (var i = 0; i < ptags.length; i++) {
        ptags[i].classList.add("dark");
    }
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
    amazon.classList.add("dark");
    moon.classList.add("dark");
    toggle.classList.add("dark");
    footer.classList.add("dark");
    toggleState = true;
}
function disableDarkMode() {
    var atags = document.querySelectorAll("a");
    var ptags = document.querySelectorAll("p");
    for (var i = 0; i < atags.length; i++) {
        atags[i].classList.remove("dark");
    }
    for (var i = 0; i < ptags.length; i++) {
        ptags[i].classList.remove("dark");
    }
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
    amazon.classList.remove("dark");
    moon.classList.remove("dark");
    toggle.classList.remove("dark");
    footer.classList.remove("dark");
    toggleState = false;
}
if (date.getHours() >= 18 || date.getHours() <= 6) {
    enableDarkMode();
}
toggle.onclick = function() {
    if (toggleState == false) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}