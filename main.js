const generatorBtn = document.querySelector(".card form button");
const result = document.querySelector(".card .result");
const qrInput = document.querySelector(".card form input");
const qrImage = document.querySelector(".card .result img");
const error = document.querySelector(".card .error");
generatorBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let qrValue = qrInput.value;
    if (!qrValue) { return error.style.visibility = "visible", result.style.display = "none" }
    error.style.visibility = "hidden"
    generatorBtn.innerText = "Creating"
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        result.style.display = "block"
        generatorBtn.innerText = "Create QR Code"
    })
})
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        result.style.display = "none"
    }
})