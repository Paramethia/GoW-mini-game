import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import smithy from './smithy.js';
import athens from './athens.js';
import underworld from './underworld.js';
import olympus from './olympus.js';
import battle from './battle.js';

export default function sparta(g) {
    let defaultText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use w/s to navigate to different places.";
    if (Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'))) defaultText = "Welcome back to God of War. You already know what to do mos. \n ;-)";

	g.game.innerHTML = `
		<div id="Sparta">
			${settings(g, true)}
			${stats(g)}
			<center>
				<div id="Main-text">
					${defaultText.replace('\n', '<br />')}
				</div>
				<div id="Mid">
					<img id="Kratos">
				</div>
			</center>
			<div id="Places">
				<button id="Smithy-button">Smithy</button>
				<button id="Athens-button">Athens</button>
				<button id="Underworld-button">Underworld ${g.freePlay || g.getEnemy("Medusa").defeated ? '' : '<i id="Olym-lock" class="fa-solid fa-lock"></i>'}</button>
				<button id="Olympus-button">Mount Olympus ${g.freePlay || g.getEnemy("Hades").defeated ? '' : '<i id="Olym-lock" class="fa-solid fa-lock"></i>'}</button>
			</div>
            ${hotbar}
		</div>
	`;

	g.inSparta = true;

    settingsInit(g)
	
	const spartaCon = document.getElementById('Sparta');
	const mainText = document.getElementById('Main-text');
	const kratos = document.getElementById('Kratos');
	const smithyB = document.getElementById('Smithy-button');
	const athensB = document.getElementById('Athens-button');
	const underworldB = document.getElementById('Underworld-button');
	const olympusB = document.getElementById('Olympus-button');

	const buttons = [smithyB, athensB, underworldB, olympusB];
	let currentIndex = -1;

	function selectButton(index) {
		// reset all buttons (simulate mouseout)
		buttons.forEach(btn => btn.onmouseout && btn.onmouseout());

		// apply hover effect to the current one (simulate mouseover)
		if (buttons[index].onmouseover) {
			buttons[index].onmouseover();
		}

		currentIndex = index;
	}

	document.removeEventListener("keydown", g.navKeys);

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

	const dimentions = [
        {which: "Default", width: 82, height: 142},
        {which: "Arms", width: 130, height: 151},
        {which: "whip", width: 114, height: 145},
        {which: "Claws", width: 124, height: 142},
        {which: "cestus", width: 100, height: 142},
        {which: "Blade ", width: 135, height: 142},
    ]
	function getDimentions() {
		const currentWeapon = g.kratos.inventory[g.currentWeapon];
		return dimentions.find(d => currentWeapon.name.includes(d.which)) || dimentions[0];
	}
	function pauseMainMusic() {
		if (g.play === true) {
			g.audio.mainTheme.pause();
			g.audio.mainTheme.currentTime = 0;
		}
	}
	
	smithyB.onmouseover = () => {
		g.playCaudio(g.audio.hover, g.uiVolume);
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Sparta smithy.png")';
		kratos.style.bottom = '-1.4cm';
        kratos.style.right = '65%';
		const dimention = getDimentions();
		kratos.style.height = `${dimention.height + 112}px`;
		kratos.style.width = `${dimention.width + 52}px`
		mainText.innerText = "You can go to the smithy to get weapons with orbs to get stronger to defeat stronger enemies.";
		smithyB.style.animation = 'tilt-n-move-shaking 0.5s';
		smithyB.style.background = '#232d34';
	}
	smithyB.onmouseout = () => {
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Sparta.png")';
		kratos.style.bottom = '0';
        kratos.style.right = '42%';
		const dimention = getDimentions();
		kratos.style.width = `${dimention.width}px`;
        kratos.style.height = `${dimention.height}px`;
		mainText.innerText = defaultText;
		smithyB.style.animation = 'grow';
		smithyB.style.background = '#0a0a23';
	}
	smithyB.onclick = () => {
		g.audio.selection.play();
		g.inSparta = false;
		smithy(g);
	}

	athensB.onmouseover = () => {
		g.playCaudio(g.audio.hover, g.uiVolume);
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Athens.png")';
		kratos.style.right = '62%';
		const dimention = getDimentions();
		kratos.style.height = `${dimention.height}px`;
		kratos.style.width = `${dimention.width}px`;
		mainText.innerText = "This is the city of Athena, Athens. Defeat the enemies here and get stronger.";
		athensB.style.animation = 'tilt-n-move-shaking 0.5s';
		athensB.style.background = '#584B3B';
	}
	athensB.onmouseout = () => {;
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Sparta.png")';
		kratos.style.right = '42%';
		mainText.innerText = defaultText;
		athensB.style.animation = 'grow';
		athensB.style.background = '#0a0a23';
	}
	athensB.onclick = () => {
		g.audio.selection.play();
		pauseMainMusic();
		g.inSparta = false;
		if (g.freePlay) {
			athens(g);
			g.audio.athens.play();
			g.audio.athens.loop = true;
		} else { 
			g.selectBattle("Athens");
			battle(g);
		}
		document.removeEventListener('keydown', g.mHandler);
	}

	underworldB.onmouseover = () => {
		g.playCaudio(g.audio.hover, g.uiVolume);
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Underworld.png")';
		kratos.style.right = '62%';
		const dimention = getDimentions();
		kratos.style.height = `${dimention.height + 102}px`;
		kratos.style.width = `${dimention.width + 42}px`
		mainText.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus.";
		underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
		underworldB.style.background = '#25201c';
	}
	underworldB.onmouseout = () => {;
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Sparta.png")';
		kratos.style.right = '42%';
		const dimention = getDimentions();
		kratos.style.width = `${dimention.width}px`;
        kratos.style.height = `${dimention.height}px`;
		mainText.innerText = defaultText;
		underworldB.style.animation = 'grow';
		underworldB.style.background = '#0a0a23';
	}
	underworldB.onclick = () => {
		if (g.getEnemy("Medusa").defeated){
			g.audio.selection.play();
			pauseMainMusic();
			g.inSparta = false;
			g.audio.underworld.play();
			g.audio.underworld.loop = true;
			if (g.freePlay) {
				underworld(g);
			} else { 
				g.selectBattle("Underworld");
				battle(g);
			}
			document.removeEventListener('keydown', g.mHandler);
		}
	}

	olympusB.onmouseover = () => {
		g.playCaudio(g.audio.hover, g.uiVolume);
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Mount Olympus.png")';
		spartaCon.style.backgroundPosition = 'bottom';
		kratos.style.bottom = '1.1cm';
		kratos.style.right = '60%';
		const dimention = getDimentions();
		kratos.style.height = `${dimention.height + 112}px`;
		kratos.style.width = `${dimention.width + 52}px`
		mainText.innerText = "This is Mount Olympus. Where you will fight the gods of Olympus when you are ready. You can only go here when you have defeated all the creatures in the underworld.";
		olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
		olympusB.style.background = '#5e4915';
	}
	olympusB.onmouseout = () => {
		spartaCon.style.backgroundImage = 'url("Imagery/UI/Sparta.png")';
		spartaCon.style.backgroundPosition = 'center';
		kratos.style.bottom = '0cm';
		kratos.style.right = '42%';
		const dimention = getDimentions();
		kratos.style.width = `${dimention.width}px`;
        kratos.style.height = `${dimention.height}px`;
		mainText.innerText = defaultText;
		olympusB.style.animation = 'grow';
		olympusB.style.background = '#0a0a23';
	}
	olympusB.onclick = () => {
		if (g.getEnemy("Hades").defeated) {
			g.audio.selection.play();
			pauseMainMusic();
			g.inSparta = false;
			g.audio.olympus.play();
			g.audio.olympus.loop = true;
			if (g.freePlay) {
				olympus(g);
			} else { 
				g.selectBattle("Olympus");
				battle(g);
			}
			document.removeEventListener('keydown', g.mHandler);
		}
	}

    hotbarInit(g)
}