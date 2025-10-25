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







//CheckBox Selection


var checkboxes = document.querySelectorAll('input[type="checkbox"][name="tags"]')

var products = document.querySelectorAll('.products > div')


var originalDisplay = []
products.forEach(function(product) {
    originalDisplay.push(product.style.display || 'block')
})


var filterMap = {

    summer: [0, 8],        
    party: [2, 5, 6, 7],    
    Beach: [1, 3, 4],       

   
    red: [2, 5, 6, 7],      
    Blue: [0, 8],           
    white: [3],             
    green: [1],             

    
    new: [0, 1, 8],         
    old: [2, 3, 4, 5]       
}


checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener('change', function() {
     
        var checkedValues = Array.from(checkboxes)

            .filter(function(cb) { return cb.checked })
            .map(function(cb) { return cb.value })

        if (checkedValues.length === 0) {
           
            products.forEach(function(product, index) {
                product.style.display = originalDisplay[index]
            })
        } 
        else {
            
            products.forEach(function(product, index) {
                var shouldShow = false

                checkedValues.forEach(function(value) {
                    if (filterMap[value] && filterMap[value].includes(index)) {
                        shouldShow = true
                    }
                })

                product.style.display = shouldShow ? originalDisplay[index] : 'none'
            })
        }
    })
})
