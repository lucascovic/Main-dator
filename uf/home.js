const eKnapp1 = document.querySelector("#knapp-top-left");
const eOverlay = document.querySelector("#overlay.cart");

var eOverlay = eOverlay.textContent;

if (eOverlay == 0) {
    eOverlay.textContent = "Nothing is here yet"
}

eKnapp1.addEventListener("click", function addTo() {
    if (eKnapp1== true) {
        eOverlay.textContent = "Nigo Tee";
    } else {
        eOverlay.textContent = "Nothing is here yet!";
    }
})