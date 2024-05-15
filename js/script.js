
let numberArray = []
function rollDice() {
    var limit = document.getElementById("numberOfDice").value
    let generatedNumber = Math.floor(Math.random() * limit) + 1
    if (numberArray.includes(generatedNumber) === false) {
        numberArray.push(generatedNumber)
        document.getElementById("generated-number").textContent = `${generatedNumber}`;
    }
    else if (numberArray.length == limit) {
        alert("Limit reached")
    }
    else{
        rollDice()
    }
}