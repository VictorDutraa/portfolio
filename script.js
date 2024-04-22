var isTouching = false;

if (window.matchMedia("(max-width: 1000px)").matches) {
    document.addEventListener('touchstart', function() {
        isTouching = true;
        document.querySelector('.as-vezes').style.display = 'none';
        document.querySelector('.sempre').style.display = 'block';
    });

    document.addEventListener('touchend', function() {
        isTouching = false;
        document.querySelector('.as-vezes').style.display = 'block';
        document.querySelector('.sempre').style.display = 'none';
    });
}

document.querySelector('.sobre-mim-longo').addEventListener('mouseover', function() {
    if (!isTouching) {
        document.querySelector('.as-vezes').style.display = 'none';
        document.querySelector('.sempre').style.display = 'block';
    }
});

document.querySelector('.sobre-mim-longo').addEventListener('mouseleave', function() {
    if (!isTouching) {
        document.querySelector('.as-vezes').style.display = 'block';
        document.querySelector('.sempre').style.display = 'none';
    }
});

document.querySelector('.sobre-mim-longo').addEventListener('mouseenter', function() {
    if (!isTouching) {
        document.querySelector('.as-vezes').style.display = 'none';
        document.querySelector('.sempre').style.display = 'block';
    }
});

document.querySelector('.sobre-mim-longo').addEventListener('mouseleave', function() {
    if (!isTouching) {
        document.querySelector('.as-vezes').style.display = 'block';
        document.querySelector('.sempre').style.display = 'none';
    }
});

document.getElementById('btnEnviarEmail').addEventListener('click', function() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to=victor.d.jesus@edu.ufes.br');
});