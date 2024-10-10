const calcButtons = document.querySelectorAll(".calculator button")

function innit(){
calcButtons.forEach((button) =>{
    button.addEventListener("click", (event) => handleClicks(event.target.textContent))
})
}

function handleClicks(a){
    res = []
    res.push(a)
}


innit()