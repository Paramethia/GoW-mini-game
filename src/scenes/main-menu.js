import { sparta } from './sparta.js';

export function mainMenu(g) {
    g.game.innerHTML = `
        <div class="Main-menu">
            <button id='m-music-option'>
                <i id ="music-note" class="fa-sharp fa-solid fa-music fa-2xl" style="color: #0d0d0d;"></i>
            </button> <span id="porp"> Play main menu music? </span>
        
            <div class="Warning">
                <center>
                <p> Looks like you already have a saved game. If you start a new game, your progresss will be lost. Continue? </p>
                <button id="YesB"> Yep </button> <button id="NoB"> Nope </button>
                </center>
            </div>

            <div class="Options">
                <button id="return"> ESC </button>
                <center>
                <h3 id="first"> Music volume </h3>
                <input type="range" min="0" max="100" value="${g.musicVolume}" id="music-vol-slider">
                <p> Current volume: <span id="music-volume"> ${g.musicVolume} </span></p>
                <h3> Ambience volume </h3>
                <input type="range" min="0" max="100" value="${g.ambienceVolume}" id="ambience-vol-slider">
                <p> Current volume: <span id="ambience-volume"> ${g.ambienceVolume} </span></p>
                </center>
            </div>
            
            <div class="Mm-buttons">
                <button id="New-gameB" class="menubut">New game</button>
                <button id="Load-gameB" class="menubut">Load game</button>
                <button id="OptionsB" class="menubut">Options</button>
            </div>
        </div>
    `;

    const savedGame = Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'));
    
    const musicOption = document.getElementById('m-music-option');
    const musicNote = document.getElementById('music-note');
    const newGameB = document.getElementById('New-gameB');
    const loadGameB = document.getElementById('Load-gameB');
        if (savedGame) loadGameB.style.filter = 'brightness(100%)';
    const optionsB = document.getElementById('OptionsB');
    const yesB = document.getElementById('YesB');
    const noB = document.getElementById('NoB');
    const closeB = document.getElementById('return');
    const musicVolText = document.getElementById('music-volume');
    const ambienceVolText = document.getElementById('ambience-volume');
    const mmButtons = document.querySelector('.Mm-buttons');
    const warning = document.querySelector('.Warning');
    const options = document.querySelector('.Options');
    const musicVolSlider = document.getElementById('music-vol-slider');
    const ambVolSlider = document.getElementById('ambience-vol-slider');
    
    musicOption.onmouseover = () => {
        g.audios.hoverSound.play();
        musicNote.style.color = '#614051';
        porp.style.display = 'inline';
        if (g.play == true) {
            porp.innerText = "Pause main menu music?"
        } else {
            porp.innerText = "Play main menu music?"
        }
    }
    musicOption.onmouseout = () => {
        g.audios.hoverSound.pause(); 
        g.audios.hoverSound.currentTime = 0;
        musicNote.style.color = '#0d0d0d';
        porp.style.display = 'none';
    }
    musicOption.onclick = () => {
        switch(g.play) {
            case false:
                g.audios.menuTheme.play();
                g.audios.menuTheme.loop = true;
                g.play = true;
            break;
            case true:
                g.audios.menuTheme.pause();
                g.play = false;
            break;
        }
    }

    function leaveMenu() {
		g.audios.selection.play();
		g.title.style.display = 'none';
        document.removeEventListener('keydown', escHandler);
		sparta(g);
		g.inMainMenu = false;
	}

    newGameB.onmouseover = () => { g.audios.hoverSound.play() }
    newGameB.onmouseout = () => { 
        g.audios.hoverSound.pause();
        g.audios.hoverSound.currentTime = 0;
    }
    newGameB.onclick = () => {
        g.audios.selection.play();
        if (savedGame) {
            warning.style.display = 'block';
            mmButtons.style.display = 'none';
        } else {
            warning.style.display = 'none';
            leaveMenu();
        }
    }

    yesB.onmouseover = () => { g.audios.hoverSound.play() }
    yesB.onmouseout = () => { 
        g.audios.hoverSound.pause();
        g.audios.hoverSound.currentTime = 0;
    }
    yesB.onclick = () => { 
        g.audios.selection.play();
        [g.hoplite, g.banshee, g.satyr, g.minotaur, g.medusa, g.cyclops, g.hermes, g.hercules, g.zeus].forEach((enemy) => enemy.defeated = false );
        ['health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated' ].forEach(save => localStorage.removeItem(save));
        g.kratos.health = 100;
        g.kratos.orbs = 0;
        g.currentWeapon = 0;
        g.potionquantity = 0;
        g.inventory = ["Blades of chaos"];
        warning.style.display = 'none';
        leaveMenu(g)
    }

    noB.onmouseover = () => { g.audios.hoverSound.play() }
    noB.onmouseout = () => {
        g.audios.hoverSound.pause();
        g.audios.hoverSound.currentTime = 0;
    }
    noB.onclick = () => {
        g.audios.selection.play();
        warning.style.display = 'none';
        mmButtons.style.display = 'block';
    }

    loadGameB.onmouseover = () => { g.audios.hoverSound.play() }
    loadGameB.onmouseout = () => { 
        g.audios.hoverSound.pause();
        g.audios.hoverSound.currentTime = 0;
    }
    loadGameB.onclick = () => {
        if (savedGame) {
            g.audios.selection.play();
            leaveMenu()
        }
    }

    optionsB.onmouseover = () => { g.audios.hoverSound.play() }
    optionsB.onmouseout = () => {
        g.audios.hoverSound.pause();
        g.audios.hoverSound.currentTIme = 0;
    }
    optionsB.onclick = () => {
        g.audios.selection.play();
        mmButtons.style.display = 'none';
        options.style.display = 'block';
    }

    // Volume functions

    musicVolSlider.addEventListener('change', event => { 
        g.musicVolume = musicVolSlider.value;
		musicVolText.innerText = g.musicVolume;
		[g.audios.menuTheme, g.audios.battleTheme, g.audios.battleTheme2, g.audios.cyclopsBattle, g.audios.zeusBattle].forEach((song) => song.volume = g.musicVolume / 100);
		localStorage.setItem('musicVolume', musicVolume);
    });

    ambVolSlider.addEventListener('change', event => { 
        g.ambienceVolume = ambVolSlider.value;
		ambienceVolText.innerText = g.ambienceVolume;
		[g.audios.underworldAm, g.audios.OlympusAm].forEach((song) => song.volume = g.ambienceVolume / 100);
		localStorage.setItem('ambienceVolume', g.ambienceVolume);
    });

    closeB.onclick = () => close()

    function escHandler(event) { 
        if (event.repeat) return;
        if (event.key === 'Escape') close() 
    }

    document.addEventListener('keydown', escHandler);

    function close() {
        if (options.style.display === "block") {
            g.audios.returnSound.play();
            options.style.display = 'none';
            mmButtons.style.display = 'block';
        }
    }
}