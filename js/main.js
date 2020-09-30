function hideShowNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function toggleDarkMode() {
    var body = document.getElementById("body");
    var currentClass = body.className;

    if (currentClass == "dark-mode") {
        body.className = "light-mode";
        sessionStorage.removeItem('dark');
    }
    else {
        body.className = "dark-mode"
        sessionStorage.setItem('dark', true);
    }
}

if (sessionStorage.getItem('dark')) {
    body.className = "dark-mode";
}

button = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}