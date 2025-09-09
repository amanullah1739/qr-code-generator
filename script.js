const container = document.querySelector(".container"),
    image = document.querySelector(".QR-field img"),
    button = document.querySelector("button"),
    input = document.querySelector("input"),
    api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

button.addEventListener("click", () => {
    if(input.value.trim() !== "") {
        const qrURL = `${api}${encodeURIComponent(input.value)}`;
        image.src = qrURL;
        container.classList.add("active");
    } else {
        alert("Please enter text or URL");
    }
});
