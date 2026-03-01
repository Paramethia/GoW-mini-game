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
    bladesSrc: "./Imagery/UI/Blades-of-chaos.png",
    whipSrc: "./Imagery/UI/Nemesis whip.png",
    clawsSrc: "./Imagery/UI/Claws-of-Hades.png",
	gauntletSrc: "./Imagery/UI/Gauntlet of Zeus.png",
	cestusSrc: "./Imagery/UI/Nemean-cestus.png",
    bladeSrc: "./Imagery/UI/Blade-of-Olympus.png",

    audios, // *audio

    // Kratos Stats
    kratos: {
		w: 150, h: 159, x: 20, y: 0, speed: 3.2, velX: 0, velY: 0,
		health: Number(localStorage.getItem('health')) || 100, 
		orbs: Number(localStorage.getItem('orbs')) || 0,
	},
    inventory: JSON.parse(localStorage.getItem('inventory')) || ["Blades of chaos"],

	// Weapons
    weapons: [
        { 
			name: "Blades of chaos", 
			lD: 5, hD: 8, lC: 570, hC: 1200, lR: 90, hR: 180, lS: 200, hS: 330, lK: 5, hK: 10,
			lAttack: audios.bocLA,
			hAttack: audios.bocHA
		}, 
        { 
			name: "Nemesis whip", 
			lD: 7, hD: 14, lC: 480, hC: 920, lR: 107, hR: 235, lS: 480, hS: 700, lK: 7, hK: 11,
			price: 40,
			lAttack: audios.nwLA,
			hAttack: audios.nwHA,
		},
        { 
			name: "Claws of Hades", 
			lD: 12, hD: 20, lC: 340, hC: 740, lR: 99, hR: 245, lS: 300, hS: 380, lK: 8, hK: 13,
			price: 70,
			lAttack: audios.cohLA,
			hAttack: audios.cohHA,
		},
		{ 
			name: "Gauntlet of Zeus", 
			lD: 19, hD: 28, lC: 700, hC: 1300, lR: 93, hR: 97, lS: 370, hS: 450, lK: 10, hK: 17,
			price: 115,
			lAttack: audios.gozLA,
			hAttack: audios.gozHA,
		},
		{ 
			name: "Nemean cestus", 
			lD: 27, hD: 40, lC: 800, hC: 1500, lR: 95, hR: 100, lS: 440, hS: 520, lK: 12, hK: 21,
			price: 150,
			lAttack: audios.ncLA,
			hAttack: audios.ncHA,
		},
        { 
			name: "Blade of Olympus", 
			lD: 40, hD: 55, lC: 888, hC: 1700, lR: 78, hR: 89, lS: 500, hS: 590, lK: 15, hK: 27, 
			price: 200,
			lAttack: audios.booLA,
			hAttack: audios.booHA,
		}
    ],
	currentWeapon: Number(localStorage.getItem('currentWeapon')) || 0,

    // Weapon shortcuts
	blades: "Blades of chaos",
    whip: "Nemesis whip",
    claws: "Claws of Hades",
	gauntlet: "Gauntlet of Zeus",
	cestus: "Nemean cestus",
    blade: "Blade of Olympus",

    // Conditions and settings
	loaded: false,
    play: true,
    set: false,
    hBarOn: localStorage.getItem('healthBarOn') === 'true',
    musicVolume: localStorage.getItem('musicVolume') ? Number(localStorage.getItem('musicVolume')) : 100,
    ambienceVolume: localStorage.getItem('ambienceVolume') ? Number(localStorage.getItem('ambienceVolume')) : 100,
	damageVolume: 0.55,
	inMainMenu: false,
	inBattle: false,
	paused: false,

	// Enemies
    enemies: [
        {
			name: "Hoplite", health: 75, speed: 2.5, x: 540, y: 0, w: 117, h: 165, 
			lD: 4, hD: 7, lC: 900, hC: 1500, lR: 78, hR: 110, lS: 200, hS: 270,
			bC: 4000, bD: 3000, lightChance: 0.70, heavyChance: 0.25, blockChance: 0.2,
			defeated: localStorage.getItem("hopliteDefeated") === "true",
			attackSound: audios.hopliteAttacks, hitSound: audios.hopliteAttacked, deathSound: audios.hopliteDeath,
		},
		{
			name: "Banshee", health: 60, speed: 2.7, x: 520, y: 0, w: 114, h: 160, 
			lD: 5, hD: 8, lC: 600, hC: 1200, lR: 57, hR: 84, lS: 150, hS: 200, 
			sC: 5000, lightChance: 0.65, heavyChance: 0.25, screamChance: 0.3,
			defeated: localStorage.getItem("bansheeDefeated") === "true",
			attackSound: audios.bansheeAttacks, hitSound: audios.bansheeAttacked, deathSound: audios.bansheeDeath,
		},
		{
			name: "Satyr", health: 110, speed: 3.2, x: 580, y: 0, w: 148, h: 227, 
			lD: 8, hD: 13, lC: 720, hC: 1400, lR: 123, hR: 115, lS: 270, hS: 390,
			bC: 3000, bD: 4000, lightChance: 0.65, heavyChance: 0.45, blockChance: 0.35,
			defeated: localStorage.getItem("satyrDefeated") === "true",
			attackSound: audios.satyrAttacks, hitSound: audios.satyrAttacked, deathSound: audios.satyrDeath,
		},
		{
			name: "Gorgon", health: 90, speed: 2.6, x: 580, y: 0, w: 122, h: 182, 
			lD: 6, hD: 10, lC: 670, hC: 1300, lR: 70, hR: 110, lS: 170, hS: 240, 
			pC: 4500, lightChance: 0.65, heavyChance: 0.25, petrifyChance: 0.25,
			defeated: localStorage.getItem("gorgonDefeated") === "true",
			attackSound: audios.gorgonAttacks, hitSound: audios.gorgonAttacked, deathSound: audios.gorgonDeath,
		},
		{
			name: "Minotaur", health: 155, speed: 1.9, x: 500, y: 0, w: 185, h: 219,  
			lD: 13, hD: 17, lC: 1200, hC: 1800, lR: 135, hR: 182, lS: 400, hS: 600, 
			bC: 5500, bD: 2000, lightChance: 0.65, heavyChance: 0.25, blockChance: 0.3,
			defeated: localStorage.getItem("minotaurDefeated") === "true",
			attackSound: audios.minotaurAttacks, hitSound: audios.minotaurAttacked, deathSound: audios.minotaurDeath,
		},
		{
			name: "Medusa", health: 125, speed: 2.9, x: 550, y: 0, w: 132, h: 195, 
			lD: 7, hD: 11, lC: 600, hC: 1200, lR: 71, hR: 103, lS: 220, hS: 300, 
			pC: 3200, lightChance: 0.65, heavyChance: 0.25, petrifyChance: 0.5,
			defeated: localStorage.getItem("medusaDefeated") === "true",
			attackSound: audios.medusaAttacks, hitSound: audios.medusaAttacked, deathSound: audios.medusaDeath,
		},
		{
			name: "Cyclops", health: 210, speed: 1.6, x: 542, y: 0, w: 260, h: 350,
			lD: 16, hD: 22, lC: 1100, hC: 1600, lR: 154, hR: 274, lS: 500, hS: 900,
			lightChance: 0.6, heavyChance: 0.4,
			defeated: localStorage.getItem("cyclopsDefeated") === "true",
			attackSound: audios.cyclopsAttacks, hitSound: audios.cyclopsAttacked, deathSound: audios.cyclopsDeath,
		},
		{
			name: "Hades", health: 255, speed: 2.9, x: 599, y: 0, w: 265, h: 277,
			lD: 20, hD: 25, lC: 750, hC: 1400, lR: 199, hR: 210, lS: 500, hS: 990, 
			sTC: 4200, sTD: 5000, gC: 5000, gD: 1700, lightChance: 0.55, heavyChance: 0.5, soulTakeChance: 0.2, graspChance: 0.3,
			defeated: localStorage.getItem("hadesDefeated") === "true",
			attackSound: audios.hadesAttacks, hitSound: audios.hadesAttacked, deathSound: audios.hadesDeath,
		},
		{
			name: "Hermes", health: 200, speed: 5.9, x: 599, y: 0, w: 75, h: 159,
			lD: 14, hD: 17, lC: 200, hC: 400, lR: 67, hR: 79, lS: 200, hS: 300, 
			dC: 1500, ssC: 2300, lightChance: 0.5, heavyChance: 0.5, dodgeChance: 0.7, speedStrikeChance: 0.55,
			defeated: localStorage.getItem("hermesDefeated") === "true",
			attackSound: audios.hermesAttacks, hitSound: audios.hermesAttacked, deathSound: audios.hermesDeath,
		},
		{
			name: "Hercules", health: 290, speed: 2.78, x: 540, y: 0, w: 157, h: 225,
			lD: 30, hD: 37, lC: 700, hC: 1600, lR: 116, hR: 171, lS: 600, hS: 1100, 
			bC: 5500, bD: 1700, sC: 3500, lightChance: 0.5, heavyChance: 0.5, blockChance: 0.45, smashChance: 0.4,
			defeated: localStorage.getItem("herculesDefeated") === "true",
			attackSound: audios.herculesAttacks, hitSound: audios.herculesAttacked, deathSound: audios.herculesDeath,
		},
		{
			name: "Zeus", health: 350, speed: 3.2, x: 666, y: 0, w: 130, h: 174, 
			lD: 25, hD: 32, lC: 550, hC: 1100, lR: 94, hR: 99, lS: 870, hS: 1450, 
			bC: 7000, bD: 2000, tC: 2760, lightChance: 0.5, heavyChance: 0.5, blockChance: 0.6, teleportChance: 0.35,
			defeated: localStorage.getItem("zeusDefeated") === "true",
			attackSound: audios.zeusAttacks, hitSound: audios.zeusAttacked, deathSound: audios.zeusDeath,
		}
    ],
	currentEnemy: 0,

	get hoplite() { return this.enemies[0] },
    get banshee() { return this.enemies[1] },
	get satyr() { return this.enemies[2] },
	get gorgon() { return this.enemies[3] },
    get minotaur() { return this.enemies[4] },
    get medusa() { return this.enemies[5] },
    get cyclops() { return this.enemies[6] },
	get hades() { return this.enemies[7] },
    get hermes() { return this.enemies[8] },
    get hercules() { return this.enemies[9] },
    get zeus() { return this.enemies[10] },

	eHealth: 0,
	eH: 0,
	eW: 0,

	// Key event handlers
	keys: {},
	keydownHandler(event) { 
		if (event.repeat) return;
		globals.keys[event.key] = true;
	},
	keyupHandler(event) { 
		globals.keys[event.key] = false; 
		if (event.key.toLowerCase() === 'q') globals.kratos.blocking = false;
	},
	
	mKey: undefined,
	cKey: undefined,

	navKeys: undefined,
	hotbarKeys: undefined,

	frameCount: undefined,

	//Health update
	healthUpdate(healthBar, healthFiller) {
		const health = this.kratos.health;

		// Update health text
		document.getElementById('Health').innerText = health;
		// Update health bar
		healthFiller.style.width = `${health}%`;

		// ----- Bar width logic -----
		if (health === 200) {
			healthBar.style.width = '150px';
		} else if (health > 100) {
			healthBar.style.width = `${health / 2 + 25}px`;
		} else if (health > 50) {
			healthBar.style.width = '75px';
		}

		// ----- Color + state logic -----
		if (health <= 0) {
			healthFiller.style.width = '0';
			death(this);
			return;
		}

		if (health <= 25) {
			healthFiller.style.background = '#900604';
			lowHealth(this);
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014';
		} else if (health <= 100) {
			healthFiller.style.background = '#32cd33';
		} else {
			healthFiller.style.background = '#299617';
		}
	},

	playCaudio(aE, volume = 1) {
		const audio = aE.cloneNode();
		audio.volume = volume;
		audio.play();
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
		if (this.currentEnemy <= 7) {
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
		document.getElementById('noti-text').innerText = this.currentEnemy !== 7 ? `${this.enemies[this.currentEnemy + 1].name} battle now unlocked` : "Olympus is now unlocked";
		setTimeout(() => { this.notification.style.animation = 'hide 0.7s linear forwards' }, 4000 );
	},

	resetThem() {
		// Kratos reset
		this.kratos.h = 159;
		this.kratos.w = 150;
		this.kratos.x = 20;
		this.kratos.y = 0;
		this.kratos.facing = "right";
		this.kratos.velX = 0;
		this.kratos.velY = 0;
		this.kratos.hitUntil = 0;
		this.kratos.lastLattack = 0;
		this.kratos.lastHattack = 0;
		this.kratos.deathTime = 0;
		this.kratos.alpha = 1;
		
		// Enemy reset
		this.enemies[this.currentEnemy].w = this.eW;
		this.enemies[this.currentEnemy].h = this.eH;
		this.enemies[this.currentEnemy].health = this.eHealth;
		this.enemies[this.currentEnemy].x = 555;
		this.enemies[this.currentEnemy].y = 0;
	}
};

if (localStorage.getItem("potions")) localStorage.removeItem("potions"); // If your local storage has potions in it, then it will be removed.

// Screen and window size check

console.log("Screen dimentions:", screen.width, screen.height);
console.log("Window dimentions:", window.innerWidth, window.innerHeight);

window.devicePixelRatio = 1;

const phoneWarning = document.getElementById("phone-warning");

if (screen.width <= 455 || window.width <= 455) {
	globals.game.style.display = "none";
	phoneWarning.style.display = "block";
}

// Saved volumes settings

function setVolumes() {
	if (globals.musicVolume !== 100) [globals.audios.mainTheme, globals.audios.battleTheme, globals.audios.battleTheme2, globals.audios.battleTheme3, globals.audios.cyclopsBattle, globals.audios.hadesBattle, globals.audios.hermesBattle, globals.audios.herculesBattle, globals.audios.zeusBattle].forEach((song) => song.volume = globals.musicVolume / 100)
	if (globals.ambienceVolume !== 100) [globals.audios.underworldAm, globals.audios.olympusAm].forEach((song) => { song.volume = globals.ambienceVolume / 100 })
}

setVolumes();

const h1 = document.getElementById('click-start');

h1.onclick = () => {
	globals.game.style.alignItems = 'center';
	globals.game.style.justifyContent = 'center';
	mainMenu(globals);
}