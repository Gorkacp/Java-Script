document.addEventListener("DOMContentLoaded", () => {
    const holderInput = document.getElementById("holderName");
    const cardNumberInput = document.getElementById("cardNumberInput");
    const expiryMonthInput = document.getElementById("expiryMonth");
    const expiryYearInput = document.getElementById("expiryYear");
    const cvvInput = document.getElementById("cvv");

    const cardHolderDisplay = document.getElementById("cardHolder");
    const cardNumberDisplay = document.getElementById("cardNumber");
    const cardExpiryDisplay = document.getElementById("cardExpiry");
    const cvvDisplay = document.getElementById("cvvDisplay");

    const creditCard = document.getElementById("creditCard");

    // Actualización de los campos
    holderInput.addEventListener("input", () => {
        cardHolderDisplay.textContent = holderInput.value || "Your Name";
    });

    cardNumberInput.addEventListener("input", () => {
        let formattedNumber = cardNumberInput.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ");
        cardNumberDisplay.textContent = formattedNumber.trim() || "#### #### #### ####";
    });

    expiryMonthInput.addEventListener("input", () => {
        updateExpiry();
    });

    expiryYearInput.addEventListener("input", () => {
        updateExpiry();
    });

    cvvInput.addEventListener("focus", () => {
        creditCard.style.transform = "rotateY(180deg)";
    });

    cvvInput.addEventListener("blur", () => {
        creditCard.style.transform = "rotateY(0deg)";
    });

    cvvInput.addEventListener("input", () => {
        cvvDisplay.textContent = cvvInput.value || "###";
    });

    function updateExpiry() {
        const month = expiryMonthInput.value.padStart(2, "0");
        const year = expiryYearInput.value.padStart(2, "0");
        cardExpiryDisplay.textContent = `${month}/${year}` || "MM/YY";
    }
});
