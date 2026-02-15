import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { underworldBattle } from './underworld-battle.js';
import { sparta } from './sparta.js';

export function underworld(g) {
	const creatures = g.enemies.slice(0, 8);
	const creaturesInfo = [ 
		"A <strong>Hoplite</strong> that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons",
		"The <strong>Banshee</strong> is known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans.",
		"<strong>Satyrs</strong> are one of the most formidable opponents, able to go toe-to-toe with Kratos. They have the upper body of a man and the horns and back legs of a goat.",
		"<strong>Gorgon</strong>s are female serpent-like creatures that inhabit Greece. They are below the Gorgan sisters who rule other gorgons.",
		"The <strong>Minotaur</strong> appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes.",
		"<strong>Medusa</strong> was the first of the Gorgon sisters in Greek mythology. Medusa has the power to turn mortals to stone with her gaze.",
		"<strong>Cyclops</strong> are a species of burly, one-eyed giants, they give plenty of damage, so you will want to have a lot of health and/or a good weapon if you want to fight it.",
		"<strong>Hades</strong> is the God of the dead. The ruler of the underworld. Eldest son of the mighty titan, Cronos & the goddess Rhea. Zeus' brother, and Kratos' uncle."
	];
	const moreCinfo = [
		"This is a standard simple enemy that deals little damage & has little health. Hoplites can also block randomly as defense. Heavy attacks can break their blocks.",
		"The banshee has slightly more health than the hoplite, with similar hit damage. It will randomly scream, dealing 1 health per 0.25s of the scream duration.",
		"Satyrs may be a little challenging without upgrading your standard weapon. They have a little more health than Kratos' average health. They have a higher chance of blocking than hoplites. And their blocks are unbreakable without a better weapon.",
		"Gorgons have slightly less health than satyrs, and with damage a little more than the banshee. They have the ability of petrifying at a specific range. It can still attack you while you are petrified, so be sure to break out of the petrification quickly.",
		"Minotaurs have similar skills to the satyrs, but they deal more damage of course. Their blocks are basically unbreakable without using at least the Gauntlet of Zeus.",
		"Medusa is pretty much the same as the gorgon with similar damage, much higher petrification chance, slightly faster petrification timing, lower petrification cooldown, and higher petrification range.",
		"The Cyclops does not have any special abilities like blocking, petrifying, etc. Although, it does have a lot of health (a little more than Kratos max health) and deals significant damage due it's large size.",
		"Hades has the ability to summon out hands from underground. You can dodge these by dodging or by jumping in time. He can also decide to take your soul which takes 3 health each 0.25s as he does this. He also pulls you towards him as he takes our soul."
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
				<span id="enemy-i-tog"><i class="fa-solid fa-circle-info fa-xl"></i></span>
				<div id="More-info">
					<h3>Specs</h3>
					<p id="ability">${moreCinfo[0]}</p>
					<i><font color="#9f7c27"> Damage: </font> <span id="enemy-damage"> ${Math.round(creatures[0].lD + creatures[0].hD / 2)} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Speed: </font> <span id="enemy-speed"> ${creatures[0].speed} </span></i> <span class="vert-bar">|</span>
					<i><font color="#9f7c27"> Stun: </font> <span id="enemy-stun"> ${parseInt(Math.round(creatures[0].lS + creatures[0].hS / 2)) / 100}s </span></i>
				</div>
			</div>
			</center>
			${hotbar(g)}
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

	moreInfo.style.visibility = 'hidden';
	enemyItog.onclick = () => { moreInfo.style.visibility === 'hidden' ? moreInfo.style.visibility = 'visible' : moreInfo.style.visibility = 'hidden' }

	navButtons.forEach((button, index) => { button.onclick = () => navigateEnemies(index) });

	const defeats = [true, g.hoplite.defeated, g.banshee.defeated, g.satyr.defeated, g.gorgon.defeated, g.minotaur.defeated, g.medusa.defeated, g.cyclops.defeated ];

	function navigateEnemies(i) {
		g.audios.hover2.currentTime = 0;
		g.audios.hover2.cloneNode().play();
		i ? g.currentEnemy++ : g.currentEnemy--
		if (g.currentEnemy > 7) { 
			g.currentEnemy = 0 
		} else if (g.currentEnemy < 0) { 
			g.currentEnemy = 7
		}
		enemyInfo.innerHTML = creaturesInfo[g.currentEnemy];
		ability.innerText = moreCinfo[g.currentEnemy];
		enemyDamage.innerText = Math.round(creatures[g.currentEnemy].lD + creatures[g.currentEnemy].hD / 2);
		enemySpeed.innerText = creatures[g.currentEnemy].speed;
		enemyStun.innerText = `${parseInt(Math.round(creatures[g.currentEnemy].lS + creatures[g.currentEnemy].hS / 2)) / 100}s`
		creatureImage.src = `Imagery/${creatures[g.currentEnemy].name}.png`;
		fightB.innerHTML = `Fight ${defeats[g.currentEnemy]? '' : '<i class="fa-solid fa-lock"></i>'}`;
	}
	
	const creatureSounds = [ g.audios.hopliteSound, g.audios.bansheeSound, g.audios.satyrSound, g.audios.gorgonSound, g.audios.minotaurSound, g.audios.medusaSound, g.audios.cyclopsSound, g.audios.hover ];
	var animationTimes = [ '1.2s', '2.5s', '1.4s', '1.6s', '1s', '1.8s', '1.1s', '1.2' ]
	
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
			if (g.currentEnemy === 7 && !g.hades.defeated) g.audios.hadesLines[0].play();
			setTimeout(() => {
				if (g.currentEnemy <= 3) { 
					g.audios.battleTheme.play() 
				} else if (g.currentEnemy <= 5) { 
					g.audios.battleTheme2.play() 
				} else if (g.currentEnemy === 6) {
					g.audios.cyclopsBattle.play() 
				} else {
					g.audios.hadesBattle.play()
				}
			}, g.currentEnemy === 7 && !g.hades.defeated ? 25700 : 1000 );
			g.stopAmbience();
			document.removeEventListener("keydown", g.navKeys);
			underworldBattle(g);
		}
	}
	
	function leaveUnderworld() {
		g.audios.underworldAm.pause();
		g.audios.underworldAm.currentTime = 0;
		g.audios.exit.play();
        if (g.play) g.audios.mainTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}