import { settings, settingsInit } from '../components/settings.js';
import { stats, enemyStats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { battle, restart  } from '../components/battle.js';
import { olympus } from './olympus.js';

export function olympusBattle(g) {
	g.game.innerHTML = `
		<div class="Olympus-battle">
			${settings(g, false)}
			${stats(g)}
			<center>
			<p><font color="#a88868">FPS: </font><span id="FPS">0</span></p>
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
	if (g.enemies[g.currentEnemy].name === "Zeus") document.querySelector(".Olympus-battle").style.backgroundImage = 'url("Imagery/Zeus battle area.png")';
	
	settingsInit(g);

	const returnB = document.getElementById("Return-Olympus");
	const eHealthFiller = document.querySelector('.Efiller');
	
	g.eHealth = g.enemies[g.currentEnemy].health;
	g.eH = g.enemies[g.currentEnemy].h;
	g.eW = g.enemies[g.currentEnemy].w;

	battle(g);
	
	returnB.onmouseover = () => {
		g.audios.hover.play();
		returnB.style.animation = 'horizontal-shaking 0.5s';
	}
	
	returnB.onmouseout = () => {
		g.audios.hover.pause();
		g.audios.hover.currentTime = 0;
		returnB.style.animation = 'grow';
	}
	
	returnB.onclick = () => {
		g.stopMusic();
		g.audios.exit.play();
		if (g.enemies[g.currentEnemy].health <= 0) eHealthFiller.style.width = '100%';
		document.removeEventListener("keydown", g.keydownHandler);
		document.removeEventListener("keyup", g.keyupHandler);
		g.inBattle = false;
		clearInterval(g.frameCount);
		olympus(g);
		setTimeout(() => g.resetThem(), 100 );
	}
	
	hotbarInit(g);
	
	restart(g);
}