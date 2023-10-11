
function toggleNavMenu() {
    var toggledClassName = "open-nav"
    var navElement = document.querySelector("nav ul")
    var iconElement = document.querySelector(".hamburger")
    console.log({ toggledClassName, navElement })
    if (navElement.classList.contains(toggledClassName)) {
        navElement.classList.remove(toggledClassName)
        iconElement.classList.remove("fa-xmark")
        iconElement.classList.add("fa-bars")
    }
    else {
        navElement.classList.add(toggledClassName)
        iconElement.classList.remove("fa-bars")
        iconElement.classList.add("fa-xmark")
    }
}