
document.querySelector('#menuButton').addEventListener('click', function() {
    let menu = document.getElementById('menu');

    if (menu.classList.contains("toggleMenu_of")) {
        menu.classList.remove("toggleMenu_of");
    } else {
        menu.classList.add("toggleMenu_of");
    }
})