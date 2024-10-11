const calcButtons = document.querySelectorAll(".calculator button")
const valueDiv = document.querySelector(".expression")

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

function evaluate(){
    nums = []
    currentNumber = ""
    operators = []
    for (let i = 0 ; i < inputs.length ; i++){
        if (Number.isInteger(+inputs[i]))
            currentNumber += inputs[i]
        else{
            nums.push(+currentNumber)
            currentNumber = ""
            operators.push(inputs[i])
        }
    }
    nums.push(+currentNumber)
    operate(nums, operators)
}

function operate(nums,operators){
    while (nums.length != 1){
        b = nums.pop()
        a = nums.pop()
        operator = operators.pop()
        res = 0
        if (operator == "+")
            res = a + b
        else if (operator == "-")
            res = a - b
        else if (operator == "*")
            res = a * b
        else if (operator == "/"){
            if (b == 0)
                alert("Can Not divide by zero")
            else
                res = a / b
        }
        nums.push(res)
    }
    valueDiv.textContent = nums.pop()
}



innit()