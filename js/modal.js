export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal-card h2"),
    buttonClose: document.querySelector(".modal-card button.close"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    }
}

Modal.buttonClose.addEventListener("click", Modal.close)

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(event) {
    if (event.key === "Escape") {
        Modal.close()
    }
}