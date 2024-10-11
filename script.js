const calcButtons = document.querySelectorAll(".calculator button")
const expressionDiv = document.querySelector(".expression")
const currentValueDiv = document.querySelector(".current-value")

inputs = []

function innit(){
calcButtons.forEach((button) =>{
    button.addEventListener("click", (event) => handleClicks(event.target.textContent))
})
}

function handleClicks(a){
    if (a == "=")
        evaluate()
    else if (Number.isInteger(+a) || a == "."){
        inputs.push(a)
        expressionDiv.textContent += a
    }
    else if (a == "AC")
        clear()
    else if (a == "+/-")
        toggleSign()
    else if (a == "%")
        percentage()
    else{
        inputs.push(a)
        expressionDiv.textContent += a
        evaluate()
    }
        
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
            res = add(a,b)
        else if (operator == "-")
            res = subtract(a,b)
        else if (operator == "*")
            res = multiply(a,b)
        else if (operator == "/"){
            res = divide(a,b)
        }
        nums.push(res)
    }
    currentValueDiv.textContent = nums.pop()
}

function add(a, b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(){
    if (b == 0)
        alert("Can Not divide by zero")
    else
        return a / b
}


innit()