document.getElementById("botonVerde").addEventListener("click", function() {
    cambiarALuzVerde();
};

function cambiarALuzVerde() {
    apagarLuces()
    document.getElementById("luzVerde").classList.add('on');
    document.getElementById("luzVerde").classList.remove('off');

    setTimeout(function() {
        apagarLuces();
        document.getElementById("luzRoja").classList.add('on');
        document.getElementById("luzRoja").classList.remove('off');
    }, 5000; // Cambia a rojo después de 5 segundos
}

function apagarLuces() {
    const luces = ['luzRoja', 'luzAmarilla', 'luzVerde'];
    luces.forEach(luz => {
        document.getElementById(luz).classList.remove('on');
        document.getElementById(luz).classList.add('off');
    });
}

// Inicializar con la luz roja encendida
apagarLuces();
document.getElementById("luzRoja").classList.add('on');
document.getElementById("luzRoja").classList.remove('off');
