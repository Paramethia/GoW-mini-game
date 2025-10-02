import { mainMenu } from '../scenes/main-menu.js';

export const settings = (g, show) => { 
    return `
		${show ? `
		<button id="music-option">
			<i id ="music-note" class="fa-sharp fa-solid fa-music fa-2xl" style="color: #0d0d0d;"></i> 
		</button> <span id="porp"> Play main menu music? </span>` : ''
		}
        <button id="settings">
            <i id="gear" class="fa-solid fa-gear fa-2xl" style="color: #0d0d0d;"></i>
        </button>
        <div class="Settings">
            <p id="Hbar-set"><i> Turn ${ g.hBarOn ? "off" : "on" } health bar </i></p>
            <p id="Music-set"><i> Music volume </i></p>
            <div class="Music-con">
                <i id="music-mutei" class="fa-solid fa-volume-xmark fa-xl"></i>
                <i  id="music-lvi" class="fa-solid fa-volume-low fa-xl"></i>
                <i id="music-hvi" class="fa-solid fa-volume-high fa-xl"></i>
            </div>
            <p id='music-vol'> Current volume: <span id="other-music-volume"> ${g.musicVolume} </span></p>
            <p id="Ambience-set"><i> Ambience volume </i></p>
            <div class="Ambience-con">
                <i id="amb-mutei" class="fa-solid fa-volume-xmark fa-xl"></i>
                <i  id="amb-lvi" class="fa-solid fa-volume-low fa-xl"></i>
                <i id="amb-hvi" class="fa-solid fa-volume-high fa-xl"></i>
            </div>
            <p id='amb-vol'> Current volume: <span id="other-ambience-volume"> ${g.ambienceVolume} </span></p>
			<p id="Controls-set"><i> Controls </i></p>
			<div class="Controls-con">
				<div class="controls"><span> A / ← </span><font color="#424">Walk left</font></div>
				<div class="controls"><span> D / → </span><font color="#424">Walk right</font></div>
				<div class="controls"><span> E </span><font color="#424">Attack</font></div>
				<div class="controls"><span> Space </span><font color="#424">Jump</font></div>
				<div class="controls"><span> Shift </span><font color="#424">Dodge</font></div>
			</div>
            <button id="Return-tmm"> Return to main menu </button>
        </div>
    `;
}

export function settingsInit(g) {

    const settingsB = document.getElementById('settings');
	const gear = document.getElementById('gear');
	const musicB = document.getElementById('music-option');
	const musicNote = document.getElementById('music-note');
	const porp = document.getElementById('porp');
	const settings = document.querySelector('.Settings');
	const healthBarSet = document.getElementById('Hbar-set');
	const musicSet = document.getElementById('Music-set');
	const musicSetCon = document.querySelector('.Music-con');
	const mVoldown = document.getElementById('music-lvi');
	const mVolup = document.getElementById('music-hvi');
	const musicMute = document.getElementById('music-mutei');
	const currentMusicVol = document.getElementById('music-vol');
	const musicVolText = document.getElementById('other-music-volume');
	const ambienceSet = document.getElementById('Ambience-set');
	const ambSetCon = document.querySelector('.Ambience-con');
	const aVoldown = document.getElementById('amb-lvi');
	const aVolup = document.getElementById('amb-hvi');
	const currentAmbVol = document.getElementById('amb-vol');
	const ambVolText = document.getElementById('other-ambience-volume');
	const controlsSet = document.getElementById('Controls-set');
	const controlsCon = document.querySelector('.Controls-con');
	const returnTMM = document.getElementById('Return-tmm');
	const healthText = document.getElementById('Health-text');
	const ambMute = document.getElementById('amb-mutei');
	const healthBar = document.querySelector('.Health-bar');
	const healthFiller = document.querySelector('.filler');
	const enemyHealthText = document.getElementById('enemy-health');
	const eHealthBar = document.querySelector('.Ehealth-bar');

	let musicSetOn = false;
	let ambSetOn = false;
	let conSetOn = false;
	
	function turnOnHealthbar() {
		healthBarSet.innerText = "Turn off health bar";
		healthBar.style.display = 'inline-block';
		healthText.style.display = 'none';
		if (eHealthBar) { 
			enemyHealthText.style.display = 'none';
			eHealthBar.style.display = 'inline-block';
			eHealthBar.style.width = `${g.enemies[g.currentEnemy].health}px`;
		}
	}

	function turnOffHealthbar() {
		healthBarSet.innerText = "Turn on health bar";
		healthBar.style.display = 'none';
		healthText.style.display = 'inline';
		if (eHealthBar) { 
			enemyHealthText.style.display = 'inline';
			eHealthBar.style.display = 'none';
		}
	}
	
	if (g.hBarOn) { 
		turnOnHealthbar();
		g.healthBarUpdate(healthBar, healthFiller);
	}

	function setMusic() {
		if (document.getElementById('music-option') === null) return
		g.play = !g.play;
		if (g.play) {
			g.audios.menuTheme.play();
			document.getElementById('music-option').style.background = 'grey';
			g.audios.menuTheme.loop = true;
		} else {
			g.audios.menuTheme.pause();
			document.getElementById('music-option').style.background = '#464646';
		}
	}

	if (g.mKey) document.removeEventListener("keydown", g.mKey);

	g.mKey = function (event) { 
		if (event.repeat) return;
		if (event.key.toLowerCase() === 'm' && musicB) setMusic();
	};
	
	if (musicB !== null) {
		document.addEventListener("keydown", g.mKey);

		musicB.onmouseover = () => {
			g.audios.hoverSound.play()
			musicNote.style.color = '#332822';
			porp.style.display = 'inline';
			if (g.play == true) {
				porp.innerText = "Pause main menu music?"
			} else {
				porp.innerText = "Play main menu music?"
			}
		}
		musicB.onmouseout = () => {
			g.audios.hoverSound.pause(); 
			g.audios.hoverSound.currentTime = 0;
			musicNote.style.color = '#0d0d0d';
			porp.style.display = 'none';
		}
		
		if (g.play) musicB.style.background = 'grey'

		musicB.onclick = () => { setMusic() }
	}

	settingsB.onmouseover = () => {
		g.audios.hoverSound.play();
		gear.style.animation = 'rotateZ 0.7s';
		gear.style.color = '#332822';
	}
	settingsB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		gear.style.animation = 'no';
		gear.style.color = '#0d0d0d';
	}
	
	function toggleSettings() {
		g.set = !g.set;
		if (g.set) {
			document.getElementById('settings').style.background = 'grey';
			document.querySelector('.Settings').style.display = 'block';
		} else {
			document.getElementById('settings').style.background = '#464646';
			document.querySelector('.Settings').style.display = 'none';
		}
	}
	
	if (g.escKey) document.removeEventListener("keydown", g.escKey);
	g.escKey = function (event) { 
		if (event.repeat) return;
		if (event.key === 'Escape' && settingsB) toggleSettings() 
	};
	document.addEventListener("keydown", g.escKey)
	
	if (g.set) {
		settingsB.style.background = 'grey';
		settings.style.display = 'block';
	}

	settingsB.onclick = () => { toggleSettings() }

	healthBarSet.onclick = () => { 
		switch(g.hBarOn) {
			case false:
				g.hBarOn = true;
				localStorage.setItem('healthBarOn', g.hBarOn)
				turnOnHealthbar();
			break;
			case true:
				g.hBarOn = false
				localStorage.setItem('healthBarOn', g.hBarOn);
				turnOffHealthbar();
			break;
		}
	}
	
	musicSet.onmouseover = () => { musicSet.style.background = '#412021' }
	musicSet.onmouseout = () => { if (!musicSetOn) musicSet.style.background = '#614051' }

	musicSet.onclick = () => {
		switch (musicSetOn) {
			case false:
				musicSet.style.background = '#412021';
				musicSetCon.style.display = 'flex';
				currentMusicVol.style.display = 'block';
				musicSetOn =  true;
			break;
			case true:
				musicSet.style.background = '#614051';
				musicSetCon.style.display = 'none';
				currentMusicVol.style.display = 'none';
				musicSetOn = false;
			break;
		}
	}

	ambienceSet.onmouseover = () => { ambienceSet.style.background = '#412021' }
	ambienceSet.onmouseout = () => { if (!ambSetOn) ambienceSet.style.background = '#614051' }

	ambienceSet.onclick = () => {
		switch (ambSetOn) {
			case false:
				ambienceSet.style.background = '#412021';
				ambSetCon.style.display = 'flex';
				currentAmbVol.style.display = 'block';
				ambSetOn =  true;
			break;
			case true:
				ambienceSet.style.background = '#614051';
				ambSetCon.style.display = 'none';
				currentAmbVol.style.display = 'none';
				ambSetOn = false;
			break;
		}
	}
	
	mVolup.onclick = () => {
		if (g.musicVolume < 100 ) {
			g.musicVolume = Math.round(g.musicVolume / 10) * 10;
			g.musicVolume += 10;
			musicVolText.innerText = g.musicVolume;
			[g.audios.menuTheme, g.audios.battleTheme, g.audios.battleTheme2, g.audios.cyclopsBattle, g.audios.zeusBattle].forEach((song) => song.volume = g.musicVolume / 100);
			localStorage.setItem('musicVolume', g.musicVolume);
	  }
	}
	mVoldown.onclick = () => {
		if (g.musicVolume > 0) {
			g.musicVolume = Math.round(g.musicVolume / 10) * 10;
			g.musicVolume -= 10;
			musicVolText.innerText = g.musicVolume;
			[g.audios.menuTheme, g.audios.battleTheme, g.audios.battleTheme2, g.audios.cyclopsBattle, g.audios.zeusBattle].forEach((song) => song.volume = g.musicVolume / 100);
			localStorage.setItem('musicVolume', g.musicVolume);
		}
	}
	musicMute.onclick = () => {
		[g.audios.menuTheme, g.audios.battleTheme, g.audios.battleTheme2, g.audios.cyclopsBattle, g.audios.zeusBattle].forEach((song) => song.volume = 0);
		g.musicVolume = 0;
		musicVolText.innerText = g.musicVolume;
		localStorage.setItem('musicVolume', g.musicVolume);
	}

	aVolup.onclick = () => {
		if (g.ambienceVolume < 100 ) {
			g.ambienceVolume = Math.round(g.ambienceVolume / 10) * 10;
			g.ambienceVolume += 10;
			ambVolText.innerText = g.ambienceVolume;
			[g.audios.underworldAm, g.audios.olympusAm].forEach((song) => { song.volume = g.ambienceVolume / 100 });
			localStorage.setItem('ambienceVolume', g.ambienceVolume);
	  }
	}
	aVoldown.onclick = () => {
		if (g.ambienceVolume > 0) {
			g.ambienceVolume = Math.round(g.ambienceVolume / 10) * 10;
			g.ambienceVolume -= 10;
			ambVolText.innerText = g.ambienceVolume;
			[g.audios.underworldAm, g.audios.olympusAm].forEach((song) => { song.volume = g.ambienceVolume / 100 });
			localStorage.setItem('ambienceVolume', g.ambienceVolume);
		}
	}
	ambMute.onclick = () => {
		g.ambienceVolume = 0;
		ambVolText.innerText = g.ambienceVolume;
		[g.audios.underworldAm, g.audios.olympusAm].forEach((song) => { song.volume = 0 });
		localStorage.setItem('ambienceVolume', g.ambienceVolume);
	}
	
	controlsSet.onmouseover = () => { controlsSet.style.background = '#504050' }
	controlsSet.onmouseout = () => { if (!conSetOn) controlsSet.style.background = '#614051' }
	
	controlsSet.onclick = () => {
		switch (conSetOn) {
			case false:
				controlsSet.style.background = '#504050';
				controlsCon.style.display = 'block';
				conSetOn =  true;
			break;
			case true:
				controlsSet.style.background = '#614051';
				controlsCon.style.display = 'none';
				conSetOn = false;
			break;
		}
	}

	returnTMM.onclick = () => { 
		if (!g.inBattle) {
			g.audios.selection.play();
			g.title.style.display = 'block';
			mainMenu(g);
			g.inMainMenu = true;
			g.set = false;
			document.removeEventListener('keydown', mHandler);
			document.removeEventListener('keydown', escHandler);
		}
	}
}