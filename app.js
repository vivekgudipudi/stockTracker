const costPrice = document.getElementById("input-cp");
const num = document.getElementById("input-number")
const currentPrice = document.getElementById("input-current");

const checkBtn = document.getElementById("btn-check");
const error = document.getElementById("error-msg")

const showError = (message) => {
    error.innerText = message;
    error.style.display = "block"
}

const hideError = () => {
    error.style.display = "none"
}

checkBtn.addEventListener("click", () => {
    let costValue = costPrice.value;
    let quantity = num.value;
    let currentValue = currentPrice.value;
    if (!costValue || costValue < 0) {
        showError("Please enter cost price greater than 0")
        return;
    }
    if (!quantity || quantity < 0) {
        showError("Please enter quantity greater than 0")
        return;
    }
    if (!currentValue || currentValue < 0) {
        showError("Please enter current price greater than 0")
        return;
    } else {
        hideError();
        calculateMargin(costValue, quantity, currentValue);
    }
})

const calculateMargin = (costValue, quantity, currentValue) => {
    let totalCostPrice = costValue * quantity;
    let totalCurrentPrice = currentValue * quantity;
    if (totalCostPrice == totalCurrentPrice) {
        showError(`No Profit or Loss is made as Cost Price = ${costValue} is equal to Current Price  = ${currentValue}`)
        return;
    }
    let profitPercent = ((currentValue / costValue) * 100).toFixed(2);
    let margin = totalCurrentPrice - totalCostPrice;
    if (margin < 0) {
        margin = margin.toString()
        showError(`You have made a loss of ${profitPercent}% which amounts to ₹${margin.split("-")[1]}`)
    } else {
        showError(`You have made a profit of ${profitPercent}% which amounts to ₹${margin}`)
    }
}