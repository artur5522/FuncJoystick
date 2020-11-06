var botonArriba = document.getElementById("boton");

window.onscroll = function() {alNavegar()};

function alNavegar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

function volverArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}