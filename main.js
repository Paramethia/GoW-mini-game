import { audios } from './src/audio.js';
import { mainMenu } from './src/scenes/main-menu.js';
import { lowHealth, death } from './src/components/battle.js';

const globals = {
    // DOM elements
	title: document.getElementById('Title'),
	notification: document.querySelector('.Noti'),
    game: document.querySelector('.Game'),
    phoneWarning: document.getElementById("phone-warning"),
    h1: document.getElementById('click-start'),

    // Image sources
    potionSrc: "./Imagery/Health potion.png",
    bladesSrc: "./Imagery/boc.png",
    whipSrc: "./Imagery/Nemesis whip.png",
    gauntletSrc: "./Imagery/goz.png",
    clawsSrc: "./Imagery/coh.png",
    bladeSrc: "./Imagery/boo.png",

    // Audio
    audios,

    // Stats
    kratos: {
		w: 69, h: 99, x: 20, y: 0, speed: 2.8, velX: 0, velY: 0, aC: 2004, aR: 48,
		onGround: true, attacking: false, lastAttack: 0,
		health: Number(localStorage.getItem('health')) || 100, 
		orbs: Number(localStorage.getItem('orbs')) || 0,
		facing: "right", hitUntil: 0, dead: false, deathTime: 0, alpha: 1,
	},
    currentWeapon: Number(localStorage.getItem('currentWeapon')) || 0,
    currentEnemy: 0,

    inventory: JSON.parse(localStorage.getItem('inventory')) || ["Blades of chaos"],
	potions: Number(localStorage.getItem('potions')) || 0,

    weapons: [
        { name: "Blades of chaos", damage: 17 },
        { name: "Nemesis whip", damage: 28 },
        { name: "Gauntlet of Zeus", damage: 44 },
        { name: "Claws of Hades", damage: 64 },
        { name: "Blade of Olympus", damage: 88 }
    ],

    // Weapon shortcuts
	blades: "Blades of chaos",
    whip: "Nemesis whip",
    gauntlet: "Gauntlet of Zeus",
    claws: "Claws of Hades",
    blade: "Blade of Olympus",

    // Conditions and settings
    play: false,
    set: false,
    hBarOn: localStorage.getItem('healthBarOn') === 'true',
    musicVolume: Number(localStorage.getItem('musicVolume')) || 100,
    ambienceVolume: Number(localStorage.getItem('ambienceVolume')) || 100,
	inMainMenu: false,
	inBattle: false,

	// Enemies
    enemies: [
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
    ],

	get hoplite() { return this.enemies[0] },
    get banshee() { return this.enemies[1] },
    get satyr() { return this.enemies[2] },
    get minotaur() { return this.enemies[3] },
    get medusa() { return this.enemies[4] },
    get cyclops() { return this.enemies[5] },
    get hermes() { return this.enemies[6] },
    get hercules() { return this.enemies[7] },
    get zeus() { return this.enemies[8] },

	eH: 0,
	eW: 0,

	// Key event handlers
	keys: {},
	keydownHandler(event) { globals.keys[event.key] = true },
	keyupHandler(event) { globals.keys[event.key] = false },
	
	mKey: undefined,
	escKey: undefined,

	hotbarKeys: undefined,

	//Health bar cheker
	healthCheck(healthFiller) {
		document.getElementById('Health').innerText = this.kratos.health;
		if (this.kratos.health > 100) { document.querySelector('.Health-bar').style.width = `${this.kratos.health}px` } else { healthFiller.style.width = `${this.kratos.health}%` }
		if (this.kratos.health <= 0) {
			death(this, healthFiller);
		} else if (this.kratos.health <= 25) {
			lowHealth(this, healthFiller);
		} else if (this.kratos.health <= 50) {
			healthFiller.style.background = '#ed7014'
		} else if (this.kratos.health <= 100) {
			healthFiller.style.background = '#32cd33'
		}
	},

	// Health bar updater
	healthBarUpdate(healthBar, healthFiller) {
		if (this.kratos.health === 200) {
			healthBar.style.width = '200px';
			healthFiller.style.background = '#299617';
		} else if (this.kratos.health > 100) {
			healthBar.style.width = `${this.kratos.health}px`;
			healthFiller.style.background = '#299617'; // Healthy green
		} else if (this.kratos.health > 50) {
			healthBar.style.width = '100px';
			healthFiller.style.background = '#32cd33'; // Default green
		} else if (this.kratos.health > 25) {
			healthFiller.style.background = '#ed7014'; // Warning orange
		} else {
			healthFiller.style.background = '#900604'; // Danger red
		}
		healthFiller.style.width = `${this.kratos.health}px`;
	},

	stopMusic(){
		[this.audios.battleTheme, this.audios.battleTheme2, this.audios.cyclopsBattle, this.audios.zeusBattle].forEach(theme => {
			if (theme && typeof theme.pause === 'function') {
				theme.pause();
				theme.currentTime = 0;
			}
		});
	},

	stopAmbience() {
		if (this.currentEnemy <= 5) {
			this.audios.underworldAm.pause();
			this.audios.underworldAm.currentTime = 0;
		} else {
			this.audios.olympusAm.pause();
			this.audios.olympusAm.currentTime = 0;
		}
	},

	notify() {
		this.notification.style.animation = 'notify 0.7s linear forwards';
		this.notification.style.display = 'inline-block';
		document.getElementById('noti-text').innerText = this.currentEnemy !== 5 ? `${this.enemies[this.currentEnemy + 1].name} battle now unlocked` :  "Olympus is now unlocked";
		setTimeout(() => { this.notification.style.animation = 'hide 0.7s linear forwards' }, 4000 );
	},

	resetThem() {
		// Kratos reset
		this.kratos.w = 69;
		this.kratos.x = 20;
		this.kratos.y = 0;
		this.kratos.facing = "right";
		this.kratos.velX = 0;
		this.kratos.velY = 0;
		this.kratos.hitUntil = 0;
		this.kratos.lastAttack = 0;
		this.kratos.dead = false;
		this.kratos.deathTime = 0;
		this.kratos.alpha = 1;
		
		// Enemy reset
		this.enemies[this.currentEnemy].w = this.eW;
		this.enemies[this.currentEnemy].health = this.eH;
		this.enemies[this.currentEnemy].x = 555;
		this.enemies[this.currentEnemy].y = 0;
		this.enemies[this.currentEnemy].lastAttack = 0;
		this.enemies[this.currentEnemy].hitUntil = 0;
		this.enemies[this.currentEnemy].facing = "left";
		this.enemies[this.currentEnemy].deathTime = 0; 
		this.enemies[this.currentEnemy].alpha = 1;
	}
};

//localStorage.clear();

// Screen and window size check

console.log("Screen dimentions", screen.width, screen.height);
console.log("Window dimentions:", window.innerWidth, window.innerHeight);

window.devicePixelRatio = 1;

const phoneWarning = document.getElementById("phone-warning");

if (screen.width <= 455 || window.width <= 455) {
	globals.game.style.display = "none";
	phoneWarning.style.display = "block";
}

// Saved volumes settings

function setVolumes() {
	if (globals.musicVolume !== 100) [globals.audios.menuTheme, globals.audios.battleTheme, globals.audios.battleTheme2, globals.audios.cyclopsBattle, globals.audios.zeusBattle].forEach((song) => song.volume = globals.musicVolume / 100)
	if (globals.ambienceVolume !== 100) [globals.audios.underworldAm, globals.audios.olympusAm].forEach((song) => { song.volume = globals.ambienceVolume / 100 })
}

setVolumes();

const h1 = document.getElementById('click-start');

h1.onclick = () => { 
	globals.game.style.display = 'flex';
	globals.game.style.justifyContent = 'center';
	globals.game.style.alignItems = 'center';
	mainMenu(globals) 
}