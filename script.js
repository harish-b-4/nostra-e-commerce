// Offer Box


var offerbox = document.querySelector(".Offer-box")

var offerclose = document.getElementById("offer-box-close")

offerclose.addEventListener("click", function () {
    offerbox.style.display = "none"
})





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






//Slider Image Section


var sliderimages = document.querySelector(".slider-section__images")
var sliderleftarrow = document.getElementById("slider-left-icon")
var sliderrightarrow = document.getElementById("slider-right-icon")


var sliderimagessize = 0

sliderrightarrow.addEventListener("click", function () {

    sliderimagessize = sliderimagessize + 100

    if (sliderimagessize > 200) {
        sliderimagessize = 0
        sliderimages.style.marginLeft = 0
    }
    else {
        sliderimages.style.marginLeft = "-" + sliderimagessize + "vw"
    }
})


sliderleftarrow.addEventListener("click", function () {
    if (sliderimagessize == 0) {
        sliderimagessize = 200
        sliderimages.style.marginLeft = "-" + sliderimagessize + "vw"
    }
    else {
        sliderimagessize = sliderimagessize - 100
        sliderimages.style.marginLeft = "-" + sliderimagessize + "vw"
    }
})






//Heart Like For Most Wanted


var heartIcons = document.querySelectorAll('.heart-icon')

heartIcons.forEach(heart => {
    heart.addEventListener('click', function () {

        if (heart.getAttribute('src').includes('black')) {
            heart.setAttribute('src', './images/most-wanted-red-heart.png')
        }
        else {
            heart.setAttribute('src', './images/most-wanted-black-heart.png')
        }
    })
})
