import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import battle from './battle.js';
import sparta from './sparta.js';

export default function underworld(g) {
	const creatures = g.getEnemies(["Hoplite", "Satyr", "Minotaur", "Cyclops", "Hades"]);
	let currentEnemyI = 0;
	const lastIndex = creatures.length - 1;
	const creaturesInfo = [ 
		"A <strong>Hoplite</strong> that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons",
		"<strong>Satyrs</strong> are one of the most formidable opponents, able to go toe-to-toe with Kratos. They have the upper body of a man and the horns and back legs of a goat.",
		"The <strong>Minotaur</strong> appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes.",
		"<strong>Cyclops</strong> are a species of burly, one-eyed giants, they give plenty of damage, so you will want to have a lot of health and/or a good weapon if you want to fight it.",
		"<strong>Hades</strong> is the God of the dead. The ruler of the underworld. Eldest son of the mighty titan, Cronos & the goddess Rhea. Zeus' brother, and Kratos' uncle."
	];
	const moreCinfo = [
		"The hoplite is pretty similar to the Cursed Legionnare. Hoplites can also block randomly as defense. Heavy attacks can break their blocks.",
		"Satyrs may be a little challenging without upgrading your standard weapon. They have a little more health than Kratos' average health. They have a higher chance of blocking than hoplites. And their blocks are unbreakable without a better weapon.",
		"Minotaurs have similar skills to the satyrs, but they deal much more damage, and have more health. Their blocks are unbreakable without using at least the Gauntlet of Zeus.",
		"The Cyclops does not have any special abilities like blocking, petrifying, etc. Although, it does have a lot of health (a little more than Kratos max health) and deals significant damage due it's large size.",
		"Hades has the ability to summon out hands from underground. You can dodge these by dodging or by jumping in time. He can also decide to take your soul which takes 3 health each 0.25s as he does this. He also pulls you towards him as he takes our soul."
	];
	g.game.innerHTML = `
		<div id="Underworld" class="place">
			${settings(g, false)}
			${stats(g)}
			<center>
			<div id="Text">
				These are the creatures of the underworld. Choose which ones to fight.
			</div>
			<div id="Enemy-desc">
				<div id="Enemy-info">
					${creaturesInfo[0]}
				</div>
				<span id="prev">&Omega;</span>
				<span id="next">&Omega;</span>
				<img id="Creature" src="Imagery/UI/${creatures[0].name}.png" />
				<button id="Fight"> Fight </button>
				<span id="enemy-i-tog"><i class="fa-solid fa-circle-info fa-xl"></i></span>
				<div id="More-info" style="visibility:hidden;">
					<h3>Specs</h3>
					<p id="ability">${moreCinfo[0]}</p>
					<i><font color="#9f7c27"> Damage: </font> <span id="enemy-damage"> ${Math.round(creatures[0].lD + creatures[0].hD / 2)} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Speed: </font> <span id="enemy-speed"> ${creatures[0].speed} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Stun: </font> <span id="enemy-stun"> ${parseInt(Math.round(creatures[0].lS + creatures[0].hS / 2)) / 100}s </span></i>
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
	const creatureImage = document.getElementById('Creature');
	const fightB = document.getElementById('Fight');

	enemyItog.onclick = () => { moreInfo.style.visibility === 'hidden' ? moreInfo.style.visibility = 'visible' : moreInfo.style.visibility = 'hidden' }

	navButtons.forEach((button, index) => { button.onclick = () => navigateEnemies(index) });

	function navigateEnemies(i) {
		g.playCaudio(g.audio.hover2, g.uiVolume);
		i ? currentEnemyI++ : currentEnemyI--
		if (currentEnemyI > lastIndex) { 
			currentEnemyI = 0;
		} else if (currentEnemyI < 0) { 
			currentEnemyI = lastIndex
		}
		enemyInfo.innerHTML = creaturesInfo[currentEnemyI];
		ability.innerText = moreCinfo[currentEnemyI];
		enemyDamage.innerText = Math.round(creatures[currentEnemyI].lD + creatures[currentEnemyI].hD / 2);
		enemySpeed.innerText = creatures[currentEnemyI].speed;
		enemyStun.innerText = `${parseInt(Math.round(creatures[currentEnemyI].lS + creatures[currentEnemyI].hS / 2)) / 100}s`;
		creatureImage.src = `Imagery/UI/${creatures[currentEnemyI].name}.png`;
	}
	
	const animationTimes = ['1.2s', '1.4s', '1s', '1.1s', '1.2s'];
	
	fightB.onmouseover = () => {
		const sound = creatures[currentEnemyI]?.sound || g.audio.hover;
		sound.play();
		fightB.style.animation = `tilt-shaking ${animationTimes[currentEnemyI]}`;
	}
	fightB.onmouseout = () => { fightB.style.animation = 'none' }
	fightB.onclick = () => goBattle()

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
		if (!g.freePlay) return
		g.stopAmbience();
		document.removeEventListener("keydown", g.navKeys);
		g.currentEnemy = creatures[currentEnemyI];
		battle(g, "Underworld");
	}
	
	function leaveUnderworld() {
		g.audio.underworld.pause();
		g.audio.underworld.currentTime = 0;
		g.audio.exit.play();
        if (g.play) g.audio.mainTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}