import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { shop } from './shop.js';
import { underworld } from './underworld.js';
import { olympus } from './olympus.js';

export function sparta(g) {
    let defaultText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use w/s to navigate to different places.";
    if (Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'))) defaultText = "Welcome back to God of War. You already know what to do mos. \n ;-)";

	g.game.innerHTML = `
		<div class="Sparta">
			${settings(g, true)}
			${stats(g)}
			<center>
				<div id="Main-text">
					${defaultText.replace('\n', '<br />')}
				</div>
				<div class="Mid">
					<img id="Kratos" src="Imagery/Kratos standing animation.gif">
				</div>
			</center>
			<div class="Places">
				<button id="Shop-button" >Shop</button>
				<button id="Underworld-button">Underworld</button>
				<button id="Olympus-button">Mount Olympus ${g.cyclops.defeated ? '' : '<i id="Olym-lock" class="fa-solid fa-lock"></i>'}</button>
			</div>
            ${hotbar(g)}
		</div>
	`;

    settingsInit(g)
	
	const mainText = document.getElementById('Main-text');
	const kratos = document.getElementById('Kratos');
	const shopB = document.getElementById('Shop-button');
	const underworldB = document.getElementById('Underworld-button');
	const olympusB = document.getElementById('Olympus-button');

	const buttons = [shopB, underworldB, olympusB];
	let currentIndex = -1;

	function selectButton(index) {
		// reset all buttons (simulate mouseout)
		buttons.forEach(btn => btn.onmouseout && btn.onmouseout());

		// apply hover effect to the current one (simulate mouseover)
		if (buttons[index].onmouseover) {
			buttons[index].onmouseover();
		}

		currentIndex = index;
	}

	document.removeEventListener("keydown", g.navKeys);

	g.navKeys = function(e) {
		if (e.repeat) return;

		if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
			let nextIndex = (currentIndex + 1) % buttons.length;
			selectButton(nextIndex);
		}

		if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
			let prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
			selectButton(prevIndex);
		}

		if (e.key === "Enter") {
			// simulate click
			if (buttons[currentIndex].onclick) buttons[currentIndex].onclick()
		}
	}

	document.addEventListener("keydown", g.navKeys);

	
	shopB.onmouseover = () => {
		g.audios.hoverSound.cloneNode().play();
		document.querySelector('.Sparta').style.backgroundImage = 'url("Imagery/Sparta shop.png")';
		kratos.style.bottom = '-1.4cm';
        kratos.style.right = '65%';
		kratos.style.height = '254px';
		kratos.style.width = '134px';
		mainText.innerText = "You can go to the shop to get weapons with orbs to get stronger to defeat stronger enemies.";
		shopB.style.animation = 'tilt-n-move-shaking 0.5s';
		shopB.style.background = '#232d34';
	}
	shopB.onmouseout = () => {
		document.querySelector('.Sparta').style.backgroundImage = 'url("Imagery/Sparta.png")';
		kratos.style.bottom = '0';
        kratos.style.right = '42%';
		kratos.style.height = '142px';
		kratos.style.width = '82px';
		mainText.innerText = defaultText;
		shopB.style.animation = 'grow';
		shopB.style.background = '#0a0a23';
	}
	shopB.onclick = () => {
		g.audios.selection.play();
		shop(g);
	}

	underworldB.onmouseover = () => {
		g.audios.hoverSound.cloneNode().play();
		document.querySelector('.Sparta').style.backgroundImage = 'url("Imagery/Underworld.png")';
		kratos.style.right = '62%';
		kratos.style.height = '244px';
		kratos.style.width = '124px';
		mainText.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus.";
		underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
		underworldB.style.background = '#25201c';
	}
	underworldB.onmouseout = () => {;
		document.querySelector('.Sparta').style.backgroundImage = 'url("Imagery/Sparta.png")';
		kratos.style.right = '42%';
		kratos.style.height = '142px';
		kratos.style.width = '82px';
		mainText.innerText = defaultText;
		underworldB.style.animation = 'grow';
		underworldB.style.background = '#0a0a23';
	}
	underworldB.onclick = () => {
		g.audios.selection.play();
		if (g.play === true) {
			g.audios.mainTheme.pause();
			g.audios.mainTheme.currentTime = 0;
		}
		underworld(g);
		g.audios.underworldAm.play();
		g.audios.underworldAm.loop = true;
	}

	olympusB.onmouseover = () => {
		g.audios.hoverSound.cloneNode().play();
		document.querySelector('.Sparta').style.backgroundImage = 'url("Imagery/Mount Olympus.png")';
		document.querySelector('.Sparta').style.backgroundPosition = 'bottom';
		kratos.style.bottom = '1.1cm';
		kratos.style.right = '60%';
		kratos.style.height = '244px';
		kratos.style.width = '124px';
		mainText.innerText = "This is Mount Olympus. Where you will fight the gods of Olympus when you are ready. You can only go here when you have defeated all the creatures in the underworld.";
		olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
		olympusB.style.background = '#5e4915';
	}
	olympusB.onmouseout = () => {
		document.querySelector('.Sparta').style.backgroundImage = 'url("Imagery/Sparta.png")';
		document.querySelector('.Sparta').style.backgroundPosition = 'center';
		kratos.style.bottom = '0cm';
		kratos.style.right = '42%';
		kratos.style.height = '142px';
		kratos.style.width = '82px';
		mainText.innerText = defaultText;
		olympusB.style.animation = 'grow';
		olympusB.style.background = '#0a0a23';
	}
	olympusB.onclick = () => {
		if (g.cyclops.defeated) {
			g.audios.selection.play();
			if (g.play === true) {
				g.audios.mainTheme.pause();
				g.audios.mainTheme.currentTime = 0;
			}
			olympus(g);
			g.audios.olympusAm.play();
			g.audios.olympusAm.loop = true;
			document.removeEventListener('keydown', g.mHandler);
		}
	}

    hotbarInit(g)
}