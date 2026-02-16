import { sparta } from './sparta.js';

export function mainMenu(g) {
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

    const loaderScreen = document.getElementById("Load-screen");
    const mainMenu = document.querySelector(".Main-menu");
    loaderScreen.style.display = "flex";
    mainMenu.style.display = "none";

    const UIassets = [
        // Main menu
        "Imagery/Game start.gif",
        "Imagery/Opening menu image.png",
        // Stats
        "Imagery/Stats blade.png",
        "Imagery/Red orb.png",
        // Sparta
        "Imagery/Sparta.png",
        "Imagery/Kratos standing animation.gif",
        "Imagery/Sparta smithy.png",
        "Imagery/Underworld.png",
        "Imagery/Mount Olympus.png",
        // Smithy
        "Imagery/In smithy.png",
        "Imagery/Sparta background.jpg",
        "Imagery/Nemesis whip.png",
        "Imagery/Nemesis whip (outlined).png",
        "Imagery/Claws of Hades.png",
        "Imagery/Claws of Hades (outlined).png",
        "Imagery/Gauntlet of Zeus.png",
        "Imagery/Gauntlet of Zeus (outlined).png",
        "Imagery/Nemean cestus.png",
        "Imagery/Nemean cestus (outlined).png",
        "Imagery/Blade of Olympus.png",
        "Imagery/Blade of Olympus (outlined).png",
        // Underworld
        "Imagery/In underworld.png",
        "Imagery/Hoplite.png",
        "Imagery/Banshee.png",
        "Imagery/Satyr.png",
        "Imagery/Gorgon.png",
        "Imagery/Minotaur.png",
        "Imagery/Medusa.png",
        "Imagery/Cyclops.png",
        "Imagery/Hades.png",
        // Olympus
        "Imagery/Olympus background.png",
        "Imagery/Hermes.png",
        "Imagery/Hercules.png",
        "Imagery/Zeus.png"
    ];

    const battleAssets = [
        // --- Kratos ---
        "Imagery/Kratos dodging right.png",
        "Imagery/Kratos dodging left.png",
        "Imagery/Kratos fighting stance right (Blades of chaos).png",
        "Imagery/Kratos fighting stance left (Blades of chaos).png",
        "Imagery/Kratos fighting stance right (Blades of chaos)-lit.png",
        "Imagery/Kratos fighting stance left (Blades of chaos)-lit.png",
        "Imagery/Kratos light attacks right with blades of chaos 1.png",
        "Imagery/Kratos light attacks right with blades of chaos 2.png",
        "Imagery/Kratos light attacks right with blades of chaos 3.png",
        "Imagery/Kratos light attacks left with blades of chaos 1.png",
        "Imagery/Kratos light attacks left with blades of chaos 2.png",
        "Imagery/Kratos light attacks left with blades of chaos 3.png",
        "Imagery/Kratos heavy attacks right with blades of chaos 1.png",
        "Imagery/Kratos heavy attacks right with blades of chaos 2.png",
        "Imagery/Kratos heavy attacks left with blades of chaos 1.png",
        "Imagery/Kratos heavy attacks left with blades of chaos 2.png",
        "Imagery/Kratos blocking right with blades of chaos.png",
        "Imagery/Kratos blocking left with blades of chaos.png",
        "Imagery/Kratos aerial attack right with blades of chaos.png",
        "Imagery/Kratos aerial attack left with blades of chaos.png",
        "Imagery/Kratos fighting stance right (Nemesis whip).png",
        "Imagery/Kratos fighting stance left (Nemesis whip).png",
        "Imagery/Kratos fighting stance right (Nemesis whip)-lit.png",
        "Imagery/Kratos fighting stance left (Nemesis whip)-lit.png",
        "Imagery/Kratos light attacks right with nemesis whip 1.png",
        "Imagery/Kratos light attacks right with nemesis whip 2.png",
        "Imagery/Kratos light attacks right with nemesis whip 3.png",
        "Imagery/Kratos light attacks left with nemesis whip 1.png",
        "Imagery/Kratos light attacks left with nemesis whip 2.png",
        "Imagery/Kratos light attacks left with nemesis whip 3.png",
        "Imagery/Kratos heavy attacks right with nemesis whip 1.png",
        "Imagery/Kratos heavy attacks right with nemesis whip 2.png",
        "Imagery/Kratos heavy attacks left with nemesis whip 1.png",
        "Imagery/Kratos heavy attacks left with nemesis whip 2.png",
        "Imagery/Kratos blocking right with nemesis whip.png",
        "Imagery/Kratos blocking left with nemesis whip.png",
        "Imagery/Kratos aerial attack right with nemesis whip.png",
        "Imagery/Kratos aerial attack left with nemesis whip.png",
        "Imagery/Kratos fighting stance right (Claws of Hades).png",
        "Imagery/Kratos fighting stance left (Claws of Hades).png",
        "Imagery/Kratos fighting stance right (Claws of Hades)-lit.png",
        "Imagery/Kratos fighting stance left (Claws of Hades)-lit.png",
        "Imagery/Kratos light attacks right with claws of hades 1.png",
        "Imagery/Kratos light attacks right with claws of hades 2.png",
        "Imagery/Kratos light attacks right with claws of hades 3.png",
        "Imagery/Kratos light attacks left with claws of hades 1.png",
        "Imagery/Kratos light attacks left with claws of hades 2.png",
        "Imagery/Kratos light attacks left with claws of hades 3.png",
        "Imagery/Kratos heavy attacks right with claws of hades 1.png",
        "Imagery/Kratos heavy attacks right with claws of hades 2.png",
        "Imagery/Kratos heavy attacks left with claws of hades 1.png",
        "Imagery/Kratos heavy attacks left with claws of hades 2.png",
        "Imagery/Kratos blocking right with claws of hades.png",
        "Imagery/Kratos blocking left with claws of hades.png",
        "Imagery/Kratos aerial attack right with claws of hades.png",
        "Imagery/Kratos aerial attack left with claws of hades.png",
        "Imagery/Kratos fighting stance right (Gauntlet of Zeus).png",
        "Imagery/Kratos fighting stance left (Gauntlet of Zeus).png",
        "Imagery/Kratos light attacks right with gauntlet of zeus 1.png",
        "Imagery/Kratos light attacks right with gauntlet of zeus 2.png",
        "Imagery/Kratos light attacks left with gauntlet of zeus 1.png",
        "Imagery/Kratos light attacks left with gauntlet of zeus 2.png",
        "Imagery/Kratos heavy attacks right with gauntlet of zeus 1.png",
        "Imagery/Kratos heavy attacks right with gauntlet of zeus 2.png",
        "Imagery/Kratos heavy attacks left with gauntlet of zeus 1.png",
        "Imagery/Kratos heavy attacks left with gauntlet of zeus 2.png",
        "Imagery/Kratos blocking right with gauntlet of zeus.png",
        "Imagery/Kratos blocking left with gauntlet of zeus.png",
        "Imagery/Kratos aerial attack right with gauntlet of zeus.png",
        "Imagery/Kratos aerial attack left with gauntlet of zeus.png",
        "Imagery/Kratos fighting stance right (Nemean cestus).png",
        "Imagery/Kratos fighting stance left (Nemean cestus).png",
        "Imagery/Kratos light attacks right with nemean cestus 1.png",
        "Imagery/Kratos light attacks right with nemean cestus 2.png",
        "Imagery/Kratos light attacks left with nemean cestus 1.png",
        "Imagery/Kratos light attacks left with nemean cestus 2.png",
        "Imagery/Kratos heavy attacks right with nemean cestus 1.png",
        "Imagery/Kratos heavy attacks right with nemean cestus 2.png",
        "Imagery/Kratos heavy attacks left with nemean cestus 1.png",
        "Imagery/Kratos heavy attacks left with nemean cestus 2.png",
        "Imagery/Kratos blocking right with nemean cestus.png",
        "Imagery/Kratos blocking left with nemean cestus.png",
        "Imagery/Kratos aerial attack right with nemean cestus.png",
        "Imagery/Kratos aerial attack left with nemean cestus.png",
        "Imagery/Kratos fighting stance right (Blade of Olympus).png",
        "Imagery/Kratos fighting stance left (Blade of Olympus).png",
        "Imagery/Kratos fighting stance right (Blade of Olympus)-lit.png",
        "Imagery/Kratos fighting stance left (Blade of Olympus)-lit.png",
        "Imagery/Kratos light attacks right with blade of olympus 1.png",
        "Imagery/Kratos light attacks right with blade of olympus 2.png",
        "Imagery/Kratos light attacks left with blade of olympus 1.png",
        "Imagery/Kratos light attacks left with blade of olympus 2.png",
        "Imagery/Kratos heavy attacks right with blade of olympus 1.png",
        "Imagery/Kratos heavy attacks right with blade of olympus 2.png",
        "Imagery/Kratos heavy attacks left with blade of olympus 1.png",
        "Imagery/Kratos heavy attacks left with blade of olympus 2.png",
        "Imagery/Kratos blocking right with blade of olympus.png",
        "Imagery/Kratos blocking left with blade of olympus.png",
        "Imagery/Kratos aerial attack right with blade of olympus.png",
        "Imagery/Kratos aerial attack left with blade of olympus.png",
        "Imagery/Kratos damage right.png",
        "Imagery/Kratos damage left.png",
        "Imagery/Kratos air damage right.png",
        "Imagery/Kratos air damage left.png",
        "Imagery/Kratos petrified right.png",
        "Imagery/Kratos petrified left.png",
        "Imagery/Kratos held by hands right.png",
        "Imagery/Kratos held by hands left.png",
        "Imagery/Kratos dead right.png",
        "Imagery/Kratos dead left.png",
        "Imagery/Kratos dead as stone right.png",
        "Imagery/Kratos dead as stone left.png",
        // --- Death screen image ---
        "Imagery/You are dead GoW CoO.png",
        // --- Underworld ---
        // Backgrounds
        "Imagery/Underworld battle area.png",
        "Imagery/Hades battle area.png",
        // Enemies
        "Imagery/Hoplite facing left.png",
        "Imagery/Hoplite facing right.png",
        "Imagery/Hoplite chasing left.png",
        "Imagery/Hoplite chasing right.png",
        "Imagery/Hoplite light attacks left.png",
        "Imagery/Hoplite light attacks right.png",
        "Imagery/Hoplite heavy attacks left.png",
        "Imagery/Hoplite heavy attacks right.png",
        "Imagery/Hoplite blocks left.png",
        "Imagery/Hoplite blocks right.png",
        "Imagery/Hoplite dead left.png",
        "Imagery/Hoplite dead right.png",
        "Imagery/Banshee facing left.png",
        "Imagery/Banshee facing right.png",
        "Imagery/Banshee chasing left.png",
        "Imagery/Banshee chasing right.png",
        "Imagery/Banshee light attacks left.png",
        "Imagery/Banshee light attacks right.png",
        "Imagery/Banshee heavy attacks left.png",
        "Imagery/Banshee heavy attacks right.png",
        "Imagery/Banshee screams left.png",
        "Imagery/Banshee screams right.png",
        "Imagery/Banshee dead left.png",
        "Imagery/Banshee dead right.png",
        "Imagery/Satyr facing left.png",
        "Imagery/Satyr facing right.png",
        "Imagery/Satyr chasing left.png",
        "Imagery/Satyr chasing right.png",
        "Imagery/Satyr light attacks left.png",
        "Imagery/Satyr light attacks right.png",
        "Imagery/Satyr heavy attacks left.png",
        "Imagery/Satyr heavy attacks right.png",
        "Imagery/Satyr blocks left.png",
        "Imagery/Satyr blocks right.png",
        "Imagery/Satyr dead left.png",
        "Imagery/Satyr dead right.png",
        "Imagery/Gorgon facing left.png",
        "Imagery/Gorgon facing right.png",
        "Imagery/Gorgon chasing left.png",
        "Imagery/Gorgon chasing right.png",
        "Imagery/Gorgon light attacks left.png",
        "Imagery/Gorgon light attacks right.png",
        "Imagery/Gorgon heavy attacks left.png",
        "Imagery/Gorgon heavy attacks right.png",
        "Imagery/Gorgon petrifies left.png",
        "Imagery/Gorgon petrifies right.png",
        "Imagery/Gorgon dead left.png",
        "Imagery/Gorgon dead right.png",
        "Imagery/Minotaur facing left.png",
        "Imagery/Minotaur facing right.png",
        "Imagery/Minotaur chasing left.png",
        "Imagery/Minotaur chasing right.png",
        "Imagery/Minotaur light attacks left.png",
        "Imagery/Minotaur light attacks right.png",
        "Imagery/Minotaur heavy attacks left.png",
        "Imagery/Minotaur heavy attacks right.png",
        "Imagery/Minotaur blocks left.png",
        "Imagery/Minotaur blocks right.png",
        "Imagery/Minotaur dead left.png",
        "Imagery/Minotaur dead right.png",
        "Imagery/Medusa facing left.png",
        "Imagery/Medusa facing right.png",
        "Imagery/Medusa chasing left.png",
        "Imagery/Medusa chasing right.png",
        "Imagery/Medusa light attacks left.png",
        "Imagery/Medusa light attacks right.png",
        "Imagery/Medusa heavy attacks left.png",
        "Imagery/Medusa heavy attacks right.png",
        "Imagery/Medusa petrifies left.png",
        "Imagery/Medusa petrifies right.png",
        "Imagery/Medusa dead left.png",
        "Imagery/Medusa dead right.png",
        "Imagery/Cyclops facing left.png",
        "Imagery/Cyclops facing right.png",
        "Imagery/Cyclops chasing left.png",
        "Imagery/Cyclops chasing right.png",
        "Imagery/Cyclops light attacks left.png",
        "Imagery/Cyclops light attacks right.png",
        "Imagery/Cyclops heavy attacks left.png",
        "Imagery/Cyclops heavy attacks right.png",
        "Imagery/Cyclops dead left.png",
        "Imagery/Cyclops dead right.png",
        "Imagery/Hades facing left.png",
        "Imagery/Hades facing right.png",
        "Imagery/Hades chasing left.png",
        "Imagery/Hades chasing right.png",
        "Imagery/Hades light attacks left.png",
        "Imagery/Hades light attacks right.png",
        "Imagery/Hades heavy attacks left.png",
        "Imagery/Hades heavy attacks right.png",
        "Imagery/Hades takes soul left.png",
        "Imagery/Hades takes soul right.png",
        "Imagery/Hades summons left.png",
        "Imagery/Hades summons right.png",
        "Imagery/Hades dead left.png",
        "Imagery/Hades dead right.png",
        // --- Olympus ----
        // Backgrounds
        "Imagery/Olympus battle area.png",
        "Imagery/Zeus battle area.png",
        // Enemies
        "Imagery/Hermes facing left.png",
        "Imagery/Hermes facing right.png",
        "Imagery/Hermes chasing left.png",
        "Imagery/Hermes chasing right.png",
        "Imagery/Hermes light attacks left.png",
        "Imagery/Hermes light attacks right.png",
        "Imagery/Hermes heavy attacks left.png",
        "Imagery/Hermes heavy attacks right.png",
        "Imagery/Hermes dodges left.png",
        "Imagery/Hermes dodges right.png",
        "Imagery/Hermes sprints left.png",
        "Imagery/Hermes sprints right.png",
        "Imagery/Hermes dead left.png",
        "Imagery/Hermes dead right.png",
        "Imagery/Hercules facing left.png",
        "Imagery/Hercules facing right.png",
        "Imagery/Hercules chasing left.png",
        "Imagery/Hercules chasing right.png",
        "Imagery/Hercules light attacks left.png",
        "Imagery/Hercules light attacks right.png",
        "Imagery/Hercules heavy attacks left.png",
        "Imagery/Hercules heavy attacks right.png",
        "Imagery/Hercules blocks left.png",
        "Imagery/Hercules blocks right.png",
        "Imagery/Hercules smashes left.png",
        "Imagery/Hercules smashes right.png",
        "Imagery/Hercules dead left.png",
        "Imagery/Hercules dead right.png",
        "Imagery/Zeus facing left.png",
        "Imagery/Zeus facing right.png",
        "Imagery/Zeus chasing left.png",
        "Imagery/Zeus chasing right.png",
        "Imagery/Zeus light attacks left.png",
        "Imagery/Zeus light attacks right.png",
        "Imagery/Zeus heavy attacks left.png",
        "Imagery/Zeus heavy attacks right.png",
        "Imagery/Zeus teleports left.png",
        "Imagery/Zeus teleports right.png",
        "Imagery/Zeus blocks left.png",
        "Imagery/Zeus blocks right.png",
        "Imagery/Zeus falls left.png",
        "Imagery/Zeus falls right.png",
        "Imagery/Zeus victory pose left.png",
        "Imagery/Zeus victory pose right.png",
        "Imagery/Zeus dead left.png",
        "Imagery/Zeus dead right.png",
    ];

    preloadImages(UIassets).then(() => {
        g.audios.mainTheme.play();
        loaderScreen.style.display = "none";
        mainMenu.style.display = "block";
        preloadImages(battleAssets).then(() => console.log("Done"));
    });

    function preloadImages(images = []) {
        const progress = document.getElementById('progress');
        if (images.length > 100) console.log("Loading other images in the background...")
        let loaded = 0;

        return new Promise(resolve => {
            if (images.length === 0) resolve();

            images.forEach(src => {
                const img = new Image();

                img.onload = img.onerror = () => {
                    loaded++;
                    images.length < 100 ? progress.innerText = `${Math.round(loaded / images.length * 100)}%` : console.log(`Loading progress: ${Math.round(loaded / images.length * 100)}$`);
                    if (loaded === images.length) resolve();
                };

                img.src = src;
            });
        });
    }

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
        g.audios.hover.play();
        musicNote.style.color = '#614051';
        porp.style.display = 'inline';
        if (g.play == true) {
            porp.innerText = "Pause main music?"
        } else { porp.innerText = "Play main music?" }
    }
    musicOption.onmouseout = () => {
        g.audios.hover.pause(); 
        g.audios.hover.currentTime = 0;
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
			if (buttons[currentIndex].onclick) buttons[currentIndex].onclick()
		}
	}

	document.addEventListener("keydown", g.navKeys);

    buttons.forEach((button) => {
        button.onmouseover = () => {
            g.audios.hover.cloneNode().play();
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

    yesB.onmouseover = () => { g.audios.hover.cloneNode().play() }
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

    noB.onmouseover = () => { g.audios.hover.cloneNode().play() }
    noB.onclick = () => {
        g.audios.selection.play();
        warning.style.display = 'none';
        mmButtons.style.display = 'block';
    }

    loadGameB.onclick = () => {
        if (savedGame) {
            g.audios.selection.play();
            leaveMenu();
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
		[g.audios.mainTheme, g.audios.battleTheme, g.audios.battleTheme2, g.audios.battleTheme3, g.audios.cyclopsBattle, g.audios.hadesBattle, g.audios.hermesBattle, g.audios.herculesBattle, g.audios.zeusBattle].forEach((song) => song.volume = g.musicVolume / 100);
		localStorage.setItem('musicVolume', g.musicVolume);
    });

    ambVolSlider.addEventListener('change', event => { 
        g.ambienceVolume = ambVolSlider.value;
		ambienceVolText.innerText = g.ambienceVolume;
		[g.audios.underworldAm, g.audios.olympusAm].forEach((song) => song.volume = g.ambienceVolume / 100);
		localStorage.setItem('ambienceVolume', g.ambienceVolume);
    });

    closeB.onclick = () => close()

    function escHandler(event) { 
        if (event.repeat) return;
        if (event.key === 'Escape') close();
    }

    document.addEventListener('keydown', escHandler);

    function close() {
        if (options.style.display === "block") {
            g.audios.return.play();
            options.style.display = 'none';
            mmButtons.style.display = 'block';
        }
    }
}