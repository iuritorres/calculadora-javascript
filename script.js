const calculatorBody = document.querySelector("#calc-container .body")
const result = document.getElementById("result")

for (let i = 1; i < 11 || i < 1; i++) {
  const button = document.createElement("div")

  button.innerText = i === 10 ? 0 : i
  button.classList.add("button")

  calculatorBody.appendChild(button)
}

const numberButtons = document.getElementsByClassName("button")

const calc = (expression) => (result.innerText = eval(expression))
const isOperator = (string) => ["+", "-", "x", "/"].includes(string)

// Buttons
Array.from(numberButtons).forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.innerText

    if (buttonValue === "=") {
      calc(result.innerText)
      return
    }

    if (buttonValue === "") {
      if (result.innerText.length === 1) {
        result.innerText = "0"
        return
      } else {
        result.innerText = result.innerText.slice(0, -1)
      }
    }

    if (
      isOperator(buttonValue) &&
      isOperator(result.innerText.charAt(result.innerText.length - 1))
    ) {
      return
    }

    result.innerText == 0
      ? (result.innerText = buttonValue)
      : (result.innerText += buttonValue)
  })
})
