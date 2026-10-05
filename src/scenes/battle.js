import { settings, settingsInit } from '../components/settings.js';
import { stats, enemyStats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import athens from '../scenes/athens.js';
import underworld from './underworld.js';
import olympus from './olympus.js';
import sparta from './sparta.js';
import enginize from '../components/engine.js';

export default function battle(g, place = null) {
	g.game.innerHTML = `
		<div id="Battle">
			${settings(g, false)}
			${stats(g)}
			<center>
			<p><font color="#a88868">FPS: </font><span id="FPS">0</span></p>
			<div id="Text">
				${!g.freePlay ? g.currentBattle?.name + " battle in " + g.currentBattle?.location : g.currentEnemy?.name}
			</div>
			${g.currentBattle?.enemies?.length > 1 && !g.freePlay ? "" : enemyStats(g)}
			<canvas id="Battle-area"></canvas>
			<img id="You-dead" src="Imagery/battle/You are dead GoW CoO.png" style="display: none;">
			<button id="Return" style="display: none;"> Return </button>
			<button id="Next" style="display: none;"> Next </button>
			<button id="Restart" style="display: none;"> Restart? </button>
			</center>
			${hotbar}
		</div>
	`;

	const battleCon = document.getElementById("Battle");
	if (g.freePlay) battleCon.style.backgroundImage = `url("Imagery/battle/${place} battle area.png")`;
	if (!g.freePlay) battleCon.style.backgroundImage = `url("${g.currentBattle.bg}")`;
	
	settingsInit(g);

	const returnB = document.getElementById("Return");
	const nextB = document.getElementById("Next");
	const restartB = document.getElementById('Restart');

	function goBack() {
		if (place === "Athens") {
			athens(g)
		} else if (place === "Underworld") {
			underworld(g)
		} else if (place === "Olympus") {
			olympus(g)
		}
	}

	function nextBattle () {
		const battleI = g.placeBattles.indexOf(g.currentBattle);
		if (battleI === g.placeBattles.length - 1) return
		[returnB, nextB].forEach(button => button.style.display = "none");
		document.querySelector(".Hotbar").style.display = "block";
		g.resetKratos();
		g.selectBattle(g.battlePlace);
		document.getElementById("Text").innerText = `${g.currentBattle?.name + " battle in " + g.currentBattle?.location}`;
		battleCon.style.backgroundImage = `url("${g.currentBattle.bg}")`;
		g.audio[g.battlePlace.toLowerCase()].pause();
		g.currentBattle.bT.play()
		if (!place && g.currentBattle.gL) config.groundLevel = g.currentBattle.gL
		clearInterval(g.frameCount);
		enginize(g, config);
	}
	
	returnB.onmouseover = () => {
		g.audio.hover.play();
		returnB.style.animation = 'horizontal-shaking 0.5s';
	}
	
	returnB.onmouseout = () => {
		g.audio.hover.pause();
		g.audio.hover.currentTime = 0;
		returnB.style.animation = 'grow';
	}
	
	returnB.onclick = () => {
		g.stopMusic();
		g.audio.exit.play();
		document.removeEventListener("keydown", g.keydownHandler);
		document.removeEventListener("keyup", g.keyupHandler);
		g.inBattle = false;
		clearInterval(g.frameCount);
		if (g.freePlay ? goBack() : sparta(g));
		if (!g.freePlay) g.stopAmbience();
		setTimeout(g.resetKratos(), 100);
	}

	nextB.onmouseover = () => {
		g.audio.hover.play();
		nextB.style.animation = 'horizontal-shaking';
		nextB.style.animationDuration = '0.5s';
	}
	nextB.onmouseout = () => {
		g.audio.hover.pause();
		g.audio.hover.currentTime = 0;
		nextB.style.animation = 'no';
	}
	nextB.onclick = () => { nextBattle() }

	restartB.onmouseover = () => {
		g.audio.hover.play();
		restartB.style.animation = 'horizontal-shaking';
		restartB.style.animationDuration = '0.5s';
	}
	restartB.onmouseout = () => {
		g.audio.hover.pause();
		g.audio.hover.currentTime = 0;
		restartB.style.animation = 'no';
	}
	restartB.onclick = () => { 
        g.stopAmbience();
        g.audio.exit.play();
		if (g.hardcore) {
			setTimeout(() => { g.audio.ahShit.play() }, 1800 );
			g.restart();
		}
		if (!g.hardcore) g.kratos.health = 100
        g.inBattle = false;
		clearInterval(g.frameCount);
		sparta(g);
		document.getElementById('Main-text').innerText = "Welcome back. It seems that you died last time. Don't do that again. \n  (❁´◡`❁)";
		g.resetKratos();
    }
	
	hotbarInit(g);

	g.inBattle = true;

	// --- Battle music  ---

	if (place) {
		if (place === "Athens") {
			if (g.currentEnemy.name === "Medusa") {
				g.audio.athensBattleT3.play();
			} else if (g.currentEnemy.name.includes("Fallen") || g.currentEnemy.name === "Gorgon") {
				g.audio.athensBattleT2.play();
			} else g.audio.athensBattleT1.play();
		} else if (place === "Underworld") {
			if (g.currentEnemy.name === "Hades") { 
				g.audio.hadesBattleT.play() 
			} else if (g.currentEnemy.name === "Cyclops") {
				g.audio.cyclopsBattleT.play();
			} else if (g.currentEnemy.name.includes("Min") || g.currentEnemy.name === "Satyr") {
				g.audio.underworldBattleT2.play();
			} else g.audio.underworldBattleT1.play()
		} else if (place === "Olympus") {
			if (g.currentEnemy.name === "Hermes") g.audio.hermesBattleT.play();
			if (g.currentEnemy.name === "Hercules") g.audio.herculesBattleT.play();
			if (g.currentEnemy.name === "Zeus") g.audio.zeusBattleT.play();
		}
	} else { 
		if (!g.currentBattle.enemies[0].god) {
			g.currentBattle.bT.play();
			g.currentBattle.bT.loop = true;
		}
	}
	
	// Starting dialogue for god battles
	if (!g.freePlay && g.currentBattle.enemies[0].god) {
		const boss = g.currentBattle.enemies[0];
		const intervalTime = boss.name === "Hermes" ? 4200 : boss.name === "Hercules" ? 3000 : boss.name === "Zeus" ? 14200 : 25700;
		if (boss.name !== "Hades" && !boss.defeated) g.audio[`${g.currentBattle.name.toLowerCase()}Line`].play()
		if (boss.name === "Hades" && !boss.defeated) g.audio.hadesLines[0].play()
		setTimeout(() => {
			g.currentBattle.bT.play();
			g.currentBattle.bT.loop = true;
		}, boss.defeated ? 12 : intervalTime);
	}
	
	
	// --- Engine configurations ---

	const config = {
		gravity: 0.5,
		groundLevel: place === "Olympus" ? 470 : 480
	};

	if (!place && g.currentBattle.gL) config.groundLevel = g.currentBattle.gL // Remove if all battle ground levels are the same for each location (unlikely)

	enginize(g, config);
}