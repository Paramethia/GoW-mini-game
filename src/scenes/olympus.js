import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { olympusBattle } from './olympus-battle.js';
import { sparta } from './sparta.js';

export const olympus = (g) => {
	g.game.innerHTML = `
		<div class="Olympus">
			${settings(g, false)}
			<center>
			${stats(g)}
			<div id="Text">
				You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong.
			</div>
			<div id="Enemy-info">
				<!-- Enemies information will display here when you hover on the button. -->
			</div>
			<div class="Mid">
				<img id="Kratos-at-Olympus" src="Imagery/Kratos at Mount Olympus.png">
					
				<img id="Hermes"src="Imagery/Hermes.png">
				<img id="Hercules" src="Imagery/Hercules.png">
				<img id="Zeus" src="Imagery/Zeus.png">
				
				<img id="Sparta" src="Imagery/Sparta.png">
				
				<span class="Enemy-damage"><i><font color="#8c2002"> Damage: </font> <span id="enemy-damage"> 9 </span> </i></span>
			</div>
			<div class="Buttons">
				<button id="HermesB">Hermes</button>
				<button id="HerculesB">Hercules ${ g.hermes.defeated ? '' : '<i id="Herc-lock" class="fa-solid fa-lock"></i>' }</button>
				<button id="ZeusB">Zeus ${ g.hercules.defeated ? '' : '<i id="Zeus-lock" class="fa-solid fa-lock"></i>' }</button>
			 
				<button id="Leave-Olympus">Return to Sparta</button>
			</div>
			</center>
			${hotbar(g)}
		</div>
	`;
	
	settingsInit(g);
	
	const text = document.getElementById('Text');
	
	const kratosOlympus = document.getElementById('Kratos-at-Olympus');
	
	const damageCon = document.querySelector('.Enemy-damage');
	//const enemyName = document.getElementById('Enemy-name');
	const enemyInfo = document.getElementById('Enemy-info');
	const enemyDamage = document.getElementById('enemy-damage');
	
	const leaveOlympus = document.getElementById('Leave-Olympus');
	
	const enemyImages = [ document.getElementById('Hermes'), document.getElementById('Hercules'), document.getElementById('Zeus')];
	const enemiesButtons = [ document.getElementById('HermesB'), document.getElementById('HerculesB'),  document.getElementById('ZeusB')];
	const enemiesInfo = [
		"Hermes (Greek: Ἑρμῆς) is the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and mostly.. Speed.",
		"Hercules (Greek: Ἡρακλῆς) is the son of Zeus and half-brother to Kratos. He is known for having a lot of strength.",
		"Zeus (Greek: Ζεύς) is the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Storm, Thunder and Lightning. Also the father of Kratos."
	];

	enemiesButtons.forEach((enemyButton, index) => {
		var lines = [ g.audios.hermesLine, g.audios.herculesLine, g.audios.zeusLine ];
		var texts = [
			"You are now facing the god, Hermes. He spots you and he swiftly starts attacking. \n 😟",
			"Hercules gets in your way, to Zeus. He challenges you to fight him to the death to see who is stronger. \n 😟",
			"You finally arrive to the god of thunder and lightning, and also your father, Zeus. Try killing him in fashion. \n 😈"
		];
		var battleThemes = [ g.audios.battleTheme2, g.audios.battleTheme2, g.audios.zeusBattle ];
		var intervalTimes = [ 4200, 3000, 14200 ];
		
		enemyButton.onmouseover = () => {
			g.audios.hoverSound.play();
			text.style.display = 'none';
			enemyInfo.style.display = 'inline-block';
			enemyInfo.innerText = enemiesInfo[index];
			enemyDamage.innerText = g.enemies[index + 6].damage;
			damageCon.style.display = 'inline';
			kratosOlympus.style.display = 'none';
			enemyImages[index].style.display = 'inline';
			enemyButton.style.animation = 'tilt-shaking 0.5s';
		}
		enemyButton.onmouseout = () => {
			g.audios.hoverSound.pause();
			g.audios.hoverSound.currentTime = 0;
			text.style.display = 'block';
			enemyInfo.style.display = 'none';
			damageCon.style.display ='none';
			enemyImages[index].style.display = 'none';
			kratosOlympus.style.display = 'inline';
			enemyButton.style.animation = 'grow';
		}
		enemyButton.onclick = () => {
			var defeats = [g.cyclops.defeated, g.hermes.defeated, g.hercules.defeated];
			if (defeats[index]) {
				g.audios.olympusAm.pause();
				g.audios.olympusAm.currentTime = 0;
				g.currentEnemy = index + 6;
				if (!g.enemies[g.currentEnemy].defeated) lines[index].play();
				setTimeout(() => {
					g.audios.selection2.play();
					setTimeout(() => {
						battleThemes[index].play();
					}, 1000 );
					text.innerText = texts[index];
				}, g.enemies[g.currentEnemy].defeated ? 12 : intervalTimes[index] );
				olympusBattle(g);
			}
		}
	});
	
	const spartaImg = document.getElementById('Sparta');
	
	leaveOlympus.onmouseover = () => {
		g.audios.hoverSound.play();
		document.querySelector('.Olympus').style.background = '#20130c';
		leaveOlympus.style.animation = 'horizontal-shaking 0.5s';
		kratosOlympus.style.display = 'none';
		spartaImg.style.display = 'inline';
	}
	leaveOlympus.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		document.querySelector('.Olympus').style.background = '#19282c';
		leaveOlympus.style.animation = 'grow';
		kratosOlympus.style.display = 'inline';
		spartaImg.style.display = 'none';
	}
	leaveOlympus.onclick = () => {
		g.audios.olympusAm.pause();
		g.audios.olympusAm.currentTime = 0;
		g.audios.returnSound.play();
		if (g.play === true) g.audios.menuTheme.play();
		sparta(g);
	}
	
	hotbarInit(g);
}