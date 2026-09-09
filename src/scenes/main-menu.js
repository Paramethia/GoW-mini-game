import loader from '../components/loader.js';
import sparta from './sparta.js';

export default function mainMenu(g) {
    g.game.style.height = '70%';
    g.game.innerHTML = `
        <div id="Load-screen">
            <div class="loader">
                <span id="progress"></span>
            </div>
        </div>
        <div class="Main-menu">
            <button id='m-music'>
                <i id="music-note" class="fa-sharp fa-solid fa-music fa-2xl" style="color: #0d0d0d;"></i>
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
                <h3> Music volume </h3>
                <input type="range" min="0" max="100" value="${g.musicVolume}" id="music-vol-slider">
                <p> Current volume: <span id="music-volume"> ${g.musicVolume} </span></p>
                <h3> Ambience volume </h3>
                <input type="range" min="0" max="100" value="${g.ambienceVolume}" id="ambience-vol-slider">
                <p> Current volume: <span id="ambience-volume"> ${g.ambienceVolume} </span></p>
                <h3> SFX volume </h3>
                <input type="range" min="0" max="100" value="${g.sfxVolume}" id="sfx-vol-slider">
                <p> Current volume: <span id="sfx-volume"> ${g.sfxVolume} </span></p>
                </center>
            </div>
            
            <div class="Mm-buttons">
                <button id="New-gameB" class="menubut">New game</button>
                <button id="Load-gameB" class="menubut">Load game</button>
                <button id="OptionsB" class="menubut">Options</button>
            </div>
        </div>
    `;

    if (!g.loaded) loader(g, document.getElementById("Load-screen"), document.querySelector(".Main-menu"))

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
    const sfxVolText = document.getElementById('sfx-volume');
    const mmButtons = document.querySelector('.Mm-buttons');
    const warning = document.querySelector('.Warning');
    const options = document.querySelector('.Options');
    const musicVolSlider = document.getElementById('music-vol-slider');
    const ambVolSlider = document.getElementById('ambience-vol-slider');
    const sfxVolSlider = document.getElementById('sfx-vol-slider');
    
    musicOption.onmouseover = () => {
        g.audio.hover.play();
        musicNote.style.color = '#614051';
        porp.style.display = 'inline';
        if (g.play == true) {
            porp.innerText = "Pause main music?"
        } else { porp.innerText = "Play main music?" }
    }
    musicOption.onmouseout = () => {
        g.audio.hover.pause(); 
        g.audio.hover.currentTime = 0;
        musicNote.style.color = '#0d0d0d';
        porp.style.display = 'none';
    }
    musicOption.onclick = () => {
        g.play = !g.play;
        if (g.play) {
            g.audio.mainTheme.play();
            g.audio.mainTheme.loop = true;
        } else { g.audio.mainTheme.pause() }
    }

    function leaveMenu() {
        g.game.style.height = '100%';
		g.audio.selection.play();
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
			if (buttons[currentIndex].onclick) buttons[currentIndex].onclick()
		}
	}

	document.addEventListener("keydown", g.navKeys);

    buttons.forEach((button) => {
        button.onmouseover = () => {
            g.audio.hover.cloneNode().play();
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
        g.audio.selection.play();
        mmButtons.style.display = 'none';
        if (savedGame) { 
            warning.style.display = 'block';
        } else {
            document.querySelector(".Main-menu").style.background = 'url("./Imagery/UI/Game start.gif")';
            document.querySelector(".Main-menu").style.backgroundSize = 'cover';
            document.querySelector(".Main-menu").style.backgroundRepeat = 'no-repeat';
            if (g.play) g.audio.mainTheme.pause();
            g.audio.gameStart.play();
            setTimeout(() => {
                warning.style.display = 'none';
                leaveMenu();
                if (g.play) g.audio.mainTheme.play();
            }, 5800 )
        }
    }

    yesB.onmouseover = () => { g.audio.hover.cloneNode().play() }
    yesB.onclick = () => { 
        g.audio.selection.play();
        [g.hoplite, g.banshee, g.satyr, g.gorgon, g.minotaur, g.medusa, g.cyclops, g.hades, g.hermes, g.hercules, g.zeus].forEach((enemy) => enemy.defeated = false );
        [ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'gorgonDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hadesDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated'].forEach(save => localStorage.removeItem(save));
        g.kratos.health = 100;
        g.kratos.orbs = 0;
        g.currentWeapon = 0;
        g.potionquantity = 0;
        g.kratos.inventory = ["Blades of chaos"];
        warning.style.display = 'none';
        leaveMenu();
    }

    noB.onmouseover = () => { g.audio.hover.cloneNode().play() }
    noB.onclick = () => {
        g.audio.selection.play();
        warning.style.display = 'none';
        mmButtons.style.display = 'block';
    }

    loadGameB.onclick = () => {
        if (savedGame) {
            g.audio.selection.play();
            leaveMenu();
        }
    }

    optionsB.onclick = () => {
        g.audio.selection.play();
        mmButtons.style.display = 'none';
        options.style.display = 'block';
    }

    // Volume functions

    musicVolSlider.addEventListener('change', event => { 
        g.musicVolume = musicVolSlider.value;
		musicVolText.innerText = g.musicVolume;
		[g.audio.mainTheme, g.audio.battleTheme, g.audio.battleTheme2, g.audio.battleTheme3, g.audio.cyclopsBattle, g.audio.hadesBattle, g.audio.hermesBattle, g.audio.herculesBattle, g.audio.zeusBattle].forEach((song) => song.volume = g.musicVolume / 100);
		localStorage.setItem('musicVolume', g.musicVolume);
    });

    ambVolSlider.addEventListener('change', event => { 
        g.ambienceVolume = ambVolSlider.value;
		ambienceVolText.innerText = g.ambienceVolume;
		[g.audio.underworldAm, g.audio.olympusAm].forEach((amb) => amb.volume = g.ambienceVolume / 100);
		localStorage.setItem('ambienceVolume', g.ambienceVolume);
    });

    sfxVolSlider.addEventListener('change', () => { 
        g.sfxVolume = sfxVolSlider.value;
		sfxVolText.innerText = g.sfxVolume;
		[
            g.audio.evadeSound, g.audio.blockSound, 
            g.audio.stoneHit, g.audio.stoneBreak, g.audio.stoneBroke, g.audio.stonify, g.audio.deathScream, 
            g.audio.hopliteAttacked, g.audio.hopliteDeath, 
            g.audio.bansheeAttacked, g.audio.bansheeDeath, g.audio.bansheeScream, 
            g.audio.satyrAttacked, g.audio.satyrDeath, 
            g.audio.gorgonAttacked, g.audio.gorgonDeath, g.audio.gorgonPetrify, g.audio.snakesHiss,
            g.audio.minotaurAttacked, g.audio.minotaurDeath, g.audio.minBlock,
            g.audio.medusaAttacked, g.audio.medusaDeath, g.audio.medusaPetrify, g.audio.medusaLaugh,
            g.audio.cyclopsAttacked, g.audio.cyclopsDeath,
            g.audio.hadesAttacked, g.audio.hadesDeath, g.audio.soulTake, g.audio.handGrasp, g.audio.held,
            g.audio.hermesAttacked, g.audio.hermesDeath, g.audio.dodge, g.audio.speedStrike,
            g.audio.herculesAttacked, g.audio.herculesDeath, g.audio.smash,
            g.audio.zeusDeath, g.audio.electrify, g.audio.teleport, g.audio.lShoot,
            g.audio.heartbeat, g.audio.achievement, g.audio.defeatSound, g.audio.redOrbSound, g.audio.greenOrbSound, g.audio.wonned
        ].forEach((sound) => { sound.volume = g.sfxVolume / 100 });
		localStorage.setItem('sfxVolume', g.sfxVolume);
    });

    closeB.onclick = () => close()

    function escHandler(event) { 
        if (event.repeat) return;
        if (event.key === 'Escape') close();
    }

    document.addEventListener('keydown', escHandler);

    function close() {
        if (options.style.display === "block") {
            g.audio.return.play();
            options.style.display = 'none';
            mmButtons.style.display = 'block';
        }
    }
}