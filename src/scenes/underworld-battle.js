import { settings, settingsInit } from '../components/settings.js';
import { stats, enemyStats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { battle, restart } from '../components/battle.js';
import { underworld } from './underworld.js';

export function underworldBattle(g) {
	g.game.innerHTML = `
		<div class="Underworld-battle">
			${settings(g, false)}
			${stats(g)}
			<center>
			<p><font color="#a88868">FPS: </font><span id="FPS">0</span></p>
			<div id="Text">
				You are now fighting ${g.currentEnemy === 5 || g.currentEnemy === 7 ? "" : "a"} ${g.enemies[g.currentEnemy].name}. Try to not to die.
			</div>
			${enemyStats(g)}
			<canvas class="Battle-area"></canvas>
			<img id="You-dead" src="Imagery/battle/You are dead GoW CoO.png">
			<button id="Return-Underworld">Return</button>
			<button id='Reset'> Restart? </button>
			</center>
			${hotbar(g)}
		</div>
	`;

	if (g.enemies[g.currentEnemy].name === "Hades") document.querySelector(".Underworld-battle").style.backgroundImage = 'url("./Imagery/battle/Hades battle area.png")';
	
	settingsInit(g);

	const eHealthFiller = document.querySelector('.Efiller');
	const returnB = document.getElementById("Return-Underworld");
	
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
		underworld(g);
		setTimeout(() => g.resetThem(), 100 );
	}
	
	hotbarInit(g);
	restart(g);
}