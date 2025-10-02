import { settings, settingsInit } from '../components/settings.js';
import { stats, enemyStats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { battle, restart  } from '../components/battle.js';
import { olympus } from './olympus.js';

export function olympusBattle(g) {
	g.game.innerHTML = `
		<div class="Olympus-battle">
			${settings(g, false)}
			<center>
			${stats(g)}
			<div id="Text">
				You are now fighting ${g.enemies[g.currentEnemy].name}. Try to not to die.
			</div>
			${enemyStats(g)}
			<canvas class="Battle-area"></canvas>
			<img id="You-dead" src="Imagery/You are dead GoW CoO.png">
			<button id="Return-Olympus">Return</button>
			<button id='Reset'> Restart? </button>
			</center>
			${hotbar(g)}
		</div>
	`;
	
	settingsInit(g);

	const returnB = document.getElementById("Return-Olympus");
	const eHealthFiller = document.querySelector('.Efiller');
	
	g.eH = g.enemies[g.currentEnemy].health;
	g.eW = g.enemies[g.currentEnemy].w;
	
	battle(g)
	
	returnB.onmouseover = () => {
		g.audios.hoverSound.play();
		returnB.style.animation = 'horizontal-shaking 0.5s';
	}
	
	returnB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		returnB.style.animation = 'grow';
	}
	
	returnB.onclick = () => {
		g.stopMusic();
		g.audios.returnSound.play();
		if (g.enemies[g.currentEnemy].health <= 0) eHealthFiller.style.width = '100%';
		localStorage.setItem('health', g.kratos.health);
		olympus(g);
		document.removeEventListener("keydown", g.keydownHandler);
		document.removeEventListener("keyup", g.keyupHandler);
		resetThem(eH, eW);
		g.inBattle = false;
	}
	
	hotbarInit(g);
	
	restart(g);
}