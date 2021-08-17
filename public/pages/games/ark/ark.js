var purchases = document.querySelector(".purchases");
document.documentElement.style.setProperty('--animate-duration', '0.5s');

function toggleClass(e, toggledClass) {
    e.classList.toggle(toggledClass);
}

function toggleHiddenStores() {
    var dropdown = document.querySelector(".dropdown");
    var open = document.querySelector(".open")
    var icon = document.querySelector(".icon")
    toggleClass(dropdown, "hide");
    toggleClass(dropdown, "rounded-md");
    toggleClass(dropdown, "animate__FadeIn");
    toggleClass(open, "group-hover:border-red-500");
    toggleClass(open, "border-red-500");
    toggleClass(icon, "group-hover:text-red-500");
    toggleClass(icon, "text-red-500");
}

purchases.addEventListener("click", toggleHiddenStores);
