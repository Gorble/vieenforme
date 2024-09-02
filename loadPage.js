import displayButton from "./displayButton.js"

const links = document.querySelectorAll("header a")


function loadPage (link){
    link === undefined ? link = "home" : link = link.id
    fetch(`pages/${link}.html`)
        .then(res =>{
            if(!res.ok){
                throw new Error("Erreur de chargement" + res.statusText)
            }
            return res.text()
        })
        .then(res =>{
            document.querySelector("main").innerHTML = res
            if(link === "home"){
                displayButton()
            }
        })
}

window.onload = loadPage()

links.forEach(link => {
    link.addEventListener("click", (e) => {
        if(link.id != "out"){
            e.preventDefault()
            loadPage(link)
        }
        
    })
    
})


