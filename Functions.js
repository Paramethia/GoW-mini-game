const title = document.getElementById('Title');
const notification = document.querySelector('.Noti');
const game = document.querySelector('.Game');

// Sources

const potionSrc = 'url("Imagery/Health potion.png")';
const bladesSrc = 'url("Imagery/boc.png")';
const whipSrc = 'url("Imagery/Nemesis whip.png")';
const gauntletSrc = 'url("Imagery/goz.png")';
const clawsSrc = 'url("Imagery/coh.png")';
const bladeSrc = 'url("Imagery/boo.png")';

// Load audios

const menuTheme = new Audio('Audio/Main menu theme GoW 3.mp3');
const hoverSound = new Audio('Audio/Hover sound GoW2.mp3');
const selection = new Audio('Audio/GoW CoO Selection sound.mp3');
const selection2 = new Audio('Audio/Other selection sound GoW2.mp3');
const returnSound = new Audio('Audio/GoW CoO Exit sound.mp3');
const swordThud = new Audio('Audio/Sword thud.mp3');
const hmmmm = new Audio('Audio/Hmm hmm Mc villager.mp3');
const noice = new Audio('Audio/Noice.mp3');
const bruh = new Audio('Audio/Bruh.mp3');
const bocSound = new Audio('Audio/Blades of chaos sound.mp3');
const gozSound = new Audio('Audio/Gauntlet of Zeus sound.mp3')
const nwSound = new Audio('Audio/Nemesis whip sound.mp3');
const cohSound = new Audio('Audio/Claws of Hades sound.mp3');
const ncSound = new Audio('Audio/Nemean cestus sound.mp3');
const brokie = new Audio('Audio/YOURE BROKE!.mp3');
const battleTheme = new Audio('Audio/GoW CoO battle theme.mp3');
const battleTheme2 = new Audio('Audio/GoW CoO battle theme 2.mp3');
const cyclopsBattle = new Audio('Audio/Cyclops battle theme.mp3');
const zeusBattle = new Audio('Audio/Battle theme Zeus.mp3');
const underworldAm = new Audio('Audio/Underworld ambience.mp3');
const hopliteSound = new Audio('Audio/Hoplite sound.mp3');
const hopliteAttacks = new Audio('Audio/Hoplite attacks.mp3');
const attacksHoplite = new Audio('Audio/Kratos attacks Hoplite.mp3');
const bansheeSound = new Audio('Audio/Banshee sound.mp3');
const bansheeAttacks = new Audio('Audio/Banshee attacks.mp3');
const bansheeAttacks2 = new Audio('Audio/Banshee attacks 2.mp3');
const attacksBanshee = new Audio('Audio/Kratos attacks Banshee.mp3');
const satyrSound = new Audio('Audio/Satyr sound.mp3');
const satyrAttacks = new Audio('Audio/Satyr attacks.mp3');
const throwsSatyr = new Audio('Audio/Kratos throws Satyr.mp3');
const attacksSatyr = new Audio('Audio/Kratos attacks Satyr.mp3');
const minotaurSound = new Audio('Audio/Minotaur sound.mp3');
const minotaurAttacks = new Audio('Audio/Minotaur attacks.mp3');
const minotaurAttacks2 = new Audio('Audio/Minotaur attacks 2.mp3');
const attacksMinotaur = new Audio('Audio/Kratos attacks Minotaur.mp3');
const medusaSound = "";
const medusaAttacks = new Audio('Audio/Medusa attacks Kratos.mp3');
const attacksMedusa = new Audio('Audio/Kratos attacks Medusa.mp3');
const olympusAm = new Audio('Audio/Olympus ambience.mp3');
const cyclopsSound = new Audio('Audio/Cyclops sound.mp3');
const cyclopsAttacks = new Audio('Audio/Cyclops attacks.mp3');
const cyclopsAttacks2 = new Audio('Audio/Cyclops attacks 2.mp3');
const attacksCyclops = new Audio('Audio/Kratos attacks Cyclops.mp3');
const hermesLine = new Audio('Audio/You may have brute force.. but you lack speed.mp3');
const hermesAttacks = new Audio('Audio/Hermes attacks Kratos.mp3');
const hermesAttacks2 = new Audio('Audio/Hermes attacks Kratos 2.mp3');
const herculesLine = new Audio('Audio/Hello.. brother.mp3');
const herculesAttacks = new Audio('Audio/Hercules attacks Kratos.mp3');
const herculesAttacks2 = new Audio('Audio/Hercules attacks Kratos 2.mp3');
const zeusLine = new Audio('Audio/Such chaos... I will have much to do after I kill you.mp3');
const zeusAttacks = new Audio('Audio/Zeus attacks Kratos.mp3');
const attacksZeus = new Audio('Audio/Kratos attacks Zeus.mp3');
const attacks = new Audio('Audio/Kratos attacks.mp3');
const attacks2 = new Audio('Audio/Kratos attacks 2.mp3');
const evadeSound  = new Audio('Audio/Evade sound.mp3');
const achievement = new Audio('Audio/Achievment sound.mp3');
const defeatSound = new Audio('Audio/Defeat sound.mp3');
const orbSound = new Audio('Audio/Orb collection sound.mp3');
const orbsSound = new Audio('Audio/Orbs collection sound.mp3');
const orbsSound2 = new Audio('Audio/Orbs collection sound 2.mp3');
const orbsSound3 = new Audio('Audio/Orbs collection sound 3.mp3');
const wonned = new Audio('Audio/Wonned.mp3');
const heartbeat = new Audio('Audio/Heartbeat.mp3');
const deathSound = new Audio('Audio/Kratos death sound GoW2 2.mp3');
const deathScream = new Audio('Audio/Kratos death sound GoW2.mp3');
const deathScream2 = new Audio('Audio/Kratos death sound GoW2 2.mp3');
const ahShit = new Audio('Audio/Ah shit, here we go again.mp3');
const drink = new Audio('Audio/Drinking.mp3');

// Stats declarations

const kratos = {
	w: 69, h: 99, x: 20, y: 0, speed: 2.8,
	velX: 0, velY: 0, aC: 1700, aR: 48,
	onGround: true, attacking: false, lastAttack: 0,
	health: Number(localStorage.getItem('health')) || 100, 
	orbs: Number(localStorage.getItem('orbs')) || 0,
	facing: "right", hitUntil: 0, dead: false, deathTime: 0, alpha: 1,
};
	
let currentWeapon = Number(localStorage.getItem('currentWeapon')) || 0;
let fighting = 0;

let inventory = JSON.parse(localStorage.getItem('inventory')) || ["Blades of chaos"];
let potions = Number(localStorage.getItem('potions')) || 0;
	
const weapons = [
    { name: "Blades of chaos", damage: 21 },
    { name: "Nemesis whip", damage: 27},
    { name: "Gauntlet of Zeus", damage: 48 },
    { name: "Claws of Hades", damage: 65 },
    { name: "Blade of Olympus", damage: 88 }
];
const blades = weapons[0].name;
const whip = weapons[1].name;
const gauntlet = weapons[2].name;
const claws = weapons[3].name;
const blade = weapons[4].name;

// Other declarations

let savedGame = Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'));
let play = false;
let set = false;
let hBarOn = localStorage.getItem('healthBarOn') === 'true';
let musicVolume =  Number(localStorage.getItem('musicVolume')) || 100;
let ambienceVolume = Number(localStorage.getItem('ambienceVolume')) || 100;
let count = 0;
let inBattle = false;

// Enemies 

const enemies = [
	{
		name: "Hoplite", health: 75, damage: 9, speed: 2,  
		aC: 2000, aR: 52, x: 540, y: 0, w: 57, h: 98, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("hopliteDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
	},
    {
		name: "Banshee", health: 100, damage: 14, speed: 1.8,  
		aC: 1900, aR: 48, x: 520, y: 0, w: 54, h: 97, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("bansheeDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Satyr", health: 120, damage: 21, speed: 2.5,  
		aC: 2200, aR: 44, x: 580, y: 0, w: 72, h: 112, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("satyrDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Minotaur", health: 145, damage: 30, speed: 1.58,  
		aC: 2082, aR: 64, x: 500, y: 0, w: 115, h: 159, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("minotaurDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Medusa", health: 158, damage: 25, speed: 2.3,  
		aC:1955, aR: 76, x: 550, y: 0, w: 77, h: 132, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("medusaDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Cyclops", health: 180, damage: 42, speed: 1.25,  
		aC:2000, aR: 107, x: 542, y: 0, w: 125, h: 187, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("cyclopsDefeated") === "true",
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Hermes", health: 210, damage: 34, speed: 5.4,  
		aC: 1580, aR: 70, x: 599, y: 0, w: 55, h: 99, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("hermesDefeated") === "true",
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Hercules", health: 255, damage: 57, speed: 2.38,  
		aC: 2700, aR: 64, x: 540, y: 0, w: 82, h: 125, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("herculesDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    },
    {
        name: "Zeus", health: 320, damage: 65, speed: 2.7,  
		aC: 3000, aR: 111, x: 666, y: 0, w: 77, h: 114, 
		velX: 0, velY: 0, onGround: true, attacking: false, 
		defeated: localStorage.getItem("zeusDefeated") === "true", 
		lastAttack: 0, hitUntil: 0, facing: "left", deathTime: 0, alpha: 1
    }
];
const hoplite = enemies[0];
const banshee = enemies[1];
const satyr = enemies[2];
const minotaur = enemies[3];
const medusa = enemies[4];
const cyclops = enemies[5];
const hermes = enemies[6];
const hercules = enemies[7];
const zeus = enemies[8];

// Screen and window size check

const screenWidth = screen.width;
const screenHeight = screen.height;

console.log("Screen dimentions", screenWidth, screenHeight);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log("Window dimentions:", windowWidth, windowHeight);

const phoneWarning = document.getElementById("phone-warning");

if (screenWidth <= 455 || windowWidth <= 455) {
	game.style.display = "none";
	phoneWarning.style.display = "block";
}

// Saved game check

if (savedGame) { 
	console.log("Saved game found");
} else { 
    console.log("No saved game found");
}

// Saved settings

//               - Saved volumes settings

function setVolumes() {
	if (musicVolume !== 100) [menuTheme, battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach((song) => song.volume = musicVolume / 100)
	if (ambienceVolume !== 100) [underworldAm, olympusAm].forEach((song) => { song.volume = ambienceVolume / 100 })
}

setVolumes();

//  Main menu

const mainMenuInit = () => {
	game.innerHTML = `
		<div class="Main-menu">
			<button id='m-music-option'>
				<i id ="music-note" class="fa-sharp fa-solid fa-music fa-2xl" style="color: #0d0d0d;"></i>
			</button> <span id="porp"> Play main menu music? </span>
		
			<div class="Warning">
				<center>
				<p> Looks like you already have a saved game. If you start a new game, your progresss will be lost. Continue? </p>
				<button id="YesB"> Yep </button> <button id="NoB"> Nope </button>
				</center>
			</div>

			<div class="Options">
				<button id="return"> ESC </button>
				<center>
				<h3 id="first"> Music volume </h3>
				<input type="range" min="0" max="100" value="${musicVolume}" id="music-vol-slider">
				<p> Current volume: <span id="music-volume"> ${musicVolume} </span></p>
				<h3> Ambience volume </h3>
				<input type="range" min="0" max="100" value="${ambienceVolume}" id="ambience-vol-slider">
				<p> Current volume: <span id="ambience-volume"> ${ambienceVolume} </span></p>
				</center>
			</div>
			
			<div class="Mm-buttons">
				<button id="New-gameB" class="menubut">New game</button>
				<button id="Load-gameB" class="menubut">Load game</button>
				<button id="OptionsB" class="menubut">Options</button>
			</div>
		</div>
	`;
	
	savedGame = Number(localStorage.getItem('health')) || Number(localStorage.getItem('orbs'));
	
	const musicOption = document.getElementById('m-music-option');
	const musicNote = document.getElementById('music-note');
	const newGameB = document.getElementById('New-gameB');
	const loadGameB = document.getElementById('Load-gameB');
		if (savedGame) loadGameB.style.filter = 'brightness(100%)';
	const optionsB = document.getElementById('OptionsB');
	const yesB = document.getElementById('YesB');
	const noB = document.getElementById('NoB');
	const closeB = document.getElementById('return');
	const musicVolText = document.getElementById('music-volume');
	const ambienceVolText = document.getElementById('ambience-volume');
	const mmButtons = document.querySelector('.Mm-buttons');
	const warning = document.querySelector('.Warning');
	const options = document.querySelector('.Options');
	const musicVolSlider = document.getElementById('music-vol-slider');
	const ambVolSlider = document.getElementById('ambience-vol-slider');
	
	musicOption.onmouseover = () => {
		hoverSound.play();
		musicNote.style.color = '#614051';
		porp.style.display = 'inline';
		if (play == true) {
			porp.innerText = "Pause main menu music?"
		} else {
			porp.innerText = "Play main menu music?"
		}
	}
	musicOption.onmouseout = () => {
		hoverSound.pause(); 
		hoverSound.currentTime = 0;
		musicNote.style.color = '#0d0d0d';
		porp.style.display = 'none';
	}
	musicOption.onclick = () => {
		switch(play) {
			case false:
				menuTheme.play();
				play = true;
				menuTheme.loop = true;
			break;
			case true:
				menuTheme.pause();
				play = false;
			break;
		}
	}

	newGameB.onmouseover = () => { hoverSound.play() }
	newGameB.onmouseout = () => { 
		hoverSound.pause();
		hoverSound.currentTime = 0;
	}
	newGameB.onclick = () => {
		selection.play();
		if (savedGame) {
			warning.style.display = 'block';
			mmButtons.style.display = 'none';
		} else {
			warning.style.display = 'none';
			leaveMenu()
		}
	}

	yesB.onmouseover = () => { hoverSound.play() }
	yesB.onmouseout = () => { 
		hoverSound.pause();
		hoverSound.currentTime = 0;
	}
	yesB.onclick = () => { 
		selection.play();
		[hoplite, banshee, satyr, minotaur, medusa, cyclops, hermes, hercules, zeus].forEach((enemy) => enemy.defeated = false );
		['health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated' ].forEach(save => localStorage.removeItem(save));
		kratos.health = 100;
		kratos.orbs = 0;
		currentWeapon = 0;
		potions = 0;
		inventory = ["Blades of chaos"];
		warning.style.display = 'none';
		leaveMenu()
	}

	noB.onmouseover = () => { hoverSound.play() }
	noB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
	}
	noB.onclick = () => {
		selection.play();
		warning.style.display = 'none';
		mmButtons.style.display = 'block';
	}

	loadGameB.onmouseover = () => { hoverSound.play() }
	loadGameB.onmouseout = () => { 
		hoverSound.pause();
		hoverSound.currentTime = 0;
	}
	loadGameB.onclick = () => {
		if (savedGame) {
			selection.play();
			leaveMenu()
		}
	}

	optionsB.onmouseover = () => { hoverSound.play() }
	optionsB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTIme = 0;
	}
	optionsB.onclick = () => {
		selection.play();
		mmButtons.style.display = 'none';
		options.style.display = 'block';
	}

	// Volume functions

	musicVolSlider.addEventListener('change', event => { 
		musicVolume = musicVolSlider.value;
		musicVolText.innerText = musicVolume;
		[menuTheme, battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach((song) => song.volume = musicVolume / 100);
		localStorage.setItem('musicVolume', musicVolume);
	});

	ambVolSlider.addEventListener('change', event => { 
		ambienceVolume = ambVolSlider.value;
		ambienceVolText.innerText = ambienceVolume;
		[underworldAm, OlympusAm].forEach((song) => song.volume = ambienceVolume / 100);
		localStorage.setItem('ambienceVolume', ambienceVolume);
	});

	closeB.onclick = () => close()
	
	function escHandler(event) {
		if (event.key === 'Escape') close()
	}

	document.addEventListener('keydown', escHandler)

	function close() {
		if (options.style.display === "block") {
			selection.play();
			options.style.display = 'none';
			mmButtons.style.display = 'block';
		}
	}

	function leaveMenu() {
		selection.play();
		title.style.display = 'none';
		document.removeEventListener('keydown', escHandler)
		spartaInit();
		inMainMenu = false;
	}
}

const h1 = document.getElementById('click-start');

h1.onclick = () => { 
	game.style.display = 'flex';
	game.style.justifyContent = 'center';
	game.style.alignItems = 'center';
	mainMenuInit() 
}

// global functions

function toMainMenu() {
	if (!inBattle) {
		selection.play();
		title.style.display = 'block';
		mainMenuInit();
		inMainMenu = true;
		set = false;
		document.removeEventListener('keydown', mHandler);
		document.removeEventListener('keydown', escapeHandler);
	}
}

function healthBarUpdate(healthBar, healthFiller) {
	if (kratos.health === 200) {
		healthBar.style.width = '200px';
		healthFiller.style.background = '#299617';
	} else if (kratos.health > 100) {
		healthBar.style.width = `${kratos.health}px`;
		healthFiller.style.background = '#299617'; // Healthy green
	} else if (kratos.health > 50) {
		healthBar.style.width = '100px';
		healthFiller.style.background = '#32cd33'; // Default green
	} else if (kratos.health > 25) {
		healthFiller.style.background = '#ed7014'; // Warning orange
	} else {
		healthFiller.style.background = '#900604'; // Danger red
	}
	healthFiller.style.width = `${kratos.health}px`;
}

// Key event handlers

const keys = {};
function keydownHandler(event) { keys[event.key] = true }
function keyupHandler(event) { keys[event.key] = false }

function mHandler (event) {
	if (event.key === 'm') {
		switch(play) {
			case false:
				menuTheme.play();
				document.getElementById('music-option').style.background = 'grey';
				play = true;
				menuTheme.loop = true;
			break;
			case true:
				menuTheme.pause();
				document.getElementById('music-option').style.background = '#464646';
				play = false;
			break;
		}
	}
}

function escapeHandler (event) {
	if (event.key === 'Escape') {
		switch(set) {
			case false:
				document.getElementById('settings').style.background = 'grey';
				document.querySelector('.Settings').style.display = 'block';
				set = true;
			break;
			case true:
				document.getElementById('settings').style.background = '#464646';
				document.querySelector('.Settings').style.display = 'none';
				set = false;
			break;
		}
	}
}

let hotbarKeys;

/* Sparta */

const settingsElements = () => {
	return `
	<button id='music-option'>
		<i id ="music-note" class="fa-sharp fa-solid fa-music fa-2xl" style="color: #0d0d0d;"></i>
	</button> <span id="porp"> Play main menu music? </span>
	<button id="settings">
		<i id="gear" class="fa-solid fa-gear fa-2xl" style="color: #0d0d0d;"></i>
	</button>
	<div class="Settings">
		<p id="Hbar-set"><i> Turn ${ hBarOn ? "on" : "off" } health bar </i></p>
		<p id="Music-set"><i> Music volume </i></p>
		<div class="Music-con">
			<i id="music-mutei" class="fa-solid fa-volume-xmark fa-xl"></i>
			<i  id="music-lvi" class="fa-solid fa-volume-low fa-xl"></i>
			<i id="music-hvi" class="fa-solid fa-volume-high fa-xl"></i>
		</div>
		<p id='music-vol'> Current volume: <span id="other-music-volume"> ${musicVolume} </span></p>
		<p id="Ambience-set"><i> Ambience volume </i></p>
		<div class="Ambience-con">
			<i id="amb-mutei" class="fa-solid fa-volume-xmark fa-xl"></i>
			<i  id="amb-lvi" class="fa-solid fa-volume-low fa-xl"></i>
			<i id="amb-hvi" class="fa-solid fa-volume-high fa-xl"></i>
		</div>
		<p id='amb-vol'> Current volume: <span id="other-ambience-volume"> ${ambienceVolume} </span></p>
		<p id="Controls-set"><i> Controls </i></p>
		<div class="Controls-con">
			<div class="controls"><span> A / ← </span><font color="#424">Walk left</font></div>
			<div class="controls"><span> D / → </span><font color="#424">Walk right</font></div>
			<div class="controls"><span> E </span><font color="#424">Attack</font></div>
			<div class="controls"><span> Space </span><font color="#424">Jump</font></div>
			<div class="controls"><span> Shift </span><font color="#424">Dodge</font></div>
		</div>
		<button id="Return-tmm" onclick="toMainMenu()"> Return to main menu </button>
	</div>
	`;
}

const statsElements = () => { 
	return `
		<div class="Stats">
			<div class="Health-bar"><div class="filler"></div></div>
			<span class="stat" id="Health-text">Health: <strong><span id="Health" >${kratos.health}</span></strong></span>
			<span class="stat">Orbs: <strong><span id="Orbs-text" >${kratos.orbs}</span></strong></span>
		</div>
	`;
}

	// Settings

const settingsInit = () => {
	const settingsB = document.getElementById('settings');
	const gear = document.getElementById('gear');
	const musicOption = document.getElementById('music-option');
	const musicNote = document.getElementById('music-note');
	const porp = document.getElementById('porp');
	const settings = document.querySelector('.Settings');
	const healthBarOn = document.getElementById('Hbar-set');
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
	const healthText = document.getElementById('Health-text');
	const ambMute = document.getElementById('amb-mutei');
	const healthBar = document.querySelector('.Health-bar');
	const healthFiller = document.querySelector('.filler');
	const enemyHealthText = document.getElementById('enemy-health');
	const eHealthBar = document.querySelector('.Ehealth-bar');
	const eHealthFiller = document.querySelector('.Efiller');
	
	let musicSetOn = false;
	let ambSetOn = false;
	let conSetOn = false;
	
	function turnOnHealthbar() {
		healthBarOn.innerText = "Turn off health bar";
		healthBar.style.display = 'inline-block';
		healthText.style.display = 'none';
		if (eHealthBar) { 
			enemyHealthText.style.display = 'none';
			eHealthBar.style.display = 'inline-block';
			eHealthBar.style.width = `${enemies[fighting].health}px`;
		}
	}

	function turnOffHealthbar() {
		healthBarOn.innerText = "Turn on health bar";
		healthBar.style.display = 'none';
		healthText.style.display = 'inline';
		if (eHealthBar) { 
			enemyHealthText.style.display = 'inline';
			eHealthBar.style.display = 'none';
		}
	}
	
	if (hBarOn) { 
		turnOnHealthbar();
		healthBarUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'))
	}
	
	if (musicOption !== null) {
		musicOption.onmouseover = () => {
			hoverSound.play()
			musicNote.style.color = '#332822';
			porp.style.display = 'inline';
			if (play == true) {
				porp.innerText = "Pause main menu music?"
			} else {
				porp.innerText = "Play main menu music?"
			}
		}
		musicOption.onmouseout = () => {
			hoverSound.pause(); 
			hoverSound.currentTime = 0;
			musicNote.style.color = '#0d0d0d';
			porp.style.display = 'none';
		}
		
		function setMusic() {
			switch(play) {
				case false:
					menuTheme.play();
					musicOption.style.background = 'grey';
					play = true;
					menuTheme.loop = true;
				break;
				case true:
					menuTheme.pause();
					musicOption.style.background = '#464646';
					play = false;
				break;
			}
		}
		
		if (play) musicOption.style.background = 'grey'

		musicOption.onclick = () => { setMusic() }
		
		document.addEventListener("keydown", mHandler);
	}
	settingsB.onmouseover = () => {
		hoverSound.play();
		gear.style.animation = 'rotateZ 0.7s';
		gear.style.color = '#332822';
	}
	settingsB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		gear.style.animation = 'no';
		gear.style.color = '#0d0d0d';
	}
	
	function toggleSettings() {
		switch(set) {
			case false:
				settingsB.style.background = 'grey';
				settings.style.display = 'block';
				set = true;
			break;
			case true:
				settingsB.style.background = '#464646';
				settings.style.display = 'none';
				set = false;
			break;
		}
	}
	
	if (set) {
		settingsB.style.background = 'grey';
		settings.style.display = 'block';
	}

	settingsB.onclick = () => { toggleSettings() }
	
	document.addEventListener('keydown', escapeHandler);

	healthBarOn.onclick = () => { 
		switch(hBarOn) {
			case false:
				hBarOn = true;
				localStorage.setItem('healthBarOn', hBarOn)
				turnOnHealthbar();
			break;
			case true:
				hBarOn = false
				localStorage.setItem('healthBarOn', hBarOn);
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
		if (musicVolume < 100 ) {
			musicVolume = Math.round(musicVolume / 10) * 10;
			musicVolume += 10;
			musicVolText.innerText = musicVolume;
			[menuTheme, battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach((song) => song.volume = musicVolume / 100);
			localStorage.setItem('musicVolume', musicVolume);
	  }
	}
	mVoldown.onclick = () => {
		if (musicVolume > 0) {
			musicVolume = Math.round(musicVolume / 10) * 10;
			musicVolume -= 10;
			musicVolText.innerText = musicVolume;
			[menuTheme, battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach((song) => song.volume = musicVolume / 100);
			localStorage.setItem('musicVolume', musicVolume);
		}
	}
	musicMute.onclick = () => {
		[menuTheme, battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach((song) => song.volume = 0);
		musicVolume = 0;
		musicVolText.innerText = musicVolume;
		localStorage.setItem('musicVolume', musicVolume);
	}

	aVolup.onclick = () => {
		if (ambienceVolume < 100 ) {
			ambienceVolume = Math.round(ambienceVolume / 10) * 10;
			ambienceVolume += 10;
			ambVolText.innerText = ambienceVolume;
			[underworldAm, olympusAm].forEach((song) => { song.volume = ambienceVolume / 100 });
			localStorage.setItem('ambienceVolume', ambienceVolume);
	  }
	}
	aVoldown.onclick = () => {
		if (ambienceVolume > 0) {
			ambienceVolume = Math.round(ambienceVolume / 10) * 10;
			ambienceVolume -= 10;
			ambVolText.innerText = ambienceVolume;
			[underworldAm, olympusAm].forEach((song) => { song.volume = ambienceVolume / 100 });
			localStorage.setItem('ambienceVolume', ambienceVolume);
		}
	}
	ambMute.onclick = () => {
		ambienceVolume = 0;
		ambVolText.innerText = ambienceVolume;
		[underworldAm, olympusAm].forEach((song) => { song.volume = 0 });
		localStorage.setItem('ambienceVolume', ambienceVolume);
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
}

	/* Hotbar and healing function */
	
const hotBar = `
	<div class="Hotbar">
		<center>
			<div id="Weapon-identifier"></div>
			<span id="Pslot">
				<font color="#cc9229"><span>F</span></font>
				<p id="potion-quantity">${potions}</p>
			</span>
			<span id="Slot1"></span>
			<span id="Slot2"></span>
			<span id="Slot3"></span>
			<span id="Slot4"></span>
			<span id="Slot5"></span>
		</center>
	</div>
`;

const hotBarInit = () => {
	const pslot = document.getElementById('Pslot');
	if (potions) pslot.style.backgroundImage = potionSrc
	const slot1 = document.getElementById('Slot1');
		if (currentWeapon !== 0) slot1.style.border = '1.8px solid #5a3910'
		if (!inventory.includes(blades)) { slot1.style.backgroundImage = 'none' }
	const slot2 = document.getElementById('Slot2');
		if (inventory.includes(whip)) slot2.style.backgroundImage = whipSrc
		if (currentWeapon === 1) slot2.style.border = '3px ridge #5a3910'
	const slot3 = document.getElementById('Slot3');
	if (inventory.includes(gauntlet)) slot3.style.backgroundImage = gauntletSrc
		if (currentWeapon === 2) slot3.style.border = '3px ridge #5a3910'
	const slot4 = document.getElementById('Slot4');
		if (inventory.includes(claws)) slot4.style.backgroundImage = clawsSrc
		if (currentWeapon === 3) slot4.style.border = '3px ridge #5a3910'
	const slot5 = document.getElementById('Slot5');
		if (inventory.includes(blade)) slot5.style.backgroundImage = bladeSrc
		if (currentWeapon === 4) slot5.style.border = '3px ridge #5a3910'
	const identifier = document.getElementById('Weapon-identifier');
	const pqText = document.getElementById('potion-quantity');
		if (potions > 1) { 
			pqText.style.display = 'inline'; 
			pqText.innerText = potions;
		}
		
	function increaseHealth() {
		if (kratos.health <= 199 && potions && !inMainMenu) {
			drink.play();
			potions--;
			localStorage.setItem('potions', potions);
			if (potions > 1) { 
				pqText.innerText = potions
			} else if (potions === 1) { 
				pqText.style.display = 'none'
			} else { pslot.style.backgroundImage = 'none' }

			kratos.health += 14;
			if (kratos.health > 200) kratos.health = 200; // Cap health at 200
			
			localStorage.setItem('health', kratos.health);
			document.getElementById('Health').innerText = kratos.health;

			healthBarUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
		}
	}
	
	const weaponsClaimed = [inventory.includes(blades), inventory.includes(whip), inventory.includes(gauntlet), inventory.includes(claws), inventory.includes(blade)];
	const sounds = [bocSound, nwSound, gozSound, cohSound, swordThud];
	const identifiers = [weapons[0].name, whip, gauntlet, claws, blade];
	const lefts = ['9.9cm', '11.7cm', '13.2cm', '14.5cm', '16.5cm'];
	
	if (hotbarKeys) document.removeEventListener('keydown', hotbarKeys);
	
	hotbarKeys = function (event) {
		if (event.repeat) return;
		
		if (event.key.toLowerCase() === 'f') increaseHealth()
			
		var keyIndex = parseInt(event.key) - 1; // Convert key to index (1 -> 0, 2 -> 1, etc.)

		if (keyIndex >= 0 && keyIndex < slots.length) { 
			// Reset all borders
			slots.forEach(slot => slot.style.border = '1.8px solid #5a3910');

			// Highlight the selected slot
			slots[keyIndex].style.border = '3px ridge #5a3910';

			// Check if the weapon is in inventory
			if (weaponsClaimed[keyIndex]) {
				sounds[keyIndex].play();
				identifier.style.display = 'inline';
				identifier.innerText = identifiers[keyIndex];
				identifier.style.top = '-35px';
				identifier.style.left = lefts[keyIndex];
				setTimeout(( ) => {
					identifier.style.animation = 'disappear 0.4s linear forwards';
					setTimeout(() => { 
						identifier.style.display = 'none';
						identifier.style.animation = 'none';
					}, 420 );
				}, 1100 );
				// If it is, then update and save current weapon
				if (currentWeapon !== keyIndex) {
					currentWeapon = keyIndex;
					localStorage.setItem('currentWeapon', currentWeapon);
				}
			}
		}
	}
	
	document.addEventListener('keydown', hotbarKeys);
	
	pslot.onmouseover = () => {
		identifier.style.display = 'inline';
		identifier.innerText = 'Health potion';
		identifier.style.top = '-35px';
		identifier.style.left = '7cm';
	}
	pslot.onmouseout = () => { identifier.style.display = 'none' }
	pslot.addEventListener('click', increaseHealth );

	const slots = [slot1, slot2, slot3, slot4, slot5];

	slots.forEach((slot, index) => {
		slot.onmouseover = () => {
			if (currentWeapon !== index) slot.style.border = '3px ridge #5a3910';
			if (weaponsClaimed[index]) identifier.style.display = 'inline';
			identifier.innerText = identifiers[index];
			identifier.style.top = '-35px';
			identifier.style.left = lefts[index];
		};

		slot.onmouseout = () => {
			if (currentWeapon !== index) slot.style.border = '1.8px solid #5a3910'
			identifier.style.display = 'none';
		};

		slot.onclick = () => {
			if (weaponsClaimed[index]) {
				sounds[index].play();
				if (currentWeapon !== index) {
					currentWeapon = index;
					localStorage.setItem('currentWeapon', currentWeapon);

					// Reset all slot borders
					slots.forEach(s => s.style.border = '1.8px solid #5a3910');
					
					// Highlight the selected slot
					slot.style.border = '3px ridge #5a3910';
				}
			}
		};
	});
}

const spartaInit = () => {
	let defaultText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
    if (savedGame) defaultText = "Welcome back to God of War. You already know what to do mos. \n ;-)";

	game.innerHTML = `
		<div class="Sparta">
			${settingsElements()}
			<center>
				${statsElements()}
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
				<button id="Olympus-button">Mount Olympus ${cyclops.defeated ? '' : '<i class="fa-solid fa-lock"></i>'}</button>
			</center>
			${hotBar}
		</div>
	`;
	
	const mainText = document.getElementById('Main-text');
	const kratosAtSparta = document.getElementById('Kratos-at-Sparta');
	const shop = document.getElementById('Shop');
	const underworld = document.getElementById('Underworld');
	const mountOlympus= document.getElementById('Mount-Olympus');
	const shopB = document.getElementById('Shop-button');
	const underworldB = document.getElementById('Underworld-button');
	const olympusB = document.getElementById('Olympus-button');
	
	settingsInit();
	
	shopB.onmouseover = () => {
		hoverSound.play();
		document.querySelector('.Sparta').style.background = '#09090b';
		kratosAtSparta.style.display = 'none';
		shop.style.display = 'block';
		mainText.innerText = "You can go to the shop to get weapons with orbs to get stronger to defeat stronger enemies. \n 🏪";
		shopB.style.background = '#09090b';
		shopB.style.animation = 'tilt-n-move-shaking 0.5s';
	}
	shopB.onmouseout = () => {
		hoverSound.pause(); 
		hoverSound.currentTime = 0;
		document.querySelector('.Sparta').style.background = '#464646';
		kratosAtSparta.style.display = 'inline';
		shop.style.display = 'none';
		mainText.innerText = defaultText;
		shopB.style.background = '#4b3f33';
		shopB.style.animation = 'grow';
	}
	shopB.onclick = () => {
		selection.play();
		shopInit();
	}

	underworldB.onmouseover = () => {
		hoverSound.play();
		document.querySelector('.Sparta').style.background = '#2f1c12';
		kratosAtSparta.style.display = 'none';
		underworld.style.display = 'inline';
		mainText.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus.";
		underworldB.style.background = '#2f1c12';
		underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
	}
	underworldB.onmouseout = () => {
		hoverSound.pause(); 
		hoverSound.currentTime = 0;
		document.querySelector('.Sparta').style.background = '#464646';
		kratosAtSparta.style.display = 'inline';
		underworld.style.display = 'none';
		mainText.innerText = defaultText;
		underworldB.style.background = '#4b3f33';
		underworldB.style.animation = 'grow';
	}
	underworldB.onclick = () => {
		selection.play();
		if (play === true) {
			menuTheme.pause();
			menuTheme.currentTime = 0;
		}
		underworldInit();
		underworldAm.play();
		underworldAm.loop = true;
		document.removeEventListener('keydown', mHandler);
	}

	olympusB.onmouseover = () => {
		hoverSound.play();
		document.querySelector('.Sparta').style.background = 'rgba(102,47,18,255)';
		kratosAtSparta.style.display = 'none';
		mountOlympus.style.display = 'inline';
		mainText.innerText = "This is Mount Olympus. Where you will fight the gods of Olympus when you are ready. You can only go here when you have defeated all the creatures in the underworld.";
		olympusB.style.background = 'rgba(102,47,18,255)';
		olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
	}
	olympusB.onmouseout = () => {
		hoverSound.pause(); 
		hoverSound.currentTime = 0;
		document.querySelector('.Sparta').style.background = '#464646';
		kratosAtSparta.style.display = 'inline';
		mountOlympus.style.display = 'none';
		mainText.innerText = defaultText;
		olympusB.style.background = '#4b3f33';
		olympusB.style.animation = 'grow';
	}
	olympusB.onclick = () => {
		if (cyclops.defeated) {
			selection.play();
			if (play === true) {
				menuTheme.pause();
				menuTheme.currentTime = 0;
			}
			olympusInit();
			olympusAm.play()
			olympusAm.loop = true;
			document.removeEventListener('keydown', mHandler);
		}
	}
	
	hotBarInit();
}

// Shop

const shopInit = () => {
	game.innerHTML = `
		<div class="Shop">
			${settingsElements()}
			<center>
			${statsElements()}
			<div id="Text">
				You enter the shop. You see a bunch of weapons that vary in power.. also a potion of healing. Get the ones you can, or take a look at them for now if you are currently a brokie.
			</div>
			<div class="Mid">
				<img  id="Sparta" src="Imagery/Sparta.png">
				
				<img  id="In-shop" src="Imagery/In shop.png">
				
				<img id="Mvillager" src="Imagery/Minecraft villager.png">
				<img  id="B-o-c" src="Imagery/Blades of chaos.png">
				<img  id="Potion" src="Imagery/Health potion.png">
				<img  id="Nemesis-whip" src="Imagery/Nemesis whip.png">
				<img  id="Whip-claim" src="Imagery/Kratos with Nemesis whip.png">
				<img  id="Gauntlet-of-Zeus" src="Imagery/Gauntlet of Zeus.png">
				<img  id="Gauntlet-claim" src="Imagery/Kratos with Gauntlet of Zeus.png">
				<img  id="Claws-of-Hades" src="Imagery/Claws of Hades.png">
				<img  id="Claws-claim" src="Imagery/Kratos with Claws of hades.png">
				<img  id="Blade-of-Olympus" src="Imagery/Blade of Olympus.png">
				<img  id="Blade-claim" src="Imagery/Kratos with Blade of Olympus.jpg">
				
				<div class="Sell-price">
					<i><span id="Sell-text"> </span></i>
				</div>
				<div class="Potion-info">
					<i class="Item-info" id="italics"> <font color="#299617"> +14 health </font></i> <br>
					<i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 11 orbs </i>
				 </div>
				<div class="Whip-info">
					<i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 55  orbs </i> <br>
					<i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${weapons[1].damage} </i>
				</div>
				<div class="Gauntlet-info">
					<i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 99  orbs </i> <br>
					<i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${weapons[2].damage}  </i>
				</div>
				<div class="Claws-info">
					<i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 155  orbs </i> <br>
					<i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${weapons[3].damage} </i>
				</div>
				<div class="BladeO-info">
					<i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 200 orbs </i> <br>
					<i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${weapons[4].damage} </i>
				</div>
			</div>
			
			<div class="Buttons">
				<button id="Sell-weapon">Sell weapon</button>
				<button id="PotionB">Health potion</button>
				<button id="Nemesis-whipB">Nemesis whip</button>
				<button id="GauntletB">Gauntlet of Zeus</button>
				<button id="Claws">Claws of Hades</button>
				<button id="Blade-of-OlympusB">Blade of Olympus</button>
				<button id="Leave-shop">Return to Sparta</button>
			</div>
			${hotBar}
			</center>
		</div>
	`;
	
	settingsInit();
	
	const text = document.getElementById('Text');
	
	const sparta = document.getElementById('Sparta');
	const inShop = document.getElementById('In-shop');
	const mVillager = document.getElementById('Mvillager');
	const boc = document.getElementById('B-o-c');
	const potion = document.getElementById('Potion');
	const nemesisWhip = document.getElementById('Nemesis-whip');
	const whipClaim = document.getElementById('Whip-claim');
	const gauntletZeus= document.getElementById('Gauntlet-of-Zeus');
	const gauntletClaim = document.getElementById('Gauntlet-claim');
	const clawsHades = document.getElementById('Claws-of-Hades');
	const clawsClaim = document.getElementById('Claws-claim');
	const bladeOlympus = document.getElementById('Blade-of-Olympus');
	const bladeClaim = document.getElementById('Blade-claim');
	
	const sellCon = document.querySelector('.Sell-price');
	const potionInfo = document.querySelector('.Potion-info');
	const whipInfo = document.querySelector('.Whip-info');
	const gauntletInfo = document.querySelector('.Gauntlet-info');
	const clawsInfo = document.querySelector('.Claws-info');
	const bladeInfo = document.querySelector('.BladeO-info');
	
	const sellText = document.getElementById('Sell-text');
		
	const sellWeaponB = document.getElementById('Sell-weapon');
	const potionB = document.getElementById('PotionB');
	const nemesisWhipB = document.getElementById('Nemesis-whipB');
	const gauntletB = document.getElementById('GauntletB');
	const clawsB = document.getElementById('Claws');
	const bladeOlympusB= document.getElementById('Blade-of-OlympusB');
	const leaveShop = document.getElementById('Leave-shop');
	
	sellWeaponB.onmouseover = () => {
		hoverSound.play();
		iSdis();
		sellCon.style.display = 'inline';
		switch (currentWeapon) {
			case 0:
				boc.style.display = 'inline-block';
				sellText.innerText = "Sell the " + weapons[currentWeapon].name + " for 17 orbs?";
			break;
			case 1:
				nemesisWhip.style.display = 'inline-block';
				sellText.innerText = "Sell the " + weapons[currentWeapon].name + " for 25 orbs?";
			break;
			case 2:
				gauntletZeus.style.display = 'inline-block';
				sellText.innerText = "Sell the " + weapons[currentWeapon].name + " for 42 orbs?";
			break;
			case 3: 
				clawsHades.style.display = 'inline-block';
				sellText.innerText = "Sell the " + weapons[currentWeapon].name + " for 70 orbs?";
			break;
			case 4:
				bladeOlympus.style.display= 'inline-block';
				sellText.innerText = "Sell the " + weapons[currentWeapon].name + " for 100 orbs?";
			break;
		}
		sellWeaponB.style.animation = 'vertical-shaking 0.5s';
	}
	sellWeaponB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		iSap();
		switch (currentWeapon) {
			case 0:
				boc.style.display = 'none';
			break;
			case 1:
				nemesisWhip.style.display = 'none';
			break;
			case 2:
				gauntletZeus.style.display = 'none';
			case 3: 
				clawsHades.style.display = 'none';
			break;
			case 4:
				bladeOlympus.style.display= 'none';
			break;
		}
		sellWeaponB.style.animation = 'grow';
		sellCon.style.display = 'none';
	}
	sellWeaponB.addEventListener('click', sellWeapon );

	potionB.onmouseover = () => {
		hoverSound.play();
		potionB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		potion.style.display = 'inline-block';
		potionInfo.style.display = 'inline-block';
	}
	potionB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		potionB.style.animation = 'grow';
		iSap();
		potion.style.display = 'none';
		potionInfo.style.display = 'none';
	}
	potionB.addEventListener('click', buyPotion );

	nemesisWhipB.onmouseover = () => {
		hoverSound.play();
		nemesisWhipB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		nemesisWhip.style.display = 'inline-block';
		whipInfo.style.display = 'inline-block';
	}
	nemesisWhipB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		nemesisWhipB.style.animation = 'grow';
		iSap();
		nemesisWhip.style.display = 'none';
		whipInfo.style.display = 'none';
	}
	nemesisWhipB.addEventListener('click', buyWhip);

	gauntletB.onmouseover = () => {
		hoverSound.play();
		gauntletB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		gauntletZeus.style.display = 'inline-block';
		gauntletInfo.style.display = 'inline-block';
	}
	gauntletB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		gauntletB.style.animation = 'grow';
		iSap();
		gauntletZeus.style.display = 'none';
		gauntletInfo.style.display = 'none';
	}
	gauntletB.addEventListener('click', buyGauntlet);

	clawsB.onmouseover = () => {
		hoverSound.play();
		clawsB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		clawsHades.style.display = 'inline-block';
		clawsInfo.style.display = 'inline-block';
		clawsInfo.style.right = '2.8cm';
	}
	clawsB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		clawsB.style.animation = 'grow';
		iSap();
		clawsHades.style.display = 'none';
		clawsInfo.style.display = 'none';
	}
	clawsB.addEventListener('click', buyClaws );

	bladeOlympusB.onmouseover = () => {
		hoverSound.play();
		bladeOlympusB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		bladeOlympus.style.display = 'inline-block';
		bladeInfo.style.display = 'inline-block';
	}
	bladeOlympusB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		bladeOlympusB.style.animation = 'grow';
		iSap();
		bladeOlympus.style.display = 'none';
		bladeInfo.style.display = 'none';
	}
	bladeOlympusB.addEventListener('click', buyBlade );

	leaveShop.onmouseover = () => {
		hoverSound.play();
		document.querySelector('.Shop').style.background = '#20130c';
		leaveShop.style.animation = 'horizontal-shaking 0.5s';
		inShop.style.display = 'none';
		sparta.style.display = 'inline';
	}
	leaveShop.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		document.querySelector('.Shop').style.background = '#09090b';
		leaveShop.style.animation = 'grow';
		inShop.style.display = 'inline';
		sparta.style.display = 'none';
	}
	leaveShop.onclick = () => {
		returnSound.play();
		if (play === true) menuTheme.play()
		spartaInit();
	}

	function iSdis() {
		inShop.style.position = 'absolute';
		inShop.style.left = '40cm';
	}
	function iSap() {
		inShop.style.position = 'relative';
		inShop.style.left = '0';
	}
	
	var slot1 = document.getElementById('Slot1');
	var slot2 = document.getElementById('Slot2');
	var slot3 = document.getElementById('Slot3');
	var slot4 = document.getElementById('Slot4');
	var slot5 = document.getElementById('Slot5');

	function sellWeapon() {
		const sellingWeapon = weapons[currentWeapon].name;
		if (inventory.length > 1 && inventory.includes(sellingWeapon)) {
			hmmmm.play();
			var soldWeapon;
			switch (currentWeapon) {
				case 0:	    
					inventory.shift();
					slot1.style.backgroundImage = 'none';
					var sold = setInterval(() => {
						count++;
						kratos.orbs++;
						document.getElementById('Orbs-text').innerText = kratos.orbs;
						if (count == 17) {
							count = 0;
							clearInterval(sold);
							localStorage.setItem('orbs', kratos.orbs);
						}
					}, 155);
					currentWeapon++;
					soldWeapon = weapons[0].name;
				break;
				case 1:
					inventory = inventory.filter(weapon => weapon !== whip);
					slot2.style.backgroundImage = 'none';
					var sold2 = setInterval(() => {
						count++;
						kratos.orbs++;
						document.getElementById('Orbs-text').innerText = kratos.orbs;
						if (count == 28) {
							count = 0;
							clearInterval(sold2);
							localStorage.setItem('orbs', kratos.orbs);
						}
					}, 140);
					currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
					soldWeapon = whip;
				break;
				case 2:
					inventory = inventory.filter(weapon => weapon !== gauntlet);
					slot3.style.backgroundImage = 'none';
					var sold3 = setInterval(() => {
						count++;
						kratos.orbs++;
						document.getElementById('Orbs-text').innerText = kratos.orbs;
						if (count == 42) {
							count = 0;
							clearInterval(sold3);
							localStorage.setItem('orbs', kratos.orbs);
						}
					}, 125);
					currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
					soldWeapon =  gauntlet;
				break;
				case 3:
					inventory = inventory.filter(weapon => weapon !== claws);
					slot4.style.backgroundImage = 'none';
					var sold4 = setInterval(() => {
						count++;
						kratos.orbs++;
						document.getElementById('Orbs-text').innerText = kratos.orbs;
						if (count == 70) {
							count = 0;
							clearInterval(sold4);
							localStorage.setItem('orbs', kratos.orbs);
						}
					}, 110);
					currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
					soldWeapon = claws;
				break;
				case 4:
					inventory = inventory.filter(weapon => weapon !== blade);
					slot5.style.backgroundImage = 'none';
					var sold5 = setInterval(() => {
						count++;
						kratos.orbs++;
						document.getElementById('Orbs-text').innerText = kratos.orbs;
						if (count == 100) {
							count = 0;
							clearInterval(sold5);
							localStorage.setItem('orbs', kratos.orbs);
						}
					}, 100);
					currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
					soldWeapon = blade;
				break;
			}
			localStorage.setItem('inventory', JSON.stringify(inventory));
			localStorage.setItem('currentWeapon', currentWeapon);
			text.innerText = `You sold the ${soldWeapon}.`;
			[ inShop, boc, nemesisWhip, gauntletZeus, clawsHades, bladeOlympus, sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop].forEach(button => button.style.display = 'none');
			mVillager.style.display = 'block';
			setTimeout(() => {
				mVillager.style.display = 'none';
				text.style.color = '#ffad15';
				text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
				inShop.style.display = 'block';
				[ sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display =  'inline');
			}, 2200 );
		} else {
			bruh.play();
			text.innerText = "Don't sell your only weapon, fool.";
		setTimeout(() => {
			text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4000 );
	}}

	function buyPotion() {
		if (kratos.orbs >= 12 && count == 0) {
			noice.play();
			
			// Number counting animation
			var boughted = setInterval (() => {
				count++;
				kratos.orbs--;
				document.getElementById('Orbs-text').innerText = kratos.orbs;
				if (count == 11) {
					count = 0;
					clearInterval(boughted);
					localStorage.setItem('orbs', kratos.orbs);
				}
			}, 90);
			
			// Update potion slot
			potions++;
			localStorage.setItem('potions', potions);
			if (potions === 1) document.getElementById('Pslot').style.backgroundImage = potionSrc
			if (potions > 1) { 
				document.getElementById('potion-quantity').style.display = 'inline'
				document.getElementById('potion-quantity').innerText = potions
			}
			
		} else if (kratos.orbs < 17) {
			brokie.play();
			text.innerText = "You do not have enough orbs to buy a health potion.";
			setTimeout(() => {
				text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
			}, 4400 );
		}
	}

	function buyWhip() {
		if(kratos.orbs >= 55 && !inventory.includes(whip)) {
			achievement.play();
			var bought = setInterval (() => {
				count++;
				kratos.orbs--;
				document.getElementById('Orbs-text').innerText = kratos.orbs;
				if (count == 55) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', kratos.orbs);
				}
			}, 100 );
			currentWeapon = 1;
			localStorage.setItem('currentWeapon', currentWeapon);
			inventory.push(whip);
			localStorage.setItem('inventory', JSON.stringify(inventory));
			weaponGot();
			whipClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.backgroundImage = whipSrc;
			slot2.style.border = '3px solid #5a3910';
			slot3.style.border = '1.8px solid #5a3910';
			slot4.style.border = '1.8px solid #5a3910';
			slot5.style.border = '1.8px solid #5a3910';
			setTimeout(() => {
				whipClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!inventory.includes(whip)) {
				brokie.play();
				text.innerText = "You do not have enough orbs to buy the Nemesis whip. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function buyGauntlet() {
		if(kratos.orbs >= 99 && !inventory.includes(gauntlet)) {
			achievement.play();
			var bought = setInterval (() => {
				count++;
				kratos.orbs--;
				document.getElementById('Orbs-text').innerText = kratos.orbs;
				if (count == 99) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', kratos.orbs);
				}
			}, 80 );
			currentWeapon = 2;
			localStorage.setItem('currentWeapon', currentWeapon);
			inventory.push(gauntlet);
			localStorage.setItem('inventory', JSON.stringify(inventory));
			weaponGot();
			gauntletClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.border = '1.8px solid #5a3910';
			slot3.style.backgroundImage = gauntletSrc;
			slot3.style.border = '3px solid #5a3910';
			slot4.style.border = '1.8px solid #5a3910';
			slot5.style.border = '1.8px solid #5a3910';
			setTimeout(() => {
				gauntletClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!inventory.includes(gauntlet)) {
				brokie.play();
				text.innerText = "You do not have enough orbs to buy the Gauntlet of Zeus. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function buyClaws() {
		if(kratos.orbs >= 155 && !inventory.includes(claws)) {
			achievement.play();
			var bought = setInterval (() => {
				count++;
				kratos.orbs--;
				document.getElementById('Orbs-text').innerText = kratos.orbs;
				if (count == 155) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', kratos.orbs);
				}
			}, 55 );
			currentWeapon = 3;
			inventory.push(weapons[currentWeapon].name);
			inventory.push(claws);
			localStorage.setItem('inventory', JSON.stringify(inventory));
			weaponGot();
			clawsClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.border = '1.8px solid #5a3910';
			slot3.style.border = '1.8px solid #5a3910';
			slot4.style.backgroundImage = clawsSrc;
			slot4.style.border = '3px solid #5a3910';
			slot5.style.border = '1.8px solid #5a3910';
			setTimeout(() => {
				clawsClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!inventory.includes(claws)) {
				brokie.play();
				text.innerText = "You do not have enough orbs to buy the Claws of Hades. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function buyBlade() {
		if(kratos.orbs >= 200 && !inventory.includes(blade)) {
			achievement.play();
			var bought = setInterval (() => {
				count++;
				kratos.orbs--;
				document.getElementById('Orbs-text').innerText = kratos.orbs;
				if (count == 200) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', kratos.orbs);
				}
			}, 35 );
			currentWeapon = 4;
			localStorage.setItem('currentWeapon', currentWeapon);
			inventory.push(blade);
			localStorage.setItem('inventory', JSON.stringify(inventory));
			weaponGot();
			bladeClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.border = '1.8px solid #5a3910';
			slot3.style.border = '1.8px solid #5a3910';
			slot4.style.border = '1.8px solid #5a3910';
			slot5.style.backgroundImage = bladeSrc;
			slot5.style.border = '3px solid #5a3910';
			setTimeout(() => {
				bladeClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!inventory.includes(blade)) {
				brokie.play();
				text.innerText = "You do not have enough orbs to buy the Blade of Olympus. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function weaponGot() {
		text.innerText = "You now have the " + weapons[currentWeapon].name + ". \n";
		text.style.color = '#191970';
		[ inShop,  sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display = 'none');
	}

	function revert() {
		text.style.color = '#ffad15';
		text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		inShop.style.display = 'block';
		[sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display = 'inline');
	}
	
	hotBarInit();
}

// Underworld

const underworldInit = () => {
	game.innerHTML = `
		<div class="Underworld">
			${settingsElements().slice(180)}
			<center>
			${statsElements()}
			<div id="Text">
				You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.
			</div>
			<div id="Enemy-info">
				<!-- Enemies information will display here when you hover on the button. -->
			</div>
			<div class="Mid">
				<img id="Kratos-in-Underworld" src="Imagery/Kratos in Underworld.png">
				
				<img  id="Hoplite" src="Imagery/Hoplite.png">
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
				<button id="BansheeB">Banshee ${ hoplite.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="SatyrB">Satyr ${ banshee.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="MinotaurB">Minotaur ${ satyr.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="MedusaB">Medusa ${minotaur.defeated ? '' : '<i class="fa-solid fa-lock"></i>'}</button>
				<button id="CyclopsB">Cyclops ${ medusa.defeated ? '' : '<i class="fa-solid fa-lock"></i>' }</button>
				<button id="Leave-Underworld">Return to Sparta</button>
			</div>
			</center>
			${hotBar}
		</div>
	`;
	
	settingsInit();
	
	const text = document.getElementById('Text');
	
	const kratosUnderworld = document.getElementById('Kratos-in-Underworld');
	
	const damageCon = document.querySelector('.Enemy-damage');
	const enemyName = document.getElementById('Enemy-name');
	const enemyInfo = document.getElementById('Enemy-info');
	const enemyDamage = document.getElementById('enemy-damage');
	
	const leaveUnderworld = document.getElementById('Leave-Underworld');
	
	const creatures = [ document.getElementById('Hoplite'), document.getElementById('Banshee'), document.getElementById('Satyr'), document.getElementById('Minotaur'), document.getElementById('Medusa'),  document.getElementById('Cyclops')];
	const creatureButtons = [ document.getElementById('HopliteB'), document.getElementById('BansheeB'), document.getElementById('SatyrB'), document.getElementById('MinotaurB'), document.getElementById('MedusaB'),  document.getElementById('CyclopsB')];
	const creatureSounds = [ hopliteSound, bansheeSound, satyrSound, minotaurSound, hoverSound, cyclopsSound ];
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
			enemyDamage.innerText = enemies[index].damage;
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
			var defeats = [true, hoplite.defeated, banshee.defeated, satyr.defeated, minotaur.defeated, medusa.defeated];
			if (defeats[index]) {
				setTimeout(( ) => {
					if (index <= 4) { 
						battleTheme2.play() 
					} else if (index <= 1) { 
						battleTheme.play() 
					} else if (index === 5) cyclopsBattle.play()
				}, 1000 );
				stopAmbience();
				fighting = index;
				underworldBattle();
			}
		}
	});
	
	const sparta = document.getElementById('Sparta');
	
	leaveUnderworld.onmouseover = () => {
		hoverSound.play();
		document.querySelector('.Underworld').style.background = '#20130c';
		leaveUnderworld.style.animation = 'horizontal-shaking 0.5s';
		kratosUnderworld.style.display = 'none';
		sparta.style.display = 'inline';
	}
	leaveUnderworld.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		document.querySelector('.Underworld').style.background = '#3c3837';
		leaveUnderworld.style.animation = 'grow';
		kratosUnderworld.style.display = 'inline';
		sparta.style.display = 'none';
	}
	leaveUnderworld.onclick = () => {
		underworldAm.pause();
		underworldAm.currentTime = 0;
		returnSound.play();
		spartaInit();
	}
	
	hotBarInit();
}

const enemyStatsE = () => {
	return `
		<div class="Enemy-stats">
			<span class="stat">Enemy:  <strong><span id="Enemy-name">${enemies[fighting].name}</span></strong></span>
			<span class="stat" id="enemy-health">Health: <strong><span id="Enemy-health">${enemies[fighting].health}</span></strong></span>
			<div class="Ehealth-bar">
				<div class="Efiller"></div>
			</div>
		</div>
	`;
}

function notify() {
	notification.style.animation = 'notify 0.7s linear forwards';
	notification.style.display = 'inline-block';
	document.getElementById('noti-text').innerText = fighting !== 5 ? `${enemies[fighting + 1].name} battle now unlocked` :  "Olympus is now unlocked";
	setTimeout(() => { notification.style.animation = 'hide 0.7s linear forwards' }, 4000 );
}

function restartInit() {
	const reset = document.getElementById('Reset');
	
	reset.onmouseover = () => {
		hoverSound.play();
		reset.style.animation = 'horizontal-shaking';
		reset.style.animationDuration = '0.5s';
	}
	reset.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		reset.style.animation = 'no';
	}
	reset.onclick = () => { restart()}
}

const underworldBattle = () => {
	game.innerHTML = `
		<div class="Underworld-battle">
			${settingsElements().slice(180)}
			<center>
			${statsElements()}
			<div id="Text">
				You are now fighting a ${enemies[fighting].name}. Try to not to die.
			</div>
			${enemyStatsE()}
			<canvas class="Battle-area"></canvas>
			<img id="You-dead" src="Imagery/You are dead GoW CoO.png">
			<button id="Return-Underworld">Return</button>
			<button id='Reset'> Restart? </button>
			</center>
			${hotBar}
		</div>
	`;
	
	settingsInit();

	const eHealthFiller = document.querySelector('.Efiller');
	const returnB = document.getElementById("Return-Underworld");
	
	eH = enemies[fighting].health;
	eW = enemies[fighting].w;
	
	battle()
	
	returnB.onmouseover = () => {
		hoverSound.play();
		returnB.style.animation = 'horizontal-shaking 0.5s';
	}
	
	returnB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		returnB.style.animation = 'grow';
	}
	
	returnB.onclick = () => {
		stopMusic();
		returnSound.play();
		if (enemies[fighting].health <= 0) eHealthFiller.style.width = '100%';
		//localStorage.setItem('health', kratos.health);
		underworldInit();
		document.removeEventListener("keydown", keydownHandler);
		document.removeEventListener("keyup", keyupHandler);
		resetThem();
		inBattle = false;
	}
	
	hotBarInit();
	
	restartInit();
}

function battle() {
	inBattle = true;
	
	const battleArea = document.querySelector('.Battle-area');
	const ctx = battleArea.getContext('2d');
	
	const ratio = window.devicePixelRatio || 1;

    // Set canvas bitmap size based on DPR
    battleArea.width = battleArea.offsetWidth * ratio;
    battleArea.height = battleArea.offsetHeight * ratio;

    // Scale the drawing context
    ctx.scale(ratio, ratio);

	// ===== Battle constants =====

	const gravity = 0.8;
	const groundLevel = 430; 
	const jumpPower = -16;
	const hitFlashTime = 200; // ms to stay tinted red
	const enemy = enemies[fighting];
	
	kratos.y = groundLevel;
	enemy.y = groundLevel;

	// ===== Load images =====
	
	const kratosNormalStand = new Image();
	kratosNormalStand.src = "Imagery/Kratos standing.png";

	const kratosStandLeft = new Image();
	kratosStandLeft.src = "Imagery/Kratos fighting stance left.png";
	const kratosStandRight = new Image();
	kratosStandRight.src = "Imagery/Kratos fighting stance right.png";

	const kratosWalkLeft = new Image();
	kratosWalkLeft.src = "Imagery/Kratos walkin left.png";
	const kratosWalkRight = new Image();
	kratosWalkRight.src = "Imagery/Kratos walkin right.png";
	
	const kratosJumpLeft = new Image();
	kratosJumpLeft.src = "Imagery/Kratos jumping left.png";
	const kratosJumpRight= new Image();
	kratosJumpRight.src = "Imagery/Kratos jumping right.png";
	const kratosJumpsLeft = new Image(); 
	kratosJumpsLeft.src = "Imagery/Kratos jumps left.png";
	const kratosJumpsRight = new Image(); 
	kratosJumpsRight.src = "Imagery/Kratos jumps right.png";
	
	const kratosAttackLeft = new Image();
	kratosAttackLeft.src = "Imagery/Kratos attacks left.png";
	const kratosAttackRight = new Image();
	kratosAttackRight.src = "Imagery/Kratos attacks right.png";
	
	const kratosAirAttackLeft = new Image();
	kratosAirAttackLeft.src = "Imagery/Kratos flying kick left.png";

	const kratosAirAttackRight = new Image();
	kratosAirAttackRight.src = "Imagery/Kratos flying kick right.png";

	const enemyLeft = new Image();
	enemyLeft.src = `Imagery/${enemy.name} facing left.png`;
	const enemyRight = new Image();
	enemyRight.src = `Imagery/${enemy.name} facing right.png`;
	
	const enemyRunsL = new Image();
	if (fighting > 5) enemyRunsL.src = `Imagery/${enemy.name} running left.png`;
	const enemyRunsR = new Image();
	if (fighting > 5) enemyRunsR.src = `Imagery/${enemy.name} running right.png`;
	
	const enemyAttackR = new Image();
	enemyAttackR.src = `Imagery/${enemy.name} attacks right.png`;
	const enemyAttackL = new Image();
	enemyAttackL.src = `Imagery/${enemy.name} attacks left.png`;
	
	const kratosAttackSounds = [attacksHoplite, attacksBanshee, attacksSatyr, attacksMinotaur, attacksMedusa, attacksCyclops, attacks, attacks2, attacksZeus];
	const enemyAttackSounds = [hopliteAttacks, bansheeAttacks2, satyrAttacks, minotaurAttacks, bansheeAttacks2, cyclopsAttacks, herculesAttacks, herculesAttacks2, zeusAttacks]
	
	// ===== Dodge settings =====

	let dodgeDuration = 400; // ms
	let dodgeSpeedMultiplier = kratos.speed - .5;
	kratos.dodging = false;
	kratos.dodgeEnd = 0;

	// ===== Input =====
	
	document.addEventListener("keydown", keydownHandler)
	document.addEventListener("keyup", keyupHandler);
	function shiftKeyHandler(event) {

		// Start dodge
		if (event.key === "Shift" && !kratos.dodging) {
			evadeSound.play();
			kratos.dodging = true;
			kratos.dodgeEnd = Date.now() + dodgeDuration;
		}
	}
	document.addEventListener("keydown", shiftKeyHandler);

	// ===== Battle functions =====
	
	let defeated = false;
	
	const timeOuts = [5200, 4000, 6200];
	
	let firstLineC = false;
	let secondLineC = false;
	
	function drawText() {
		ctx.font = "17px GodOfWar";
		ctx.fillStyle = "#ddd";
		switch (fighting) {
			case 6:
				ctx.fillText("You may have brute force... but you lack speed!", 420, 270);
			break;
			case 7:
				ctx.fillText("Hello... brother.", 500, 270)
			break;
			case 8:
				if (!firstLineC && !secondLineC) ctx.fillText("Such chaos... I will have much to do after I kill you.", 420, 270);
				if (firstLineC && !secondLineC) ctx.fillText("Face me father... it is time to end this!", 35, 289);
				if (firstLineC && secondLineC) ctx.fillText("Yes my son! It is time!", 670, 270);
			break;
		}
	}
	let lineComplete;
	setTimeout(() => {
		lineComplete = true;
	}, timeOuts[fighting - 6]);
	
	if (fighting === 8) {
		setTimeout(() => { 
			lineComplete = false; 
			firstLineC = true;
		}, 6270);
		setTimeout(() => { secondLineC = true }, 11000);
		setTimeout(() => {  lineComplete = true }, 14200);
	}

	function updateKratos() {
		if (kratos.dead) {
			// Fade out and "fall" after death
			kratos.alpha -= 0.02;
			kratos.y += 1.5;
			if (kratos.alpha <= 0) {
				kratos.alpha = 0;
			}
			return;
		}
		
		let speed = kratos.speed;

		// Handle dodge
		if (kratos.dodging) {
			speed *= dodgeSpeedMultiplier;
			if (Date.now() > kratos.dodgeEnd) {
				kratos.dodging = false;
			}
		}
		
		// Horizontal movement
		if (keys["ArrowLeft"] || keys["a"] || keys["A"]) {
			if (fighting > 5 && !enemy.defeated) { lineComplete ? kratos.velX = -speed : kratos.velX = 0 } else { kratos.velX = -speed }
			kratos.facing = "left";
		} else if (keys["ArrowRight"] || keys["d"] || keys["D"]) {
			if (fighting > 5 && !enemy.defeated) { lineComplete ? kratos.velX = speed : kratos.velX = 0 } else { kratos.velX = speed }
			kratos.facing = "right";
		} else {
			kratos.velX = 0;
		}
		
		// Only block overlap if not dodging
		if (!kratos.dodging) {
			preventOverlap();
		}

		// Jump
		if (keys[" "] && kratos.onGround) {
			evadeSound.play();
			kratos.velY = jumpPower;
			kratos.onGround = false;
			lineComple = true;
		}

		// Attack with e
		if (keys["e"] && Date.now() - kratos.lastAttack > kratos.aC && enemy.health !== 0) {
			kratos.attacking = true;
			kratos.attackEnd = Date.now() + 1474;
			kratos.lastAttack = Date.now();

			// Check if enemy is in range
			if (Math.abs(kratos.x - enemy.x) < kratos.aR && Math.abs(kratos.y - enemy.y) < kratos.h) {
				kratosAttackSounds[fighting].play();
				enemy.health -= weapons[currentWeapon].damage;
				enemy.hitUntil = Date.now() + hitFlashTime; // flash red
				if (enemy.health <= 0) {
					enemy.health = 0;
					enemy.deathTime = Date.now();
					if (!enemy.defeated) {
						enemy.defeated = true;
						localStorage.setItem(`${enemy.name.toLowerCase()}Defeated`, enemy.defeated);
					}
				}
				document.getElementById('Enemy-health').innerText = enemy.health;
				document.querySelector('.Efiller').style.width = `${enemy.health}%`;
				
				// Hop effect
				const hopHeight = 10; // pixels
				const hopDistance = (kratos.facing === "right" ? 5 : -5); // toward enemy
				const hopDuration = 450; // ms

				// Temporarily adjust position
				kratos.y -= hopHeight;
				kratos.x += hopDistance;

				// Reset after hop duration
				setTimeout(() => {
					enemy.y = groundLevel;
				}, hopDuration);
			}
		}
		
		// If attack duration expired, reset
		if (kratos.attacking && Date.now() > kratos.attackEnd) {
			kratos.attacking = false;
		}

		// Apply physics
		kratos.velY += gravity;
		kratos.x += kratos.velX;
		kratos.y += kratos.velY;

		// Ground collision
		if (kratos.y > groundLevel) {
			kratos.y = groundLevel;
			kratos.velY = 0;
			kratos.onGround = true;
		}

		// Keep inside canvas
		if (kratos.x < 0) kratos.x = 0;
		if (kratos.x + kratos.w >battleArea.width) kratos.x = battleArea.width - kratos.w;
	}

	function updateEnemy() {
		if (enemy.health === 0) {
			// Fade out and "fall" after death
			enemy.alpha -= 0.02;
			enemy.y += 1.4;
			if (enemy.alpha <= 0) {
				enemy.alpha = 0;
			}
			if (!defeated) victory(shiftKeyHandler);
			defeated = true;
			return;
		}
		
		const distance = kratos.x - enemy.x;

		// Move toward Kratos
		if (Math.abs(distance) < 400 && !kratos.dead) {
			enemy.velX = distance > 0 ? enemy.speed : -enemy.speed;
			enemy.facing = distance > 0 ? "right" : "left";
		} else {
			enemy.velX = 0;
		}
		
		// Only block overlap if not dodging
		if (!kratos.dodging) {
			preventOverlap();
		}

		// Attack if close
		if (Math.abs(enemy.x - kratos.x) < enemy.aR && Date.now() - enemy.lastAttack > enemy.aC && !kratos.dead) {
			enemy.attacking = true;
			enemy.attackEnd = Date.now() + 1650;
			enemy.lastAttack = Date.now();
			enemyAttackSounds[fighting].play();
			kratos.health -= enemy.damage;
			healthCheck(document.querySelector('.filler'));
			kratos.hitUntil = Date.now() + hitFlashTime; // flash red

			// Hop effect
			const hopHeight = 10; // pixels
			const hopDistance = enemy.facing === "right" ? 7 : -7; // toward Kratos
			const hopDuration = 150; // ms

			// Temporarily adjust position
			enemy.y -= hopHeight;
			enemy.x += hopDistance;
			
			// Switch back to normal after attack animation
			setTimeout(() => {
				enemy.y = groundLevel;
				enemy.attacking = false;
			}, hopDuration);
		}
		
		// If attack duration expired, reset
		if (enemy.attacking && Date.now() > enemy.attackEnd) {
			enemy.attacking = false;
		}

		// Apply physics
		if (!enemy.attacking) {
			enemy.velY += gravity;
			enemy.x += enemy.velX;
			enemy.y += enemy.velY;
		}

		// Ground collision
		if (enemy.y > groundLevel) {
			enemy.y = groundLevel;
			enemy.velY = 0;
			enemy.onGround = true;
		}

		// Keep inside canvas
		if (enemy.x < 0) enemy.x = 0;
		if (enemy.x + enemy.w > battleArea.width) enemy.x = battleArea.width - enemy.w;
	}

	// ===== Drawing =====
	function drawCharacter(img, x, y, w, h, isHit, alpha = 1) {
		ctx.save();
		ctx.globalAlpha = alpha;
		ctx.drawImage(img, x, y - h, w, h);
		if (isHit) {
			ctx.fillStyle = "rgba(255, 0, 0, 0.4)";
			ctx.globalCompositeOperation = "source-atop";
			ctx.fillRect(x, y - h, w, h);
			ctx.globalCompositeOperation = "source-over";
		}
		ctx.restore();
	}

	function drawKratos() {
		let img;
		if (!kratos.onGround) {  
			// In the air
			if (kratos.attacking) {
				img = kratos.facing === "right" ? kratosAirAttackRight : kratosAirAttackLeft;
				kratos.w = 120;
			} else {
				// Normal jump
				img = kratos.facing === "right" ? kratosJumpsRight : kratosJumpsLeft;
				kratos.w = 75;
			}
		} else if (kratos.velX > 0) {
			img = kratosWalkRight;
			kratos.w = 65;
		} else if (kratos.velX < 0) {
			img = kratosWalkLeft;
			kratos.w = 65;
		} else {
			// Standing / Ground attack
			if (enemy.health !== 0) { 
				if (kratos.x < enemy.x) {
					img = kratos.attacking ? kratosAttackRight : kratosStandRight;
					kratos.w = 99;
				} else {
					img = kratos.attacking ? kratosAttackLeft : kratosStandLeft;
					kratos.w = 99;
				}
			} else { 
				img = kratosNormalStand;
				kratos.w = 69;
			}
		}
		drawCharacter(img, kratos.x, kratos.y, kratos.w, kratos.h, Date.now() < kratos.hitUntil);
	}

	function drawEnemy() {
		if (enemy.alpha <= 0) return;
		let img;
		if (enemy.attacking) {
			img = enemy.facing === "right" ? enemyAttackR : enemyAttackL;
			if (fighting ===8) enemy.w = 99;
		} else if (enemy.velX !== 0 && fighting > 5) {
			img = enemy.facing === "right" ? enemyRunsR : enemyRunsL;
			if (fighting ===8) enemy.w = 78;
		} else {
			img = enemy.facing === "right" ? enemyRight : enemyLeft;
			if (fighting ===8) enemy.w = 78;
		}

		drawCharacter(img, enemy.x, enemy.y, enemy.w, enemy.h, Date.now() < enemy.hitUntil);
	}

	function preventOverlap() {
		if (!kratos.onGround || !enemy.onGround) return;
		
		const minGap = 5; // pixels of breathing room
		const dx = (kratos.x + kratos.w / 5) - (enemy.x + enemy.w / 5);
		const overlap = (kratos.w / 5 + enemy.w / 5) - Math.abs(dx);

		if (overlap > -minGap) {
			// Push both characters apart equally
			const push = (overlap + minGap) / 2;
			if (dx > 0) {
				kratos.x += push;
				enemy.x -= push;
			} else {
				kratos.x -= push;
				enemy.x += push;
			}
		}
	}

	// ===== Loop =====

	function battleLoop() {
		ctx.clearRect(0, 0, battleArea.width, battleArea.height);
		if (!lineComplete && !enemy.defeated) drawText();
		updateKratos();
		updateEnemy();
		drawKratos();
		drawEnemy();
		if (inBattle) requestAnimationFrame(battleLoop);
	}
	battleLoop();
}

let eH;
let eW

function resetThem() {
	// Kratos reset
	kratos.w = 69;
	kratos.x = 20;
	kratos.y = 0;
	kratos.facing = "right";
	kratos.velX = 0;
	kratos.velY = 0;
	kratos.hitUntil = 0;
	kratos.lastAttack = 0;
	kratos.dead = false;
	kratos.deathTime = 0;
	kratos.alpha = 1;
	
	// Enemy reset
	enemies[fighting].w = eW;
	enemies[fighting].health = eH;
	enemies[fighting].x = 555;
	enemies[fighting].y = 0;
	enemies[fighting].volY = 0;
	enemies[fighting].volX = 0;
	enemies[fighting].lastAttack = 0;
	enemies[fighting].hitUntil = 0;
	enemies[fighting].facing = "left";
	enemies[fighting].deathTime = 0; 
	enemies[fighting].alpha = 1;
}

// Olympus

const olympusInit = () => {
	game.innerHTML = `
		<div class="Olympus">
			${settingsElements().slice(180)}
			<center>
			${statsElements()}
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
				<button id="HerculesB">Hercules ${ hermes.defeated ? '' : '<i id="Herc-lock" class="fa-solid fa-lock"></i>' }</button>
				<button id="ZeusB">Zeus ${ hercules.defeated ? '' : '<i id="Zeus-lock" class="fa-solid fa-lock"></i>' }</button>
			 
				<button id="Leave-Olympus">Return to Sparta</button>
			</div>
			</center>
			${hotBar}
		</div>
	`;
	
	settingsInit();
	
	const text = document.getElementById('Text');
	
	const kratosOlympus = document.getElementById('Kratos-at-Olympus');
	
	const damageCon = document.querySelector('.Enemy-damage');
	const enemyName = document.getElementById('Enemy-name');
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
		var lines = [ hermesLine, herculesLine, zeusLine ];
		var texts = [
			"You are now facing the god, Hermes. He spots you and he swiftly starts attacking. \n 😟",
			"Hercules gets in your way, to Zeus. He challenges you to fight him to the death to see who is stronger. \n 😟",
			"You finally arrive to the god of thunder and lightning, and also your father, Zeus. Try killing him in fashion. \n 😈"
		];
		var battleThemes = [ battleTheme2, battleTheme2, zeusBattle ];
		var intervalTimes = [ 4200, 3000, 14200 ];
		
		enemyButton.onmouseover = () => {
			hoverSound.play();
			text.style.display = 'none';
			enemyInfo.style.display = 'inline-block';
			enemyInfo.innerText = enemiesInfo[index];
			enemyDamage.innerText = enemies[index + 6].damage;
			damageCon.style.display = 'inline';
			kratosOlympus.style.display = 'none';
			enemyImages[index].style.display = 'inline';
			enemyButton.style.animation = 'tilt-shaking 0.5s';
		}
		enemyButton.onmouseout = () => {
			hoverSound.pause();
			hoverSound.currentTime = 0;
			text.style.display = 'block';
			enemyInfo.style.display = 'none';
			damageCon.style.display ='none';
			enemyImages[index].style.display = 'none';
			kratosOlympus.style.display = 'inline';
			enemyButton.style.animation = 'grow';
		}
		enemyButton.onclick = () => {
			var defeats = [cyclops.defeated, hermes.defeated, hercules.defeated];
			if (defeats[index]) {
				olympusAm.pause();
				olympusAm.currentTime = 0;
				fighting = index + 6;
				if (!enemies[fighting].defeated) lines[index].play();
				setTimeout(() => {
					selection2.play();
					setTimeout(() => {
						battleThemes[index].play();
					}, 1000 );
					text.innerText = texts[index];
				}, enemies[fighting].defeated ? 12 : intervalTimes[index] );
				olympusBattle();
			}
		}
	});
	
	const sparta = document.getElementById('Sparta');
	
	leaveOlympus.onmouseover = () => {
		hoverSound.play();
		document.querySelector('.Olympus').style.background = '#20130c';
		leaveOlympus.style.animation = 'horizontal-shaking 0.5s';
		kratosOlympus.style.display = 'none';
		sparta.style.display = 'inline';
	}
	leaveOlympus.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		document.querySelector('.Olympus').style.background = '#335168';
		leaveOlympus.style.animation = 'grow';
		kratosOlympus.style.display = 'inline';
		sparta.style.display = 'none';
	}
	leaveOlympus.onclick = () => {
		olympusAm.pause();
		olympusAm.currentTime = 0;
		returnSound.play();
		spartaInit();
	}
	
	hotBarInit();
}

const olympusBattle = () => {
	game.innerHTML = `
		<div class="Olympus-battle">
			${settingsElements().slice(180)}
			<center>
			${statsElements()}
			<div id="Text">
				You are now fighting ${enemies[fighting].name}. Try to not to die.
			</div>
			${enemyStatsE()}
			<canvas class="Battle-area"></canvas>
			<img id="You-dead" src="Imagery/You are dead GoW CoO.png">
			<button id="Return-Olympus">Return</button>
			<button id='Reset'> Restart? </button>
			</center>
			${hotBar}
		</div>
	`;
	
	settingsInit();

	const returnB = document.getElementById("Return-Olympus");
	const eHealthFiller = document.querySelector('.Efiller');
	
	eH = enemies[fighting].health;
	eW = enemies[fighting].w;
	
	battle()
	
	returnB.onmouseover = () => {
		hoverSound.play();
		returnB.style.animation = 'horizontal-shaking 0.5s';
	}
	
	returnB.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		returnB.style.animation = 'grow';
	}
	
	returnB.onclick = () => {
		stopMusic();
		returnSound.play();
		if (enemies[fighting].health <= 0) eHealthFiller.style.width = '100%';
		localStorage.setItem('health', kratos.health);
		olympusInit();
		document.removeEventListener("keydown", keydownHandler);
		document.removeEventListener("keyup", keyupHandler);
		resetThem(eH, eW);
		inBattle = false;
	}
	
	hotBarInit();
	
	restartInit();
}

// Battle functions

function healthCheck(healthFiller) {
	document.getElementById('Health').innerText = kratos.health;
	if (kratos.health > 100) { document.querySelector('.Health-bar').style.width = `${kratos.health}px` } else { healthFiller.style.width = `${kratos.health}%` }
	if (kratos.health <= 0) {
		death(healthFiller);
	} else if (kratos.health <= 25) {
		lowHealth(healthFiller);
	} else if (kratos.health <= 50) {
		healthFiller.style.background = '#ed7014'
	} else if (kratos.health <= 100) {
		healthFiller.style.background = '#32cd33'
	}
}

function lowHealth(healthFiller) {
	heartbeat.play();
	[document.querySelector('.Underworld-battle'), document.querySelector('.Olympus-battle')].forEach((container) => { if (container) container.style.boxShadow = '#880808 0px 20px 30px -10px' });
	healthFiller.style.background = '#900604';
}

function victory(skh) {
	stopMusic();
	if (fighting <= 4) {
		underworldAm.play()
	} else {
		olympusAm.play()
	}
	document.querySelector('.Efiller').style.width = `${enemies[fighting].health}%`;
	document.getElementById('Enemy-health').innerText = 0;
	// document.querySelector('.Enemy-stats').style.display = 'none';
	if (fighting < 8) { 
		defeatSound.play();
		if (!enemies[fighting + 1].deated) notify();
	} else { 
		wonned.play();
		document.getElementById('Text').innerText = "You defeated Zeus! You have finally completed this SHIT game! 🤩";
	}
	const rewards = [35, 59, 80, 100, 125, 150, 170, 189];
	const durations = [100, 89, 82, 75, 67, 58, 50, 44]
	var enemDefR = setInterval(( )=> {
		count++;
		kratos.orbs += 1;
		document.getElementById('Orbs-text').innerText = kratos.orbs;
		if (count === rewards[fighting]) {
			count = 0;
			clearInterval(enemDefR);
			localStorage.setItem('orbs', kratos.orbs);
		}
	}, durations[fighting]);
	setTimeout (() => {
		const soundMap = {
			0: orbSound,
			1: orbsSound,
			2: orbsSound,
			8: orbsSound3,
		};
		(soundMap[fighting] || orbsSound2).play();
	}, 1400 );
	[ document.getElementById("Return-Underworld"), document.getElementById("Return-Olympus") ].forEach((button) => { if (button) button.style.display = 'block' });
	document.getElementById('Text').innerText = 'You have defeated the enemy. You have now earned some orbs from the defeated enemy.';
	document.removeEventListener("keydown", skh);
	localStorage.setItem('health', kratos.health);
}

function death(healthFiller) {
	stopMusic();
	heartbeat.pause();
	heartbeat.currentTime = 0;
	deathScream.play();
	kratos.health = 0;
	document.getElementById('Health').innerText = kratos.health;
	healthFiller.style.width = '0';
	kratos.dead = true;
	kratos.deathTime = Date.now();
	document.querySelector('.Enemy-stats').style.display = 'none';
	document.querySelector('.Hotbar').style.display = 'none';
	document.getElementById('Text').innerText = "You're dead 🫥. Guess now you really are the \"Ghost\" of sparta";
	setTimeout(() => {
		document.getElementById('You-dead').style.display = 'block';
		document.getElementById('Reset').style.display = 'block';
	}, 700 );
	[document.querySelector('.Underworld-battle'), document.querySelector('.Olympus-battle')].forEach((container) => { if (container) container.style.background = 'black' });
	[ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated' ].forEach(save => localStorage.removeItem(save));
}

function restart() {
	stopAmbience();
	returnSound.play();
	resetThem();
	setTimeout(() => {
	    ahShit.play();
	}, 1800 );
	kratos.health = 100;
	kratos.orbs = 0;
	currentWeapon = 0;
	potions = 0;
	inventory = ["Blades of chaos"];
	[hoplite, banshee, satyr, minotaur, medusa, cyclops, hermes, hercules, zeus].forEach((enemy) => enemy.defeated = false );
	[ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated'].forEach(save => localStorage.removeItem(save));
	spartaInit();
	inBattle = false;
	document.getElementById('potion-quantity').style.display = 'none';
	document.getElementById('Main-text').innerText = "Welcome back. It seems that you died last time. Don't do that again. \n  (❁´◡`❁)";
}

// Audio functions

function stopMusic() {
	[battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach(theme => {
		if (theme && typeof theme.pause === 'function') {
			theme.pause();
			theme.currentTime = 0;
		}
	});
}

function stopAmbience() {
	if (fighting <= 5) {
		underworldAm.pause();
		underworldAm.currentTime = 0;
	} else {
		olympusAm.pause();
		olympusAm.currentTime = 0;
	}
}
