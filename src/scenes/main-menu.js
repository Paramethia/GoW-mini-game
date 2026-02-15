import { sparta } from './sparta.js';

export function mainMenu(g) {
    g.game.style.height = '70%';
    g.game.innerHTML = `
        <div class="Main-menu">
            <button id='m-music'>
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
    
    const musicOption = document.getElementById('m-music');
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
            porp.innerText = "Pause main music?"
        } else { porp.innerText = "Play main music?" }
    }
    musicOption.onmouseout = () => {
        g.audios.hoverSound.pause(); 
        g.audios.hoverSound.currentTime = 0;
        musicNote.style.color = '#0d0d0d';
        porp.style.display = 'none';
    }
    musicOption.onclick = () => {
        g.play = !g.play;
        if (g.play) {
            g.audios.mainTheme.play();
            g.audios.mainTheme.loop = true;
        } else { g.audios.mainTheme.pause() }
    }

    function leaveMenu() {
        g.game.style.height = '100%';
		g.audios.selection.play();
		g.title.style.display = 'none';
        document.removeEventListener("keydown", g.navKeys);
        document.removeEventListener('keydown', escHandler);
		sparta(g);
		g.inMainMenu = false;
	}

    const buttons = [newGameB, loadGameB, optionsB];
    let currentIndex = -1;

    if (g.navKeys) document.removeEventListener("keydown", g.navKeys);

    function selectButton(index) {
		// reset all buttons (simulate mouseout)
		buttons.forEach(btn => btn.onmouseout && btn.onmouseout());

		// apply hover effect to the current one (simulate mouseover)
		if (buttons[index].onmouseover) {
			buttons[index].onmouseover();
		}

		currentIndex = index;
	}

	g.navKeys = function(e) {
        if (e.repeat) return;

		if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
			let nextIndex = (currentIndex + 1) % buttons.length;
			selectButton(nextIndex);
		}

		if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
			let prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
			selectButton(prevIndex);
		}

		if (e.key === "Enter") {
			// simulate click
			if (buttons[currentIndex].onclick) buttons[currentIndex].onclick()
		}
	}

	document.addEventListener("keydown", g.navKeys);

    buttons.forEach((button) => {
        button.onmouseover = () => {
            g.audios.hoverSound.cloneNode().play();
            button.style.scale = '1.2';
            button.style.background = 'darkgrey';
            button.style.color = '#630b05';
        }
        button.onmouseout = () => {
            button.style.transition = 'all 0.4s ease 0s';
            button.style.scale = '1';
            button.style.background = '#7a715e';
            button.style.color = '#0a0a23';
        }
    });

    newGameB.onclick = () => {
        g.audios.selection.play();
        mmButtons.style.display = 'none';
        if (savedGame) { 
            warning.style.display = 'block';
        } else {
            document.querySelector(".Main-menu").style.background = 'url("Imagery/Game start.gif")';
            document.querySelector(".Main-menu").style.backgroundSize = 'cover';
            document.querySelector(".Main-menu").style.backgroundRepeat = 'no-repeat';
            if (g.play) g.audios.mainTheme.pause();
            g.audios.gameStart.play();
            setTimeout(() => {
                warning.style.display = 'none';
                leaveMenu();
                if (g.play) g.audios.mainTheme.play();
            }, 5800 )
        }
    }

    yesB.onmouseover = () => { g.audios.hoverSound.cloneNode().play() }
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
        leaveMenu();
    }

    noB.onmouseover = () => { g.audios.hoverSound.cloneNode().play() }
    noB.onclick = () => {
        g.audios.selection.play();
        warning.style.display = 'none';
        mmButtons.style.display = 'block';
    }

    loadGameB.onclick = () => {
        if (savedGame) {
            g.audios.selection.play();
            leaveMenu()
        }
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
		[g.audios.mainTheme, g.audios.battleTheme, g.audios.battleTheme2, g.audios.cyclopsBattle, g.audios.zeusBattle].forEach((song) => song.volume = g.musicVolume / 100);
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