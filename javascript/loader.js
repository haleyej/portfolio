// last for 1.25 seconds
window.addEventListener('load', function(){
    myVar = setTimeout(showPage, 1250)
})

// function to show loader and then display page
function showPage(){
    console.log("entering load")
    document.getElementById("loader").style.display = "none"
    document.getElementById("loadpage").style.display = "none"
    document.getElementById("loader").style.visibility = "hidden"
    console.log("exiting load")
}