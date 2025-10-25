
//Side NavBar


var sidemenubar = document.getElementById("side-menubar")
var sidenavbar = document.querySelector(".side-navbar")

sidemenubar.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0%"
})


var sidenavclose = document.getElementById("side-navbar__close")

sidenavclose.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "-60%"
})
