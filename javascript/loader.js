window.addEventListener('load', function(){
    myVar = setTimeout(showPage, 1250)
})

function showPage(){
    console.log("entering load")
    document.getElementById("loader").style.display = "none"
    document.getElementById("loadpage").style.display = "none"
    document.getElementById("loader").style.visibility = "hidden"
    console.log("exiting load")
}