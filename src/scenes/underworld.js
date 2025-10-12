import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { underworldBattle } from './underworld-battle.js';
import { sparta } from './sparta.js';

export function underworld(g) {
	const creatures = g.enemies.slice(0, 6);
	const creaturesInfo = [ 
		"A <strong>Hoplite</strong> that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons",
		"The <strong>Banshee</strong> is known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans.",
		"<strong>Satyrs</strong> are one of the most formidable opponents, able to go toe-to-toe with Kratos. They have the upper body of a man and the horns and back legs of a goat.",
		"The <strong>Minotaur</strong> appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes.",
		"<strong>Medusa</strong> was the first of the Gorgon sisters in Greek mythology. Medusa has the power to turn Kratos to stone with her gaze.",
		"<strong>Cyclopes</strong> are a species of burly, one-eyed giants, they give plenty of damage, so you will want to have a lot of health and/or a good weapon if you want to fight it."
	];
	g.game.innerHTML = `
		<div class="Underworld">
			${settings(g, false)}
			${stats(g)}
			<center>
			<div id="Text">
				You have arrived in the underworld. You see some strange creatures. Fight 'em
			</div>
			<div class="Enemy-desc">
				<div id="Enemy-info">
					${creaturesInfo[0]}
				</div>
				<span id="prev">&Omega;</span>
				<span id="next">&Omega;</span>
				<img id="Creature" src="Imagery/Hoplite.png" />
				<button id="Fight"> Fight </button>
				<span class="Enemy-damage"><i><font color="#9f7c27"> Damage: </font> <span id="enemy-damage"> ${creatures[0].damage} </span> </i></span>
			</div>
			</center>
			${hotbar(g)}
		</div>
	`;
	
	settingsInit(g);
	
	const navButtons = [document.getElementById('prev'), document.getElementById('next')];
	const enemyInfo = document.getElementById('Enemy-info');
	const enemyDamage = document.getElementById('enemy-damage');
	const creatureImage = document.getElementById('Creature');
	const fightB = document.getElementById('Fight');

	navButtons.forEach((button, index) => { button.onclick = () => navigateEnemies(index) });

	const defeats = [true, g.hoplite.defeated, g.banshee.defeated, g.satyr.defeated, g.minotaur.defeated, g.medusa.defeated];

	function navigateEnemies(i) {
		g.audios.hoverSound2.currentTime = 0;
		g.audios.hoverSound2.cloneNode().play();
		i ? g.currentEnemy++ : g.currentEnemy--
		if (g.currentEnemy > 5) { 
			g.currentEnemy = 0 
		} else if (g.currentEnemy < 0) { 
			g.currentEnemy = 5
		}
		enemyInfo.innerHTML = creaturesInfo[g.currentEnemy];
		enemyDamage.innerText = creatures[g.currentEnemy].damage;
		creatureImage.src = `Imagery/${creatures[g.currentEnemy].name}.png`;
		fightB.innerHTML = `Fight ${defeats[g.currentEnemy]? '' : '<i class="fa-solid fa-lock"></i>'}`;
	}
	
	const creatureSounds = [ g.audios.hopliteSound, g.audios.bansheeSound, g.audios.satyrSound, g.audios.minotaurSound, g.audios.medusaSound, g.audios.cyclopsSound ];
	var animationTimes = [ '1.2s', '1.8s', '1.4s', '1s', '2s', '1.6s' ]
	
	fightB.onmouseover = () => {
		creatureSounds[g.currentEnemy].play();
		fightB.style.animation = `tilt-shaking ${animationTimes[g.currentEnemy]}`;
	}
	fightB.onmouseout = () => {
		creatureSounds[g.currentEnemy].pause();
		creatureSounds[g.currentEnemy].currentTime= 0;
		fightB.style.animation = 'none';
	}
	fightB.onclick = () => { goBattle() }

	document.removeEventListener("keydown", g.navKeys);

	g.navKeys = function(e) {
		if (e.repeat) return;

		if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") navigateEnemies(0)

		if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") navigateEnemies(1)

		if (e.key === "Enter") goBattle()

		if (e.key === "Escape") leaveUnderworld()
	}

	document.addEventListener("keydown", g.navKeys);

	function goBattle() {
		if (defeats[g.currentEnemy]) {
			setTimeout(( ) => {
				if (g.currentEnemy <= 4) { 
					g.audios.battleTheme2.play() 
				} else if (g.currentEnemy <= 1) { 
					g.audios.battleTheme.play() 
				} else if (g.currentEnemy === 5) g.audios.cyclopsBattle.play()
			}, 1000 );
			g.stopAmbience();
			document.removeEventListener("keydown", g.navKeys);
			underworldBattle(g);
		}
	}
	
	function leaveUnderworld() {
		g.audios.underworldAm.pause();
		g.audios.underworldAm.currentTime = 0;
		g.audios.returnSound.play();
        if (g.play) g.audios.mainTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}