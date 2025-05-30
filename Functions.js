// Image declarations

let spartan = document.getElementById('Spartan');
let kratosAtSparta = document.getElementById('Kratos-at-Sparta');
let sparta = document.getElementById('Sparta');
let shop = document.getElementById('Shop');
let inShop = document.getElementById('In-shop');
let mVillager = document.getElementById('Mvillager');
let boc = document.getElementById('B-o-c');
let potion = document.getElementById('Potion');
let nemesisWhip = document.getElementById('Nemesis-whip');
let whipClaim = document.getElementById('Whip-claim');
let gauntletZeus= document.getElementById('Gauntlet-of-Zeus');
let gauntletClaim = document.getElementById('Gauntlet-claim');
let clawsHades = document.getElementById('Claws-of-Hades');
let clawsClaim = document.getElementById('Claws-claim');
let bladeOlympus = document.getElementById('Blade-of-Olympus');
let bladeClaim = document.getElementById('Blade-claim');
let underworld = document.getElementById('Underworld');
let kratosUnderworld = document.getElementById('Kratos-in-Underworld');
let hoplite = document.getElementById('Hoplite');
let hopliteAttack = document.getElementById('Hoplite-attack');
let hopliteKill = document.getElementById('Hoplite-kill');
let banshee = document.getElementById('Banshee');
let bansheeAttack= document.getElementById('Banshee-attack');
let bansheeKill = document.getElementById('Banshee-kill');
let satyr = document.getElementById('Satyr')
let satyrAttack = document.getElementById('Satyr-attack');
let satyrKill = document.getElementById('Satyr-kill');
let minotaur= document.getElementById('Minotaur');
let minotaurAttack= document.getElementById('Minotaur-attack');
let minotaurKill= document.getElementById('Minotaur-kill');
let medusa = document.getElementById('Medusa');
let medusaAttack = document.getElementById('Medusa-attack');
let medusaKill = document.getElementById('Medusa-kill');
let cyclops= document.getElementById('Cyclops');
let cyclopsAttack= document.getElementById('Cyclops-attack');
let cyclopsKill= document.getElementById('Cyclops-kill');
let mountOlympus= document.getElementById('Mount-Olympus');
let kratosOlympus = document.getElementById('Kratos-at-Olympus');
let hermes = document.getElementById('Hermes');
let hermesxkratos = document.getElementById('HermesxKratos');
let hermesFight = document.getElementById('Hermes-fight');
let hermesKill = document.getElementById('Hermes-kill');
let hercules = document.getElementById('Hercules');
let herculesxkratos = document.getElementById('HerculesxKratos');
let herculesFight = document.getElementById('Hercules-fight');
let herculesKill = document.getElementById('Hercules-kill');
let zeus = document.getElementById('Zeus');
let zeusxkratos = document.getElementById('ZeusxKratos');
let zeusFight= document.getElementById('Zeus-fight');
let zeusKill= document.getElementById('Zeus-kill');
let kratosRunning = document.getElementById('Kratos-running');
let youDead = document.getElementById('You-dead');
let kratosDead = document.getElementById('Kratos-dead');

const potionSrc = "https://res.cloudinary.com/dbdh6zbvt/image/upload/v1738178564/Health_potion_d6imqt.png";
const bocSrc = "https://res.cloudinary.com/dbdh6zbvt/image/upload/v1738164074/boc_ektqus.png";
const whipSrc = "https://res.cloudinary.com/dbdh6zbvt/image/upload/v1738164109/Nemesis_Whip_zpjpf2.png";
const gauntletSrc = "https://res.cloudinary.com/dbdh6zbvt/image/upload/v1738164444/goz_olnizs.webp";
const clawsSrc = "https://res.cloudinary.com/dbdh6zbvt/image/upload/v1738164448/coh_xwrxhs.png";
const bladeSrc = "https://res.cloudinary.com/dbdh6zbvt/image/upload/v1738164476/boo_hkffe6.png";

// Audio declarations

let menuTheme = new Audio('Audio/Main menu theme GoW 3 .mp3');
let hoverSound = new Audio('Audio/Hover sound GoW2 .mp3');
let selection = new Audio('Audio/GoW CoO Selection sound .mp3');
let selection2 = new Audio('Audio/Other selection sound GoW2 .mp3');
let returnSound = new Audio('Audio/GoW CoO Exit sound .mp3');
let swordThud = new Audio('Audio/Sword thud .mp3');
let hmmmm = new Audio('Audio/Hmm hmm Mc villager .mp3');
let noice = new Audio('Audio/Noice .mp3');
let bruh = new Audio('Audio/Bruh .mp3');
let bocSound = new Audio('Audio/Blades of chaos sound .mp3');
let gozSound = new Audio('Audio/Gauntlet of Zeus sound .mp3')
let nwSound = new Audio('Audio/Nemesis whip sound .mp3');
let cohSound = new Audio('Audio/Claws of Hades sound .mp3');
let ncSound = new Audio('Audio/Nemean cestus sound .mp3');
let brokie = new Audio('Audio/YOURE BROKE! .mp3');
let battleTheme = new Audio('Audio/GoW CoO battle theme .mp3');
let battleTheme2 = new Audio('Audio/GoW CoO battle theme 2.mp3');
let cyclopsBattle = new Audio('Audio/Cyclops battle theme .mp3');
let zeusBattle = new Audio('Audio/Battle theme Zeus .mp3');
let underworldAm = new Audio('Audio/Underworld ambience .mp3');
let hopliteSound = new Audio('Audio/Hoplite sound.mp3');
let hopliteAttacks = new Audio('Audio/Hoplite attacks .mp3');
let attacksHoplite = new Audio('Audio/Kratos attacks Hoplite .mp3');
let bansheeSound = new Audio('Audio/Banshee sound .mp3');
let bansheeAttacks = new Audio('Audio/Banshee attacks .mp3');
let bansheeAttacks2 = new Audio('Audio/Banshee attacks 2 .mp3');
let attacksBanshee = new Audio('Audio/Kratos attacks Banshee .mp3');
let satyrSound = new Audio('Audio/Satyr sound.mp3');
let satyrAttacks = new Audio('Audio/Satyr attacks .mp3');
let throwsSatyr = new Audio('Audio/Kratos throws Satyr .mp3');
let attacksSatyr = new Audio('Audio/Kratos attacks Satyr .mp3');
let minotaurSound = new Audio('Audio/Minotaur sound .mp3');
let minotaurAttacks = new Audio('Audio/Minotaur attacks .mp3');
let minotaurAttacks2 = new Audio('Audio/Minotaur attacks 2 .mp3');
let attacksMinotaur = new Audio('Audio/Kratos attacks Minotaur .mp3');
let medusaSound;
let medusaAttacks = new Audio('Audio/Medusa attacks Kratos .mp3');
let attacksMedusa = new Audio('Audio/Kratos attacks Medusa .mp3');
let olympusAm = new Audio('Audio/Olympus ambience .mp3');
let cyclopsSound = new Audio('Audio/Cyclops sound .mp3');
let cyclopsAttacks = new Audio('Audio/Cyclops attacks .mp3');
let cyclopsAttacks2 = new Audio('Audio/Cyclops attacks 2 .mp3');
let attacksCyclops = new Audio('Audio/Kratos attacks Cyclops .mp3');
let hermesLine = new Audio('Audio/You may have brute force.. but you lack speed. .mp3');
let hermesAttacks = new Audio('Audio/Hermes attacks Kratos .mp3');
let hermesAttacks2 = new Audio('Audio/Hermes attacks Kratos 2 .mp3');
let herculesLine = new Audio('Audio/Hello.. brother .mp3');
let herculesAttacks = new Audio('Audio/Hercules attacks Kratos .mp3');
let herculesAttacks2 = new Audio('Audio/Hercules attacks Kratos 2 .mp3');
let zeusLine = new Audio('Audio/Such chaos... I will have much to do after I kill you. .mp3');
let zeusAttacks = new Audio('Audio/Zeus attacks Kratos .mp3');
let attacksZeus = new Audio('Audio/Kratos attacks Zeus .mp3');
let attacks = new Audio('Audio/Kratos attacks .mp3');
let attacks2 = new Audio('Audio/Kratos attacks 2 .mp3');
let evadeSound  = new Audio('Audio/Evade sound .mp3');
let achievement = new Audio('Audio/Achievment sound .mp3');
let defeatSound = new Audio('Audio/Defeat sound .mp3');
let orbSound = new Audio('Audio/Orb collection sound .mp3');
let orbsSound = new Audio('Audio/Orbs collection sound .mp3');
let orbsSound2 = new Audio('Audio/Orbs collection sound 2 .mp3');
let orbsSound3 = new Audio('Audio/Orbs collection sound 3 .mp3');
let wonned = new Audio('Audio/Wonned .mp3');
let heartbeat = new Audio('Audio/Heartbeat .mp3');
let deathSound = new Audio('Audio/Kratos death sound GoW2 2 .mp3');
let deathScream = new Audio('Audio/Kratos death sound GoW2 .mp3');
let deathScream2 = new Audio('Audio/Kratos death sound GoW2 2 .mp3');
let ahShit = new Audio('Audio/Ah shit, here we go again .mp3');
let drink = new Audio('Audio/Drinking .mp3');

// Stats declarations

let exp = 0;
const savedExp = Number(localStorage.getItem('exp'));
    if (savedExp) exp = savedExp;
	
let health = 100;
const savedHealth = Number(localStorage.getItem('health'));
    if (savedHealth) health = savedHealth;
	
let orbs = 0;
const savedOrbs = Number(localStorage.getItem('orbs'));
    if (savedOrbs) orbs = savedOrbs;
	
let currentWeapon = 0;
const savedCurrentWeapon = Number(localStorage.getItem('currentWeapon'));
    if (savedCurrentWeapon) currentWeapon = savedCurrentWeapon;
let fighting;
let enemyHealth;

let inventory = ["Blades of chaos"];
const savedInventory = JSON.parse(localStorage.getItem('inventory'));
    if (savedInventory) inventory = savedInventory;
	
const weapons = [
    { name: "Blades of chaos", damage: 17 },
    { name: "Nemesis Whip", damage: 28},
    { name: "Gauntlet of Zeus", damage: 44 },
    { name: "Claws of Hades", damage: 64 },
    { name: "Blade of Olympus", damage: 88 }
];
const whip = weapons[1].name;
const gauntlet = weapons[2].name;
const claws = weapons[3].name;
const blade = weapons[4].name;

// Other declarations

const savedGame = savedExp || savedHealth || savedOrbs;
let inMainMenu = true;
let play = false;
let clicks = 0;
let set = false;
const savedHealthbarSet = localStorage.getItem('healthbarSet');
let hBarOn = savedHealthbarSet === 'true';
let musicSetOn = false;
let ambSetOn = false;
let musicVolume = 100;
const savedMusicVol = Number(localStorage.getItem('musicVolume'));
    if (savedMusicVol) musicVolume = savedMusicVol
let ambienceVolume = 100;
const savedAmbienceVol = Number(localStorage.getItem('ambienceVolume'));
    if (savedAmbienceVol) ambienceVolume = savedAmbienceVol
let musicVolumes = musicVolume / 100;
let ambienceVolumes = ambienceVolume / 100;
const savedExpandSet = localStorage.getItem('expandSet');
let expanded = savedExpandSet === 'true'
let count = 0;
let potionquantity = 0;
const savedPotions = Number(localStorage.getItem('potions'));
    if (savedPotions > 0) potionquantity = savedPotions
let bocClaimed = inventory.includes('Blades of chaos');
let whipClaimed =  inventory.includes(whip);
let gauntletClaimed = inventory.includes(gauntlet);
let clawsClaimed =  inventory.includes(claws);
let bladeClaimed =  inventory.includes(blade);
let timed = false;

// Enemies 

let enemies = [
    {
	    name: "Hoplite",
	    level: 2,
	    health: 55, 
		damage: 9
    },
    {
		name: "Banshee",
		level: 4,
		health: 80,
		damage: 17
    },
    {
        name: "Satyr",
        level: 5,
        health: 100,
		damage: 21
    },
    {
        name: "Minotaur",
        level: 6,
        health: 120,
		damage: 25
    },
    {
        name: "Medusa",
        level: 8,
        health: 150,
		damage: 33
    },
    {
        name: "Cyclops",
        level: 11,
        health: 180,
		damage: 45
    },
    {
        name: "Hermes",
        level: 14,
        health: 220, 
		damage: 44
    },
    {
        name: "Hercules",
        level: 17,
        health: 280,
		damage: 69
    },
    {
        name: "Zeus",
        level: 20,
        health: 350,
		damage: 82
    }
];

// Defeats check declarations

const savedHopDef = localStorage.getItem("hopliteDefeated")
let hopliteDefeated = savedHopDef === "true"
const savedBanDef = localStorage.getItem("bansheeDefeated")
let bansheeDefeated = savedBanDef === "true"
const savedSatDef = localStorage.getItem("satyrDefeated")
let satyrDefeated =  savedSatDef === "true"
const savedMinDef = localStorage.getItem("minotaurDefeated")
let minotaurDefeated = savedMinDef === "true"
const savedMedDef = localStorage.getItem("medusaDefeated")
let medusaDefeated =  savedMedDef === "true"
const savedCycDef = localStorage.getItem("cyclopsDefeated")
let cyclopsDefeated = savedCycDef === "true"
const savedHermDef = localStorage.getItem("hermesDefeated")
let hermesDefeated = savedHermDef === "true"
const savedHercDef = localStorage.getItem("herculesDefeated")
let herculesDefeated =  savedHercDef === "true"

// Text declarations

let defaultText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";

const porp = document.getElementById('porp');
const expText = document.getElementById('Exp-text');
    if (savedExp) expText.innerText = exp
const healthText = document.getElementById('Health');
    if (savedHealth) healthText.innerText = health
const healthtext = document.getElementById('Health-text');
const orbsText = document.getElementById('Orbs-text');
    if (savedOrbs) orbsText.innerText = orbs
const musicVolText = document.getElementById('music-volume');
const ambienceVolText = document.getElementById('ambience-volume');
const mainText = document.getElementById('Main-text');
    if (savedGame) { 
	    defaultText = "Welcome back to God of War. You already know what to do mos. \n ;-)";
	    mainText.innerText =  defaultText;
	}
const text = document.getElementById('Text');
const healthBarSet = document.getElementById('Hbar-set');
const musicSet = document.getElementById('Music-set');
const expandSet = document.getElementById('Expand-set');
const ambienceSet = document.getElementById('Ambience-set');
const musicVoltext = document.getElementById('other-music-volume');
    if (savedMusicVol) musicVoltext.innerText = musicVolume
const ambienceVoltext = document.getElementById('other-ambience-volume');
    if (savedAmbienceVol) ambienceVoltext.innerText = ambienceVolume
const musicVolelement = document.getElementById('music-vol');
const currentAmbVol = document.getElementById('amb-vol');
const maxed = document.getElementById('Maxed');
const pqText = document.getElementById('potion-quantity');
	if (savedPotions && savedPotions > 0) { 
	    pqText.style.display = 'inline'; 
		pqText.innerText = potionquantity;
	}
const sellText = document.getElementById('Sell-text');
const whipDamage = document.getElementById('Whip-damage');
    whipDamage.innerText = weapons[1].damage;
const gauntletDamage = document.getElementById('Gauntlet-damage');
    gauntletDamage.innerText = weapons[2].damage;
const clawsDamage = document.getElementById('Claws-damage');
    clawsDamage.innerText = weapons[3].damage;
const bladeDamage = document.getElementById('Blade-damage');
    bladeDamage.innerText = weapons[4].damage;
const enemyName = document.getElementById('Enemy-name');
const enemyInfo = document.getElementById('Enemy-info');
const enemyDamage = document.getElementById('enemy-damage');
const enemyHealthText = document.getElementById('Enemy-health');
const enemyhealthtext = document.getElementById('enemy-health');

// Container declarations

const notification = document.querySelector('.Noti');
const gamebox = document.querySelector('.Game');
const mmButtons = document.querySelector('.Main-menu');
const warning = document.querySelector('.Warning');
const options = document.querySelector('.Options');
const musicVolSlider = document.getElementById('music-vol-slider');
const ambVolSlider = document.getElementById('ambience-vol-slider');
const settings = document.querySelector('.Settings');
const musicSetCon = document.querySelector('.Music-con');
const ambSetCon = document.querySelector('.Ambience-con');
const conButtons = document.querySelector('.Controls');
const stats = document.querySelector('.Stats');
const healthBar = document.querySelector('.Health-bar');
const healthFiller = document.querySelector('.filler');
const sellCon = document.querySelector('.Sell-price');
const potionInfo = document.querySelector('.Potion-info');
const whipInfo = document.querySelector('.Whip-info');
const gauntletInfo = document.querySelector('.Gauntlet-info');
const clawsInfo = document.querySelector('.Claws-info');
const bladeInfo = document.querySelector('.BladeO-info');
const enemyStats = document.querySelector('.Enemy-stats');
const damageCon = document.querySelector('.Enemy-damage');
const eHealthBar = document.querySelector('.Ehealth-bar');
const eHealthFiller = document.querySelector('.Efiller');
const hotbar = document.querySelector('.Hotbar');
const pslot = document.getElementById('Pslot');
const slot1 = document.getElementById('Slot1');
    if (currentWeapon != 0) slot1.style.border = '1.8px solid #5a3910'
	if (!bocClaimed) { slot1.style.backgroundImage = 'none' }
const slot2 = document.getElementById('Slot2');
    if (whipClaimed) slot2.style.backgroundImage = `url(${whipSrc})`
	if (currentWeapon === 1) slot2.style.border = '3px ridge #5a3910'
const slot3 = document.getElementById('Slot3');
    if (gauntletClaimed) slot3.style.backgroundImage = `url(${gauntletSrc})`
	if (currentWeapon === 2) slot3.style.border = '3px ridge #5a3910'
const slot4 = document.getElementById('Slot4');
    if (clawsClaimed) slot4.style.backgroundImage = `url(${clawsSrc})`
	if (currentWeapon === 3) slot4.style.border = '3px ridge #5a3910'
const slot5 = document.getElementById('Slot5');
    if (bladeClaimed) slot5.style.backgroundImage = `url(${bladeSrc})`;
	if (currentWeapon === 4) slot5.style.border = '3px ridge #5a3910'
const identifier = document.getElementById('Weapon-identifier');

// Button declarations

let settingsB = document.getElementById('settings');
let musicOption = document.getElementById('music-option');
let newGameB = document.getElementById('New-gameB');
let loadGameB = document.getElementById('Load-gameB');
    if (savedGame) loadGameB.style.filter = 'brightness(100%)';
let optionsB = document.getElementById('OptionsB');
let yesB = document.getElementById('YesB');
let noB = document.getElementById('NoB');
let closeB = document.getElementById('return');
let shopB = document.getElementById('Shop-button');
let sellWeaponB = document.getElementById('Sell-weapon');
let potionB = document.getElementById('Buy-health');
let nemesisWhipB = document.getElementById('Nemesis-whipB');
let gauntletB = document.getElementById('GauntletB');
let clawsB = document.getElementById('Claws');
let bladeOlympusB= document.getElementById('Blade-of-OlympusB');
let leaveShop = document.getElementById('Leave-shop');
let underworldB = document.getElementById('Underworld-button');
let evadeB = document.getElementById('Evade-enemy');
let runB = document.getElementById('Escape-enemy');
let hopliteB = document.getElementById('HopliteB');
let attackHoplite = document.getElementById('Attack-Hoplite');
let bansheeB = document.getElementById('BansheeB');
let attackBanshee = document.getElementById('Attack-Banshee');
let satyrB = document.getElementById('SatyrB');
let attackSatyr = document.getElementById('Attack-Satyr')
let minotaurB = document.getElementById('MinotaurB');
let attackMinotaur = document.getElementById('Attack-Minotaur');
let medusaB = document.getElementById('MedusaB');
let attackMedusa = document.getElementById('Attack-Medusa');
let cyclopsB = document.getElementById('CyclopsB');
let attackCyclops = document.getElementById('Attack-Cyclops');
let leaveUnderworld = document.getElementById('Leave-Underworld');
let olympusB = document.getElementById('Olympus-button');
let herculesB = document.getElementById('HerculesB');
let attackHercules = document.getElementById('Attack-Hercules');
let hermesB = document.getElementById('HermesB');
let attackHermes = document.getElementById('Attack-Hermes');
let zeusB = document.getElementById('ZeusB');
let attackZeus = document.getElementById('Attack-Zeus');
let rungod = document.getElementById('Run-from-god');
let leaveOlympus = document.getElementById('Leave-Olympus');
let reset = document.getElementById('Reset');

// Icon declarations

const musicnote = document.getElementById('music-note');
const gear = document.getElementById('gear');
const musicMute = document.getElementById('music-mutei');
const mVoldown = document.getElementById('music-lvi');
const mVolup = document.getElementById('music-hvi');
const ambMute = document.getElementById('amb-mutei');
const aVoldown = document.getElementById('amb-lvi');
const aVolup = document.getElementById('amb-hvi');
const expand = document.getElementById('expand');
const banLocki = document.getElementById('Ban-lock');
    if (hopliteDefeated) banLocki.style.display = 'none';
const satLocki = document.getElementById('Sat-lock');
    if (bansheeDefeated) satLocki.style.display = 'none';
const minLocki = document.getElementById('Min-lock');
    if (satyrDefeated) minLocki.style.display = 'none';
const medLocki = document.getElementById('Med-lock');
    if (minotaurDefeated) medLocki.style.display = 'none';
const cycLocki = document.getElementById('Cyc-lock');
    if (medusaDefeated) cycLocki.style.display = 'none';
const olymLocki = document.getElementById('Olym-lock');
    if (cyclopsDefeated) olymLocki.style.display = 'none';
const hercLocki = document.getElementById('Herc-lock');
    if (hermesDefeated) hercLocki.style.display = 'none';
const zeusLocki = document.getElementById('Zeus-lock');
    if (herculesDefeated) zeusLocki.style.display = 'none';

// Interval & timeout functions declarations

let hopat;
let banshat;
let satat;
let minat;
let medat;
let cyclat;
let tct;
let tct2;
let hermat;
let hercat;
let zeuat;

// Screen and window size check

const screenWidth = screen.width;
const screenHeight = screen.height;

console.log("Screen dimentions", screenWidth, screenHeight);

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

console.log("Window dimentions:", windowWidth, windowHeight);

const phoneWarning = document.getElementById("phone-warning");

if (screenWidth <= 455 || windowWidth <= 455) {
	gamebox.style.display = "none";
	phoneWarning.style.display = "block";
}

// Saved game check

if (savedGame) { 
	console.log("Saved game found");
} else { 
    console.log("No saved game found");
}

// Saved settings

//              -  Saved healthBar setting

if (savedHealthbarSet && hBarOn) { 
    turnOnHealthbar();
	healthFiller.style.width = `${health}%`;
	healthBarUpdate();
}

//               - Saved volumes settings

function setVolumes() {
	if (savedMusicVol || savedAmbienceVol) {
		menuTheme.volume = musicVolumes;
		battleTheme.volume = musicVolumes;
		battleTheme2.volume = musicVolumes;
		cyclopsBattle.volume = musicVolumes;
		zeusBattle.volume = musicVolumes;
	} else if (savedAmbienceVol) {
		underworldAm.volume = ambienceVolumes;
		olympusAm.volume = ambienceVolumes;
	}
}

setVolumes();

//               - Saved expantion setting

if (expanded) expansion()

//                                                                                                       Initialize buttons

//  Music setting

musicOption.onmouseover = () => {
    hoverSound.play();
	if (inMainMenu) musicOption.style.background = '#7a715e';
    musicnote.style.color = '#614051';
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
	if (inMainMenu) musicOption.style.background = '#463428';
    musicnote.style.color = '#0d0d0d';
    porp.style.display = 'none';
}

musicOption.onclick = () => {
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

// Main menu buttons functions

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
		goToSparta()
	}
}

yesB.onmouseover = () => { hoverSound.play() }
yesB.onmouseout = () => { 
    hoverSound.pause();
	hoverSound.currentTime = 0;
}
yesB.onclick = () => { 
    selection.play();
	[ 'exp', 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated' ].forEach(save => localStorage.removeItem(save));
	exp = 0;
	health = 100;
	orbs = 0;
	currentWeapon = 0;
	potionquantity = 0;
	inventory = ["Blades of chaos"];
	orbsText.innerText = orbs;
	healthText.innerText = health;
	healthBar.style.width = '100px';
	healthFiller.style.width = '100%';
	healthFiller.style.background = '#32cd33';
	expText.innerText = exp;
	pqText.innerText = potionquantity;
	slot1.style.border = '3px ridge #5a3910';
	pqText.style.display = 'none';
	slot1.style.backgroundImage = `url(${bocSrc})`;
	slot2.style.backgroundImage = 'none';
	slot2.style.border = '1.8px solid #5a3910';
	slot3.style.backgroundImage = 'none';
	slot3.style.border = '1.8px solid #5a3910';
	slot4.style.backgroundImage = 'none';
	slot4.style.border = '1.8px solid #5a3910';
	slot5.style.backgroundImage = 'none';
	slot5.style.border = '1.8px solid #5a3910';
	warning.style.display = 'none';
	goToSparta()
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
		goToSparta()
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

closeB.onclick = () => { close()  }

document.addEventListener('keydown', event => { if (event.key == 'Escape') close() })

function close() {
	selection.play();
	options.style.display = 'none';
	mmButtons.style.display = 'block';
}

function goToSparta() {
	selection.play();
	gamebox.style.background = '#464646';
	mmButtons.style.display = 'none';
	musicOption.style.background = '#464646';
	settingsB.style.display = 'inline';
	stats.style.display = 'block';
	mainText.style.display = 'block';
	kratosAtSparta.style.display = 'block';
	conButtons.style.display = 'block';
	inMainMenu = false;
}

function toMainMenu() {
	selection.play();
	gamebox.style.background = 'url("https://res.cloudinary.com/dbdh6zbvt/image/upload/v1733133212/Opening_menu_image_ippsju.webp")';
	mmButtons.style.display = 'block';
	musicOption.style.background = '#463428';
	settingsB.style.display = 'none';
	settings.style.display = 'none';
	stats.style.display = 'none';
	mainText.style.display = 'none';
	kratosAtSparta.style.display = 'none';
	conButtons.style.display = 'none';
	inMainMenu = true;
}

// Settings

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

settingsB.onclick = () => {
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

healthBarSet.onclick = () => { 
    switch(hBarOn) {
		case false:
			hBarOn = true;
			localStorage.setItem('healthbarSet', hBarOn)
			turnOnHealthbar();
		break;
		case true:
			hBarOn = false
			localStorage.setItem('healthbarSet', hBarOn);
			turnOffHealthbar();
		break;
	}
}

function turnOnHealthbar() {
	healthBarSet.innerText = "Turn off health bar";
	healthBar.style.display = 'inline-block';
	healthtext.style.display = 'none';
	eHealthBar.style.display = 'inline-block';
	enemyhealthtext.style.display = 'none';
}

function turnOffHealthbar() {
	healthBarSet.innerText = "Turn on health bar";
	healthBar.style.display = 'none';
	healthtext.style.display = 'inline';
	eHealthBar.style.display = 'none';
	enemyhealthtext.style.display = 'inline';
}

musicSet.onmouseover = () => { musicSet.style.background = '#412021' }
musicSet.onmousout = () => { if (!musicSetOn) musicSet.style.background = '#614051' }

musicSet.onclick = () => {
	switch (musicSetOn) {
		case false:
		    musicSet.style.background = '#412021';
		    musicSetCon.style.display = 'flex';
		    musicVolelement.style.display = 'block';
			musicSetOn =  true;
		break;
		case true:
		    musicSet.style.background = '#614051';
            musicSetCon.style.display = 'none';
			musicVolelement.style.display = 'none';
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

// Volume functions

musicVolSlider.addEventListener('change', event => { musicVolText.innerText = musicVolSlider.value });

ambVolSlider.addEventListener('change', event => { ambienceVolText.innerText = ambVolSlider.value });

mVolup.onclick = () => {
	if (musicVolume < 100 ) {
		menuTheme.volume = Math.min(parseFloat((menuTheme.volume + 0.1).toFixed(2)), 1);
		musicVolumes = Math.min(parseFloat((musicVolumes + 0.1).toFixed(2)), 1);
		battleTheme.volume = musicVolumes;
		battleTheme2.volume = musicVolumes;
		cyclopsBattle.volume = musicVolumes;
		zeusBattle.volume = musicVolumes;
		musicVolume += 10;
		localStorage.setItem('musicVolume', musicVolume);
		musicVoltext.innerText = musicVolume;
  }
}
mVoldown.onclick = () => {
    if (musicVolume > 0) {
        menuTheme.volume = Math.max(parseFloat((menuTheme.volume - 0.1).toFixed(2)), 0);
	    musicVolumes = Math.max(parseFloat((musicVolumes - 0.1).toFixed(2)), 0);
		battleTheme.volume = musicVolumes;
		battleTheme2.volume = musicVolumes;
		cyclopsBattle.volume = musicVolumes;
		zeusBattle.volume = musicVolumes;
		musicVolume -= 10;
		musicVoltext.innerText = musicVolume;
		localStorage.setItem('musicVolume', musicVolume);
    }
}
musicMute.onclick = () => {
    menuTheme.volume = 0;
    battleTheme.volume = 0;
    battleTheme2.volume = 0;
    cyclopsBattle.volume = 0;
    zeusBattle.volume = 0;
    musicVolume = 0;
    musicVoltext.innerText = musicVolume;
	localStorage.setItem('musicVolume', musicVolume);
}

aVolup.onclick = () => {
	if (ambienceVolume < 100 ) {
		ambienceVolumes = Math.min(parseFloat((ambienceVolumes + 0.1).toFixed(2)), 1);
		underworldAm.volume = ambienceVolumes;
        olympusAm.volume = ambienceVolumes;
		ambienceVolume += 10;
		ambienceVoltext.innerText = ambienceVolume;
		localStorage.setItem('ambienceVolume', ambienceVolume);
  }
}
aVoldown.onclick = () => {
    if (ambienceVolume > 0) {
	    ambienceVolumes = Math.max(parseFloat((ambienceVolumes - 0.1).toFixed(2)), 0);
		underworldAm.volume = ambienceVolumes;
		olympusAm.volume = ambienceVolumes;
		ambienceVolume -= 10;
		ambienceVoltext.innerText = ambienceVolume;
		localStorage.setItem('ambienceVolume', ambienceVolume);
    }
}
ambMute.onclick = () => {
	underworldAm.volume = 0;
	olympusAm.volume = 0;
    ambienceVolume = 0;
    ambienceVoltext.innerText = ambienceVolume;
	localStorage.setItem('ambienceVolume', ambienceVolume);
}

// Expansion functions

expandSet.onmouseover = () => { expand.style.scale = '1.2' }
expandSet.onmouseout = () => { if (!expanded) expand.style.scale = '1.0' }

expandSet.onclick = () => {
	switch (expanded) {
		case false: 
			expanded = true;
			localStorage.setItem('expandSet', expanded);
			expansion()
		break;
		case true:
			expanded = false;
			localStorage.setItem('expandSet', expanded);
			minimize()
		break;
	}
}

function minimize() {
	var stat = document.querySelectorAll('.stat');
	var images = document.querySelectorAll('.exi');
	var defim = document.querySelectorAll('.def');
	var itemInfo = document.querySelectorAll('.Item-info');
	var controlButtons = document.querySelectorAll('.conbut');
	
	expand.style.color = 'white';
	expand.style.scale = '1';

	gamebox.style.width = '840px';
	settings.style.left = '14.2cm';
	musicOption.style.width = '35px';
	musicOption.style.height = '42px';
	settingsB.style.width = '35px';
	settingsB.style.height = '42px';
	healthBarSet.style.fontSize = '17px';
	musicSet.style.fontSize = '17px';
	ambienceSet.style.fontSize = '17px';
	expandSet.style.fontSize = '17px';
	
	stat.forEach(element => {
		element.style.fontSize = '17px';
	});
	healthBar.style.height = '17px';

	mainText.style.fontSize = '17px';
	text.style.fontSize = '17px';
	enemyInfo.style.fontSize = '17px';

	images.forEach(element => {
	   element.style.height = '220px';
	});
	defim.forEach(element => {
		element.style.width = '480px';
	});
	potion.style.width = '220px';
	itemInfo.forEach(element => {
		element.style.fontSize = '16px';
	});

	underworld.style.width = '580px';
	eHealthBar.style.height = '17px';
	mountOlympus.style.width = '440px';
	herculesxkratos.style.width = '445px';
	herculesFight.style.width = '380px';
	herculesKill.style.width = '435px';

	controlButtons.forEach(element => {
		element.style.width = '5cm';
		element.style.height = '30px';
		element.style.fontSize = '17px';
	});
}

function expansion() {
	var stat = document.querySelectorAll('.stat');
	var images = document.querySelectorAll('.exi');
	var defim = document.querySelectorAll('.def');
	var itemInfo = document.querySelectorAll('.Item-info');
	var controlButtons = document.querySelectorAll('.conbut');
	
	expand.style.scale = '1.2';

	gamebox.style.width = '1000px';
	settings.style.left = '18.5cm';
	musicOption.style.width = '40px';
	musicOption.style.height = '48px';
	settingsB.style.width = '40px';
	settingsB.style.height = '48px';
	healthBarSet.style.fontSize = '20px';
	musicSet.style.fontSize = '20px';
	ambienceSet.style.fontSize = '20px';
	expandSet.style.fontSize = '20px';
	
	stat.forEach(element => {
		element.style.fontSize = '24px';
	});
	healthBar.style.height = '24px';

	mainText.style.fontSize = '20px';
	text.style.fontSize = '20px';
	enemyInfo.style.fontSize = '20px';

	images.forEach(element => {
		element.style.height = '245px';
	});
	defim.forEach(element => {
		element.style.width = '535px';
	});
	potion.style.width = '245px';
	itemInfo.forEach(element => {
		element.style.fontSize = '18px';
	});

	shop.style.width = '495px';
	underworld.style.width = '625px';
	eHealthBar.style.height = '20px';
	mountOlympus.style.width = '480px';
	herculesxkratos.style.width = '470px';
	herculesFight.style.width = '405px';
	herculesKill.style.width = '460px';

	controlButtons.forEach(element => {
		element.style.height = '38px';
		element.style.fontSize = '20px';
	});
}

// Notify function

function notify() {
	notification.style.animation = 'notify 0.7s linear forwards';
	notification.style.display = 'inline-block';
	setTimeout(() => { notification.style.animation = 'hide 0.7s linear forwards' }, 4000 )
}

// Sparta buttons functions

shopB.onmouseover = () => {
	hoverSound.play();
	gamebox.style.background = '#09090b';
	kratosAtSparta.style.position = 'absolute';
	kratosAtSparta.style.left = '40cm';
	shop.style.display = 'block';
	mainText.innerText = "You can go to the shop to get weapons with orbs to get stronger to defeat stronger enemies. \n 🏪";
	shopB.style.background = '#09090b';
	shopB.style.animation = 'tilt-n-move-shaking 0.5s';
}
shopB.onmouseout = () => {
	hoverSound.pause(); 
	hoverSound.currentTime = 0;
	gamebox.style.background = '#464646';
	kratosAtSparta.style.position = 'relative';
	kratosAtSparta.style.left = '0';
	shop.style.display = 'none';
	mainText.innerText = defaultText;
	shopB.style.background = '#4b3f33';
	shopB.style.animation = 'grow';
}
shopB.onclick = () => {
	selection.play();
	mainText.style.display = 'none';
	text.style.display = 'inline-block';
	text.innerText = 'You enter the shop. You see a bunch of weapons that vary in power.. also a potion of healing. Get the ones you can, or take a look at them for now if you are currently a brokie.';
	shopB.style.display = 'none';
	setTimeout(() => {
	    gamebox.style.background = '#09090b';
	}, 20 );
	kratosAtSparta.style.display = 'none';
	underworldB.style.display = 'none';
	olympusB.style.display = 'none';
	inShop.style.display = 'block';
	var shopButtons = [ sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ];
	shopButtons.forEach(shopButton => {
		shopButton.style.display = 'inline';
		shopButton.style.animationDuration = '2s';
		shopButton.style.animationTimingFunction = 'linear';
	});
	showHotbar()
}

underworldB.onmouseover = () => {
	hoverSound.play();
	gamebox.style.background = '#2f1c12';
	kratosAtSparta.style.position = 'absolute';
	kratosAtSparta.style.left = '40cm';
	underworld.style.display = 'block';
	mainText.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus.";
	underworldB.style.background = '#2f1c12';
	underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
}
underworldB.onmouseout = () => {
	hoverSound.pause(); 
	hoverSound.currentTime = 0;
	gamebox.style.background = '#464646';
	kratosAtSparta.style.position = 'relative';
	kratosAtSparta.style.left = '0';
	underworld.style.display = 'none';
	mainText.innerText = defaultText;
	underworldB.style.background = '#4b3f33';
	underworldB.style.animation = 'grow';
}
underworldB.onclick = () => {
	selection.play();
	if (play == true) {
	    menuTheme.pause();
	    menuTheme.currentTime = 0;
	    underworldAm.play();
	    underworldAm.loop = true;
	} else {
	    underworldAm.play();
	    underworldAm.loop = true;
	}
	setTimeout(() => {
	    gamebox.style.background = "#3c3837"
	}, 20);
	mainDisappear();
	stats.style.marginTop = '48px';
	kratosUnderworld.style.display = 'block';
	settingsB.style.background = '#3c3837';
	text.innerText = 'You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.';
	var underworldButtons = [ hopliteB, bansheeB, satyrB, minotaurB, medusaB, cyclopsB, leaveUnderworld ];
	underworldButtons.forEach(underworldButton => {
		underworldButton.style.display = 'inline';
		underworldButton.style.animationDuration = '2s';
		underworldButton.style.animationTimingFunction = 'linear';
	});
}

olympusB.onmouseover = () => {
	hoverSound.play();
	gamebox.style.background = 'rgba(102,47,18,255)';
	kratosAtSparta.style.position = 'absolute';
	kratosAtSparta.style.left = '40cm';
	mountOlympus.style.display = 'block';
	mainText.innerText = "This is Mount Olympus. Where you will fight the gods of Olympus when you are ready. You can only go here when you have defeated all the creatures in the underworld.";
	olympusB.style.background = 'rgba(102,47,18,255)';
	olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
}
olympusB.onmouseout = () => {
	hoverSound.pause(); 
	hoverSound.currentTime = 0;
	gamebox.style.background = '#464646';
	kratosAtSparta.style.position = 'relative';
	kratosAtSparta.style.left = '0';
	mountOlympus.style.display = 'none';
	mainText.innerText = defaultText;
	olympusB.style.background = '#4b3f33';
	olympusB.style.animation = 'grow';
}
olympusB.onclick = () => {
	if (cyclopsDefeated) {
		selection.play();
		if (play == true) {
			menuTheme.pause();
			menuTheme.currentTime = 0;
			olympusAm.play()
			olympusAm.loop = true;
		} else {
			olympusAm.play()
			olympusAm.loop = true;
		}
		mainDisappear();
		text.innerText = 'You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong.';
		setTimeout(() => {
		 gamebox.style.background = '#335168';
		}, 20);
		mainDisappear();
		stats.style.marginTop = '48px';
		kratosOlympus.style.display = 'block';
		settingsB.style.background = '#335168';
		var olympusButtons = [ hermesB, herculesB, zeusB, leaveOlympus ];
		olympusButtons.forEach(olympusButton => {
			olympusButton.style.display = 'inline';
			olympusButton.style.animationDuration = '2s';
			olympusButton.style.animationTimingFunction = 'linear';
		});
	}
}

function mainDisappear() {
	musicOption.style.display = 'none';
	stats.style.marginTop = '40px';
	mainText.style.display = 'none';
	text.style.display = 'inline-block';
	kratosAtSparta.style.display = 'none';
	olympusB.style.display = 'none';
	shopB.style.display = 'none';
	settings.style.top = '50px';
	underworldB.style.display = 'none';
	showHotbar()
}

// Shop functions

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
	gamebox.style.background = '#20130c';
	leaveShop.style.animation = 'horizontal-shaking 0.5s';
	inShop.style.position = 'absolute';
	inShop.style.left = '40cm';
	sparta.style.display = 'block';
}
leaveShop.onmouseout = () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.background = '#09090b';
	leaveShop.style.animation = 'grow';
	inShop.style.position = 'relative';
	inShop.style.left = '0';
	sparta.style.display = 'none';
}
leaveShop.onclick = () => {
	returnSound.play();
	musicOption.style.background = '#464646';
	stats.style.marginTop = '0';
	inShop.style.display = 'none';
	sellWeaponB.style.display = 'none';
	potionB.style.display = 'none';
	nemesisWhipB.style.display = 'none';
	gauntletB.style.display = 'none';
	clawsB.style.display = 'none';
	bladeOlympusB.style.display = 'none';
	leaveShop.style.display = 'none';
	mainAppear();
	hideHotbar();
}

function iSdis() {
	inShop.style.position = 'absolute';
	inShop.style.left = '40cm';
}
function iSap() {
	inShop.style.position = 'relative';
	inShop.style.left = '0';
}

function sellWeapon() {
	if (inventory.length > 1) {
		hmmmm.play();
		var soldWeapon;
		switch (currentWeapon) {
			case 0:	    
			    inventory.shift();
				slot1.style.backgroundImage = 'none';
				bocClaimed = false;
				var sold = setInterval(() => {
				    count++;
				    orbs++;
				    orbsText.innerText = orbs;
				    if (count == 17) {
					    count = 0;
					    clearInterval(sold);
						localStorage.setItem('orbs', orbs);
				    }
				}, 155);
				currentWeapon++;
				soldWeapon = weapons[0].name;
			break;
			case 1:
			    inventory = inventory.filter(weapon => weapon !== whip);
				slot2.style.backgroundImage = 'none';
				whipClaimed = false;
				var sold2 = setInterval(() => {
					count++;
					orbs++;
					orbsText.innerText = orbs;
				    if (count == 28) {
						count = 0;
						clearInterval(sold2);
						localStorage.setItem('orbs', orbs);
				    }
				}, 140);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = whip;
			break;
			case 2:
			    inventory = inventory.filter(weapon => weapon !== gauntlet);
				slot3.style.backgroundImage = 'none';
				gauntletClaimed = false;
				var sold3 = setInterval(() => {
				    count++;
				    orbs++;
				    orbsText.innerText = orbs;
				    if (count == 42) {
						count = 0;
						clearInterval(sold3);
						localStorage.setItem('orbs', orbs);
				    }
				}, 125);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon =  gauntlet;
			break;
			case 3:
			    inventory = inventory.filter(weapon => weapon !== claws);
				slot4.style.backgroundImage = 'none';
				var sold4 = setInterval(() => {
				    clawsClaimed = false;
				    count++;
				    orbs++;
				    orbsText.innerText = orbs;
				    if (count == 70) {
						count = 0;
						clearInterval(sold4);
						localStorage.setItem('orbs', orbs);
				    }
				}, 110);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = claws;
			break;
			case 4:
			    inventory = inventory.filter(weapon => weapon !== blade);
				slot5.style.backgroundImage = 'none';
				bladeClaimed = false;
				var sold5 = setInterval(() => {
				    count++;
				    orbs++;
				    orbsText.innerText = orbs;
				    if (count == 100) {
						count = 0;
						clearInterval(sold5);
						localStorage.setItem('orbs', orbs);
				    }
				}, 100);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = blade;
			break;
		}
		localStorage.setItem('inventory', JSON.stringify(inventory));
		localStorage.setItem('currentWeapon', currentWeapon);
		text.innerText = `You sold the ${soldWeapon}.`;
        text.innerText += `\n In your inventory you have: ${inventory.join(", ")}`;
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
	}
}


function buyPotion() {
	if (orbs >= 17 && count == 0) {
		noice.play();
		
		// Number counting animation
		var boughted = setInterval (() => {
		    count++;
		    orbs--;
		    orbsText.innerText = orbs;
		    if (count == 17) {
			    count = 0;
			    clearInterval(boughted);
				localStorage.setItem('orbs', orbs);
		    }
		}, 170 );
		
		// Update potion slot
		potionquantity++;
		localStorage.setItem('potions', potionquantity);
		pqText.style.display = 'inline';
		pqText.innerText = potionquantity;
		
	} else if (orbs < 17) {
		brokie.play();
		text.innerText = "You do not have enough orbs to buy a health potion.";
		setTimeout(() => {
		    text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4400 );
	}
}

function buyWhip() {
	if(orbs >= 55 && !whipClaimed) {
		whipClaimed = true;
		achievement.play();
		var bought = setInterval (() => {
			count++;
			orbs--;
			orbsText.innerText = orbs;
			if (count == 55) {
				count = 0;
				clearInterval(bought);
				localStorage.setItem('orbs', orbs);
			}
		}, 100 );
		currentWeapon = 1;
		localStorage.setItem('currentWeapon', currentWeapon);
		inventory.push(whip);
		localStorage.setItem('inventory', JSON.stringify(inventory));
		weaponGot();
		whipClaim.style.display = 'block';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.backgroundImage = `url(${whipSrc})`;
		slot2.style.border = '3px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot4.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
		setTimeout(() => {
			whipClaim.style.display = 'none';
			revert();
		}, 4400 );
	} else {
		if (!whipClaimed) {
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
	if(orbs >= 99 && !gauntletClaimed) {
		gauntletClaimed = true;
		achievement.play();
		var bought = setInterval (() => {
		    count++;
		    orbs--;
		    orbsText.innerText = orbs;
		    if (count == 99) {
				count = 0;
				clearInterval(bought);
				localStorage.setItem('orbs', orbs);
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
		slot3.style.backgroundImage = `url(${gauntletSrc})`;
		slot3.style.border = '3px solid #5a3910';
		slot4.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
		setTimeout(() => {
		    gauntletClaim.style.display = 'none';
		    revert();
		}, 4400 );
	} else {
		if (!gauntletClaimed) {
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
	if(orbs >= 155 && !clawsClaimed) {
		clawsClaimed = true;
		achievement.play();
		var bought = setInterval (() => {
		    count++;
		    orbs--;
		    orbsText.innerText = orbs;
		    if (count == 155) {
				count = 0;
				clearInterval(bought);
				localStorage.setItem('orbs', orbs);
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
		slot4.style.backgroundImage = `url(${clawsSrc})`;
		slot4.style.border = '3px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
		setTimeout(() => {
		    clawsClaim.style.display = 'none';
		    revert();
		}, 4400 );
	} else {
		if (!clawsClaimed) {
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
	if(orbs >= 200 && !bladeClaimed) {
		bladeClaimed = true;
		achievement.play();
		var bought = setInterval (() => {
		    count++;
		    orbs--;
		    orbsText.innerText = orbs;
		    if (count == 200) {
				count = 0;
				clearInterval(bought);
				localStorage.setItem('orbs', orbs);
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
		slot5.style.backgroundImage = `url(${bladeSrc})`;
		slot5.style.border = '3px solid #5a3910';
		setTimeout(() => {
		    bladeClaim.style.display = 'none';
		    revert();
		}, 4400 );
	} else {
		if (!bladeClaimed) {
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
	text.innerText = "You now have the " + weapons[currentWeapon].name + ". \n" + " In your inventory you have: " + inventory;
	text.style.color = '#191970';
	[ inShop,  sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display = 'none');
}

function revert() {
    text.style.color = '#ffad15';
    text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
    inShop.style.display = 'block';
    [sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display = 'inline');
}

// Inventory functions 

function showHotbar() { hotbar.style.display = 'block' }
function hideHotbar() { hotbar.style.display = 'none' }

pslot.onmouseover = () => {
	identifier.style.display = 'inline';
	identifier.innerText = 'Health potion';
    identifier.style.top = '-35px';
	identifier.style.left = '5.5cm';
}
pslot.onmouseout = () => { identifier.style.display = 'none' }
pslot.addEventListener('click', increaseHealth );

const slots = [slot1, slot2, slot3, slot4, slot5];


slots.forEach((slot, index) => {
	const weaponsClaimed = [bocClaimed, whipClaimed, gauntletClaimed, clawsClaimed, bladeClaimed];
	const sounds = [bocSound, nwSound, gozSound, cohSound, swordThud];
	const identifiers = [weapons[0].name, whip, gauntlet, claws, blade];
	const lefts = ['8.3cm', '10.1cm', '11.5cm', '13.2cm', '14.8cm'];
	
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
        } else { currentWeapon = -1 }
    };
});

// Heal function

function increaseHealth() {
    if (health <= 199) {
        drink.play();
        potionquantity--;
        localStorage.setItem('potions', potionquantity);
        pqText.innerText = potionquantity;

        health += 14;
        if (health > 200) health = 200; // Cap health at 200
        
        localStorage.setItem('health', health);
        healthText.innerText = health;
        healthFiller.style.width = `${health}%`;

        healthBarUpdate();
		
        // Hide potion slot if no potions are present
        if (potionquantity === 0) pqText.style.display = 'none';

        if (health > 25) gamebox.style.boxShadow = 'none';
    }
}

function healthBarUpdate() {
	if (health === 200) {
		healthBar.style.width = '200px';
		healthFiller.style.background = '#299617';
		maxed.style.display = 'inline';
		setTimeout(() => {
			maxed.style.display = 'none';
		}, 2000);
	} else if (health > 100) {
		healthBar.style.width = `${health}px`;
		healthFiller.style.background = '#299617'; // Healthy green
	} else if (health > 50) {
		healthBar.style.width = '100px';
		healthFiller.style.background = '#32cd33'; // Default green
	} else if (health > 25) {
		healthFiller.style.background = '#ed7014'; // Warning orange
	} else {
		healthFiller.style.background = '#900604';
	}
}

// Key events

document.addEventListener('keydown', event => {
	if (event.key == 'f' && potionquantity >= 1) increaseHealth()
		
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
			// If it is, then update and saved current weapon
            if (currentWeapon !== keyIndex) {
                currentWeapon = keyIndex;
                localStorage.setItem('currentWeapon', currentWeapon);
            }
        }
    }
})

// Underworld functions

const creatures = [ hoplite, banshee, satyr, minotaur, medusa, cyclops ];
const creatureButtons = [ hopliteB, bansheeB, satyrB, minotaurB, medusaB, cyclopsB ];
const creatureSounds = [ hopliteSound, bansheeSound, satyrSound, minotaurSound, hoverSound, cyclopsSound ];
const  creaturesInfo = [ 
    "An enemy that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons",
	"The Banshee is known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans.",
	"Satyrs are one of the most formidable opponents, able to go toe-to-toe with Kratos and make short work of him. They have the upper body of a man and the horns and back legs of a goat.",
	"The Minotaur appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes.",
	"Medusa was first of the Gorgon sisters in Greek mythology. Medusa has the power to turn Kratos to stone with her gaze, but she can also still attack with her snake-like lower body.",
	"Cyclopes are a species of burly, one-eyed giants, they give plenty of damage, so you will want to have a lot of health and/or a good weapon if you want to fight it."
];

creatureButtons.forEach((creatureButton, index) => {
	var attackButtons = [ attackHoplite, attackBanshee, attackSatyr, attackMinotaur, attackMedusa, attackCyclops ];
	var attackFunctions = [ hopliteShapa, bansheeShapa, satyrShapa, minotaurShapa, medusaShapa, cyclopsShapa ];
	var animationTimes = [ '1.2s', '1.8s', '1.4s', '1s', '0.5s', '1.6s' ]
	var butts = [ hopliteB, bansheeB, satyrB, minotaurB, medusaB, cyclopsB ];
	
	creatureButton.onmouseover = () => {
		creatureSounds[index].play();
		text.style.display = 'none';
		kratosUnderworld.style.display = 'none';
		enemyInfo.style.display = 'inline-block';
		enemyInfo.innerText = creaturesInfo[index];
		damageCon.style.display = 'inline';
		enemyDamage.innerText = enemies[index].damage;
		creatures[index].style.display = 'block';
		creatureButton.style.animation = `tilt-shaking ${animationTimes[index]}`;
	}
	creatureButton.onmouseout = () => {
		creatureSounds[index].pause();
		creatureSounds[index].currentTime= 0;
		enemyInfo.style.display = 'none';
		text.style.display = 'inline-block';
		creatures[index].style.display = 'none';
		damageCon.style.display = 'none';
		kratosUnderworld.style.display = 'block';
		creatureButton.style.animation = 'none';
	}
	creatureButton.onclick = () => {
		var defeats = [true, hopliteDefeated, bansheeDefeated, satyrDefeated, minotaurDefeated, medusaDefeated];
		if (defeats[index]) {
			setTimeout(( ) => {
				if (index <= 4) { 
					battleTheme2.play() 
				} else if (index <= 1) { 
					battleTheme.play() 
				} else if (index === 5) cyclopsBattle.play()
			}, 1000 );
			fighting = index;
			text.innerText = `You are now fighting a ${enemies[fighting].name}. Try not to die, please.`;
			eHealthBar.style.width = `${enemies[fighting].health}px`;
			enemyStats.style.display = 'inline-block';
			enemyName.innerText = enemies[fighting].name;
			enemyHealth = enemies[fighting].health;
			enemyHealthText.innerText = enemyHealth;
			butts.forEach(button => { button.style.display = 'none' });
			leaveUnderworld.style.display = 'none';
			setTimeout(() => {
				selection2.play();
				attackButtons[index].style.display = 'inline';
				attackButtons[index].style.animationDuration = '2s';
				attackButtons[index].style.animationTimingFunction = 'linear';		
				evadeB.style.display = 'inline';
				evadeB.style.animationDuration = '2s';
				evadeB.style.animationTimingFunction = 'linear';
				runB.style.display = 'inline';
				runB.style.animationDuration = '2s';
				runB.style.animationTimingFunction = 'linear';
			}, 800 );
			attackFunctions[index]();
		}
	}
});

attackHoplite.onmouseover = () => {
	kratosUnderworld.style.display = 'none';
	hopliteAttack.style.display = 'block';
	attackHoplite.style.animation = 'tilt-n-move-shaking 0.8s';
}
attackHoplite.onmouseout = () => {
	kratosUnderworld.style.display = 'block';
	hopliteAttack.style.display = 'none';
	attackHoplite.style.animation = 'grow';
}
attackHoplite.onclick = () => {
	attacksHoplite.play();
	attack();
}

attackBanshee.onmouseover = () => {
	kratosUnderworld.style.display = 'none';
	bansheeAttack.style.display = 'block';
	attackBanshee.style.animation = 'tilt-n-move-shaking 0.5s';
}
attackBanshee.onmouseout = () => {
	kratosUnderworld.style.display = 'block';
	bansheeAttack.style.display = 'none';
	attackBanshee.style.animation = 'grow';
}
attackBanshee.onclick = () => {
	attacksBanshee.play();
	attack();
}

attackSatyr.onmouseover = () => {
	kratosUnderworld.style.display = 'none';
	satyrAttack.style.display = 'block';
	attackSatyr.style.animation = 'tilt-n-move-shaking 0.5s';
}
attackSatyr.onmouseout = () => {
	kratosUnderworld.style.display = 'block';
	satyrAttack.style.display = 'none';
	attackSatyr.style.animation = 'grow';
}
attackSatyr.onclick = () => {
	if (clicks ===  0) clicks = 1;
	switch (clicks) {
	case 1:
	    attacksSatyr.play();
	    clicks++;
	break;
	case 2:
	    attacksSatyr.play();
	    clicks++;
	break;
	case 3:
	    attacksSatyr.play();
	    clicks++;
	break;
	case 4:
	    throwsSatyr.play();
	    clicks = 1;
	break;
	}
	attacksSatyr.play();
	attack();
}

attackMinotaur.onmouseover = () => {
	kratosUnderworld.style.display = 'none';
	minotaurAttack.style.display = 'block';
	attackMinotaur.style.animation = 'tilt-n-move-shaking 0.8s';
}
attackMinotaur.onmouseout = () => {
	kratosUnderworld.style.display = 'block';
	minotaurAttack.style.display = 'none';
	attackMinotaur.style.animation = 'grow';
}
attackMinotaur.onclick = () => {
	attacksMinotaur.play();
	attack()
}

attackMedusa.onmouseover = () => {
	kratosUnderworld.style.display = 'none';
	medusaAttack.style.display = 'block';
	attackMedusa.style.animation = 'tilt-n-move-shaking 0.8s';
}
attackMedusa.onmouseout = () => {
	kratosUnderworld.style.display = 'block';
	medusaAttack.style.display = 'none';
	attackMedusa.style.animation = 'grow';
}
attackMedusa.onclick = () => {
	attacksMedusa.play();
	attack();
}

attackCyclops.onmouseover = () => {
	kratosUnderworld.style.display = 'none';
	cyclopsAttack.style.display = 'block';
	attackCyclops.style.animation = 'tilt-n-move-shaking 0.8s';
}
attackCyclops.onmouseout = () => {
	kratosUnderworld.style.display = 'block';
	cyclopsAttack.style.display = 'none';
	attackCyclops.style.animation = 'grow';
}
attackCyclops.onclick = () => {
	attacksCyclops.play();
	attack();
}

// button functions continuation

evadeB.onmouseover = () => {
	hoverSound.play();
	evadeB.style.animation = 'vertical-shaking 0.8s';
}
evadeB.onmouseout = () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	evadeB.style.animation = 'grow';
}
evadeB.addEventListener('click', evade );

runB.onmouseover = () => {
	hoverSound.play();
	kratosUnderworld.style.display = 'none';
	kratosRunning.style.display = 'inline';
	runB.style.animation = 'horizontal-shaking 0.5s';
	[ hopliteKill, bansheeKill, satyrKill, minotaurKill, medusaKill, cyclopsKill ].forEach( killpic => killpic.style.display = 'none' )
}
runB.onmouseout = () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	kratosUnderworld.style.display = 'block';
	kratosRunning.style.display = 'none';
	runB.style.animation = 'grow';
}

runB.onclick = () => {
	stopMusic();
	returnSound.play();
	localStorage.setItem('health', health);
	//gamebox.style.animationPlayState = 'running';
	//gamebox.style.animationIterationCount = '1';
	text.innerText = "You ran from the creature, knowing that you cannot defeat it.... or you're just a pussio."
	tct = setTimeout(() => {
		text.innerText = "You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.";
		timed = true;
	}, 8000 );
	enemyStats.style.display = 'none';
	if (enemyHealth <= 0) eHealthFiller.style.width = '100%';
	evadeB.style.display = 'none';
	runB.style.display = 'none';
	[ hopliteB, bansheeB, satyrB, minotaurB, medusaB, cyclopsB, leaveUnderworld ].forEach(button => {
		button.style.display = 'inline';
		button.style.animationDuration = '2s';
		button.style.animationTimingFunction = 'linear';
	});
	if (runB.innerText === 'Return') runB.innerText = 'Run';
	var attackButtons = [ attackHoplite, attackBanshee, attackSatyr, attackMinotaur, attackMedusa, attackCyclops ];
	var attackIntervals = [ hopat, banshat, satat, minat, medat, cyclat ];
	attackButtons[fighting].style.display = 'none';
    clearInterval(attackIntervals[fighting]);
}

// Underworld battle functions

function hopliteShapa() {
	hopat = setInterval (( ) => {
		hopliteAttacks.play();
		//health -= enemies[fighting].level * 8;
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
			defeatEnemy();
			hopliteDefeated = true;
			if (!savedHopDef) { 
			    localStorage.setItem('hopliteDefeated', true);
				banLocki.style.display = 'none';
			}
			hopliteKill.style.display = 'block';
			var hopdef = setInterval(( )=> {
				count += 2;
				orbs += 2;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 20) {
					count = 0;
					clearInterval(hopdef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
			}, 200);
			clearInterval(hopat);
		}
	}, 3000);
}

function bansheeShapa() {
	setTimeout(() => {
	    bansheeAttacks.play();
	}, 1000)
	banshat = setInterval (() => {
		bansheeAttacks2.play();
		//health -= enemies[fighting].level * 8;
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health states
		healthCheck();
		
		// Handle enemy health states
		if (enemyHealth <= 0) {
			defeatEnemy();
			bansheeDefeated = true;
			if (!savedBanDef) { 
			    localStorage.setItem('bansheeDefeated', true);
				satLocki.style.display = 'none';
			}
			bansheeKill.style.display = 'block';
			var bandef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 2;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 32) {
					count = 0;
					clearInterval(bandef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
			}, 180);
			clearInterval(banshat);
		}
	}, 3000);
}

function satyrShapa() {
	satat = setInterval (() => {
		satyrAttacks.play();
		//health -= enemies[fighting].level * 8;
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
			defeatEnemy();
			satyrDefeated = true;
			if (!savedSatDef) { 
			    localStorage.setItem('satyrDefeated', true);
				minLocki.style.display = 'none';
			}
			satyrKill.style.display = 'block';
			var satdef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 3;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 40) {
					count = 0;
					clearInterval(satdef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
			}, 140);
			clearInterval(satat);
		}
	}, 3000);
}

function minotaurShapa() {
	setTimeout(() => {
		minotaurAttacks.play();
	}, 1000 );
	minat = setInterval (() => {
		minotaurAttacks2.play();
		//health -= enemies[fighting].level * 8;
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
			defeatEnemy();
			minotaurDefeated = true;
			if (!savedMinDef) { 
			    localStorage.setItem('minotaurDefeated', true);
				medLocki.style.display = 'none';
			}
			minotaurKill.style.display = 'block';
			var mindef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 4;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 48) {
					count = 0;
					clearInterval(mindef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
			}, 140);
			clearInterval(minat);
		}
	}, 3200);
}

function medusaShapa() {
	medat = setInterval (() => {
		medusaAttacks.play();
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
			defeatEnemy();
			medusaDefeated = true;
			if (!savedMedDef) { 
			    localStorage.setItem('medusaDefeated', true);
				cycLocki.style.display = 'none';
			}
			medusaKill.style.display = 'block';
			var meddef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 6;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 64) {
					count = 0;
					clearInterval(meddef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
			}, 120);
			clearInterval(medat);
		}
	}, 3000);
}

function cyclopsShapa() {
	setTimeout(() => {
	    cyclopsAttacks2.play();
	}, 1000)
	cyclat = setInterval (() => {
		cyclopsAttacks.play();
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
			defeatEnemy();
			cyclopsDefeated = true;
			if (!savedCycDef) { 
				notify()
			    localStorage.setItem('cyclopsDefeated', true);
				olymLocki.style.display = 'none';
			}
			cyclopsBattle.pause();
			cyclopsBattle.currentTime = 0;
			cyclopsKill.style.display = 'block';
			var cycdef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 8;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 88) {
					count = 0;
					clearInterval(cycdef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
			}, 100);
			clearInterval(cyclat);
		}
	}, 3400);
}

// Underworld battle functions complete

leaveUnderworld.onmouseover = () => {
	hoverSound.play();
	gamebox.style.background = '#20130c';
	leaveUnderworld.style.animation = 'horizontal-shaking 0.5s';
	kratosUnderworld.style.position = 'absolute';
	kratosUnderworld.style.left = '40cm';
	sparta.style.display = 'block';
}
leaveUnderworld.onmouseout = () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.background = '#3c3837';
	leaveUnderworld.style.animation = 'grow';
	kratosUnderworld.style.position = 'relative';
	kratosUnderworld.style.left = '0';
	sparta.style.display = 'none';
}
leaveUnderworld.onclick = () => {
	underworldAm.pause();
	underworldAm.currentTime = 0;
	returnSound.play();
	if (!timed) clearTimeout(tct);
	[ kratosUnderworld, hopliteB, bansheeB, satyrB, minotaurB, medusaB, cyclopsB, leaveUnderworld ].forEach(button => button.style.display = 'none');
	mainAppear();
}

// Olympus functions

const enemyImages = [ hermes, hercules, zeus ];
const enemiesButtons = [ hermesB, herculesB, zeusB ];
const enemiesInfo = [
    "Hermes (Greek: Ἑρμῆς) is the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and mostly.. Speed.",
	"Hercules (Greek: Ἡρακλῆς) is the son of Zeus and half-brother to Kratos. He is known for having a lot of strength.",
	"Zeus (Greek: Ζεύς) is the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Storm, Thunder and Lightning. Also the father of Kratos."
];

enemiesButtons.forEach((enemyButton, index) => {
	var damages = [ '44', '69', '82' ];
	var bgColors = [ '#0f2738', '#59636f', '#3f383e' ];
	var lines = [ hermesLine, herculesLine, zeusLine ];
	var demImages = [ hermesxkratos, herculesxkratos, zeusxkratos ];
	var texts = [
	    "You are now by the god, Hermes. He spots you and he quickly starts attacking. \n 😟",
		"Hercules gets in your way, to Zeus. He challenges you to fight him to the death to see who is stronger. \n 😟",
		"You finally arrive to the god of thunder and lightning, and also your father, Zeus. Try killing him in fashion. \n 😈"
	];
	var battleThemes = [ battleTheme2, battleTheme2, zeusBattle ];
	var attackButtons = [ attackHermes, attackHercules, attackZeus ];
	var attackIntervals = [ hermesShapa, herculesShapa, zeusShapa ];
	var intervalTimes = [ 4200, 3000, 14200 ];
	
	enemyButton.onmouseover = () => {
		hoverSound.play();
		text.style.display = 'none';
		enemyInfo.style.display = 'inline-block';
		enemyInfo.innerText = enemiesInfo[index];
		enemyDamage.innerText = damages[index];
		damageCon.style.display = "inline";
		kratosOlympus.style.position = 'absolute';
		kratosOlympus.style.left = '40cm';
		enemyImages[index].style.display = 'block';
		enemyButton.style.animation = 'tilt-shaking 0.5s';
	}
	enemyButton.onmouseout = () => {
		hoverSound.pause();
		hoverSound.currentTime = 0;
		text.style.display = 'block';
		enemyInfo.style.display = 'none';
		damageCon.style.display = "none";
		enemyImages[index].style.display = 'none';
		kratosOlympus.style.position = 'relative';
		kratosOlympus.style.left = '0';
		enemyButton.style.animation = 'grow';
	}
	enemyButton.onclick = () => {
		var defeats = [cyclopsDefeated, hermesDefeated, herculesDefeated];
		if (defeats[index]) {
			olympusAm.pause();
			olympusAm.currentTime = 0;
			gamebox.style.background = bgColors[index];
			lines[index].play();
			kratosOlympus.style.display = 'none';
			text.innerText = texts[index];
			demImages[index].style.display = 'block';
			fighting = index + 6;
			eHealthBar.style.width = `${enemies[fighting].health}px`;
			enemyStats.style.display = "inline-block";
			enemyName.innerText = enemies[fighting].name;
			enemyHealth = enemies[fighting].health;
			enemyHealthText.innerText = enemyHealth;
			herculesB.style.display = 'none';
			hermesB.style.display = 'none';
			zeusB.style.display = 'none';
			leaveOlympus.style.display = 'none';
			setTimeout(() => {
				selection2.play();
				setTimeout(() => {
					battleThemes[index].play();
				}, 1000 );
				evadeB.style.display = 'inline';
				evadeB.style.animationDuration = '2s';
				evadeB.style.animationTimingFunction = 'linear';
				attackButtons[index].style.display = 'inline';
				attackButtons[index].style.animationDuration = '2s';
				attackButtons[index].style.animationTimingFunction = 'linear';
				rungod.style.display = 'inline';
				rungod.style.animationDuration = '2s';
				rungod.style.animationTimingFunction = 'linear';
				attackIntervals[index]()
			}, intervalTimes[index] );
		}
	}
});

attackHermes.onmouseover = () => {
	hermesxkratos.style.display = 'none';
	hermesFight.style.display = 'block';
	hermesFight.style.animation = 'tilt-n-move-shaking';
	attackHermes.style.animationDuration = '0.8s';
}
attackHermes.onmouseout = () => {
	hermesxkratos.style.display = 'block';
	hermesFight.style.display = 'none';
	attackHermes.style.animation = 'grow';
}
attackHermes.onclick = () => {
	attacks.play();
	attack();
}

attackHercules.onmouseover = () => {
	herculesxkratos.style.display = 'none';
	herculesFight.style.display = 'block';
	herculesFight.style.animation = 'tilt-n-move-shaking 0.5s';
}
attackHercules.onmouseout = () => {
	herculesxkratos.style.display = 'block';
	herculesFight.style.display = 'none';
	attackHercules.style.animation = 'grow';
}
attackHercules.onclick = () => {
	switch (clicks) {
		case 1:
			attacks.play();
			clicks++;
		break;
		case 2:
			attacks2.play();
			clicks++;
		  break;
		case 3:
			attacks.play();
			clicks++;
		  break;
		case 4:
			attacks.play();
			clicks = 1;
		 break;
	}
	attack();
}

attackZeus.onmouseover = () => {
	zeusxkratos.style.display = 'none';
	zeusFight.style.display = 'block';
	attackZeus.style.animation = 'tilt-n-move-shaking 0.8s';
}
attackZeus.onmouseout = () => {
	zeusxkratos.style.display = 'block';
	zeusFight.style.display = 'none';
	attackZeus.style.animation = 'grow';
}
attackZeus.onclick = () => {
	attacksZeus.play();
	attack();
}

rungod.onmouseover = () => {
	hoverSound.play();
	switch (fighting) {
		case 6:
			hermesxkratos.style.display = 'none';
			hermesFight.style.display = 'none';
			hermesKill.style.display = 'none';
		break;
		case 7:
			herculesxkratos.style.display = 'none';
			herculesFight.style.display = 'none';
			herculesKill.style.display = 'none';
		break;
		case 8:
			zeusxkratos.style.display = 'none';
			zeusFight.style.display = 'none';
		break;
	}
	kratosRunning.style.display = 'block';
	rungod.style.animation = 'horizonal-shaking 0.8s';
}
rungod.onmouseout = () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	[ hermesxkratos, herculesxkratos, zeusxkratos, kratosRunning ].forEach(button => button.style.display = 'none');
	kratosOlympus.style.display = 'block';
	rungod.style.animation = 'grow';
}
rungod.onclick = () => {
	returnSound.play();
	localStorage.setItem('health', health);
	gamebox.style.background = '#335168';
	switch (fighting) {
		case 6:
			clearInterval(hermat);
			battleTheme2.pause();
			battleTheme2.currentTime = 0;
			if (!hermesDefeated) text.innerText = "You escaped Hermes, knowing you cannot defeat him. \n Get more health or a better weapon to be able to defeat him.";
			hermesxkratos.style.display = 'none';
			hermesKill.style.display = 'none';
			attackHermes.style.display = 'none';
		break;
		case 7:
			clearInterval(hercat);
			battleTheme2.pause();
			battleTheme2.currentTime = 0;
			if (!herculesDefeated) text.innerText = "You escaped Hercules, knowing you cannot defeat him with all that immense strength. \n Get more health or a better weapon to be able to defeat him.";
			herculesxkratos.style.display = 'none';
			herculesKill.style.display = 'none';
			attackHercules.style.display = 'none';
		break;
		case 8:
			clearInterval(zeuat);
			zeusBattle.pause();
			zeusBattle.currentTime = 0;
			text.innerText = "You escaped Zeus, knowing you cannot defeat him. His power was SHOCKING (Get it? 😆)! \n Get more health or a better weapon to be able to defeat him.";
			zeusxkratos.style.display = 'none';
			attackZeus.style.display = 'none';
		break;
	}
	setTimeout(() => { olympusAm.play() }, 500 );
	//gamebox.style.animationPlayState = 'running';
	//gamebox.style.animationIterationCount = '1';
	tct2 = setTimeout(() => {
	    mainText.innerText = "You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong.";
	    timed = true;
	}, 8000);
	enemyStats.style.display = 'none';
	if (rungod.innerText = "Return") rungod.innerText = "Run";
	if (enemyHealth === 0) eHealthFiller.style.width = '100%';
	rungod.style.display = 'none';
	evadeB.style.display = 'none';
	[ hermesB, herculesB, zeusB, leaveOlympus ].forEach(button => {
		button.style.display = 'inline';
		button.style.animationDuration = '2s';
		button.style.animationTimingFunction = 'linear';
	});
}

// Olympus battle functions

let hit = 0;

function hermesShapa() {
	hermat = setInterval (() => {
		hit++;
		if (hit == 1) {
		    hermesAttacks.play();
		} else if (hit >= 2) {
		    hermesAttacks2.play();
		}
		health -= getEnemyAttackValue(enemies[fighting].level) - 13;
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
		    gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
			defeatEnemy();
			hermesDefeated = true;
			if (!savedHermDef) { 
			    localStorage.setItem('hermesDefeated', true);
				hercLocki.style.display = 'none';
			}
			rungod.innerText = "Return";
			battleTheme2.pause();
			battleTheme2.currentTime = 0;
			setTimeout(() => {
			    hermesxkratos.style.display = 'none';
			}, 1);
			hermesKill.style.display = 'block';
			var hermef = setInterval(( )=> {
			    count += 2;
			    orbs += enemies[fighting].level - 8;
			    exp++;
			    orbsText.innerText = orbs;
			    expText.innerText = exp;
			    if (count == 112) {
					count = 0;
					clearInterval(hermef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
			    }
			}, 80);
			clearInterval(hermat);
		}
	}, 1840);
}

function herculesShapa() {
	hercat = setInterval (() => {
		hit++;
		if(hit == 1) {
		    herculesAttacks.play();
		} else if (hit >= 2) {
		    hermesAttacks2.play();
		}
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
		    gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
		    defeatEnemy();
			herculesDefeated = true;
			if (!savedHercDef) {
				localStorage.setItem('herculesDefeated', true);
				zeusLocki.style.display = 'none';
			}
			rungod.innerText = "Return";
		    battleTheme2.pause();
		    battleTheme2.currentTime = 0;
		    setTimeout(() => {
			    herculesxkratos.style.display = 'none';
		    }, 1);
		    herculesKill.style.display = 'block';
		    var hercef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 8;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 136) {
				    count = 0;
				    clearInterval(hercef);
					localStorage.setItem('orbs', orbs);
					localStorage.setItem('exp', exp);
				}
		    }, 80);
		    clearInterval(hercat);
		}
	}, 3000);
}

function zeusShapa() {
	zeuat = setInterval (() => {
		zeusAttacks.play();
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
		    gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		
		// Handle health state
		healthCheck();
		
		// Handle enemy health state
		if (enemyHealth <= 0) {
		    beatGame();
			rungod.innerText = "Return";
		}
	}, 2800);
}

// Battle functions

function attack() {
    if (enemyHealth > 0) {
		var expPercentage = 0.05;
		var bonusDamage = exp * expPercentage;
	    var damage = weapons[currentWeapon].damage + Math.round(bonusDamage);

        enemyHealth = Math.max(0, enemyHealth - damage); // Prevent negative health
        
        enemyHealthText.innerText = enemyHealth;

        enemyHealthText.innerText = enemyHealth;
	    eHealthFiller.style.width = `${enemyHealth}%`;
    }
}


function getEnemyAttackValue(level) {
	gamebox.style.animationPlayState = 'running';
	var hit = (level * 4 + 1);
	console.log(hit);
	return hit > 0 ? hit : 0;
}

let butle = false;

function evade() {
	if (!butle) {
		butle = true;
		evadeSound.play();
		var attackIntervals = [ hopat, banshat, satat, minat, medat, cyclat, hercat, hermat, zeuat ];
		var attackFunctions = [ hopliteShapa, bansheeShapa, satyrShapa, minotaurShapa, medusaShapa, cyclopsShapa, hermesShapa, herculesShapa, zuesShapa ];
		clearInterval(attackIntervals[fighting]);
		setTimeout(() => {
			attackFunctions[fighting]();
			butle = false;
		}, 700 );
		if (fighting >= 6 ) {
			text.innerText = "You evade the attack from " + enemies[fighting].name + ".";
		} else {
			text.innerText = "You evade the attack from the " + enemies[fighting].name;
		}
	}
}

function healthCheck() {
	if (health <= 0) {
		death();
		clearInterval(zeuat);
	} else if (health <= 25) {
		lowHealth();
	} else if (health <= 50) {
		healthFiller.style.background = '#ed7014'
	} else if (health <= 100) {
		healthBar.style.width = '100px';
		healthFiller.style.background = '#32cd33'
	} else if (health >= 101) healthBar.style.width = `${health}px`
}

function lowHealth() {
	heartbeat.play();
	gamebox.style.boxShadow = '#880808 0px 20px 30px -10px'; // '#4c0807 0px 10px 36px 0px, #4c0807 0px 0px 0px 1px';
	healthFiller.style.background = '#900604';
}

function defeatEnemy() {
	stopMusic();
	localStorage.setItem('health', health);
	eHealthFiller.style.width = `${enemyHealth}%`;
	enemyHealthText.innerText = enemyHealth;
	hit = 0;
	//gamebox.style.animationPlayState = 'running';
	//gamebox.style.animationIterationCount = '1';
	setTimeout(() => {
	    kratosUnderworld.style.display = 'none';
	}, 1);
	defeatSound.play();
	setTimeout (() => {
		switch (fighting) {
			case 0: 
				orbSound.play();
			break;
			case 1:
				orbsSound.play();
			break;
			case 2: 
				orbsSound.play();
			break;
			case 4:
				orbsSound2.play();
			case 7:
				orbsSound3.play();
			default:
				orbsSound2.play();
		}
	}, 3000 );
	text.innerText = 'You have defeated the enemy. You have now earned some exp and have recieved some orbs from the defeated enemy.';
	gone();
	evadeB.style.display = 'none';
	runB.innerText = 'Return';
}

function death() {
	stopMusic();
	settingsB.style.display = 'none';
	health = 0;
	healthText.innerText = health;
	healthFiller.style.width = '0%';
	heartbeat.pause();
	heartbeat.currentTime = 0;
	deathScream.play();
	//gamebox.style.animationPlayState = 'running';
	//gamebox.style.animationIterationCount = '1';
	text.innerText = "You're dead 🫥. Guess now you really are the \"Ghost\" of sparta";
	enemyStats.style.display = 'none';
	hit = 0;
	setTimeout(() => {
	    kratosUnderworld.style.display = 'none';
	}, 2);
	if (fighting <= 7) {
		gamebox.style.background = 'black';
		youDead.style.display = 'block';
	} else {
		setTimeout(() => {
			gamebox.style.background = '#321c1f';
			zeusxkratos.style.display = 'none';
			kratosDead.style.display = 'block';
		}, 1);
	}
	gone();
	evadeB.style.display = 'none';
	runB.style.display = 'none';
	rungod.style.display = 'none';
	reset.style.display = 'inline';
}

function gone() {
	if(fighting <= 5) {
		attackHoplite.style.display = 'none';
		attackBanshee.style.display = 'none';
		attackSatyr.style.display = 'none';
		attackMinotaur.style.display = 'none';
		attackMedusa.style.display = 'none';
		attackCyclops.style.display = 'none';
	} else if(fighting >= 6) {
		attackHermes.style.display = 'none';
		attackHercules.style.display = 'none';
		attackZeus.style.display = 'none';
	}
}

// More functions

leaveOlympus.onmouseover = () => {
	hoverSound.play();
	gamebox.style.background = '#20130c';
	leaveOlympus.style.animation = 'horizontal-shaking 0.5s';
	kratosOlympus.style.position = 'absolute';
	kratosOlympus.style.left = '40cm';
	sparta.style.display = 'block';
}
leaveOlympus.onmouseout= () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.background = '#335168';
	leaveOlympus.style.animation = 'grow';
	kratosOlympus.style.position = 'relative';
	kratosOlympus.style.left = '0';
	sparta.style.display = 'none';
}
leaveOlympus.onclick = () => {
	olympusAm.pause();
	olympusAm.currentTime = 0;
	returnSound.play();
	if (timed == false) {
	    clearTimeout(tct2);
   }
    stats.style.marginTop = '0';
	kratosOlympus.style.display = 'none';
	hermesB.style.display = 'none';
	herculesB.style.display = 'none';
	zeusB.style.display = 'none';
	leaveOlympus.style.display = 'none';
	mainAppear();
}

reset.onmouseover = () => {
	hoverSound.play();
	reset.style.animation = 'horizontal-shaking';
	reset.style.animationDuration = '0.5s';
	kratosUnderworld.style.display = 'none';
	hermesxkratos.style.display = 'none';
	hermesFight.style.display = 'none';
	hermesKill.style.display = 'none';
	herculesxkratos.style.display = 'none';
	herculesFight.style.display = 'none';
	herculesKill.style.display = 'none';
	zeusxkratos.style.display = 'none';
	zeusFight.style.display = 'none';
}
reset.onmouseout = () => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	reset.style.animation = 'no';
}
reset.addEventListener('click', restart );

function beatGame() {
	zeusBattle.pause();
	zeusBattle.currentTime = 0;
	wonned.play();
	localStorage.setItem('health', health);
	gamebox.style.transform = 'none';
	mainText.innerText = "You defeated Zeus! You have finally completed this SHIT game! 🤩";
	fightZeus.style.display = 'none';
	evadeB.style.display = 'none';
	reset.style.display = 'inline';
	hermesxkratos.style.display = 'none';
	zeusKill.style.display = 'block';
	var zeuef = setInterval(( )=> {
		count += 2;
		orbs += enemies[fighting].level - 8;
		exp++;
		orbsText.innerText = orbs;
		expText.innerText = exp;
		if (count == 160) {
			count = 0;
			clearInterval(zeuef);
			localStorage.setItem('orbs', orbs);
			localStorage.setItem('exp', exp);
		}
	}, 80);
	clearInterval(zeuat);
}

function restart() {
	ambienceStop();
	returnSound.play();
	gamebox.style.transform = 'none';
	gamebox.style.background = '#464646';
	gamebox.style.boxShadow = 'none';
	settingsB.style.display = 'inline';
	settingsB.style.background = '#464646';
	setTimeout(() => {
	    ahShit.play();
	}, 1800 );
	[ 'exp', 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated' ].forEach(save => localStorage.removeItem(save));
	exp = 0;
	health = 100;
	orbs = 0;
	currentWeapon = 0;
	potionquantity = 0;
	inventory = ["Blades of chaos"];
	orbsText.innerText = orbs;
	healthText.innerText = health;
	healthBar.style.width = '100px';
	healthFiller.style.width = '100%';
	healthFiller.style.background = '#32cd33';
	expText.innerText = exp;
	pqText.innerText = potionquantity;
	slot1.style.border = '3px ridge #5a3910';
	pqText.style.display = 'none';
	slot2.style.backgroundImage = 'none';
	slot2.style.border = '1.8px solid #5a3910';
	slot3.style.backgroundImage = 'none';
	slot3.style.border = '1.8px solid #5a3910';
	slot4.style.backgroundImage = 'none';
	slot4.style.border = '1.8px solid #5a3910';
	slot5.style.backgroundImage = 'none';
	slot5.style.border = '1.8px solid #5a3910';
	musicOption.style.display = 'inline';
	text.style.display = 'none';
	mainText.style.display='inline-block';
	mainText.innerText = "Welcome back. You already know what to do. It seems that you died last time. Don't do that again. \n  (❁´◡`❁)";
	if (fighting <= 7) {
	    youDead.style.display = 'none';
	} else {
	    kratosDead.style.display = 'none';
	}
	kratosAtSparta.style.display = 'inline-block';
	reset.style.display = 'none';
	[ shopB, underworldB, olympusB ].forEach(button => {
		button.style.display = 'inline';
		button.style.animation = 'rotateX';
		button.style.animationDuration = '0.8s';
	});
}

function stopMusic() {
	[battleTheme, battleTheme2, cyclopsBattle, zeusBattle].forEach(theme => {
		if (theme && typeof theme.pause === 'function') {
			theme.pause();
			theme.currentTime = 0;
		}
	});
}

function ambienceStop() {
	if (fighting <= 5) {
		underworldAm.pause();
		underworldAm.currentTime = 0;
	} else {
		olympusAm.pause();
		olympusAm.currentTime = 0;
	}
}

function mainAppear() {
	if (play == true) menuTheme.play()
	setTimeout(() => { gamebox.style.background = '#464646' }, 20);
	musicOption.style.display = 'inline';
	settingsB.style.background = '#464646';
	text.style.display = 'none';
	mainText.style.display = 'inline-block';
	defaultText = "You have returned to Sparta. Where do you want to go next? \n U_U";
	mainText.innerText = defaultText;
	stats.style.marginTop = '0';
	kratosAtSparta.style.display = 'block';
	[ shopB, underworldB, olympusB ].forEach(button => {
		button.style.display = 'inline';
		button.style.animation = 'rotateX';
		button.style.animationDuration = '0.8s';
	});
	hideHotbar()
}
