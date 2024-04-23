import {Modal} from "./modal.js"
import {AlertError} from "./alert-error.js"
import {calculateIMC, notANumber} from "./utils.js"


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = function(event) {
    event.preventDefault()

    let weight = inputWeight.value
    let height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = "Seu IMC é de: " + result
    Modal.message.innerText = message
    Modal.open()
}

inputWeight.addEventListener("input", AlertError.close)
inputHeight.addEventListener("input", AlertError.close)






