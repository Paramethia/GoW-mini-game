import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { underworldBattle } from './underworld-battle.js';
import { sparta } from './sparta.js';

export function underworld(g) {
	g.game.innerHTML = `
		<div class="Underworld">
			${settings(g, false)}
			<center>
			${stats(g)}
			<div id="Text">
				You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.
			</div>
			<div id="Enemy-info">
				<!-- Enemies information will display here when you hover on the button. -->
			</div>
			<div class="Mid">
				<img id="Kratos-in-Underworld" src="Imagery/Kratos in Underworld.png">
				
				<img id="Hoplite" src="Imagery/Hoplite.png">
				<img id="Banshee" src="Imagery/Banshee.png">
				<img id="Satyr" src="Imagery/Satyr.png">
				<img id="Minotaur" src="Imagery/Minotaur.png">
				<img id="Medusa" src="Imagery/Medusa.png">
				<img id="Cyclops" src="Imagery/Cyclops.png">
				
				<img id="Sparta" src="Imagery/Sparta.png">
				
				<span class="Enemy-damage"><i><font color="#8c2002"> Damage: </font> <span id="enemy-damage"> 9 </span> </i></span>
			</div>
			<div class="Buttons">
				<button id="HopliteB">Hoplite</button>
				<button id="BansheeB">Banshee ${ g.hoplite.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="SatyrB">Satyr ${ g.banshee.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="MinotaurB">Minotaur ${ g.satyr.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="MedusaB">Medusa ${ g.minotaur.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="CyclopsB">Cyclops ${ g.medusa.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="Leave-Underworld">Return to Sparta</button>
			</div>
			</center>
			${hotbar(g)}
		</div>
	`;
	
	settingsInit(g);
	
	const text = document.getElementById('Text');
	
	const kratosUnderworld = document.getElementById('Kratos-in-Underworld');
	
	const damageCon = document.querySelector('.Enemy-damage');
	//const enemyName = document.getElementById('Enemy-name');
	const enemyInfo = document.getElementById('Enemy-info');
	const enemyDamage = document.getElementById('enemy-damage');
	
	const leaveUnderworld = document.getElementById('Leave-Underworld');
	
	const creatures = [ document.getElementById('Hoplite'), document.getElementById('Banshee'), document.getElementById('Satyr'), document.getElementById('Minotaur'), document.getElementById('Medusa'),  document.getElementById('Cyclops')];
	const creatureButtons = [ document.getElementById('HopliteB'), document.getElementById('BansheeB'), document.getElementById('SatyrB'), document.getElementById('MinotaurB'), document.getElementById('MedusaB'),  document.getElementById('CyclopsB')];
	const creatureSounds = [ g.audios.hopliteSound, g.audios.bansheeSound, g.audios.satyrSound, g.audios.minotaurSound, g.audios.hoverSound, g.audios.cyclopsSound ];
	const creaturesInfo = [ 
		"An enemy that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons",
		"The Banshee is known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans.",
		"Satyrs are one of the most formidable opponents, able to go toe-to-toe with Kratos. They have the upper body of a man and the horns and back legs of a goat.",
		"The Minotaur appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes.",
		"Medusa was the first of the Gorgon sisters in Greek mythology. Medusa has the power to turn Kratos to stone with her gaze.",
		"Cyclopes are a species of burly, one-eyed giants, they give plenty of damage, so you will want to have a lot of health and/or a good weapon if you want to fight it."
	];

	creatureButtons.forEach((creatureButton, index) => {
		var animationTimes = [ '1.2s', '1.8s', '1.4s', '1s', '0.5s', '1.6s' ]
		
		creatureButton.onmouseover = () => {
			creatureSounds[index].play();
			text.style.display = 'none';
			kratosUnderworld.style.display = 'none';
			enemyInfo.style.display = 'inline-block';
			enemyInfo.innerText = creaturesInfo[index];
			damageCon.style.display = 'inline';
			enemyDamage.innerText = g.enemies[index].damage;
			creatures[index].style.display = 'inline';
			creatureButton.style.animation = `tilt-shaking ${animationTimes[index]}`;
		}
		creatureButton.onmouseout = () => {
			creatureSounds[index].pause();
			creatureSounds[index].currentTime= 0;
			enemyInfo.style.display = 'none';
			text.style.display = 'inline-block';
			creatures[index].style.display = 'none';
			damageCon.style.display = 'none';
			kratosUnderworld.style.display = 'inline';
			creatureButton.style.animation = 'none';
		}
		creatureButton.onclick = () => {
			var defeats = [true, g.hoplite.defeated, g.banshee.defeated, g.satyr.defeated, g.minotaur.defeated, g.medusa.defeated];
			if (defeats[index]) {
				setTimeout(( ) => {
					if (index <= 4) { 
						g.audios.battleTheme2.play() 
					} else if (index <= 1) { 
						g.audios.battleTheme.play() 
					} else if (index === 5) g.audios.cyclopsBattle.play()
				}, 1000 );
				g.stopAmbience();
				g.currentEnemy = index;
				underworldBattle(g);
			}
		}
	});
	
	const spartaImg = document.getElementById('Sparta');
	
	leaveUnderworld.onmouseover = () => {
		g.audios.hoverSound.play();
		document.querySelector('.Underworld').style.background = '#20130c';
		leaveUnderworld.style.animation = 'horizontal-shaking 0.5s';
		kratosUnderworld.style.display = 'none';
		spartaImg.style.display = 'inline';
	}
	leaveUnderworld.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		document.querySelector('.Underworld').style.background = '#3c3837';
		leaveUnderworld.style.animation = 'grow';
		kratosUnderworld.style.display = 'inline';
		spartaImg.style.display = 'none';
	}
	leaveUnderworld.onclick = () => {
		g.audios.underworldAm.pause();
		g.audios.underworldAm.currentTime = 0;
		g.audios.returnSound.play();
        if (g.play) g.audios.menuTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}