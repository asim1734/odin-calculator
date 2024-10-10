const calcButtons = document.querySelectorAll(".calculator button")
const valueDiv = document.querySelector(".value")

inputs = []

function innit(){
calcButtons.forEach((button) =>{
    button.addEventListener("click", (event) => handleClicks(event.target.textContent))
})
}

function handleClicks(a){
    valueDiv.textContent += a
    
    if (a == "=")
        evaluate()
    else if (Number.isInteger(+a) || a == ".")
        inputs.push(a)
    else if (a == "AC")
        clear()
    else if (a == "+/-")
        toggleSign()
    else if (a == "%")
        percentage()
    else
        inputs.push(a)
}



innit()