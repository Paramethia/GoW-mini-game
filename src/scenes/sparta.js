import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { shop } from './shop.js';
import { underworld } from './underworld.js';
import { olympus } from './olympus.js';

export function sparta(g) {
    let defaultText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
    if (Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'))) defaultText = "Welcome back to God of War. You already know what to do mos. \n ;-)";

	g.game.innerHTML = `
		<div class="Sparta">
			${settings(g, true)}
			<center>
				${stats(g)}
				<div id="Main-text">
					${defaultText.replace('\n', '<br />')}
				</div>
				<div class="Mid">
					<img id="Kratos-at-Sparta" src="Imagery/Kratos at Sparta.png">
					
					<img id="Shop" src="Imagery/Sparta shop.png">
					<img id="Underworld" src="Imagery/Underworld.png">
					<img id="Mount-Olympus" src="Imagery/Mount Olympus.png">
				</div>
				
				<button id="Shop-button" >Shop</button>
				<button id="Underworld-button">Underworld</button>
				<button id="Olympus-button">Mount Olympus ${g.cyclops.defeated ? '' : '<i id="Olym-lock" class="fa-solid fa-lock"></i>'}</button>
			</center>
            ${hotbar(g)}
		</div>
	`;

    settingsInit(g)
	
	const mainText = document.getElementById('Main-text');
	const kratosAtSparta = document.getElementById('Kratos-at-Sparta');
    const shopImg = document.getElementById('Shop');
	const underworldImg = document.getElementById('Underworld');
	const mountOlympusImg= document.getElementById('Mount-Olympus');
	const shopB = document.getElementById('Shop-button');
	const underworldB = document.getElementById('Underworld-button');
	const olympusB = document.getElementById('Olympus-button');
	
	shopB.onmouseover = () => {
		g.audios.hoverSound.play();
		document.querySelector('.Sparta').style.background = '#09090b';
		kratosAtSparta.style.display = 'none';
		shopImg.style.display = 'block';
		mainText.innerText = "You can go to the shop to get weapons with orbs to get stronger to defeat stronger enemies. \n 🏪";
		shopB.style.background = '#09090b';
		shopB.style.animation = 'tilt-n-move-shaking 0.5s';
	}
	shopB.onmouseout = () => {
		g.audios.hoverSound.pause(); 
		g.audios.hoverSound.currentTime = 0;
		document.querySelector('.Sparta').style.background = '#464646';
		kratosAtSparta.style.display = 'inline';
		shopImg.style.display = 'none';
		mainText.innerText = defaultText;
		shopB.style.background = '#4b3f33';
		shopB.style.animation = 'grow';
	}
	shopB.onclick = () => {
		g.audios.selection.play();
		shop(g);
	}

	underworldB.onmouseover = () => {
		g.audios.hoverSound.play();
		document.querySelector('.Sparta').style.background = '#2f1c12';
		kratosAtSparta.style.display = 'none';
		underworldImg.style.display = 'inline';
		mainText.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus.";
		underworldB.style.background = '#2f1c12';
		underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
	}
	underworldB.onmouseout = () => {
		g.audios.hoverSound.pause(); 
		g.audios.hoverSound.currentTime = 0;
		document.querySelector('.Sparta').style.background = '#464646';
		kratosAtSparta.style.display = 'inline';
		underworldImg.style.display = 'none';
		mainText.innerText = defaultText;
		underworldB.style.background = '#4b3f33';
		underworldB.style.animation = 'grow';
	}
	underworldB.onclick = () => {
		g.audios.selection.play();
		if (g.play === true) {
			g.audios.menuTheme.pause();
			g.audios.menuTheme.currentTime = 0;
		}
		underworld(g);
		g.audios.underworldAm.play();
		g.audios.underworldAm.loop = true;
	}

	olympusB.onmouseover = () => {
		g.audios.hoverSound.play();
		document.querySelector('.Sparta').style.background = 'rgb(9, 15, 13)';
		kratosAtSparta.style.display = 'none';
		mountOlympusImg.style.display = 'inline';
		mainText.innerText = "This is Mount Olympus. Where you will fight the gods of Olympus when you are ready. You can only go here when you have defeated all the creatures in the underworld.";
		olympusB.style.background = 'rgb(9, 15, 13)';
		olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
	}
	olympusB.onmouseout = () => {
		g.audios.hoverSound.pause(); 
		g.audios.hoverSound.currentTime = 0;
		document.querySelector('.Sparta').style.background = '#464646';
		kratosAtSparta.style.display = 'inline';
		mountOlympusImg.style.display = 'none';
		mainText.innerText = defaultText;
		olympusB.style.background = '#4b3f33';
		olympusB.style.animation = 'grow';
	}
	olympusB.onclick = () => {
		if (g.cyclops.defeated) {
			g.audios.selection.play();
			if (g.play === true) {
				g.audios.menuTheme.pause();
				g.audios.menuTheme.currentTime = 0;
			}
			olympus(g);
			g.audios.olympusAm.play()
			g.audios.olympusAm.loop = true;
			document.removeEventListener('keydown', g.mHandler);
		}
	}

    hotbarInit(g)
}