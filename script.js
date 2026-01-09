const bgm = document.getElementById('bgm');
const clickSound = document.getElementById('click-sound');

// Iniciar música al primer click (Regla de navegadores)
document.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.volume = 0.3;
        bgm.play();
    }
}, { once: true });

function showMsg(text) {
    const gui = document.getElementById('notification-gui');
    document.getElementById('gui-msg').innerText = text;
    gui.classList.add('active');
    setTimeout(() => gui.classList.remove('active'), 2500);
}

function changeLayout(layoutName) {
    document.getElementById('main-body').className = layoutName;
    showMsg("LAYOUT UPDATED: " + layoutName.toUpperCase());
    playSoftClick();
}

function playSoftClick() {
    clickSound.currentTime = 0;
    clickSound.volume = 0.2;
    clickSound.play();
}

function toggleSettings(show) {
    playSoftClick();
    document.getElementById('settings-menu').style.display = show ? 'flex' : 'none';
}

function startGame() {
    playSoftClick();
    showMsg("INITIALIZING SYSTEM...");
    // Transición suave aquí
}

// Vincula el sonido a todos los botones automáticamente
document.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', playSoftClick);
});
