// --- PROJECT: MIDNIGHT | TERMINAL LOGIC ---

// Configuration state
let config = {
    volume: 80,
    staticEffect: true,
    difficulty: "NORMAL"
};

/**
 * Transition to the game or intro story
 */
function startGame() {
    console.log("ALISTER_THORNE_LOGGED_IN...");
    
    // Add a transition effect (Fade out)
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        // Here you would redirect to your office.html or change the DOM
        alert("Initializing Intro: 1985 Employee Record of Alister Thorne...");
        // For now, let's just reset for the demo
        document.body.style.opacity = "1";
    }, 1000);
}

/**
 * Resumes the last session from localStorage
 */
function continueGame() {
    const savedNight = localStorage.getItem('midnight_night');
    if (savedNight) {
        alert("Resuming Night " + savedNight + "...");
    } else {
        alert("ERROR: No save data found for SUBJECT: THORNE.");
    }
}

/**
 * Toggles the Settings Overlay with animation
 */
function toggleSettings(show) {
    const settingsMenu = document.getElementById('settings-menu');
    
    if (show) {
        settingsMenu.classList.add('active');
        console.log("Terminal Config: Opened.");
    } else {
        settingsMenu.classList.remove('active');
        console.log("Terminal Config: Closed. Settings Saved.");
        saveConfig();
    }
}

/**
 * Simple local saving for settings
 */
function saveConfig() {
    localStorage.setItem('midnight_config', JSON.stringify(config));
}

// Visual feedback for Terminal Buttons (Console style)
const buttons = document.querySelectorAll('.menu-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        // You could play a 'beep' sound here
        console.log("Terminal_Hover: " + btn.innerText);
    });
});
