import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import battle from './battle.js';
import sparta from './sparta.js';

export default function olympus(g) {
	const enemies = g.getEnemies(["Hermes", "Hercules", "Zeus"]);
	let currentEnemyI = 0;
	const lastIndex = enemies.length - 1;
	const enemiesInfo = [
		"<strong>Hermes</strong> is the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and mostly.. Speed.",
		"<strong>Hercules</strong> is the son of Zeus and half-brother to Kratos. He is known for having a tremendous amount of strength.",
		"<strong>Zeus</strong> is the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Storm, Thunder and Lightning. Also the father of Kratos."
	];
	const moreEinfo = [
		"Hermes is of course, pretty fast, having the ability to dodge your attacks swiftly. He also the ability to strike you from his incredible speed. By passing through you while sprinting at his max speed which damages you.",
		"Hercules damage is tremendous. So be careful of that. He can also block and his blocks requires the blade of Olympus to break. He also sometimes smashes the floor which can damage you if you are on the ground as he does it.",
		"Zeus can basically do any defense like dodging (he dodges by teleporting by the way) & blocking. Though, he can also fly once his health is taken halfway. In this flight mode, he can decide to either shoot lightening, or flying towards you and attacking you. You can drop him to the ground with enough hits. Hits required may vary with either light or heavy attacks."
	];
	g.game.innerHTML = `
		<div id="Olympus"class="place">
			${settings(g, false)}
			${stats(g)}
			<center>
			<div id="Text">
				These are the gods of olympus. Choose which god to fight.
			</div>
			<div id="Enemy-desc">
				<div id="Enemy-info">
					${enemiesInfo[0]}
				</div>
				<span id="prev">&Omega;</span>
				<span id="next">&Omega;</span>
				<img id="Enemy" src="Imagery/UI/${enemies[0].name}.png" />
				<button id="Fight"> Fight </button>
				<span id="enemy-i-tog"><i class="fa-solid fa-circle-info fa-xl"></i></span>
				<div id="More-info" style="visibility:hidden;">
					<h3>Specs</h3>
					<p id="ability">${moreEinfo[0]}</p>
					<i><font color="#9f7c27"> Damage: </font> <span id="enemy-damage"> ${Math.round(enemies[0].lD + enemies[0].hD / 2)} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Speed: </font> <span id="enemy-speed"> ${enemies[0].speed} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Stun: </font> <span id="enemy-stun"> ${parseInt(Math.round(enemies[0].lS + enemies[0].hS / 2)) / 100}s </span></i>
				</div>
			</div>
			</center>
			${hotbar}
		</div>
	`;
	
	settingsInit(g);
	
	const navButtons = [document.getElementById('prev'), document.getElementById('next')];
	const enemyInfo = document.getElementById('Enemy-info');
	const enemyItog = document.getElementById('enemy-i-tog');
	const moreInfo = document.getElementById('More-info');
	const ability = document.getElementById('ability');
	const enemyDamage = document.getElementById('enemy-damage');
	const enemySpeed = document.getElementById('enemy-speed');
	const enemyStun = document.getElementById('enemy-stun');
	const enemyImage = document.getElementById('Enemy');
	const fightB = document.getElementById('Fight');

	enemyItog.onclick = () => { moreInfo.style.visibility === 'hidden' ? moreInfo.style.visibility = 'visible' : moreInfo.style.visibility = 'hidden' }

	navButtons.forEach((button, currentEnemyI) => { button.onclick = () => navigateEnemies(currentEnemyI) });

	function navigateEnemies(i) {
		g.playCaudio(g.audio.hover2, g.uiVolume);
		i ? currentEnemyI++ : currentEnemyI--
		if (currentEnemyI > lastIndex) { 
			currentEnemyI = 0;
		} else if (currentEnemyI < 0) { 
			currentEnemyI = lastIndex
		}
		enemyInfo.innerHTML = enemiesInfo[currentEnemyI];
		ability.innerText = moreEinfo[currentEnemyI];
		enemyDamage.innerText = Math.round(enemies[currentEnemyI].lD + enemies[currentEnemyI].hD / 2);
		enemySpeed.innerText = enemies[currentEnemyI].speed;
		enemyStun.innerText = `${parseInt(Math.round(enemies[currentEnemyI].lS + enemies[currentEnemyI].hS / 2)) / 100}s`
		enemyImage.src = `Imagery/UI/${enemies[currentEnemyI].name}.png`;
	}
	
	fightB.onmouseover = () => {
		g.audio.hover.play();
		fightB.style.animation = 'tilt-shaking 0.5s';
	}
	fightB.onmouseout = () => {
		fightB.style.animation = 'none';
	}
	fightB.onclick = () => goBattle()

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
		if (!g.freePlay) return
		g.stopAmbience();
		document.removeEventListener("keydown", g.navKeys);
		g.currentEnemy = enemies[currentEnemyI];
		battle(g, "Olympus");
	}

	function leaveOlympus() {
		g.audio.olympus.pause();
		g.audio.olympus.currentTime = 0;
		g.audio.exit.play();
		if (g.play === true) g.audio.mainTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}