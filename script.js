if (window.matchMedia("(max-width: 1000px)").matches) {
    var isTouched = false;

    document.addEventListener('touchstart', function() {
        isTouched = true;
        document.querySelector('.frase-titulo').classList.add('hovered');
    });

    document.addEventListener('touchend', function() {
        isTouched = false;
        document.querySelector('.frase-titulo').classList.remove('hovered');
    });

    document.querySelector('.frase-titulo').addEventListener('touchstart', function() {
        isTouched = true;
        document.querySelector('.frase-titulo').classList.remove('hovered');
    });

    document.querySelector('.frase-titulo').addEventListener('touchend', function() {
        isTouched = false;
        document.querySelector('.frase-titulo').classList.add('hovered');
    });

    document.querySelector('.frase-titulo').addEventListener('mouseover', function() {
        if (!isTouched) {
            document.querySelector('.frase-titulo').classList.remove('hovered');
        }
    });

    document.querySelector('.frase-titulo').addEventListener('mouseleave', function() {
        if (!isTouched) {
            document.querySelector('.frase-titulo').classList.add('hovered');
        }
    });
}

document.getElementById('btnEnviarEmail').addEventListener('click', function() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to=victor.d.jesus@edu.ufes.br');
});