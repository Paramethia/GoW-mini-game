import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import battle from './battle.js';
import sparta from './sparta.js';

export default function athens(g) {
	const creatures = g.getEnemies(["Undead Archer", "Undead Legionnaire", "Cursed Legionnaire", "Banshee", "Fallen Legionnaire", "Gorgon", "Medusa"]); //g.enemies.slice(0, 6)
	let currentEnemyI = 0;
	const lastIndex = creatures.length - 1;
	const creaturesInfo = [ 
		"An <strong>Undead Archer</strong> that appears to be a rotten corpse with a bow and arrow for weapons",
		"An <strong>Undead Legionnaire</strong> that appears to be a rotten corpse with a blade for a weapon",
		"A <strong>Cursed Legionnaire</strong> that appears to be a rotten corpse dressed in the armor of ancient Greek warriors with a sharp blade for a weapon",
		"The <strong>Banshee</strong> is known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans.",
		"A <strong>Fallen Legionnaire</strong> that appears to be a rotten corpse dressed in spiky armor of ancient Greek warriors with a sharp, spikey blade for a weapon",
		"<strong>Gorgon</strong>s are female serpent-like creatures that inhabit Greece. They are below the Gorgan sisters who rule other gorgons.",
		"<strong>Medusa</strong> was the first of the Gorgon sisters in Greek mythology. Medusa has the power to turn mortals to stone with her gaze.",
	];
	const moreCinfo = [
		"This is a very simple & standard enemy that deals little damage and has little health. Undead archers only have one melee attack. Along with shooting arrow obvi.",
		"Another relatively simple & standard enemy with slightly higher health and damage than the archer. Undead legionnaires have 2 melee attacks. A light and heavy attack.",
		"A stronger version of the undead legionnaire. The cursed legionnaire also has 2 melee attacks. Along with a new leap attack that deals significant damage.",
		"The banshee has slightly less health than the cursed legionnaire, faster attacks, and gruesome scream damage. It will randomly scream, dealing 1 health per 0.25s of the scream duration.",
		"A stronger version of the cursed legionnaire. The fallen legionnaire also has the same 3 attacks as the cursed. Along with random blocking. The blocks can be broken with heavy attacks.",
		"Gorgons have less health than satyrs, and with damage a little more than the banshee. They have the ability of petrifying at a specific range. It can still attack you while you are petrified, so be sure to break out of the petrification quickly.",
		"Medusa is pretty much the same as the gorgon with similar damage, much higher petrification chance, slightly faster petrification timing, lower petrification cooldown, and higher petrification range.",
	]
	g.game.innerHTML = `
		<div id="Athens" class="place">
			${settings(g, false)}
			${stats(g)}
			<center>
			<div id="Text">
				These are the enemies of Athens. Choose which ones to fight
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
					<i><font color="#9f7c27"> Damage: </font> <span id="enemy-damage"> ${Math.round(creatures[0].lD + creatures[0].aD / 2)} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Speed: </font> <span id="enemy-speed"> ${creatures[0].speed} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Stun: </font> <span id="enemy-stun"> ${parseInt(Math.round(creatures[0].lS + creatures[0].aS)) / 100}s </span></i>
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
	const fightB = document.getElementById("Fight");

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
		const avDamage = creatures[currentEnemyI].lD + (currentEnemyI ? creatures[currentEnemyI].hD : creatures[currentEnemyI].sD);
		const avStun = creatures[currentEnemyI].lS + (currentEnemyI ? creatures[currentEnemyI].hS : creatures[currentEnemyI].sS);
		enemyDamage.innerText = Math.round(avDamage / 2);
		enemySpeed.innerText = creatures[currentEnemyI].speed;
		enemyStun.innerText = `${parseInt(Math.round(avStun / 2)) / 100}s`
		creatureImage.src = `Imagery/UI/${creatures[currentEnemyI].name}.png`;
	}
	
	const animationTimes = [ '1s', '2.2s', '1.4s', '2.4s', '1.6s', '1s', '1.7s'];
	
	fightB.onmouseover = () => {
		const sound = creatures[currentEnemyI].sound;
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
		if (e.key === "Escape") leaveAthens()
	}

	document.addEventListener("keydown", g.navKeys);

	function goBattle() {
		if (!g.freePlay) return
		g.currentEnemy = creatures[currentEnemyI];
		g.stopAmbience();
		document.removeEventListener("keydown", g.navKeys);
		g.currentEnemy = creatures[currentEnemyI];
		battle(g, "Athens");
	}
	
	function leaveAthens() {
		g.audio.athens.pause();
		g.audio.athens.currentTime = 0;
		g.audio.exit.play();
        if (g.play) g.audio.mainTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}