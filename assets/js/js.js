let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 2000) {
        nav.style.backgroundColor = "black";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }

})