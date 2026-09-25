const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

document.documentElement.dataset.enhanced ="true";

button.hidden = false;

setMenuOpen(false);

function setMenuOpen(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.open = String(isOpen);
}

button.addEventListener("click", function () {
    const isOpen =
        button.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
});

document.addEventListener("keydown", function (event) {
    const isOpen =
        button.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
        setMenuOpen(false);
        button.focus();
    }
});

// Add a comment above every logical step explaining what it does and why it is needed.
