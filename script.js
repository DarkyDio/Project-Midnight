const bgm = document.getElementById('bgm');
const clickSound = document.getElementById('click-sound');

const translations = {
    'EN': {
        'new': 'NEW ENTRY', 'resume': 'RESUME', 'settings': 'SETTINGS',
        'back': 'BACK TO TERMINAL', 'layout': 'INTERFACE LAYOUT',
        'audio': 'AUDIO MASTER', 'config': 'SYSTEM CONFIGURATION',
        'sub': 'Storage Facility Management System v1.0'
    },
    'ES': {
        'new': 'NUEVA ENTRADA', 'resume': 'REANUDAR', 'settings': 'OPCIONES',
        'back': 'VOLVER AL MENÚ', 'layout': 'DISEÑO DE INTERFAZ',
        'audio': 'VOLUMEN MAESTRO', 'config': 'CONFIGURACIÓN DEL SISTEMA',
        'sub': 'Sistema de Gestión de Almacén v1.0'
    }
};

document.addEventListener('click', () => {
    if (bgm.paused) { bgm.volume = 0.3; bgm.play(); }
}, { once: true });

function playSoftClick() {
    clickSound.currentTime = 0;
    clickSound.volume = 0.2;
    clickSound.play();
}

function showMsg(text) {
    const gui = document.getElementById('notification-gui');
    document.getElementById('gui-msg').innerText = text;
    gui.classList.add('active');
    setTimeout(() => gui.classList.remove('active'), 2000);
}

function toggleSettings(show) {
    playSoftClick();
    const modal = document.getElementById('settings-menu');
    show ? modal.classList.add('active') : modal.classList.remove('active');
}

function setLanguage(lang) {
    playSoftClick();
    const t = translations[lang];
    document.getElementById('btn-new').innerText = t.new;
    document.getElementById('btn-resume').innerText = t.resume;
    document.getElementById('btn-settings').innerText = t.settings;
    document.getElementById('btn-back').innerText = t.back;
    document.getElementById('label-layout').innerText = t.layout;
    document.getElementById('label-audio').innerText = t.audio;
    document.getElementById('header-config').innerText = t.config;
    document.getElementById('subtitle-text').innerText = t.sub;
    showMsg(lang === 'ES' ? "IDIOMA ACTUALIZADO" : "LANGUAGE UPDATED");
}

function changeLayout(val) {
    playSoftClick();
    document.getElementById('main-body').className = val;
}

function updateVol(val) {
    bgm.volume = val / 100;
}

function startGame() {
    playSoftClick();
    showMsg("INITIALIZING...");
}
