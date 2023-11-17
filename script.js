let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");

window.onscroll = function() {
    var lchange = document.getElementById('lchange')
    var menu = document.getElementById('menu')

    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove("hidden");
        lchange.classList.remove("lchangehidden");
    } else {
        header.classList.add("hidden");
        lchange.classList.add("lchangehidden");
        menu.classList.add("menuhidden")
    }

    prevScrollPos = currentScrollPos;
}