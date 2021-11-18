// window size
var width = window.innerWidth

// flip card items
var flipContainer = document.querySelector("#flip-container")
var flipCard = document.querySelector("#flip-card")
var flipInner = document.querySelector("#flip-card-inner")
var flipFront = document.querySelector("#flip-card-front")
var flipBack = document.querySelector("#flip-card-back")

// mobile view items
var container = document.querySelector("#landing-container")
var image = document.querySelector("#landing-image")
var textBox = document.querySelector("#landing-block")

// if we prefer reduced motion
var reducedPref = window.matchMedia('(prefers-reduced-motion: reduce)');

// skip to content button
var skipButton = document.querySelector("#landing-skip")

if (reducedPref.matches == false){
    // on load
    window.addEventListener('load', function(){
        var width = window.innerWidth
        console.log(width)
        // screen gets larger 
        if (width > 750){
            // show flip card
            flipContainer.classList.remove("hidden")
            flipCard.classList.remove("hidden")
            flipInner.classList.remove('hidden')
            flipFront.classList.remove('hidden')
            flipBack.classList.remove("hidden")
            // hide text box
            container.classList.add("hidden")
            image.classList.add("hidden")
            textBox.classList.add("hidden")
            // adjust skip to content
            skipButton.setAttribute("href", "#flip-card-front")
        }
    })

    // account for resize 
    window.addEventListener('resize', function(){
        var width = window.innerWidth
        console.log(width)
        // screen gets larger 
        if (width >= 750){
            // show flip card
            flipContainer.classList.remove("hidden")
            flipCard.classList.remove("hidden")
            flipInner.classList.remove('hidden')
            flipFront.classList.remove('hidden')
            flipBack.classList.remove("hidden")
            // hide text box
            container.classList.add("hidden")
            image.classList.add("hidden")
            textBox.classList.add("hidden")
            // adjust skip tto conttent
            skipButton.setAttribute("href", "#flip-card-front")
        }
        else {
            // hide flip card
            flipContainer.classList.add("hidden")
            flipCard.classList.add("hidden")
            flipInner.classList.add('hidden')
            flipFront.classList.add('hidden')
            flipBack.classList.add("hidden")
            // show text box
            container.classList.remove("hidden")
            image.classList.remove("hidden")
            textBox.classList.remove('hidden')
            // adjust skip to content
            skipButton.setAttribute("href", "#landing-image")
            }
    })
}


