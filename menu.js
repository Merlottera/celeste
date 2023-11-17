function menuhide() {
    var menu = document.getElementById('menu')

    if(menu.classList.contains("menuhidden")) {
        menu.classList.remove("menuhidden")
    } else {
        menu.classList.add("menuhidden")
    }
}