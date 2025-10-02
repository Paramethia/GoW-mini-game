import { settings, settingsInit } from '../components/settings.js';
import { stats, enemyStats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import {  battle, restart } from '../components/battle.js';
import { underworld } from './underworld.js';

export function underworldBattle(g) {
	g.game.innerHTML = `
		<div class="Underworld-battle">
			${settings(g, false)}
			<center>
			${stats(g)}
			<div id="Text">
				You are now fighting a ${g.enemies[g.currentEnemy].name}. Try to not to die.
			</div>
			${enemyStats(g)}
			<canvas class="Battle-area"></canvas>
			<img id="You-dead" src="Imagery/You are dead GoW CoO.png">
			<button id="Return-Underworld">Return</button>
			<button id='Reset'> Restart? </button>
			</center>
			${hotbar(g)}
		</div>
	`;
	
	settingsInit(g);

	const eHealthFiller = document.querySelector('.Efiller');
	const returnB = document.getElementById("Return-Underworld");
	
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
		//localStorage.setItem('health', kratos.health);
		underworld(g);
		document.removeEventListener("keydown", g.keydownHandler);
		document.removeEventListener("keyup", g.keyupHandler);
		g.resetThem();
		g.inBattle = false;
	}
	
	hotbarInit(g);
	
	restart(g);
}