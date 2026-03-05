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

    const UIassets = [
        // Main menu
        "Imagery/UI/Game start.gif",
        "Imagery/UI/Opening menu image.png",
        // Stats
        "Imagery/UI/Stats blade.png",
        "Imagery/UI/Red orb.png",
        // Sparta
        "Imagery/UI/Sparta.png",
        "Imagery/UI/Kratos standing animation.gif",
        "Imagery/UI/Sparta smithy.png",
        "Imagery/UI/Underworld.png",
        "Imagery/UI/Mount Olympus.png",
        // Smithy
        "Imagery/UI/In smithy.png",
        "Imagery/UI/Sparta background.jpg",
        "Imagery/UI/Nemesis whip.png",
        "Imagery/UI/Nemesis whip (outlined).png",
        "Imagery/UI/Claws of Hades.png",
        "Imagery/UI/Claws of Hades (outlined).png",
        "Imagery/UI/Gauntlet of Zeus.png",
        "Imagery/UI/Gauntlet of Zeus (outlined).png",
        "Imagery/UI/Nemean cestus.png",
        "Imagery/UI/Nemean cestus (outlined).png",
        "Imagery/UI/Blade of Olympus.png",
        "Imagery/UI/Blade of Olympus (outlined).png",
        // Underworld
        "Imagery/UI/In underworld.png",
        "Imagery/UI/Hoplite.png",
        "Imagery/UI/Banshee.png",
        "Imagery/UI/Satyr.png",
        "Imagery/UI/Gorgon.png",
        "Imagery/UI/Minotaur.png",
        "Imagery/UI/Medusa.png",
        "Imagery/UI/Cyclops.png",
        "Imagery/UI/Hades.png",
        // Olympus
        "Imagery/UI/Olympus background.png",
        "Imagery/UI/Hermes.png",
        "Imagery/UI/Hercules.png",
        "Imagery/UI/Zeus.png"
    ];

    const battleAssets = [
        // --- Kratos ---
        "Imagery/battle/Kratos dodging right.png",
        "Imagery/battle/Kratos dodging left.png",
        "Imagery/battle/Kratos fighting stance right (Blades of chaos).png",
        "Imagery/battle/Kratos fighting stance left (Blades of chaos).png",
        "Imagery/battle/Kratos fighting stance right (Blades of chaos)-lit.png",
        "Imagery/battle/Kratos fighting stance left (Blades of chaos)-lit.png",
        "Imagery/battle/Kratos light attacks right with blades of chaos 1.png",
        "Imagery/battle/Kratos light attacks right with blades of chaos 2.png",
        "Imagery/battle/Kratos light attacks right with blades of chaos 3.png",
        "Imagery/battle/Kratos light attacks left with blades of chaos 1.png",
        "Imagery/battle/Kratos light attacks left with blades of chaos 2.png",
        "Imagery/battle/Kratos light attacks left with blades of chaos 3.png",
        "Imagery/battle/Kratos heavy attacks right with blades of chaos 1.png",
        "Imagery/battle/Kratos heavy attacks right with blades of chaos 2.png",
        "Imagery/battle/Kratos heavy attacks left with blades of chaos 1.png",
        "Imagery/battle/Kratos heavy attacks left with blades of chaos 2.png",
        "Imagery/battle/Kratos blocking right with blades of chaos.png",
        "Imagery/battle/Kratos blocking left with blades of chaos.png",
        "Imagery/battle/Kratos aerial attack right with blades of chaos.png",
        "Imagery/battle/Kratos aerial attack left with blades of chaos.png",
        "Imagery/battle/Kratos fighting stance right (Nemesis whip).png",
        "Imagery/battle/Kratos fighting stance left (Nemesis whip).png",
        "Imagery/battle/Kratos fighting stance right (Nemesis whip)-lit.png",
        "Imagery/battle/Kratos fighting stance left (Nemesis whip)-lit.png",
        "Imagery/battle/Kratos light attacks right with nemesis whip 1.png",
        "Imagery/battle/Kratos light attacks right with nemesis whip 2.png",
        "Imagery/battle/Kratos light attacks right with nemesis whip 3.png",
        "Imagery/battle/Kratos light attacks left with nemesis whip 1.png",
        "Imagery/battle/Kratos light attacks left with nemesis whip 2.png",
        "Imagery/battle/Kratos light attacks left with nemesis whip 3.png",
        "Imagery/battle/Kratos heavy attacks right with nemesis whip 1.png",
        "Imagery/battle/Kratos heavy attacks right with nemesis whip 2.png",
        "Imagery/battle/Kratos heavy attacks left with nemesis whip 1.png",
        "Imagery/battle/Kratos heavy attacks left with nemesis whip 2.png",
        "Imagery/battle/Kratos blocking right with nemesis whip.png",
        "Imagery/battle/Kratos blocking left with nemesis whip.png",
        "Imagery/battle/Kratos aerial attack right with nemesis whip.png",
        "Imagery/battle/Kratos aerial attack left with nemesis whip.png",
        "Imagery/battle/Kratos fighting stance right (Claws of Hades).png",
        "Imagery/battle/Kratos fighting stance left (Claws of Hades).png",
        "Imagery/battle/Kratos fighting stance right (Claws of Hades)-lit.png",
        "Imagery/battle/Kratos fighting stance left (Claws of Hades)-lit.png",
        "Imagery/battle/Kratos light attacks right with claws of hades 1.png",
        "Imagery/battle/Kratos light attacks right with claws of hades 2.png",
        "Imagery/battle/Kratos light attacks right with claws of hades 3.png",
        "Imagery/battle/Kratos light attacks left with claws of hades 1.png",
        "Imagery/battle/Kratos light attacks left with claws of hades 2.png",
        "Imagery/battle/Kratos light attacks left with claws of hades 3.png",
        "Imagery/battle/Kratos heavy attacks right with claws of hades 1.png",
        "Imagery/battle/Kratos heavy attacks right with claws of hades 2.png",
        "Imagery/battle/Kratos heavy attacks left with claws of hades 1.png",
        "Imagery/battle/Kratos heavy attacks left with claws of hades 2.png",
        "Imagery/battle/Kratos blocking right with claws of hades.png",
        "Imagery/battle/Kratos blocking left with claws of hades.png",
        "Imagery/battle/Kratos aerial attack right with claws of hades.png",
        "Imagery/battle/Kratos aerial attack left with claws of hades.png",
        "Imagery/battle/Kratos fighting stance right (Gauntlet of Zeus).png",
        "Imagery/battle/Kratos fighting stance left (Gauntlet of Zeus).png",
        "Imagery/battle/Kratos light attacks right with gauntlet of zeus 1.png",
        "Imagery/battle/Kratos light attacks right with gauntlet of zeus 2.png",
        "Imagery/battle/Kratos light attacks left with gauntlet of zeus 1.png",
        "Imagery/battle/Kratos light attacks left with gauntlet of zeus 2.png",
        "Imagery/battle/Kratos heavy attacks right with gauntlet of zeus 1.png",
        "Imagery/battle/Kratos heavy attacks right with gauntlet of zeus 2.png",
        "Imagery/battle/Kratos heavy attacks left with gauntlet of zeus 1.png",
        "Imagery/battle/Kratos heavy attacks left with gauntlet of zeus 2.png",
        "Imagery/battle/Kratos blocking right with gauntlet of zeus.png",
        "Imagery/battle/Kratos blocking left with gauntlet of zeus.png",
        "Imagery/battle/Kratos aerial attack right with gauntlet of zeus.png",
        "Imagery/battle/Kratos aerial attack left with gauntlet of zeus.png",
        "Imagery/battle/Kratos fighting stance right (Nemean cestus).png",
        "Imagery/battle/Kratos fighting stance left (Nemean cestus).png",
        "Imagery/battle/Kratos light attacks right with nemean cestus 1.png",
        "Imagery/battle/Kratos light attacks right with nemean cestus 2.png",
        "Imagery/battle/Kratos light attacks left with nemean cestus 1.png",
        "Imagery/battle/Kratos light attacks left with nemean cestus 2.png",
        "Imagery/battle/Kratos heavy attacks right with nemean cestus 1.png",
        "Imagery/battle/Kratos heavy attacks right with nemean cestus 2.png",
        "Imagery/battle/Kratos heavy attacks left with nemean cestus 1.png",
        "Imagery/battle/Kratos heavy attacks left with nemean cestus 2.png",
        "Imagery/battle/Kratos blocking right with nemean cestus.png",
        "Imagery/battle/Kratos blocking left with nemean cestus.png",
        "Imagery/battle/Kratos aerial attack right with nemean cestus.png",
        "Imagery/battle/Kratos aerial attack left with nemean cestus.png",
        "Imagery/battle/Kratos fighting stance right (Blade of Olympus).png",
        "Imagery/battle/Kratos fighting stance left (Blade of Olympus).png",
        "Imagery/battle/Kratos fighting stance right (Blade of Olympus)-lit.png",
        "Imagery/battle/Kratos fighting stance left (Blade of Olympus)-lit.png",
        "Imagery/battle/Kratos light attacks right with blade of olympus 1.png",
        "Imagery/battle/Kratos light attacks right with blade of olympus 2.png",
        "Imagery/battle/Kratos light attacks left with blade of olympus 1.png",
        "Imagery/battle/Kratos light attacks left with blade of olympus 2.png",
        "Imagery/battle/Kratos heavy attacks right with blade of olympus 1.png",
        "Imagery/battle/Kratos heavy attacks right with blade of olympus 2.png",
        "Imagery/battle/Kratos heavy attacks left with blade of olympus 1.png",
        "Imagery/battle/Kratos heavy attacks left with blade of olympus 2.png",
        "Imagery/battle/Kratos blocking right with blade of olympus.png",
        "Imagery/battle/Kratos blocking left with blade of olympus.png",
        "Imagery/battle/Kratos aerial attack right with blade of olympus.png",
        "Imagery/battle/Kratos aerial attack left with blade of olympus.png",
        "Imagery/battle/Kratos damage right.png",
        "Imagery/battle/Kratos damage left.png",
        "Imagery/battle/Kratos air damage right.png",
        "Imagery/battle/Kratos air damage left.png",
        "Imagery/battle/Kratos petrified right.png",
        "Imagery/battle/Kratos petrified left.png",
        "Imagery/battle/Kratos held by hands right.png",
        "Imagery/battle/Kratos held by hands left.png",
        "Imagery/battle/Kratos dead right.png",
        "Imagery/battle/Kratos dead left.png",
        "Imagery/battle/Kratos dead as stone right.png",
        "Imagery/battle/Kratos dead as stone left.png",
        // --- Death screen image ---
        "Imagery/battle/You are dead GoW CoO.png",
        // --- Underworld ---
        // Backgrounds
        "Imagery/battle/Underworld battle area.png",
        "Imagery/battle/Hades battle area.png",
        // Enemies
        "Imagery/battle/Hoplite facing left.png",
        "Imagery/battle/Hoplite facing right.png",
        "Imagery/battle/Hoplite chasing left.png",
        "Imagery/battle/Hoplite chasing right.png",
        "Imagery/battle/Hoplite light attacks left.png",
        "Imagery/battle/Hoplite light attacks right.png",
        "Imagery/battle/Hoplite heavy attacks left.png",
        "Imagery/battle/Hoplite heavy attacks right.png",
        "Imagery/battle/Hoplite blocks left.png",
        "Imagery/battle/Hoplite blocks right.png",
        "Imagery/battle/Hoplite dead left.png",
        "Imagery/battle/Hoplite dead right.png",
        "Imagery/battle/Banshee facing left.png",
        "Imagery/battle/Banshee facing right.png",
        "Imagery/battle/Banshee chasing left.png",
        "Imagery/battle/Banshee chasing right.png",
        "Imagery/battle/Banshee light attacks left.png",
        "Imagery/battle/Banshee light attacks right.png",
        "Imagery/battle/Banshee heavy attacks left.png",
        "Imagery/battle/Banshee heavy attacks right.png",
        "Imagery/battle/Banshee screams left.png",
        "Imagery/battle/Banshee screams right.png",
        "Imagery/battle/Banshee dead left.png",
        "Imagery/battle/Banshee dead right.png",
        "Imagery/battle/Satyr facing left.png",
        "Imagery/battle/Satyr facing right.png",
        "Imagery/battle/Satyr chasing left.png",
        "Imagery/battle/Satyr chasing right.png",
        "Imagery/battle/Satyr light attacks left.png",
        "Imagery/battle/Satyr light attacks right.png",
        "Imagery/battle/Satyr heavy attacks left.png",
        "Imagery/battle/Satyr heavy attacks right.png",
        "Imagery/battle/Satyr blocks left.png",
        "Imagery/battle/Satyr blocks right.png",
        "Imagery/battle/Satyr dead left.png",
        "Imagery/battle/Satyr dead right.png",
        "Imagery/battle/Gorgon facing left.png",
        "Imagery/battle/Gorgon facing right.png",
        "Imagery/battle/Gorgon chasing left.png",
        "Imagery/battle/Gorgon chasing right.png",
        "Imagery/battle/Gorgon light attacks left.png",
        "Imagery/battle/Gorgon light attacks right.png",
        "Imagery/battle/Gorgon heavy attacks left.png",
        "Imagery/battle/Gorgon heavy attacks right.png",
        "Imagery/battle/Gorgon petrifies left.png",
        "Imagery/battle/Gorgon petrifies right.png",
        "Imagery/battle/Gorgon dead left.png",
        "Imagery/battle/Gorgon dead right.png",
        "Imagery/battle/Minotaur facing left.png",
        "Imagery/battle/Minotaur facing right.png",
        "Imagery/battle/Minotaur chasing left.png",
        "Imagery/battle/Minotaur chasing right.png",
        "Imagery/battle/Minotaur light attacks left.png",
        "Imagery/battle/Minotaur light attacks right.png",
        "Imagery/battle/Minotaur heavy attacks left.png",
        "Imagery/battle/Minotaur heavy attacks right.png",
        "Imagery/battle/Minotaur blocks left.png",
        "Imagery/battle/Minotaur blocks right.png",
        "Imagery/battle/Minotaur dead left.png",
        "Imagery/battle/Minotaur dead right.png",
        "Imagery/battle/Medusa facing left.png",
        "Imagery/battle/Medusa facing right.png",
        "Imagery/battle/Medusa chasing left.png",
        "Imagery/battle/Medusa chasing right.png",
        "Imagery/battle/Medusa light attacks left.png",
        "Imagery/battle/Medusa light attacks right.png",
        "Imagery/battle/Medusa heavy attacks left.png",
        "Imagery/battle/Medusa heavy attacks right.png",
        "Imagery/battle/Medusa petrifies left.png",
        "Imagery/battle/Medusa petrifies right.png",
        "Imagery/battle/Medusa dead left.png",
        "Imagery/battle/Medusa dead right.png",
        "Imagery/battle/Cyclops facing left.png",
        "Imagery/battle/Cyclops facing right.png",
        "Imagery/battle/Cyclops chasing left.png",
        "Imagery/battle/Cyclops chasing right.png",
        "Imagery/battle/Cyclops light attacks left.png",
        "Imagery/battle/Cyclops light attacks right.png",
        "Imagery/battle/Cyclops heavy attacks left.png",
        "Imagery/battle/Cyclops heavy attacks right.png",
        "Imagery/battle/Cyclops dead left.png",
        "Imagery/battle/Cyclops dead right.png",
        "Imagery/battle/Hades facing left.png",
        "Imagery/battle/Hades facing right.png",
        "Imagery/battle/Hades chasing left.png",
        "Imagery/battle/Hades chasing right.png",
        "Imagery/battle/Hades light attacks left.png",
        "Imagery/battle/Hades light attacks right.png",
        "Imagery/battle/Hades heavy attacks left.png",
        "Imagery/battle/Hades heavy attacks right.png",
        "Imagery/battle/Hades takes soul left.png",
        "Imagery/battle/Hades takes soul right.png",
        "Imagery/battle/Hades summons left.png",
        "Imagery/battle/Hades summons right.png",
        "Imagery/battle/Hades dead left.png",
        "Imagery/battle/Hades dead right.png",
        // --- Olympus ----
        // Backgrounds
        "Imagery/battle/Olympus battle area.png",
        "Imagery/battle/Zeus battle area.png",
        // Enemies
        "Imagery/battle/Hermes facing left.png",
        "Imagery/battle/Hermes facing right.png",
        "Imagery/battle/Hermes chasing left.png",
        "Imagery/battle/Hermes chasing right.png",
        "Imagery/battle/Hermes light attacks left.png",
        "Imagery/battle/Hermes light attacks right.png",
        "Imagery/battle/Hermes heavy attacks left.png",
        "Imagery/battle/Hermes heavy attacks right.png",
        "Imagery/battle/Hermes dodges left.png",
        "Imagery/battle/Hermes dodges right.png",
        "Imagery/battle/Hermes sprints left.png",
        "Imagery/battle/Hermes sprints right.png",
        "Imagery/battle/Hermes dead left.png",
        "Imagery/battle/Hermes dead right.png",
        "Imagery/battle/Hercules facing left.png",
        "Imagery/battle/Hercules facing right.png",
        "Imagery/battle/Hercules chasing left.png",
        "Imagery/battle/Hercules chasing right.png",
        "Imagery/battle/Hercules light attacks left.png",
        "Imagery/battle/Hercules light attacks right.png",
        "Imagery/battle/Hercules heavy attacks left.png",
        "Imagery/battle/Hercules heavy attacks right.png",
        "Imagery/battle/Hercules blocks left.png",
        "Imagery/battle/Hercules blocks right.png",
        "Imagery/battle/Hercules smashes left.png",
        "Imagery/battle/Hercules smashes right.png",
        "Imagery/battle/Hercules dead left.png",
        "Imagery/battle/Hercules dead right.png",
        "Imagery/battle/Zeus facing left.png",
        "Imagery/battle/Zeus facing right.png",
        "Imagery/battle/Zeus chasing left.png",
        "Imagery/battle/Zeus chasing right.png",
        "Imagery/battle/Zeus light attacks left.png",
        "Imagery/battle/Zeus light attacks right.png",
        "Imagery/battle/Zeus heavy attacks left.png",
        "Imagery/battle/Zeus heavy attacks right.png",
        "Imagery/battle/Zeus teleports left.png",
        "Imagery/battle/Zeus teleports right.png",
        "Imagery/battle/Zeus blocks left.png",
        "Imagery/battle/Zeus blocks right.png",
        "Imagery/battle/Zeus falls left.png",
        "Imagery/battle/Zeus falls right.png",
        "Imagery/battle/Zeus victory pose left.png",
        "Imagery/battle/Zeus victory pose right.png",
        "Imagery/battle/Zeus dead left.png",
        "Imagery/battle/Zeus dead right.png",
    ];

    if (!localStorage.getItem("imagesCached") || !g.loaded) {
        loaderScreen.style.display = "flex";
        mainMenu.style.display = "none";
        preloadImages(UIassets).then(() => {
            g.audios.mainTheme.play();
            loaderScreen.style.display = "none";
            mainMenu.style.display = "block";
            preloadImages(battleAssets).then(() => {
                g.loaded = true;
                localStorage.setItem("imagesCached", true);
                console.log("Done");
            });
        });
    }

    function preloadImages(images = []) {
        const progress = document.getElementById('progress');
        if (images.length > 100) console.log("Loading other images in the background...")
        let loaded = 0;

        return new Promise(resolve => {
            if (images.length === 0) resolve();

            images.forEach(src => {
                const img = new Image();

                img.onload = img.onerror = async () => {
                    await img.decode();
                    loaded++;
                    images.length <= 100 ? progress.innerText = `${Math.round(loaded / images.length * 100)}%` : console.log(`Loading progress: ${Math.round(loaded / images.length * 100)}$`);
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
            document.querySelector(".Main-menu").style.background = 'url("./Imagery/UI/Game start.gif")';
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
        [g.hoplite, g.banshee, g.satyr, g.gorgon, g.minotaur, g.medusa, g.cyclops, g.hades, g.hermes, g.hercules, g.zeus].forEach((enemy) => enemy.defeated = false );
        [ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'gorgonDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hadesDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated'].forEach(save => localStorage.removeItem(save));
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