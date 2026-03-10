// const container = document.querySelector(".container"),
//     image = document.querySelector(".QR-field img"),
//     button = document.querySelector("button"),
//     input = document.querySelector("input"),
//     api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

// button.addEventListener("click", () => {
//     if(input.value.trim() !== "") {
//         const qrURL = `${api}${encodeURIComponent(input.value)}`;
//         image.src = qrURL;
//         container.classList.add("active");
//     } else {
//         alert("Please enter text or URL");
//     }
// });
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/service-worker.js")
//   .then(() => console.log("Service Worker Registered"));
// }


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

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("Service Worker Error:", err));
  });
}
