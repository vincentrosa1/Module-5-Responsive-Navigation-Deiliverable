const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// TODO 1: progressively enhance the document and initialize the narrow state.

function setMenuOpen(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.open = String(isOpen);
}

// TODO 3: use the native button's click event to toggle the state.

// TODO 4: close on Escape when open, then return focus to the button.

// Add a comment above every logical step explaining what it does and why it is needed.
