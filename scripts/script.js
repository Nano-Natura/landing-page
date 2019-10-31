const navbar = document.getElementById("navbar");
const navlink = document.getElementsByClassName("nav-link");
const navbarBrand = document.getElementsByClassName("navbar-brand");
let isClicked;

function onHamburgerIconClick(state) {
    navbar.style.backgroundColor = "white";
    navbarBrand[0].classList.remove("text-white");
    navbarBrand[0].style.color = "black";

    isClicked = state;

    for (var i = 0; i < navlink.length; i++) {
        navlink[i].classList.remove("text-white");
        navlink[i].style.color = "black";

        if (document.documentElement.scrollTop === 0) {
            if (!isClicked) {
                navbar.style.backgroundColor = "transparent";
                navbarBrand[0].classList.add("text-white");
                navbar.classList.add("navbar-dark");
                navbar.classList.remove("navbar-light");
            } else {
                navbar.classList.remove("navbar-dark");
                navbar.classList.add("navbar-light");
                navbar.style.backgroundColor = "white";
                navbarBrand[0].classList.remove("text-white");
                navbarBrand[0].style.color = "black";
            }
        }
    }
}

window.onscroll = function() {
    if (document.documentElement.scrollTop < 20) {
        // on the top
        navbar.style.backgroundColor = "transparent";
        navbar.style.borderBottom = "none";
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");

        for (var i = 0; i < navlink.length; i++) {
            navlink[i].classList.add("text-white");
            navlink[i].classList.remove("onScrollNav");
        }
        
        navbarBrand[0].classList.add("text-white");
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.borderBottom = "1px solid #f7f7f7";
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");

        for (var i = 0; i < navlink.length; i++) {
            navlink[i].classList.remove("text-white");
            navlink[i].classList.add("onScrollNav");
        }

        navbarBrand[0].classList.remove("text-white");
        navbarBrand[0].style.color = "black";
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

$(".carousel").carousel({
    interval: 3000
});
