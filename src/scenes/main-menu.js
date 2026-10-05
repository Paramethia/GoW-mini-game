import loader from '../components/loader.js';
import { ui, music, ambience, dialogue, sfx } from '../audio.js';
import sparta from './sparta.js';

export default function mainMenu(g) {
    g.game.style.height = '70%';
    g.game.innerHTML = `
        <div id="Load-screen">
            <div class="loader">
                <span id="progress"></span>
            </div>
        </div>
        <div id="Main-menu">
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
                <center><h3 class="o-buttons" id="audio-o"> Audio </h3></center>
                <div id="Audio" style="display:none">
                    <center>
                    <h3> All </h3>
                    <input type="range" min="0" max="100" value="0" id="all-vol-slider">
                    <p> Current volume: <span id="all-volume"> 0 </span></p>
                    </center>
                    <center>
                    <h3> UI </h3>
                    <input type="range" min="0" max="100" value="${g.uiVolume}" id="ui-vol-slider">
                    <p> Current volume: <span id="ui-volume"> ${g.uiVolume} </span></p>
                    </center>
                    <center>
                    <h3> Music </h3>
                    <input type="range" min="0" max="100" value="${g.musicVolume}" id="music-vol-slider">
                    <p> Current volume: <span id="music-volume"> ${g.musicVolume} </span></p>
                    </center>
                    <center>
                    <h3> Ambience </h3>
                    <input type="range" min="0" max="100" value="${g.ambienceVolume}" id="ambience-vol-slider">
                    <p> Current volume: <span id="ambience-volume"> ${g.ambienceVolume} </span></p>
                    </center>
                    <center>
                    <h3> Dialogue </h3>
                    <input type="range" min="0" max="100" value="${g.dialogueVolume}" id="dialogue-vol-slider">
                    <p> Current volume: <span id="dialogue-volume"> ${g.dialogueVolume} </span></p>
                    </center>
                    <center>
                    <h3> SFX </h3>
                    <input type="range" min="0" max="100" value="${g.sfxVolume}" id="sfx-vol-slider">
                    <p> Current volume: <span id="sfx-volume"> ${g.sfxVolume} </span></p>
                    </center>
                </div>
                <center><h3 class="o-buttons" id="controls-o"> Controls </h3></center>
                <div id="Controls" style="display:none">
					<div class="controls"><span> A / ← </span><font color="#d8c8a8">Walk left</font></div>
					<div class="controls"><span> D / → </span><font color="#d8c8a8">Walk right</font></div>
					<div class="controls"><span> E </span><font color="#d8c8a8">Light attack</font></div>
					<div class="controls"><span> R </span><font color="#d8c8a8">Heavy attack</font></div>
					<div class="controls"><span> Q </span><font color="#d8c8a8">Block</font></div>
                    <div class="controls"><span> F </span><font color="#d8c8a8">Enemy focus</font></div>
					<div class="controls"><span> Space </span><font color="#d8c8a8">Jump</font></div>
					<div class="controls"><span> Shift </span><font color="#d8c8a8">Dodge/dash</font></div>
				</div>
                <center><h3 class="o-buttons" id="advanved-o"> Advanced </h3></center>
                <div id="Advanced" style="display:none">
                    <div class="toggle"> > Hardcore ${g.hardcore ? "on" : "off"} < </div>
					<div class="toggle"> > Developer mode ${g.devMode ? "on" : "off"} < </div>
					<div class="toggle"> > Freeplay mode ${g.freePlay ? "on" : "off"} < </div>
                    <div id="link" onClick="window.open('https://github.com/Paramethia/GoW-mini-game/blob/master/WhatsNew.md', '_blank')"> Update changes </div>
				</div>
            </div>
            
            <div class="Mm-buttons">
                <button id="New-gameB" class="menubut">New game</button>
                <button id="Load-gameB" class="menubut">Load game</button>
                <button id="OptionsB" class="menubut">Options</button>
            </div>
        </div>
    `;

    const mainMenuCon = document.getElementById("Main-menu");
    if (!g.loaded) loader(g, document.getElementById("Load-screen"), mainMenuCon)

    g.inMainMenu = true;

    const savedGame = g.currentBattle || Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'));
    
    const musicOption = document.getElementById('m-music');
    const musicNote = document.getElementById('music-note');
    const newGameB = document.getElementById('New-gameB');
    const loadGameB = document.getElementById('Load-gameB');
        if (savedGame) loadGameB.style.filter = 'brightness(100%)';
    const optionsB = document.getElementById('OptionsB');
    const yesB = document.getElementById('YesB');
    const noB = document.getElementById('NoB');
    const closeB = document.getElementById('return');
    const mmButtons = document.querySelector('.Mm-buttons');
    const warning = document.querySelector('.Warning');
    const options = document.querySelector('.Options');
    const optionsButtons = document.querySelectorAll('.o-buttons');
    // Music options elements
    const allVolText = document.getElementById('all-volume');
    const uiVolText = document.getElementById('ui-volume');
    const musicVolText = document.getElementById('music-volume');
    const ambienceVolText = document.getElementById('ambience-volume');
    const dialogueVolText = document.getElementById('dialogue-volume');
    const sfxVolText = document.getElementById('sfx-volume');
    const allVolSlider = document.getElementById('all-vol-slider');
    const uiVolSlider = document.getElementById('ui-vol-slider');
    const musicVolSlider = document.getElementById('music-vol-slider');
    const ambVolSlider = document.getElementById('ambience-vol-slider');
    const dialogVolSlider = document.getElementById('dialogue-vol-slider');
    const sfxVolSlider = document.getElementById('sfx-vol-slider');
    // Advanved options elements
    const toggles = document.querySelectorAll('.toggle');
    
    musicOption.onmouseover = () => {
        g.playCaudio(g.audio.hover, g.uiVolume);
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
        if (warning.style.display === 'block' || options.style.display === 'block' || e.repeat) return
        
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
            g.playCaudio(g.audio.hover, g.uiVolume);
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
            mainMenuCon.style.background = 'url("Imagery/UI/Game start.gif")';
            mainMenuCon.style.backgroundSize = 'cover';
            mainMenuCon.style.backgroundRepeat = 'no-repeat';
            if (g.play) g.audio.mainTheme.pause();
            g.audio.gameStart.play();
            setTimeout(() => {
                warning.style.display = 'none';
                leaveMenu();
                if (g.play) g.audio.mainTheme.play();
            }, 5800 )
        }
    }

    yesB.onmouseover = () => { g.playCaudio(g.audio.hover, g.uiVolume); }
    yesB.onclick = () => { 
        g.audio.selection.play();
        g.restart();
        warning.style.display = 'none';
        leaveMenu();
    }

    noB.onmouseover = () => { g.playCaudio(g.audio.hover, g.uiVolume); }
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

    // Options buttons UI code

    const opCons = [document.getElementById('Audio'), document.getElementById('Controls'), document.getElementById("Advanced")]
    optionsButtons.forEach((button, index) => {
        button.onclick = () => {
            g.audio.selection.play();
            optionsButtons.forEach(b => b.style.display = 'none');
            opCons[index].style.display = 'flex';
        }
    });

    // Volume functions

    function updateAllVolumeSlider() {
        const volumes = [Number(uiVolSlider.value), Number(musicVolSlider.value), Number(ambVolSlider.value), Number(dialogVolSlider.value), Number(sfxVolSlider.value)];

        const average = volumes.reduce((sum, volume) => sum + volume, 0) / volumes.length;

        allVolSlider.value = Math.round(average);
        allVolText.innerText = Math.round(average);
    }

    updateAllVolumeSlider();

    allVolSlider.addEventListener('change', () => { 
        const allVolume = Number(allVolSlider.value);
        [allVolSlider, uiVolSlider, musicVolSlider, ambVolSlider, dialogVolSlider, sfxVolSlider].forEach(slider => slider.value = allVolume);
        [allVolText, uiVolText, musicVolText, ambienceVolText, dialogueVolText, sfxVolText].forEach(volText => volText.innerText = allVolume);
		g.uiVolume = allVolume;
        g.musicVolume = allVolume;
        g.ambienceVolume = allVolume;
        g.dialogueVolume = allVolume;
        g.sfxVolume = allVolume;
        ['ui', 'music', 'ambience', 'dialogue', 'sfx'].forEach(cat => localStorage.setItem(`${cat}Volume`, allVolume));
        [ui, music, ambience, dialogue, sfx].forEach(category => { 
            for (const audio of Object.values(category)) {
                audio.volume = allVolume / 100 
            }
        });
    });

    uiVolSlider.addEventListener('change', () => { 
        g.uiVolume = uiVolSlider.value;
		uiVolText.innerText = g.uiVolume;
		for (const sound of Object.values(ui)) sound.volume = g.uiVolume / 100
		localStorage.setItem('uiVolume', g.uiVolume);
        updateAllVolumeSlider();
    });

    musicVolSlider.addEventListener('change', () => { 
        g.musicVolume = musicVolSlider.value;
		musicVolText.innerText = g.musicVolume;
        for (const song of Object.values(music)) song.volume = g.musicVolume / 100
		localStorage.setItem('musicVolume', g.musicVolume);
        updateAllVolumeSlider();
    });

    ambVolSlider.addEventListener('change', () => { 
        g.ambienceVolume = ambVolSlider.value;
		ambienceVolText.innerText = g.ambienceVolume;
		for (const amb of Object.values(ambience)) amb.volume =  g.ambienceVolume / 100
		localStorage.setItem('ambienceVolume', g.ambienceVolume);
        updateAllVolumeSlider();
    });

    dialogVolSlider.addEventListener('change', () => { 
        g.dialogueVolume = dialogVolSlider.value;
		dialogueVolText.innerText = g.dialogueVolume;
		for (const dialog of Object.values(dialogue)) dialog.volume = g.dialogueVolume / 100
		localStorage.setItem('dialogueVolume', g.dialogueVolume);
        updateAllVolumeSlider();
    });

    sfxVolSlider.addEventListener('change', () => { 
        g.sfxVolume = sfxVolSlider.value;
		sfxVolText.innerText = g.sfxVolume;
		for (const sound of Object.values(sfx)) sound.volume = g.sfxVolume / 100
		localStorage.setItem('sfxVolume', g.sfxVolume);
        updateAllVolumeSlider();
    });

    // Toggles options
    const togNames = ["Hardcore", "Developer", "Freeplay"];
    const togProps = ["hardcore", "devMode", "freePlay"];
    toggles.forEach((toggle, index) => {
        toggle.onclick = () => {
            if (togNames[index] === "Freeplay" && !g.beatGame) {
                alert("You can only turn on freeplay mode when you have finished the game");
                return
            }
            const key = togProps[index];
            g[key] = !g[key];
            toggle.innerText = `> ${togNames[index]} ${index ? "mode" : ""} ${g[key] ? "on" : "off"} <`;
            localStorage.setItem(togNames[index].toLowerCase(), g[key]);
        }
    })

    closeB.onclick = () => close()

    function escHandler(event) { 
        if (event.repeat) return;
        if (event.key === 'Escape') close();
    }

    document.addEventListener('keydown', escHandler);

    function close() {
        let noConOpened = true;
        opCons.forEach(con => {
            if (con.style.display !== 'none') {
                con.style.display = 'none';
                optionsButtons.forEach(button => button.style.display = 'block');
                noConOpened = false;
            }
        })
        if (options.style.display === 'block' && noConOpened) {
            g.audio.return.play();
            options.style.display = 'none';
            mmButtons.style.display = 'block';
        }
    }
}