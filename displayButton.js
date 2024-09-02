export default function displayButton (){
    const first = document.querySelector(".first")
    const second = document.querySelector(".second")
    second.style.display = "none"
    const deroulant = document.querySelector(".deroulant")
    first.addEventListener("click", () => {
        first.style.display = "none"
        second.style.display = "inline"
        deroulant.style.display = "block"
        const li = deroulant.querySelectorAll("li") 
        let delay = 0
        li.forEach(elem =>{
            setTimeout(()=>{
                elem.style.opacity = 1
            }, delay)
            delay += 50
        })
        
    })
    second.addEventListener("click", () => {
        first.style.display = "inline"
        second.style.display = "none"
        const li = deroulant.querySelectorAll("li") 
        let delay = 0
        li.forEach(elem =>{
            setTimeout(()=>{
                elem.style.opacity = 0
            }, delay)
            delay += 50
        })
        deroulant.style.display = "none"
        
    })

}