import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { olympusBattle } from './olympus-battle.js';
import { sparta } from './sparta.js';

export const olympus = (g) => {
	const enemies = g.enemies.slice(6);
	const enemiesInfo = [
		"<strong>Hermes</strong> is the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and mostly.. Speed.",
		"<strong>Hercules</strong> is the son of Zeus and half-brother to Kratos. He is known for having a tremendous amount of strength.",
		"<strong>Zeus</strong> is the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Storm, Thunder and Lightning. Also the father of Kratos."
	];
	g.game.innerHTML = `
		<div class="Olympus">
			${settings(g, false)}
			${stats(g)}
			<center>
			<div id="Text">
				You have now arrived at Olympus. Choose which god you want to battle.
			</div>
			<div class="Enemy-desc">
				<div id="Enemy-info">
					${enemiesInfo[0]}
				</div>
				<span id="prev">&Omega;</span>
				<span id="next">&Omega;</span>
				<img id="Enemy" src="Imagery/Hermes.png" />
				<button id="Fight"> Fight </button>
				<span class="Enemy-damage"><i><font color="#9f7c27"> Damage: </font> <span id="enemy-damage"> ${enemies[0].damage} </span> </i></span>
			</div>
			</center>
			${hotbar(g)}
		</div>
	`;
	
	settingsInit(g);
	
	const navButtons = [document.getElementById('prev'), document.getElementById('next')];
	const enemyInfo = document.getElementById('Enemy-info');
	const enemyDamage = document.getElementById('enemy-damage');
	const enemyImage = document.getElementById('Enemy');
	const fightB = document.getElementById('Fight');

	navButtons.forEach((button, selectedEnemyI) => { button.onclick = () => navigateEnemies(selectedEnemyI) });

	const defeats = [g.cyclops.defeated, g.hermes.defeated, g.hercules.defeated];

	let selectedEnemyI = 0;

	function navigateEnemies(i) {
		g.audios.hoverSound2.currentTime = 0;
		g.audios.hoverSound2.cloneNode().play();
		i ? selectedEnemyI++ : selectedEnemyI--
		if (selectedEnemyI > 2) { 
			selectedEnemyI = 0 
		} else if (selectedEnemyI < 0) { 
			selectedEnemyI = 2
		}
		enemyInfo.innerHTML = enemiesInfo[selectedEnemyI];
		enemyDamage.innerText = enemies[selectedEnemyI].damage;
		enemyImage.src = `Imagery/${enemies[selectedEnemyI].name}.png`;
		fightB.innerHTML = `Fight ${defeats[selectedEnemyI]? '' : '<i class="fa-solid fa-lock"></i>'}`;
	}
	
	fightB.onmouseover = () => {
		g.audios.hoverSound.cloneNode().play();
		fightB.style.animation = 'tilt-shaking 0.5s';
	}
	fightB.onmouseout = () => {
		fightB.style.animation = 'none';
	}
	fightB.onclick = () => { goBattle() }

	document.removeEventListener("keydown", g.navKeys);

	g.navKeys = function(e) {
		if (e.repeat) return;

		if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") navigateEnemies(0)

		if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") navigateEnemies(1)

		if (e.key === "Enter") goBattle()

		if (e.key === "Escape") leaveOlympus()
	}

	document.addEventListener("keydown", g.navKeys);
	
	function goBattle() {
		var lines = [ g.audios.hermesLine, g.audios.herculesLine, g.audios.zeusLine ];
		var texts = [
			"You are now facing the god, Hermes. Be careful of his incredible speed.",
			"Hercules gets in your way, to Zeus. He challenges you to fight him to the death to see who is stronger.",
			"You finally arrive to the god of thunder and lightning, and also your father, Zeus. Kill this f***er."
		];
		var intervalTimes = [ 4200, 3000, 14200 ];
		var battleThemes = [ g.audios.battleTheme2, g.audios.battleTheme2, g.audios.zeusBattle ];

		if (defeats[selectedEnemyI]) {
			g.audios.olympusAm.pause();
			g.audios.olympusAm.currentTime = 0;
			if (!g.enemies[selectedEnemyI].defeated) lines[selectedEnemyI].play();
			setTimeout(() => {
				g.audios.selection2.play();
				setTimeout(() => {
					battleThemes[selectedEnemyI].play();
				}, 1000 );
				document.getElementById('Text').innerText = texts[selectedEnemyI];
			}, g.enemies[selectedEnemyI].defeated ? 12 : intervalTimes[selectedEnemyI] );
			document.removeEventListener('keydown', g.navKeys);
			g.currentEnemy = 6 + selectedEnemyI;
			olympusBattle(g);
		}
	}

	function leaveOlympus() {
		g.audios.olympusAm.pause();
		g.audios.olympusAm.currentTime = 0;
		g.audios.returnSound.play();
		if (g.play === true) g.audios.mainTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}