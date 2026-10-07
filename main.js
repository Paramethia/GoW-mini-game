import { ui, music, ambience, dialogue, sfx } from './src/audio.js';
import mainMenu from './src/scenes/main-menu.js';
import { lowHealth, death } from './src/components/engine.js';

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

    audio: {
		...ui,
		...music,
		...ambience,
		...dialogue,
		...sfx
	},

    // Kratos Stats
    kratos: {
		w: 150, h: 159, x: 20, y: 0, velX: 0, velY: 0, 
		speed: localStorage.getItem('hermesDefeated') ? 4.5 : 3.2,
		health: Number(localStorage.getItem('health')) || 100, 
		maxHealth: Number(localStorage.getItem('maxHealth')) || 100,
		orbs: Number(localStorage.getItem('orbs')) || 0,
		inventory: JSON.parse(localStorage.getItem('inventory')) || [],
	},
	currentWeapon: Number(localStorage.getItem('currentWeapon')) || 0,

	// Smithy weapons
    weapons: [
		{ 
			name: "Nemesis whip", 
			lD: 7, hD: 11, lC: 480, hC: 920, lR: 107, hR: 235, lS: 480, hS: 700, lK: 4.5, hK: 8.5,
			price: 70, lit: false,
			sound: sfx.nwSound,
			lAttack: sfx.nwLA,
			hAttack: sfx.nwHA,
		},
		{
			name: "Arms of Sparta",
			lD: 9, hD: 12, lC: 420, hC: 750, lR: 140, hR: 150, lS: 300, hS: 520, lK: 7, hK: 10,
			price: 245, lit: false,
			sound: sfx.aosSound,
			lAttack: sfx.aosLA,
			hAttack: sfx.aosHA,
		},
		{ 
			name: "Gauntlet of Zeus", 
			lD: 15, hD: 22, lC: 700, hC: 1300, lR: 93, hR: 97, lS: 370, hS: 450, lK: 10, hK: 15,
			price: 135, lit: false,
			sound: sfx.gozSound,
			lAttack: sfx.gozLA,
			hAttack: sfx.gozHA,
		},
    ],

    // Settings
	loaded: false,
    play: true,
    set: false,
	uiVolume: localStorage.getItem('uiVolume') ? Number(localStorage.getItem('uiVolume')) : 100,
    musicVolume: localStorage.getItem('musicVolume') ? Number(localStorage.getItem('musicVolume')) : 100,
    ambienceVolume: localStorage.getItem('ambienceVolume') ? Number(localStorage.getItem('ambienceVolume')) : 100,
	dialogueVolume: localStorage.getItem('dialogueVolume') ? Number(localStorage.getItem('dialogueVolume')) : 100,
	sfxVolume: localStorage.getItem('sfxVolume') ? Number(localStorage.getItem('sfxVolume')) : 100,
	paused: false,

	// Advanced options
	hardcore: localStorage.getItem('hardcore') === 'true',
	devMode: localStorage.getItem('developer') === 'true',
	freePlay: localStorage.getItem('freeplay') === 'true',

	// Conditions
	inMainMenu: false,
	inSparta: false,
	inBattle: false,
	beatGame: localStorage.getItem("zeusDefeated") === "true",

	// Enemies
    enemies: [
		{
			name: "Undead Archer", health: 30, speed: 2, x: 540, y: 0, w: 137, h: 175,
			lD: 2, sD: 3, lK: 1.5, sK: 3, lC: 1150, sC: 1400, lR: 82, sR: 500, lS: 100, sS: 170, 
			sound: ui.uArcherS,
			orbs: [{type: "green", amount: 3}, {type: "red", amount: 2}],
			defeated: localStorage.getItem("undeadarcherDefeated") === "true",
			attackSound: sfx.archerAttacks, hitSound: sfx.archerAttacked, deathSound: sfx.archerDeath,
		},
		{
			name: "Undead Legionnaire", health: 40, speed: 2, x: 540, y: 0, w: 142, h: 171, 
			lD: 3, hD: 4, lK: 3, hK: 5, lC: 1200, hC: 1500, lR: 125, hR: 122, lS: 150, hS: 200,
			lightChance: 0.70, heavyChance: 0.30, sound: ui.uLegionnaireS,
			orbs: [{type: "green", amount: 4}, {type: "red", amount: 3}],
			defeated: localStorage.getItem("undeadlegionnaireDefeated") === "true",
			attackSound: sfx.legionnaireAttacks, hitSound: sfx.legionnaireAttacked, deathSound: sfx.undeadLdeath,
		},
		{
			name: "Cursed Legionnaire", health: 65, speed: 2.2, x: 540, y: 0, w: 85, h: 165, 
			lD: 5, hD: 7.5, lK: 4, hK: 8, lC: 1000, hC: 1350, lR: 105, hR: 125, lS: 200, hS: 280,
			leapC: 4000, lightChance: 0.60, heavyChance: 0.30, leapChance: 0.25, sound: ui.cLegionnaireS,
			orbs: [{type: "green", amount: 6}, {type: "red", amount: 5}],
			defeated: localStorage.getItem("cursedlegionnaireDefeated") === "true",
			attackSound: sfx.legionnaireAttacks, hitSound: sfx.legionnaireAttacked, deathSound: sfx.cursedLdeath,
		},
		{
			name: "Banshee", health: 60, speed: 2.7, x: 520, y: 0, w: 114, h: 160, 
			lD: 2, hD: 5, lK: 2, hK: 4, lC: 600, lC: 1200, lR: 57, hR: 84, lS: 150, hS: 200, 
			sC: 5000, lightChance: 0.65, heavyChance: 0.25, screamChance: 0.3, sound: ui.bansheeS,
			orbs: [{type: "green", amount: 7}, {type: "red", amount: 7}, {type: "gold", amount: 1}],
			defeated: localStorage.getItem("bansheeDefeated") === "true",
			attackSound: sfx.bansheeAttacks, hitSound: sfx.bansheeAttacked, deathSound: sfx.bansheeDeath,
		},
		{
			name: "Fallen Legionnaire", health: 85, speed: 2.5, x: 540, y: 0, w: 140, h: 172, 
			lD: 6.5, hD: 10, lK: 5, hK: 10, lC: 1000, hC: 1200, lR: 142, hR: 170, lS: 240, hS: 330,
			leapC: 3000, bC: 5000, bD: 2500, lightChance: 0.55, heavyChance: 0.30, blockChance: 0.25, leapChance: 0.35, 
			orbs: [{type: "green", amount: 10}, {type: "red", amount: 12}], sound: ui.fLegionnaireS,
			defeated: localStorage.getItem("fallenlegionnaireDefeated") === "true",
			attackSound: sfx.legionnaireAttacks, hitSound: sfx.legionnaireAttacked, deathSound: sfx.fallenLdeath,
		},
		{
			name: "Gorgon", health: 90, speed: 2.6, x: 580, y: 0, w: 122, h: 182, 
			lD: 3.5, hD: 6.5, lK: 3, hK: 5, lC: 670, hC: 1300, lR: 70, hR: 110, lS: 170, hS: 240, 
			pC: 4500, lightChance: 0.65, heavyChance: 0.25, petrifyChance: 0.25, sound: ui.gorgonS,
			orbs: [{type: "green", amount: 8}, {type: "red", amount: 9}, {type: "gold", amount: 3}],
			defeated: localStorage.getItem("gorgonDefeated") === "true",
			attackSound: sfx.gorgonAttacks, hitSound: sfx.gorgonAttacked, deathSound: sfx.gorgonDeath,
		},
		{
			name: "Medusa", health: 125, speed: 2.9, x: 550, y: 0, w: 132, h: 195, 
			lD: 4, hD: 8, lK: 4.5, hK: 8, lC: 600, hC: 1200, lR: 71, hR: 103, lS: 220, hS: 300, 
			pC: 3200, lightChance: 0.65, heavyChance: 0.35, petrifyChance: 0.5, sound:ui.medusaS,
			orbs: [{type: "green", amount: 17}, {type: "red", amount: 20}, {type: "gold", amount: 4}],
			defeated: localStorage.getItem("medusaDefeated") === "true",
			attackSound: sfx.medusaAttacks, hitSound: sfx.medusaAttacked, deathSound: sfx.medusaDeath,
		},
        {
			name: "Hoplite", health: 70, speed: 2.4, x: 540, y: 0, w: 117, h: 165, 
			lD: 4, hD: 7, lK: 4, hK: 7, lC: 900, hC: 1500, lR: 78, hR: 110, lS: 200, hS: 270,
			bC: 4000, bD: 3000, lightChance: 0.70, heavyChance: 0.30, blockChance: 0.2, sound: ui.hopliteS,
			orbs: [{type: "green", amount: 7}, {type: "red", amount: 6}],
			defeated: localStorage.getItem("hopliteDefeated") === "true",
			attackSound: sfx.hopliteAttacks, hitSound: sfx.hopliteAttacked, deathSound: sfx.hopliteDeath,
		},
		{
			name: "Satyr", health: 110, speed: 3.2, x: 580, y: 0, w: 148, h: 227, 
			lD: 7, hD: 11, lK: 6, hK: 9, lC: 720, hC: 1400, lR: 123, hR: 115, lS: 270, hS: 390,
			bC: 3000, bD: 4000, lightChance: 0.65, heavyChance: 0.45, blockChance: 0.35, sound: ui.satyrS,
			orbs: [{type: "green", amount: 13}, {type: "red", amount: 14}],
			defeated: localStorage.getItem("satyrDefeated") === "true",
			attackSound: sfx.satyrAttacks, hitSound: sfx.satyrAttacked, deathSound: sfx.satyrDeath,
		},
		{
			name: "Minotaur", health: 155, speed: 1.9, x: 500, y: 0, w: 185, h: 219,  
			lD: 10.5, hD: 14, lK: 7.5, hK: 11, lC: 1200, hC: 1800, lR: 100, hR: 182, lS: 400, hS: 600, 
			bC: 5500, bD: 2000, lightChance: 0.65, heavyChance: 0.25, blockChance: 0.3, sound: ui.minotaurS,
			orbs: [{type: "green", amount: 17}, {type: "red", amount: 17}, {type: "gold", amount: 2}],
			defeated: localStorage.getItem("minotaurDefeated") === "true",
			attackSound: sfx.minotaurAttacks, hitSound: sfx.minotaurAttacked, deathSound: sfx.minotaurDeath,
		},
		{
			name: "Cyclops", health: 210, speed: 1.6, x: 542, y: 0, w: 260, h: 350,
			lD: 15, hD: 21, lK: 10, hK: 14, lC: 1100, hC: 1600, lR: 89, hR: 204, lS: 500, hS: 900,
			lightChance: 0.6, heavyChance: 0.4, sound: ui.cyclopsS,
			orbs: [{type: "green", amount: 25}, {type: "red", amount: 35}, {type: "gold", amount: 4}],
			defeated: localStorage.getItem("cyclopsDefeated") === "true",
			attackSound: sfx.cyclopsAttacks, hitSound: sfx.cyclopsAttacked, deathSound: sfx.cyclopsDeath,
		},
		{
			name: "Hades", health: 255, speed: 2.9, x: 599, y: 0, w: 265, h: 277,
			lD: 17, hD: 23, lK: 8.4, hK: 12.7, lC: 750, hC: 1400, lR: 109, hR: 130, lS: 500, hS: 990, 
			sTC: 4200, sTD: 5000, gC: 5000, gD: 1700, lightChance: 0.55, heavyChance: 0.5, soulTakeChance: 0.2, graspChance: 0.3,
			orbs: [{type: "green", amount: 29}, {type: "red", amount: 48}, {type: "gold", amount: 7}],
			god: true, defeated: localStorage.getItem("hadesDefeated") === "true",
			attackSound: sfx.hadesAttacks, hitSound: sfx.hadesAttacked, deathSound: sfx.hadesDeath,
			reward: { 
				name: "Claws of Hades", 
				lD: 12, hD: 16, lC: 340, hC: 740, lR: 99, hR: 245, lS: 300, hS: 380, lK: 8, hK: 12,
				lit: false, sound: sfx.cohSound,
				lAttack: sfx.cohLA,
				hAttack: sfx.cohHA,
			}
		},
		{
			name: "Hermes", health: 200, speed: 5.9, x: 599, y: 0, w: 75, h: 159,
			lD: 14, hD: 17, lK: 8, hK: 9, lC: 200, hC: 400, lR: 67, hR: 79, lS: 200, hS: 300, 
			dC: 1500, ssC: 2300, lightChance: 0.5, heavyChance: 0.5, dodgeChance: 0.7, speedStrikeChance: 0.55,
			orbs: [{type: "green", amount: 33}, {type: "red", amount: 55}, {type: "gold", amount: 8}],
			god: true, defeated: true, defeated: localStorage.getItem("hermesDefeated") === "true",
			attackSound: sfx.hermesAttacks, hitSound: sfx.hermesAttacked, deathSound: sfx.hermesDeath,
		},
		{
			name: "Hercules", health: 290, speed: 2.78, x: 540, y: 0, w: 157, h: 225,
			lD: 28, hD: 35, lK: 14, hK: 18, lC: 900, hC: 1600, lR: 86, hR: 141, lS: 600, hS: 1100, 
			bC: 5500, bD: 1700, sC: 3500, lightChance: 0.5, heavyChance: 0.5, blockChance: 0.45, smashChance: 0.4,
			orbs: [{type: "green", amount: 38}, {type: "red", amount: 70}, {type: "gold", amount: 9}],
			god: true, defeated: localStorage.getItem("herculesDefeated") === "true",
			attackSound: sfx.herculesAttacks, hitSound: sfx.herculesAttacked, deathSound: sfx.herculesDeath,
			reward: { 
				name: "Nemean cestus", 
				lD: 22, hD: 30, lC: 800, hC: 1500, lR: 95, hR: 100, lS: 440, hS: 520, lK: 13, hK: 18,
				lit: false, sound: sfx.ncSound,
				lAttack: sfx.ncLA,
				hAttack: sfx.ncHA,
			}
		},
		{
			name: "Zeus", health: 350, speed: 3.2, x: 666, y: 0, w: 130, h: 174, 
			lD: 21, hD: 27, lK: 11, hK: 15, lC: 550, hC: 1100, lR: 94, hR: 99, lS: 870, hS: 1450, 
			bC: 7000, bD: 2000, tC: 2760, lightChance: 0.5, heavyChance: 0.5, blockChance: 0.6, teleportChance: 0.35,
			orbs: [{type: "green", amount: 45}, {type: "red", amount: 89}, {type: "gold", amount: 11}],
			god: true, defeated: localStorage.getItem("zeusDefeated") === "true",
			attackSound: sfx.zeusAttacks, hitSound: sfx.zeusAttacked, deathSound: sfx.zeusDeath,
			reward: { 
				name: "Blade of Olympus", 
				lD: 30, hD: 45, lC: 888, hC: 1700, lR: 78, hR: 89, lS: 500, hS: 590, lK: 11, hK: 14, 
				lit: false, sound: sfx.swordThud,
				lAttack: sfx.booLA,
				hAttack: sfx.booHA,
			}
		}
    ],
	
	currentEnemy: null,

	getEnemy (eName) { return this.enemies.find(enemy => enemy.name === eName) },
	getEnemies(eNames) {
		if (!eNames) throw new Error("No enemies provided");
		const enemies = [];
		for (const name of eNames) {
			const enemy = this.getEnemy(name);
			if (enemy) enemies.push(enemy);
		}
		return enemies.length ? enemies : null;
	},

	// Battles
	battles: {
		athens: [
			{
				name: "Duo Undead Legionnaires", location: "Aegean sea", bg: "Imagery/battle/Aegean sea battle 1.png", complete: false,
				get enemies() { return globals.getEnemies(["Undead Legionnaire", "Undead Legionnaire"]) }, bT: music.athensBattleT1,
			},
			{
				name: "Squad Undead Legionnaires", location: "Aegean sea", bg: "Imagery/battle/Aegean sea battle 1.png", complete: false, bT: music.athensBattleT1,
				get enemies() { return globals.getEnemies(["Undead Legionnaire", "Undead Legionnaire", "Undead Legionnaire", "Undead Legionnaire"]) },
			},
			{
				name: "Undead Legionnaires & Archers", location: "Aegean sea", bg: "Imagery/battle/Aegean sea battle 2.png", complete: false,
				get enemies() { return globals.getEnemies(["Undead Legionnaire", "Undead Legionnaire", "Undead Archer", "Undead Archer"]) }, bT: music.athensBattleT1,
			},
			{
				name: "Cursed Legionnaires x2", location: "Aegean sea", bg: "Imagery/battle/Aegean sea battle 3.png", complete: false,
				get enemies() { return globals.getEnemies(["Cursed Legionnaire", "Cursed Legionnaire"]) }, bT: music.athensBattleT2,
			},
			{
				name: "Legionnaires & Archers", location: "Athens docks", bg: "Imagery/battle/Athens docks 1.png", complete: false, bT: music.athensBattleT2,
				get enemies() { return globals.getEnemies(["Cursed Legionnaire", "Cursed Legionnaire", "Undead Legionnaire", "Undead Archer", "Undead Archer"]) },
			},
			{
				name: "Cursed Legionnaires x4", location: "Athens docks", bg: "Imagery/battle/Athens docks 2.png", complete: false, bT: music.athensBattleT2,
				get enemies() { return globals.getEnemies(["Cursed Legionnaire", "Cursed Legionnaire", "Cursed Legionnaire", "Cursed Legionnaire"]) },
			},
			{
				name: "Fallen & Cursed Legionnaire", location: "Athens docks", bg: "Imagery/battle/Athens legionnaires battle.png", complete: false,
				get enemies() { return globals.getEnemies(["Fallen Legionnaire", "Cursed Legionnaire"]) }, bT: music.athensBattleT3, gL: 488
			},
			{
				name: "Fallen Legionnaire duo", location: "Athens docks", bg: "Imagery/battle/Athens legionnaires battle.png", complete: false,
				get enemies() { return globals.getEnemies(["Fallen Legionnaire", "Fallen Legionnaire"]) }, bT: music.athensBattleT3, gL: 488
			},
			{
				name: "Banshee & Cursed Legionnaire", location: "Athens docks bridge", bg: "Imagery/battle/Athens after docks.png", complete: false,
				get enemies() { return globals.getEnemies(["Banshee", "Cursed Legionnaire"]) }, bT: music.athensBattleT4,
			},
			{
				name: "Banshee & Fallen Legionnaire", location: "Athens docks bridge", bg: "Imagery/battle/Athens after docks.png", complete: false,
				get enemies() { return globals.getEnemies(["Banshee", "Fallen Legionnaire"]) }, bT: music.athensBattleT4,
			},
			{
				name: "Gorgon & Cursed Legionnaire", location: "Gates of Athens", bg: "Imagery/battle/Gates of Athens.png", complete: false,
				get enemies() { return globals.getEnemies(["Gorgon", "Cursed Legionnaire"]) }, bT: music.athensBattleT4,
			},
			{
				name: "Petrifiers", location: "Gates of Athens", bg: "Imagery/battle/Medusa battle area.png", complete: false,
				get enemies() { return globals.getEnemies(["Medusa", "Gorgon"]) }, bT: music.medusaBattleT,
			},
		],
		underworld: [
			{
				name: "Hoplite duo", location: "Underworld temple entrance", bg: "Imagery/battle/Underworld entrance.png", complete: false,
				get enemies() { return globals.getEnemies(["Hoplite", "Hoplite"]) }, bT: music.underworldBattleT1,
			},
			{
				name: "Hoplite trio", location: "Underworld temple entrance", bg: "Imagery/battle/Underworld entrance.png", complete: false,
				get enemies() { return globals.getEnemies(["Hoplite", "Hoplite", "Hoplite"]) }, bT: music.underworldBattleT1,
			},
			{
				name: "Hoplite & Legionnaires", location: "Underworld temple entrance", bg: "Imagery/battle/Underworld after entrance.png", complete: false,
				get enemies() { return globals.getEnemies(["Hoplite", "Fallen Legionnaire", "Cursed Legionnaire"]) }, bT: music.underworldBattleT1,
			},
			{
				name: "Satyr", location: "Temple scorched passage", bg: "Imagery/battle/Underworld scorched passage.png", complete: false,
				get enemies() { return globals.getEnemies(["Satyr"]) }, bT: music.underworldBattleT2,
			},
			{
				name: "Satyr X Hoplite", location: "Temple scorched passage", bg: "Imagery/battle/Underworld scorched passage.png", complete: false,
				get enemies() { return globals.getEnemies(["Satyr", "Hoplite"]) }, bT: music.underworldBattleT2,
			},
			{
				name: "Minotaur", location: "Temple ashen keep", bg: "Imagery/battle/Underworld ashen keep.png", complete: false,
				get enemies() { return globals.getEnemies(["Minotaur"]) }, bT: music.underworldBattleT3,
			},
			{
				name: "Minotaur X Satyr", location: "Temple ashen keep", bg: "Imagery/battle/Underworld ashen keep.png", complete: false,
				get enemies() { return globals.getEnemies(["Minotaur", "Satyr"]) }, bT: music.underworldBattleT3,
			},
			{
				name: "Cyclops", location: "Temple ashen keep", bg: "Imagery/battle/Underworld ashen keep.png", complete: false,
				get enemies() { return globals.getEnemies(["Cyclops"]) }, bT: music.cyclopsBattleT,
			},
			{
				name: "Hades", location: "Blighted sanctum", bg: "Imagery/battle/Hades battle area.png", complete: false,
				get enemies() { return globals.getEnemies(["Hades"]) }, bT: music.hadesBattleT,
			},
		],
		olympus: [
			{
				name: "Hermes", location: "Blighted sanctum", bg: "Imagery/battle/Hermes battle area.png", complete: false,
				get enemies() { return globals.getEnemies(["Hermes"]) }, bT: music.underworldBattleT1,
			},
			{
				name: "Hercules", location: "Olmpus pillars", bg: "Imagery/battle/Hermes battle area.png", complete: false,
				get enemies() { return globals.getEnemies(["Hercules"]) }, bT: music.underworldBattleT1, gL: 480,
			},
			{
				name: "Zeus", location: "Blighted sanctum", bg: "Imagery/battle/Zeus battle area.png", complete: false,
				get enemies() { return globals.getEnemies(["Zeus"]) }, bT: music.underworldBattleT1,
			},
		]
	},

	currentBattle: JSON.parse(localStorage.getItem("currentBattle")) || null,
	placeBattles: null,
	battlePlace: "",

	getBattles(place) { 
		if (!place) return [...this.battles.athens, ...this.battles.underworld, ...this.battles.olympus];

		const battles = this.battles[place.toLowerCase()];
		if (!battles) throw new Error(`No battles found for ${place}`);
		return battles
	},
	selectBattle(place) {
		if (!place) throw new Error("No place/battles was provided")

		this.battlePlace = place;
		this.placeBattles = this.getBattles(place);

		// No current battle → start at the beginning
		if (!this.currentBattle) {
			console.log(`No battle selected. Restarting to first battle for ${place}...`);
			this.currentBattle = this.placeBattles[0];
			return;
		}

		let bIndex = this.placeBattles.indexOf(this.currentBattle);
		if (bIndex === -1) {
			console.log("Cannot find battle index. Retrying once more...");
			this.placeBattles.forEach((battle, index) => { if (battle.name === this.currentBattle.name) bIndex = index })
		}

		// Current battle doesn't belong to this location → Reset it
		if (bIndex === -1) {
			console.log(`Selected battle cannot be found for ${place}. Restarting to first battle for ${place}...`);
			this.currentBattle = this.placeBattles[0];
			return;
		}

		// Current battle isn't complete yet → stay on it
		if (!this.currentBattle.complete) {
			return;
		} else this.battles[place.toLowerCase()][bIndex].complete = true

		// Move to the next battle, or loop back to the first
		const nextIndex = (bIndex + 1) % this.placeBattles.length;
		this.currentBattle = this.placeBattles[nextIndex];
	},

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

	playCaudio(aE, volume = 100) {
		const audio = aE.cloneNode();
		audio.volume = volume / 100;
		audio.play();
	},

	stopMusic() { 
		for (const song of Object.values(music)) {
			song.pause();
			song.currentTime = 0;
		}
	},

	stopAmbience() { 
		for (const audio of Object.values(ambience)) {
			audio.pause();
			audio.currentTime = 0;
		}
	},

	notify() {
		if (this.beatGame) return
		const nextPlace = this.battlePlace === "Athens" ? "Underworld" : this.battlePlace === "Underworld" ? "Olympus" : null
		this.notification.style.animation = 'notify 0.7s linear forwards';
		this.notification.style.display = 'inline-block';
		document.getElementById('noti-text').innerText = nextPlace && !this.beatGame ? `${nextPlace} battles now unlocked` : `Free play mode now unlcoked`;
		setTimeout(() => { this.notification.style.animation = 'hide 0.7s linear forwards' }, 5000 );
	},
	
	resetKratos() {
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
	},

	restart() {
		this.enemies.forEach((enemy) => enemy.defeated = false );
        ['health', 'maxHealth', 'orbs', 'inventory', 'currentWeapon', 'currentBattle', 'undeadarcherDefeated', 'undeadlegionnaireDefeated', 'cursedlegionnaireDefeated', 'fallenlegionnaireDefeated', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'gorgonDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hadesDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated'].forEach(save => localStorage.removeItem(save));
        this.kratos.health = 100;
		this.kratos.maxHealth = 100;
		this.kratos.orbs = 0;
        this.currentWeapon = 0;
        this.currentBattle = null;
        this.kratos.inventory = [{ 
			name: "Blades of chaos", 
			lD: 5, hD: 8, lC: 570, hC: 1200, lR: 90, hR: 180, lS: 200, hS: 330, lK: 5, hK: 10,
			sound: ui.bocSound,
			lAttack: sfx.bocLA,
			hAttack: sfx.bocHA,
		}];
	}
};

if (localStorage.getItem("healthBarOn")) { 
	console.log("Old save found. Deleting it...");
	localStorage.clear();  
}

// Screen and window size check

console.log("Screen dimentions:", screen.width, screen.height);
console.log("Window dimentions:", window.innerWidth, window.innerHeight);

window.devicePixelRatio = 1;

const phoneWarning = document.getElementById("phone-warning");

if (screen.width <= 455 || window.width <= 455) {
	globals.game.style.display = "none";
	phoneWarning.style.display = "block";
}

function orbsCount(place) {
	let redOrbs = 0;
	for (const battle of globals.battles[place.toLowerCase()]) {
		battle.enemies.forEach(enemy => {
			redOrbs += enemy.orbs[1].amount;
		});
	}
	console.log(`Red orbs you can get from ${place}:`, redOrbs)
}

orbsCount("Athens");
orbsCount("Underworld");
orbsCount("Olympus");

// Set inventory

const inventory = [{ 
	name: "Blades of chaos", 
	lD: 6, hD: 10, lC: 570, hC: 1200, lR: 90, hR: 180, lS: 200, hS: 350, lK: 5, hK: 10,
	sound: sfx.bocSound,
	lAttack: sfx.bocLA,
	hAttack: sfx.bocHA,
}];
const weapons = globals.weapons;

if (localStorage.getItem("inventory")) {
	weapons.push(globals.getEnemy("Hades").reward, globals.getEnemy("Hercules").reward, globals.getEnemy("Zeus").reward);
	weapons.forEach(weapon => {
		globals.kratos.inventory.forEach(invW => {
			if (weapon.name === invW.name) inventory.push(weapon);
		})
	})
}
globals.kratos.inventory = inventory;

// Saved volumes settings

function setVolumes() {
	if (globals.uiVolume !== 100) {
		for (const sound of Object.values(ui)) {
			sound.volume = globals.uiVolume / 100
		}
	}
	if (globals.musicVolume !== 100) {
		for (const song of Object.values(music)) {
			song.volume = globals.musicVolume / 100
		}
	}
	if (globals.ambienceVolume !== 100) {
		for (const amb of Object.values(ambience)) {
			amb.volume = globals.ambienceVolume / 100
		}
	}
	if (globals.dialogueVolume !== 100) {
		for (const dialog of Object.values(dialogue)) {
			if (dialog.length) { 
				dialog.forEach(audio => audio.volume = globals.dialogueVolume / 100);
				continue;
			}
			dialog.volume = globals.dialogueVolume / 100
		}
	}
	if (globals.sfxVolume !== 100) {
		for (const sound of Object.values(sfx)) {
			if (sound.length) continue;
			sound.volume = globals.sfxVolume / 100
		}
	}
}

setVolumes();

const h1 = document.getElementById('click-start');

h1.onclick = () => {
	globals.game.style.alignItems = 'center';
	globals.game.style.justifyContent = 'center';
	mainMenu(globals);
}