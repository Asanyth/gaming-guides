document.documentElement.style.setProperty('--animate-duration', '0.5s');

const toggleClass = (e, toggledClass) => {
    e.classList.toggle(toggledClass);
}

const toggleHiddenStores = () => {
    let dropdown = document.querySelector(".dropdown");
    let open = document.querySelector(".open")
    let icon = document.querySelector(".icon")
    toggleClass(dropdown, "hide");
    toggleClass(dropdown, "rounded-md");
    toggleClass(dropdown, "animate__fadeInLeft");
    toggleClass(open, "group-hover:border-red-500");
    toggleClass(open, "border-red-500");
    toggleClass(icon, "group-hover:text-red-500");
    toggleClass(icon, "text-red-500");
}

const purchases = document.querySelector(".purchases");
purchases.addEventListener("click", toggleHiddenStores);
