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
let bocsound = new Audio('Audio/Blades of chaos sound .mp3');
let gozsound = new Audio('Audio/Gauntlet of Zeus sound .mp3')
let nwsound = new Audio('Audio/Nemesis whip sound .mp3');
let cohsound = new Audio('Audio/Claws of Hades sound .mp3');
let ncsound = new Audio('Audio/Nemean cestus sound .mp3');
let brokie = new Audio('Audio/YOURE BROKE! .mp3');
let battleTheme = new Audio('Audio/GoW CoO battle theme .mp3');
let battleTheme2 = new Audio('Audio/Gow CoO Battle theme 2.mp3');
let cyclopsBattle = new Audio('Audio/Cyclops battle theme .mp3');
let zeusBattle = new Audio('Audio/Battle theme Zeus .mp3');
let underworldAm = new Audio('Audio/Underworld ambience .mp3');
let hoplteSound;
let hopliteAttacks = new Audio('Audio/Hoplite attacks .mp3');
let attacksHoplite = new Audio('Audio/Kratos attacks Hoplite .mp3');
let bansheeSound = new Audio('Audio/Banshee sound .mp3');
let bansheeAttacks = new Audio('Audio/Banshee attacks .mp3');
let bansheeAttacks2 = new Audio('Audio/Banshee attacks 2 .mp3');
let attacksBanshee = new Audio('Audio/Kratos attacks Banshee .mp3');
let satyrSound;
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
let health = 100;
let orbs = 0;
let currentWeapon = 0;
let fighting;
let enemyHealth;
let inventory = ["Blades of chaos"];
let weapons = [
    { name: "Blades of chaos", damage: 17 },
    { name: "Nemesis Whip", damage: 28},
    { name: "Gauntlet of Zeus", damage: 44 },
    { name: "Claws of Hades", damage: 64 },
    { name: "Blade of Olympus", damage: 88 }
];

// Enemies 

let enemies = [
    {
	name: "Hoplite",
	level: 2,
	health: 55
    },
    {
	name: "Banshee",
	level: 4,
	health: 80
    },
    {
        name: "Satyr",
        level: 5,
        health: 100
    },
    {
        name: "Minotaur",
        level: 6,
        health: 120
    },
    {
        name: "Medusa",
        level: 8,
        health: 150
    },
    {
        name: "Cyclops",
        level: 11,
        health: 180
    },
    {
        name: "Hermes",
        level: 14,
        health: 220
    },
    {
        name: "Hercules",
        level: 17,
        health: 280
    },
    {
        name: "Zeus",
        level: 20,
        health: 350
    }
];

// Text declarations

const porp = document.getElementById('porp');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const healthBarSet = document.getElementById('Hbar-set');
const musicSet = document.getElementById('Music-set');
const expandSet = document.getElementById('Expand-set');
const ambienceSet = document.getElementById('Ambience-set');
const musicVoltext = document.getElementById('music-volume');
const ambienceVoltext = document.getElementById('ambience-volume');
const currentMusicVol = document.getElementById('music-vol');
const currentAmbVol = document.getElementById('amb-vol');
const expText = document.getElementById('Exp-text');
const healthText = document.getElementById('Health-text');
const healthtext = document.getElementById('health-text');
const orbsText = document.getElementById('Orbs-text');
const maxed = document.getElementById('Maxed');
const pqText = document.getElementById('potion-quantity');
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

const gamebox = document.querySelector('.Game');
const settings = document.querySelector('.Settings');
const musicSetCon = document.querySelector('.Music-con');
const ambSetCon = document.querySelector('.Ambience-con');
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
const slot2 = document.getElementById('Slot2');
const slot3 = document.getElementById('Slot3');
const slot4 = document.getElementById('Slot4');
const slot5 = document.getElementById('Slot5');

//const vSlider = document.getElementById('volume-slider');

// Button declarations

let settingsB = document.getElementById('settings');
let musicOption = document.getElementById('music-option');
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

// function declarations

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

// Other declarations 

let clicks = 0;
let play = false;
let set = false;
let hBarOn = false;
let musicSetOn = false;
let ambSetOn = false;
let musicVolume = 100;
let ambienceVolume = 100;
let musicVolumes = 1;
let ambienceVolumes = 1;
let expanded = false;
let count = 0;
let potionquantity = 0;
let whipClaimed = false;
let gauntletClaimed = false;
let clawsClaimed = false;
let bladeClaimed = false;
let timed = false;

//                                                                                                       Initialize buttons

//  Settings: 

musicOption.addEventListener('mouseover', event => {
    hoverSound.play();
    musicnote.style.color = '#614051';
    porp.style.display = 'inline';
    if (play == true) {
        porp.innerText = "Pause main menu music?"
    } else {
        porp.innerText = "Play main menu music?"
    }
});
musicOption.addEventListener('mouseout', event => {
    hoverSound.pause(); 
    hoverSound.currentTime = 0;
    musicnote.style.color = '#0d0d0d';
    porp.style.display = 'none';
});

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
    }
}

settingsB.addEventListener('mouseover', event => {
    hoverSound.play();
    gear.style.animation = 'rotateZ 0.7s';
    gear.style.color = '#332822';
});
settingsB.addEventListener('mouseout', event => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
    gear.style.animation = 'no';
    gear.style.color = '#0d0d0d';
});

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
		    healthBarSet.innerText = "Turn off health bar";
		    healthBar.style.display = 'inline-block';
			healthtext.style.display = 'none';
			eHealthBar.style.display = 'inline-block';
			enemyhealthtext.style.display = 'none';
			hBarOn = true
		break;
		case true:
		    healthBarSet.innerText = "Turn on health bar";
		    healthBar.style.display = 'none';
			healthtext.style.display = 'inline';
			eHealthBar.style.display = 'none';
			enemyhealthtext.style.display = 'inline';
			hBarOn = false
		break;
	}
}

musicSet.addEventListener('mouseover', event => { musicSet.style.background = '#412021' });
musicSet.addEventListener('mouseout', event => { if (!musicSetOn) musicSet.style.background = '#614051' });

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

ambienceSet.addEventListener('mouseover', event => { ambienceSet.style.background = '#412021' });
ambienceSet.addEventListener('mouseout', event => { if (!ambSetOn) ambienceSet.style.background = '#614051' });

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

mVolup.onclick = () => {
	if (musicVolume < 100 ) {
		menuTheme.volume = Math.min(parseFloat((menuTheme.volume + 0.1).toFixed(2)), 1);
		musicVolumes = Math.min(parseFloat((musicVolumes + 0.1).toFixed(2)), 1);
		battleTheme.volume = musicVolumes;
		battleTheme2.volume = musicVolumes;
		cyclopsBattle.volume = musicVolumes;
		zeusBattle.volume = musicVolumes;
		musicVolume += 10;
		musicVoltext.innerText = musicVolume;
  }
}
mVoldown.onclick = () => {
    if (musicVolume <= 100) {
        menuTheme.volume = Math.max(parseFloat((menuTheme.volume - 0.1).toFixed(2)), 0);
	    musicVolumes = Math.max(parseFloat((musicVolumes - 0.1).toFixed(2)), 0);
		battleTheme.volume = musicVolumes;
		battleTheme2.volume = musicVolumes;
		cyclopsBattle.volume = musicVolumes;
		zeusBattle.volume = musicVolumes;
        musicVolume -= 10;
        musicVoltext.innerText = musicVolume;
    } else if (volume <= 0) {
        musicVolume = 0;
        musicVoltext.innerText = musicVolume;
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
}

aVolup.onclick = () => {
	if (ambienceVolume < 100 ) {
		ambienceVolumes = Math.min(parseFloat((ambienceVolumes + 0.1).toFixed(2)), 1);
		underworldAm.volume = ambienceVolumes;
        olympusAm.volume = ambienceVolumes;
		ambienceVolume += 10;
		ambienceVoltext.innerText = ambienceVolume;
  }
}
aVoldown.onclick = () => {
    if (musicVolume <= 100) {
	    ambienceVolumes = Math.max(parseFloat((ambienceVolumes - 0.1).toFixed(2)), 0);
		underworldAm.volume = ambienceVolumes;
		olympusAm.volume = ambienceVolumes;
        ambienceVolume -= 10;
        ambienceVoltext.innerText = ambienceVolume;
    } else if (volume <= 0) {
        ambienceVolume = 0;
        ambienceVoltext.innerText = ambienceVolume;
    }
}
ambMute.onclick = () => {
	underworldAm.volume = 0;
	olympusAm.volume = 0;
    ambienceVolume = 0;
    ambienceVoltext.innerText = ambienceVolume;
}

expandSet.addEventListener('mouseover', event => { expand.style.scale = '1.2' });
expandSet.addEventListener('mouseout', event => { if (!expanded) expand.style.scale = '1.0' });

expandSet.addEventListener('click', event => {

	var stat = document.querySelectorAll('.stat');
	var images = document.querySelectorAll('.exi');
	var defim = document.querySelectorAll('.def');
	var itemInfo = document.querySelectorAll('.Item-info');
	var controlButtons = document.querySelectorAll('.conbut');

	switch (expanded) {
		case false: 
			expanded = true;
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

			text.style.fontSize = '20px';
			text2.style.fontSize = '20px';
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
				element.style.width = '5.5cm';
				element.style.height = '40px';
				element.style.fontSize = '18px';
			});
		break;
		case true:
			expanded = false;
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
				element.style.fontSize = '20px';
			});
			healthBar.style.height = '20px';

			text.style.fontSize = '17px';
			text2.style.fontSize = '17px';
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
		break;
	}
    
});

// Main menu buttons functions

shopB.addEventListener('mouseover', event => {
	hoverSound.play();
	gamebox.style.background = '#09090b';
	kratosAtSparta.style.position = 'absolute';
	kratosAtSparta.style.left = '40cm';
	shop.style.display = 'block';
	text.innerText = "You can go to the shop to get weapons with orbs to get stronger to defeat stronger enemies. \n 🏪";
	shopB.style.background = '#09090b';
	shopB.style.animation = 'tilt-n-move-shaking 0.5s';
});
shopB.addEventListener('mouseout', event => {
	hoverSound.pause(); 
	hoverSound.currentTime = 0;
	gamebox.style.background = '#464646';
	kratosAtSparta.style.position = 'relative';
	kratosAtSparta.style.left = '0';
	shop.style.display = 'none';
	text.innerText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
	shopB.style.background = '#4b3f33';
	shopB.style.animation = 'grow';
});
shopB.addEventListener('click', event => {
	selection.play();
	text.style.display = 'none';
	text2.style.display = 'inline-block';
	text2.innerText = 'You enter the shop. You see a bunch of weapons that vary in power.. also a potion of healing. Get the ones you can, or take a look at them for now if you are currently a brokie.';
	shopB.style.display = 'none';
	setTimeout(() => {
	    gamebox.style.background = '#09090b';
	}, 5 );
	kratosAtSparta.style.display = 'none';
	underworldB.style.display = 'none';
	olympusB.style.display = 'none';
	inShop.style.display = 'block';
	sellWeaponB.style.display = 'inline';
	sellWeaponB.style.animationDuration = '2s';
	sellWeaponB.style.animationTimingFunction = 'linear';
	potionB.style.display = 'inline';
	potionB.style.animationDuration = '2s';
	potionB.style.animationTimingFunction = 'linear';
	nemesisWhipB.style.display = 'inline';
	nemesisWhipB.style.animationDuration = '2s';
	nemesisWhipB.style.animationTimingFunction = 'linear';
	gauntletB.style.display = 'inline';
	gauntletB.style.animationDuration = '2s';
	gauntletB.style.animationTimingFunction = 'linear';
	clawsB.style.display = 'inline';
	clawsB.style.animationDuration = '2s';
	clawsB.style.animationTimingFunction = 'linear';
	bladeOlympusB.style.display = 'inline';
	bladeOlympusB.style.animationDuration = '2s';
	bladeOlympusB.style.animationTimingFunction = 'linear';
	leaveShop.style.display = 'block';
	leaveShop.style.animationDuration = '2s';
	leaveShop.style.animationTimingFunction = 'linear';
	showHotbar()
});

underworldB.addEventListener('mouseover', event => {
	hoverSound.play();
	gamebox.style.background = '#2f1c12';
	kratosAtSparta.style.position = 'absolute';
	kratosAtSparta.style.left = '40cm';
	underworld.style.display = 'block';
	text.innerText = "This is the underworld. Where you will see a bunch of strange creatures you will have to defeat to get stronger so you can defeat Zeus.";
	underworldB.style.background = '#2f1c12';
	underworldB.style.animation = 'tilt-n-move-shaking 0.5s';
});
underworldB.addEventListener('mouseout', event => {
	hoverSound.pause(); 
	hoverSound.currentTime = 0;
	gamebox.style.background = '#464646';
	kratosAtSparta.style.position = 'relative';
	kratosAtSparta.style.left = '0';
	underworld.style.display = 'none';
	text.innerText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
	underworldB.style.background = '#4b3f33';
	underworldB.style.animation = 'grow';
});
underworldB.addEventListener('click', event => {
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
	}, 4);
	mainDisappear();
	kratosUnderworld.style.display = 'block';
	settingsB.style.background = '#3c3837';
	text2.innerText = 'You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.';
	hopliteB.style.display = 'inline';
	hopliteB.style.animationDuration = '2s';
	hopliteB.style.animationTimingFunction = 'linear';
	bansheeB.style.display = 'inline';
	bansheeB.style.animationDuration = '2s';
	bansheeB.style.animationTimingFunction = 'linear';
	satyrB.style.display = 'inline';
	satyrB.style.animationDuration = '2s';
	satyrB.style.animationTimingFunction = 'linear';
	minotaurB.style.display = 'inline';
	minotaurB.style.animationDuration = '2s';
	minotaurB.style.animationTimingFunction = 'linear';
	medusaB.style.display = 'inline';
	medusaB.style.animationDuration = '2s';
	medusaB.style.animationTimingFunction = 'linear';
	cyclopsB.style.display = 'inline';
	cyclopsB.style.animationDuration = '2s';
	cyclopsB.style.animationTimingFunction = 'linear';
	leaveUnderworld.style.display = 'block';
	leaveUnderworld.style.animationDuration = '2s';
	leaveUnderworld.style.animationTimingFunction = 'linear';
});

olympusB.addEventListener('mouseover', event => {
	hoverSound.play();
	gamebox.style.background = 'rgba(102,47,18,255)';
	kratosAtSparta.style.position = 'absolute';
	kratosAtSparta.style.left = '40cm';
	mountOlympus.style.display = 'block';
	text.innerText = "This is Mount Olympus. Where you will fight the gods of olympus including Zeus when you are ready. It is suggested you only go here when you have defeated all the createres of the underworld. Otherwise, you will die.";
	olympusB.style.background = 'rgba(102,47,18,255)';
	olympusB.style.animation = 'tilt-n-move-shaking 0.5s';
});
olympusB.addEventListener('mouseout', event => {
	hoverSound.pause(); 
	hoverSound.currentTime = 0;
	gamebox.style.background = '#464646';
	kratosAtSparta.style.position = 'relative';
	kratosAtSparta.style.left = '0';
	mountOlympus.style.display = 'none';
	text.innerText = "Welcome to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
	olympusB.style.background = '#4b3f33';
	olympusB.style.animation = 'grow';
});
olympusB.addEventListener('click', event => {
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
	text2.innerText = 'You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong.';
	setTimeout(() => {
	 gamebox.style.background = '#335168';
	}, 4);
	mainDisappear();
	kratosOlympus.style.display = 'block';
	settingsB.style.background = '#335168';
	herculesB.style.display = 'inline';
	herculesB.style.animationDuration = '2s';
	herculesB.style.animationTimingFunction = 'linear';
	hermesB.style.display = 'inline';
	hermesB.style.animationDuration = '2s';
	hermesB.style.animationTimingFunction = 'linear';
	zeusB.style.display = 'inline';
	zeusB.style.animationDuration = '2s';
	zeusB.style.animationTimingFunction = 'linear';
	leaveOlympus.style.display = 'block';
	leaveOlympus.style.animationDuration = '2s';
	leaveOlympus.style.animationTimingFunction = 'block';
});

function mainDisappear() {
	musicOption.style.display = 'none';
	stats.style.marginTop = '40px';
	text.style.display = 'none';
	text2.style.display = 'inline-block';
	kratosAtSparta.style.display = 'none';
	olympusB.style.display = 'none';
	shopB.style.display = 'none';
	settings.style.top = '50px';
	underworldB.style.display = 'none';
	showHotbar()
}

// Shop functions

sellWeaponB.addEventListener('mouseover', event => {
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
});
sellWeaponB.addEventListener('mouseout', event => {
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
});

sellWeaponB.addEventListener('click', sellWeapon );

potionB.addEventListener('mouseover', event => {
	hoverSound.play();
	potionB.style.animation = 'tilt-shaking 0.5s';
	iSdis();
	potion.style.display = 'inline-block';
	potionInfo.style.display = 'inline-block';
});
potionB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	potionB.style.animation = 'grow';
	iSap();
	potion.style.display = 'none';
	potionInfo.style.display = 'none';
});
potionB.addEventListener('click', buyPotion );

nemesisWhipB.addEventListener('mouseover', event => {
	hoverSound.play();
	nemesisWhipB.style.animation = 'tilt-shaking 0.5s';
	iSdis();
	nemesisWhip.style.display = 'inline-block';
	whipInfo.style.display = 'inline-block';
});
nemesisWhipB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	nemesisWhipB.style.animation = 'grow';
	iSap();
	nemesisWhip.style.display = 'none';
	whipInfo.style.display = 'none';
});
nemesisWhipB.addEventListener('click', buyWhip);

gauntletB.addEventListener('mouseover', event => {
	hoverSound.play();
	gauntletB.style.animation = 'tilt-shaking 0.5s';
	iSdis();
	gauntletZeus.style.display = 'inline-block';
	gauntletInfo.style.display = 'inline-block';
});
gauntletB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gauntletB.style.animation = 'grow';
	iSap();
	gauntletZeus.style.display = 'none';
	gauntletInfo.style.display = 'none';
});
gauntletB.addEventListener('click', buyGauntlet);

clawsB.addEventListener('mouseover', event => {
	hoverSound.play();
	clawsB.style.animation = 'tilt-shaking 0.5s';
	iSdis();
	clawsHades.style.display = 'inline-block';
	clawsInfo.style.display = 'inline-block';
	clawsInfo.style.right = '2.8cm';
});
clawsB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	clawsB.style.animation = 'grow';
	iSap();
	clawsHades.style.display = 'none';
	clawsInfo.style.display = 'none';
});
clawsB.addEventListener('click', buyClaws );

bladeOlympusB.addEventListener('mouseover', event => {
	hoverSound.play();
	bladeOlympusB.style.animation = 'tilt-shaking 0.5s';
	iSdis();
	bladeOlympus.style.display = 'inline-block';
	bladeInfo.style.display = 'inline-block';
});
bladeOlympusB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	bladeOlympusB.style.animation = 'grow';
	iSap();
	bladeOlympus.style.display = 'none';
	bladeInfo.style.display = 'none';
});
bladeOlympusB.addEventListener('click', buyBlade );

leaveShop.addEventListener('mouseover', event => {
	hoverSound.play();
	gamebox.style.background = '#20130c';
	leaveShop.style.animation = 'horizontal-shaking 0.5s';
	inShop.style.position = 'absolute';
	inShop.style.left = '40cm';
	sparta.style.display = 'block';
});
leaveShop.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.background = '#09090b';
	leaveShop.style.animation = 'grow';
	inShop.style.position = 'relative';
	inShop.style.left = '0';
	sparta.style.display = 'none';
});
leaveShop.addEventListener('click', event => {
	returnSound.play();
	musicOption.style.background = '#464646';
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
});

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
				slot1.style.display = 'none';
				var sold = setInterval(() => {
				  count++;
				  orbs++;
				  orbsText.innerText = orbs;
				  if (count == 17) {
					count = 0;
					clearInterval(sold);
				  }
				}, 155);
				currentWeapon++;
			break;
			case 1:
			    inventory = inventory.filter(weapon => weapon !== weapons[currentWeapon].name);
				slot2.style.display = 'none';
				whipClaimed = false;
				var sold2 = setInterval(() => {
				  count++;
				  orbs++;
				  orbsText.innerText = orbs;
				  if (count == 28) {
					count = 0;
					clearInterval(sold2);
				  }
				}, 140);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = blade;
			break;
			case 2:
			    inventory = inventory.filter(weapon => weapon !== weapons[currentWeapon].name);
				slot3.style.display = 'none';
				gauntletClaimed = false;
				var sold3 = setInterval(() => {
				  count++;
				  orbs++;
				  orbsText.innerText = orbs;
				  if (count == 42) {
					count = 0;
					clearInterval(sold3);
				  }
				}, 125);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = blade;
			break;
			case 3:
			    inventory = inventory.filter(weapon => weapon !== weapons[currentWeapon].name);
				slot4.style.display = 'none';
				var sold4 = setInterval(() => {
				  clawsClaimed = false;
				  count++;
				  orbs++;
				  orbsText.innerText = orbs;
				  if (count == 70) {
					count = 0;
					clearInterval(sold4);
				  }
				}, 110);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = blade;
			break;
			case 4:
			    inventory = inventory.filter(weapon => weapon !== weapons[currentWeapon].name);
				slot5.style.display = 'none';
				bladeClaimed = false;
				var sold5 = setInterval(() => {
				  count++;
				  orbs++;
				  orbsText.innerText = orbs;
				  if (count == 100) {
					count = 0;
					clearInterval(sold5);
				  }
				}, 100);
				currentWeapon = inventory.length > 2 ? currentWeapon++ : currentWeapon--;
				soldWeapon = blade;
			break;
		}
		text2.innerText = "You sold the " + soldWeapon + ".";
		text2.innerText += "\n In your inventory you have: " + inventory.join(", ");
		inShop.style.display = 'none';
		mVillager.style.display = 'block';
		boc.style.display = 'none';
		nemesisWhip.style.display = 'none';
		gauntletZeus.style.display = 'none';
		clawsHades.style.display = 'none';
		bladeOlympus.style.display = 'none';
		sellWeaponB.style.display = 'none';
		potionB.style.display = 'none';
		nemesisWhipB.style.display = 'none';
		gauntletB.style.display = 'none';
		clawsB.style.display = 'none';
		bladeOlympusB.style.display = 'none';
		leaveShop.style.display = 'none';
		setTimeout(() => {
			mVillager.style.display = 'none';
			text2.style.color = '#ffad15';
			text2.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
			inShop.style.display = 'block';
			sellWeaponB.style.display = 'inline';
			potionB.style.display = 'inline';
			nemesisWhipB.style.display = 'inline';
			gauntletB.style.display = 'inline';
			clawsB.style.display = 'inline';
			bladeOlympusB.style.display = 'inline';
			leaveShop.style.display = 'inline';
		}, 2200 );
		} else {
			bruh.play();
			text2.innerText = "Don't sell your only weapon, fool.";
		setTimeout(() => {
			text2.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4000 );
	}
}

function buyPotion() {
	if (orbs >= 17 && count == 0) {
		noice.play();
		var boughted = setInterval (() => {
		    count++;
		    orbs--;
		    orbsText.innerText = orbs;
		    if (count == 17) {
			    count = 0;
			    clearInterval(boughted);
		    }
		}, 170 );
		potionquantity++;
		pqText.innerText = potionquantity;
		pslot.style.display = 'inline-block';
	} else if (orbs < 17) {
		brokie.play();
		text2.innerText = "You do not have enough orbs to buy a health potion.";
		setTimeout(() => {
		    text2.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
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
		    }
		}, 100 );
		currentWeapon = 1;
		inventory.push(weapons[currentWeapon].name);
		weaponGot();  
		whipClaim.style.display = 'block';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.display = 'inline-block';
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
		    text2.innerText = "You do not have enough orbs to buy the Nemesis whip. You are a brokie! Go fight enemies to earn more orbs.";
		    text2.style.color = '#bb0a1e';
		} else {
		    bruh.play();
		    text2.innerText = "You already have that weapon, you twat!";
		    text2.style.color = '#bb0a1e';
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
		    }
		}, 80 );
		currentWeapon = 2;
		inventory.push(weapons[currentWeapon].name);
		weaponGot();
		gauntletClaim.style.display = 'block';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot3.style.display = 'inline-block';
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
	    text2.innerText = "You do not have enough orbs to buy the Gauntlet of Zeus. You are a brokie! Go fight enemies to earn more orbs.";
	    text2.style.color = '#bb0a1e';
	} else {
	    bruh.play();
	    text2.innerText = "You already have that weapon, you twat!";
	    text2.style.color = '#bb0a1e';
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
		    }
		}, 55 );
		currentWeapon = 3;
		inventory.push(weapons[currentWeapon].name);
		weaponGot();
		clawsClaim.style.display = 'block';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot4.style.display = 'inline-block';
		slot4.style.border = '3px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
		setTimeout(() => {
		    clawsClaim.style.display = 'none';
		    revert();
		}, 4400 );
	} else {
		if (!clawsClaimed) {
		    brokie.play();
		    text2.innerText = "You do not have enough orbs to buy the Claws of Hades. You are a brokie! Go fight enemies to earn more orbs.";
		    text2.style.color = '#bb0a1e';
		} else {
		    bruh.play();
		    text2.innerText = "You already have that weapon, you twat!";
		    text2.style.color = '#bb0a1e';
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
		    }
		}, 35 );
		currentWeapon = 4;
		inventory.push(weapons[currentWeapon].name);
		weaponGot();
		bladeClaim.style.display = 'block';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot4.style.border = '1.8px solid #5a3910';
		slot5.style.display = 'inline-block';
		slot5.style.border = '3px solid #5a3910';
		setTimeout(() => {
		    bladeClaim.style.display = 'none';
		    revert();
		}, 4400 );
	} else {
		if (!bladeClaimed) {
		    brokie.play();
		    text2.innerText = "You do not have enough orbs to buy the Blade of Olympus. You are a brokie! Go fight enemies to earn more orbs.";
		    text2.style.color = '#bb0a1e';
		} else {
		    bruh.play();
		    text2.innerText = "You already have that weapon, you twat!";
		    text2.style.color = '#bb0a1e';
		}
		setTimeout(() => {
		    revert();
		}, 3000 );
	}
}

function weaponGot() {
	text2.innerText = "You now have the " + weapons[currentWeapon].name + ". \n" + " In your inventory you have: " + inventory.join(", ");
	text2.style.color = '#191970';
	inShop.style.display = 'none';
	sellWeaponB.style.display = 'none';
	potionB.style.display = 'none';
	nemesisWhipB.style.display = 'none';
	gauntletB.style.display = 'none';
	clawsB.style.display = 'none';
	bladeOlympusB.style.display = 'none';
	leaveShop.style.display = 'none';
}

function revert() {
	text2.style.color = '#ffad15';
	text2.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
	inShop.style.display = 'block';
	sellWeaponB.style.display = 'inline';
	potionB.style.display = 'inline';
	nemesisWhipB.style.display = 'inline';
	gauntletB.style.display = 'inline';
	clawsB.style.display = 'inline';
	bladeOlympusB.style.display = 'inline';
	leaveShop.style.display = 'inline';
}

// Inventory functions 

function showHotbar() { hotbar.style.display = 'block' }
function hideHotbar() { hotbar.style.display = 'none' }

pslot.addEventListener('click', increaseHealth );

slot1.addEventListener('mouseover', event => { if (currentWeapon != 0) { slot1.style.border = '3px solid #5a3910' }})

slot1.addEventListener('mouseout', event => { if (currentWeapon != 0) {slot1.style.border = '1.8px solid #5a3910' }});
slot1.addEventListener('click', event => {
	bocsound.play();
	if (currentWeapon != 0) {
		currentWeapon = 0;
		slot1.style.border = '3px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot4.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
	}
});

slot2.addEventListener('mouseover', event => { if (currentWeapon != 1) { slot2.style.border = '3px solid #5a3910' }})
slot2.addEventListener('mouseout', event => { if (currentWeapon != 1) { slot2.style.border = '1.8px solid #5a3910';}});
slot2.addEventListener('click', event => {
	nwsound.play();
	if (currentWeapon != 1) {
		currentWeapon = 1;
		slot2.style.border = '3px solid #5a3910';
		slot1.style.border = '1.8px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot4.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
	}
});

slot3.addEventListener('mouseover', event => { if (currentWeapon != 2) { slot3.style.border = '3px solid #5a3910' }
});
slot3.addEventListener('mouseout', event => { if (currentWeapon != 2) { slot3.style.border = '1.8px solid #5a3910' }
});
slot3.addEventListener('click', event => {
	gozsound.play();
	if (currentWeapon != 2) {
		currentWeapon = 2;
		slot3.style.border = '3px solid #5a3910';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot4.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
  }
});

slot4.addEventListener('mouseover', event => { if (currentWeapon != 3) { slot4.style.border = '3px solid #5a3910' }})
slot4.addEventListener('mouseout', event => { if (currentWeapon != 3) { slot4.style.border = '1.8px solid #5a3910' }});
slot4.addEventListener('click', event => {
	cohsound.play();
	if (currentWeapon != 3) {
		currentWeapon = 3;
		slot4.style.border = '3px solid #5a3910';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
	}
});

slot5.addEventListener('mouseover', event => { if (currentWeapon != 4) { slot5.style.border = '3px solid #5a3910'}})
slot2.addEventListener('mouseout', event => { if (currentWeapon != 4) { slot5.style.border = '1.8px solid #5a3910'}});
slot5.addEventListener('click', event => {
	swordThud.play();
	if (currentWeapon != 4) {
		currentWeapon = 4;
		slot4.style.border = '3px solid #5a3910';
		slot1.style.border = '1.8px solid #5a3910';
		slot2.style.border = '1.8px solid #5a3910';
		slot3.style.border = '1.8px solid #5a3910';
		slot5.style.border = '1.8px solid #5a3910';
		
	}
});

function increaseHealth() {
    if (health <= 199) {
        drink.play();
        potionquantity--;
        pqText.innerText = potionquantity;

        health += 14;
        if (health > 200) health = 200; // Cap health at 200
        
        healthText.innerText = health;
        healthFiller.style.width = `${health}%`;

        // Adjust health bar and filler styles based on health
        if (health > 100) {
            healthBar.style.width = `${health}px`;
            healthFiller.style.background = '#299617'; // Healthy green
		} else if (health > 50) {
			healthBar.style.width = '100px';
			healthFiller.style.background = '#32cd33'; // Default green
		} else if (health > 25) {
            healthFiller.style.background = '#ed7014'; // Warning orange
		}

        // Handle max health reached
        if (health === 200) {
            healthBar.style.width = '200px';
            maxed.style.display = 'inline';
            setTimeout(() => {
                maxed.style.display = 'none';
            }, 2000);
        }

        // Hide potion slot if no potions are present
		if (potionquantity === 0) {
			pslot.style.display = 'none';
		}

        if (health > 25) gamebox.style.boxShadow = 'none';
    }
}

// Key events

document.addEventListener('keydown', event => { if (event.key == 'f' && potionquantity >= 1) increaseHealth() });

// Underworld functions

hopliteB.addEventListener('mouseover', event => {
	hoverSound.play();
	kratosUnderworld.style.display = 'none';
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "An enemy that appears to be a skeletal corpse adorned in standard Greek armor, and with two swords for weapons.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "9";
	hoplite.style.display = 'inline-block';
	hopliteB.style.animation = 'tilt-shaking 0.5s';
});
hopliteB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	text2.style.display = 'inline-block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	kratosUnderworld.style.display = 'block';
	hoplite.style.display = 'none';
	hopliteB.style.animation = 'grow';
});
hopliteB.addEventListener('click', event => {
	setTimeout(() => {
		battleTheme.play();
	}, 1000 );
	fighting = 0;
	text2.innerText = "You are fighting a Hoplite. Try not to die, please.";
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	go();
	setTimeout(() => {
		selection2.play();
		attackHoplite.style.display = 'inline';
		attackHoplite.style.animationDuration = '2s';
		attackHoplite.style.animationTimingFunction = 'linear';
		hopliteShapa();
    }, 800 )
});

attackHoplite.addEventListener('mouseover', event => {
	kratosUnderworld.style.display = 'none';
	hopliteAttack.style.display = 'block';
	attackHoplite.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackHoplite.addEventListener('mouseout', event => {
	kratosUnderworld.style.display = 'block';
	hopliteAttack.style.display = 'none';
	attackHoplite.style.animation = 'grow';
});
attackHoplite.addEventListener('click', event => {
	attacksHoplite.play();
	attack();
});

bansheeB.addEventListener('mouseover', event => {
	bansheeSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "The Banshee is known for having the ability to deliver a frightening inhuman scream that could harm and even kill humans.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "17";
	kratosUnderworld.style.display = 'none';
	banshee.style.display = 'inline-block';
	bansheeB.style.animation = 'tilt-shaking 1.8s';
});
bansheeB.addEventListener('mouseout', event => {
	bansheeSound.pause();
	bansheeSound.currentTime = 0;
	text2.style.display = 'inline-block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	kratosUnderworld.style.display = 'block';
	banshee.style.display = 'none';
	bansheeB.style.animation = 'grow';
});
bansheeB.addEventListener('click', event => {
	setTimeout(() => {
	    battleTheme.play();
	}, 1000 );
	text2.innerText = "You are now fighting a Banshee. Try not to die, please.";
	fighting = 1;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	go();
	setTimeout(() => {
		selection2.play();
		attackBanshee.style.display = 'inline';
		attackBanshee.style.animationDuration = '2s';
		attackBanshee.style.animationTimingFunction = 'linear';
		bansheeShapa();
	}, 800 );
});

attackBanshee.addEventListener('mouseover', event => {
	kratosUnderworld.style.display = 'none';
	bansheeAttack.style.display = 'block';
	attackBanshee.style.animation = 'tilt-n-move-shaking 0.5s';
});
attackBanshee.addEventListener('mouseout', event => {
	kratosUnderworld.style.display = 'block';
	bansheeAttack.style.display = 'none';
	attackBanshee.style.animation = 'grow';
});
attackBanshee.addEventListener('click', event => {
	attacksBanshee.play();
	attack();
});

satyrB.addEventListener('mouseover', event => {
	hoverSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "Satyrs are one of the most formidable opponents, able to go toe-to-toe with Kratos and make short work of him. They have the upper body of a man and the horns and back legs of a goat.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "21";
	kratosUnderworld.style.display = 'none';
	satyr.style.display = 'inline-block';
	satyrB.style.animation = 'tilt-shaking 0.5s';
});
satyrB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	text2.style.display = 'inline-block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	kratosUnderworld.style.display = 'block';
	satyr.style.display = 'none';
	satyrB.style.animation = 'grow';
});
satyrB.addEventListener('click', event => {
	setTimeout(() => {
	    battleTheme2.play();
	}, 1000 );
	text2.innerText = "You are now fighting a Satyr. Try not to die, please.";
	fighting = 2;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	go();
	setTimeout(() => {
		selection2.play();
		attackSatyr.style.display = 'inline';
		attackSatyr.style.animationDuration = '2s';
		attackSatyr.style.animationTimingFunction = 'linear';
	}, 800 );
	satyrShapa();
});

attackSatyr.addEventListener('mouseover', event => {
	kratosUnderworld.style.display = 'none';
	satyrAttack.style.display = 'block';
	attackSatyr.style.animation = 'tilt-n-move-shaking 0.5s';
});
attackSatyr.addEventListener('mouseout', event => {
	kratosUnderworld.style.display = 'block';
	satyrAttack.style.display = 'none';
	attackSatyr.style.animation = 'grow';
});
attackSatyr.addEventListener('click', event => {
	clicks = 1;
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
});

minotaurB.addEventListener('mouseover', event => {
	minotaurSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "The Minotaur appears as a species of anthropomorphic bull, about eight feet tall. Minotaurs walk on their hind legs and carry a variety of massive war axes.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "25";
	kratosUnderworld.style.display = 'none';
	minotaur.style.display = 'inline-block';
	minotaurB.style.animation = 'tilt-shaking 1s';
});
minotaurB.addEventListener('mouseout', event => {
	minotaurSound.pause();
	minotaurSound.currentTime = 0;
	text2.style.display = 'inline-block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	kratosUnderworld.style.display = 'block';
	minotaur.style.display = 'none';
	minotaurB.style.animation = 'grow';
});
minotaurB.addEventListener('click', event => {
	setTimeout(() => {
	    battleTheme2.play();
	}, 1000 );
	text2.innerText = "You are now fighting a Minotaur. Try not to die, please.";
	fighting = 3;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	go();
	setTimeout(() => {
		selection2.play();
		attackMinotaur.style.display = 'inline';
		attackMinotaur.style.animationDuration = '2s';
		attackMinotaur.style.animationTimingFunction = 'linear';
	}, 800 );
	minotaurShapa();
});

attackMinotaur.addEventListener('mouseover', event => {
	kratosUnderworld.style.display = 'none';
	minotaurAttack.style.display = 'block';
	attackMinotaur.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackMinotaur.addEventListener('mouseout', event => {
	kratosUnderworld.style.display = 'block';
	minotaurAttack.style.display = 'none';
	attackMinotaur.style.animation = 'grow';
});
attackMinotaur.addEventListener('click', event => {
	attacksMinotaur.play();
	attack()
});

medusaB.addEventListener('mouseover', event => {
	hoverSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "Medusa was first of the Gorgon sisters in Greek mythology. Medusa has the power to turn Kratos to stone with her gaze, but she can also still attack with her snake-like lower body.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "33";
	kratosUnderworld.style.display = 'none';
	medusa.style.display = 'inline-block';;
	medusaB.style.animation = 'tilt-shaking 0.5s';
});
medusaB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	text2.style.display = 'inline-block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	kratosUnderworld.style.display = 'block';
	medusa.style.display = 'none';
	medusaB.style.animation = 'grow';
});
medusaB.addEventListener('click', event => {
	setTimeout(() => {
	    battleTheme2.play();
	}, 1000 );
	text2.innerText = "You are now fighting Medusa. We must stay focused, brothers. Do not look at those breast and try not to die.";
	fighting = 4;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	go();
	setTimeout(() => {
		selection2.play();
		attackMedusa.style.display = 'inline';
		attackMedusa.style.animationDuration = '2s';
		attackMedusa.style.animationTimingFunction = 'linear';
	}, 800 );
	medusaShapa();
});

attackMedusa.addEventListener('mouseover', event => {
	kratosUnderworld.style.display = 'none';
	medusaAttack.style.display = 'block';
	attackMedusa.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackMedusa.addEventListener('mouseout', event => {
	kratosUnderworld.style.display = 'block';
	medusaAttack.style.display = 'none';
	attackMedusa.style.animation = 'grow';
});
attackMedusa.addEventListener('click', event => {
	attacksMedusa.play();
	attack();
});

cyclopsB.addEventListener('mouseover', event => {
	cyclopsSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "Cyclopes are a species of burly, one-eyed giants, they give plenty of damage, so you will want to have a lot of health and/or a good weapon if you want to fight it.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "45";
	kratosUnderworld.style.display = 'none';
	cyclops.style.display = 'inline-block';
	cyclopsB.style.animation = 'tilt-shaking 1.6s';
});
cyclopsB.addEventListener('mouseout', event => {
	cyclopsSound.pause();
	cyclopsSound.currentTime = 0;
	text2.style.display = 'inline-block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	kratosUnderworld.style.display = 'block';
	cyclops.style.display = 'none';
	cyclopsB.style.animation = 'grow';
});
cyclopsB.addEventListener('click', event => {
	setTimeout(() => {
	    cyclopsBattle.play();
	}, 1000 );
	text2.innerText = "You are now fighting a Cyclops. This thing is dangerous. Try not to die.";
	fighting = 5;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	go();
	setTimeout(() => {
		selection2.play();
		attackCyclops.style.display = 'inline';
		attackCyclops.style.animationDuration = '2s';
		attackCyclops.style.animationTimingFunction = 'linear';
	}, 800 );
	cyclopsShapa();
});

attackCyclops.addEventListener('mouseover', event => {
	kratosUnderworld.style.display = 'none';
	cyclopsAttack.style.display = 'block';
	attackCyclops.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackCyclops.addEventListener('mouseout', event => {
	kratosUnderworld.style.display = 'block';
	cyclopsAttack.style.display = 'none';
	attackCyclops.style.animation = 'grow';
});
attackCyclops.addEventListener('click', event => {
	attacksCyclops.play();
	attack();
});

function go() {
	enemyStats.style.display = "inline-block";
	enemyName.innerText = enemies[fighting].name;
	enemyHealth = enemies[fighting].health;
	enemyHealthText.innerText = enemyHealth;
	hopliteB.style.display = 'none';
	bansheeB.style.display = 'none';
	satyrB.style.display = 'none';
	minotaurB.style.display = 'none';
	medusaB.style.display = 'none';
	cyclopsB.style.display = 'none';
	leaveUnderworld.style.display = 'none';
	setTimeout(() => {
		evadeB.style.display = 'inline';
		evadeB.style.animationDuration = '2s';
		evadeB.style.animationTimingFunction = 'linear';
		runB.style.display = 'inline';
		runB.style.animationDuration = '2s';
		runB.style.animationTimingFunction = 'linear';
	}, 800 );
}

// button functions continuation

evadeB.addEventListener('mouseover', event => {
	hoverSound.play();
	evadeB.style.animation = 'vertical-shaking 0.8s';
});
evadeB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	evadeB.style.animation = 'grow';
});
evadeB.addEventListener('click', evade );

runB.addEventListener('mouseover', event => {
	hoverSound.play();
	kratosUnderworld.style.display = 'none';
	kratosRunning.style.display = 'inline';
	runB.style.animation = 'horizontal-shaking 0.5s';
	hopliteKill.style.display = 'none';
	bansheeKill.style.display = 'none';
	satyrKill.style.display = 'none';
	minotaurKill.style.display = 'none';
	medusaKill.style.display = 'none';
	cyclops.style.display = 'none';
});
runB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.transform = 'rotate(0deg)';
	kratosUnderworld.style.display = 'block';
	kratosRunning.style.display = 'none';
	runB.style.animation = 'grow';
});
runB.addEventListener('click', event => {
	stopMusic();
	returnSound.play();
	text2.innerText = "You ran from the creature, knowing that you cannot defeat it.... or you're just a pussio."
	tct = setTimeout(() => {
		text2.innerText = "You have arrived in the underworld. You see some strange creatures. Choose which one you want to attack. Be sure to attack one that you are sure you can defeat.";
		timed = true;
	}, 8000 );
	enemyStats.style.display = 'none';
	if (enemyHealth <= 0) eHealthFiller.style.width = '100%';
	evadeB.style.display = 'none';
	runB.style.display = 'none';
	hopliteB.style.display = 'inline';
	hopliteB.style.animationDuration = '2s';
	hopliteB.style.animationTimingFunction = 'linear';
	bansheeB.style.display = 'inline';
	bansheeB.style.animationDuration = '2s';
	bansheeB.style.animationTimingFunction = 'linear';
	satyrB.style.display = 'inline';
	satyrB.style.animationDuration = '2s';
	satyrB.style.animationTimingFunction = 'linear';
	minotaurB.style.display = 'inline';
	minotaurB.style.animationDuration = '2s';
	minotaurB.style.animationTimingFunction = 'linear';
	medusaB.style.display = 'inline';
	medusaB.style.animationDuration = '2s';
	medusaB.style.animationTimingFunction = 'linear';
	cyclopsB.style.display = 'inline';
	cyclopsB.style.animationDuration = '2s';
	cyclopsB.style.animationTimingFunction = 'linear';
	leaveUnderworld.style.display = 'block';
	leaveUnderworld.style.animationDuration = '2s';
	leaveUnderworld.style.animationTimingFunction = 'linear';
	if (runB.innerText = 'Return') {
	    runB.innerText = 'Run';
	}
	switch (fighting) {
	case 0:
	    attackHoplite.style.display = 'none';
	    clearInterval(hopat);
	break;
	case 1:
	    attackBanshee.style.display = 'none';
	    clearInterval(banshat);
	 break;
	case 2:
	    attackSatyr.style.display = 'none';
	    clearInterval(satat);
	break;
	case 3:
	    attackMinotaur.style.display = 'none';
	    clearInterval(minat);
	break;
	case 4:
	    attackMedusa.style.display = 'none';
	    clearInterval(medat);
	break;
	case 5:
	    attackCyclops.style.display = 'none';
	    clearInterval(cyclat);
	}
});

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
		if (health <= 0) {
			death();
			clearInterval(hopat);
		} else if (health <= 25) {
			lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
			hopliteKill.style.display = 'block';
			hopliteKill.style.width = '420px';
			var hopdef = setInterval(( )=> {
				count += 2;
				orbs += 2;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 16) {
					count = 0;
					clearInterval(hopdef);
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
	let banshat = setInterval (() => {
		bansheeAttacks2.play();
		//health -= enemies[fighting].level * 8;
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
			gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		if (health <= 0) {
			death();
			clearInterval(banshat);
		} else if (health <= 25) {
			lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
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
		if (health <= 0) {
			death();
			clearInterval(satat);
		} else if (health <= 25) {
			lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
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
		if (health <= 0) {
			death();
			clearInterval(minat);
		} else if (health <= 25) {
			lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
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
		if (health <= 0) {
			death();
			clearInterval(medat);
		} else if (health <= 25) {
			lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
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
		if (health <= 0) {
			death();
			clearInterval(cyclat);
		} else if (health <= 25) {
			lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
			cyclopsBattle.pause();
			cyclopsBattle.currentTime = 0;
			cyclopsKill.style.display = 'block';
			var cyclef = setInterval(( )=> {
				count += 2;
				orbs += enemies[fighting].level - 8;
				exp++;
				orbsText.innerText = orbs;
				expText.innerText = exp;
				if (count == 88) {
					count = 0;
					clearInterval(cyclef);
				}
			}, 100);
			clearInterval(cyclat);
		}
	}, 3400);
}

// Underworld battle functions complete

leaveUnderworld.addEventListener('mouseover', event => {
	hoverSound.play();
	gamebox.style.background = '#20130c';
	leaveUnderworld.style.animation = 'horizontal-shaking 0.5s';
	kratosUnderworld.style.position = 'absolute';
	kratosUnderworld.style.left = '40cm';
	sparta.style.display = 'block';
});
leaveUnderworld.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.background = '#3c3837';
	leaveUnderworld.style.animation = 'grow';
	kratosUnderworld.style.position = 'relative';
	kratosUnderworld.style.left = '0';
	sparta.style.display = 'none';
});
leaveUnderworld.addEventListener('click', event => {
	underworldAm.pause();
	underworldAm.currentTime = 0;
	returnSound.play();
	if (timed == false) {
	 clearTimeout(tct);
	}
	kratosUnderworld.style.display = 'none';
	hopliteB.style.display = 'none';
	bansheeB.style.display = 'none';
	satyrB.style.display = 'none';
	minotaurB.style.display = 'none';
	medusaB.style.display = 'none';
	cyclopsB.style.display = 'none';
	leaveUnderworld.style.display = 'none';
	mainAppear();
});

// Olympus functions

hermesB.addEventListener('mouseover', event => {
	hoverSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = "Hermes (Greek: Ἑρμῆς) is the Olympian God of Travelers, Messengers, Thieves, Commerce, Sports, Athletics, and mostly.. Speed.";
	damageCon.style.display = "inline";
	enemyDamage.innerText = "57";
	kratosOlympus.style.position = 'absolute';
	kratosOlympus.style.left = '40cm';
	hermes.style.display = 'inline-block';
	hermesB.style.animation = 'tilt-shaking 0.5s';
});
hermesB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	text2.style.display = 'block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = "none";
	hermes.style.display = 'none';
	kratosOlympus.style.position = 'relative';
	kratosOlympus.style.left = '0';
	hermesB.style.animation = 'grow';
});
hermesB.addEventListener('click', event => {
	olympusAm.pause();
	olympusAm.currentTime = 0;
	gamebox.style.background = '#0f2738';
	hermesLine.play();
	kratosOlympus.style.display = 'none';
	hermesxkratos.style.display = 'block';
	text2.innerText = "You are now by the god, Hermes. He spots you and he quickly starts attacking. \n 😟";
	fighting = 6;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	gaan();
});

attackHermes.addEventListener('mouseover', event => {
	hermesxkratos.style.display = 'none';
	hermesFight.style.display = 'block';
	hermesFight.style.animation = 'tilt-n-move-shaking';
	attackHermes.style.animationDuration = '0.8s';
});
attackHermes.addEventListener('mouseout', event => {
	hermesxkratos.style.display = 'block';
	hermesFight.style.display = 'none';
	attackHermes.style.animation = 'grow';
});
attackHermes.addEventListener('click', event => {
	attacks.play();
	attack();
});

herculesB.addEventListener('mouseover', event => {
	hoverSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = 'Hercules (Greek: Ἡρακλῆς) is the son of Zeus and half-brother to Kratos. He is known for having a lot of strength.';
	damageCon.style.display = "inline";
	enemyDamage.innerText = "69";
	kratosOlympus.style.position = 'absolute';
	kratosOlympus.style.left = '40cm';
	hercules.style.display = 'inline-block';
	herculesB.style.animation = 'tilt-shaking 0.5s';
});
herculesB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	text2.style.display = 'block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = 'none';
	hercules.style.display = 'none';
	kratosOlympus.style.position = 'relative';
	kratosOlympus.style.left = '0';
	herculesB.style.animation = 'grow';
});
herculesB.addEventListener('click', event => {
	olympusAm.pause();
	olympusAm.currentTime = 0;
	gamebox.style.background = '#59636f';
	herculesLine.play();
	kratosOlympus.style.display = 'none';
	herculesxkratos.style.display = 'block';
	text2.innerText = "Hercules gets in your way, to Zeus. He challenges you to fight him to the death to see who is stronger. \n 😟";
	fighting = 7;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	gaan();
});

attackHercules.addEventListener('mouseover', event => {
	herculesxkratos.style.display = 'none';
	herculesFight.style.display = 'block';
	herculesFight.style.animation = 'tilt-n-move-shaking 0.5s';
});
attackHercules.addEventListener('mouseout', event => {
	herculesxkratos.style.display = 'block';
	herculesFight.style.display = 'none';
	attackHercules.style.animation = 'grow';
});
attackHercules.addEventListener('click', event => {
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
});

zeusB.addEventListener('mouseover', event => {
	hoverSound.play();
	text2.style.display = 'none';
	enemyInfo.style.display = 'inline-block';
	enemyInfo.innerText = 'Zeus (Greek: Ζεύς) is the King of Olympus and the ruler of the Greek Pantheon, as well as the God of the Sky, Storm, Thunder and Lightning. Also the father of Kratos.';
	damageCon.style.display = "inline";
	enemyDamage.innerText = "82";
	kratosOlympus.style.position = 'absolute';
	kratosOlympus.style.left = '40cm';
	zeus.style.display = 'inline-block';
	zeusB.style.animation = 'tilt-shaking 0.5s';
});
zeusB.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	text2.style.display = 'block';
	enemyInfo.style.display = 'none';
	damageCon.style.display = "none";
	zeus.style.display = 'none';
	kratosOlympus.style.position = 'relative';
	kratosOlympus.style.left = '0';
	zeusB.style.animation = 'grow';
});
zeusB.addEventListener('click', event => {
	olympusAm.pause();
	olympusAm.currentTime = 0;
	gamebox.style.background = '#3f383e';
	zeusLine.play();
	kratosOlympus.style.display = 'none';
	zeusxkratos.style.display = 'block';
	text2.innerText = "You finally arrive to the god of thunder and lightning, and also your father, Zeus. Try killing him in fashion. \n 😈";
	fighting = 8;
	eHealthBar.style.width = `${enemies[fighting].health}px`;
	gaan();
});

attackZeus.addEventListener('mouseover', event => {
	zeusxkratos.style.display = 'none';
	zeusFight.style.display = 'block';
	attackZeus.style.animation = 'tilt-n-move-shaking 0.8s';
});
attackZeus.addEventListener('mouseout', event => {
	zeusxkratos.style.display = 'block';
	zeusFight.style.display = 'none';
	attackZeus.style.animation = 'grow';
});
attackZeus.addEventListener('click', event => {
	attacksZeus.play();
	attack();
});

rungod.addEventListener('mouseover', event => {
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
	gamebox.style.background = '#335168';
	kratosRunning.style.display = 'block';
	rungod.style.animation = 'horizonal-shaking 0.8s';
});
rungod.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	hermesxkratos.style.display = 'none';
	herculesxkratos.style.display = 'none';
	zeusxkratos.style.display = 'none';
	kratosOlympus.style.display = 'block';
	kratosRunning.style.display = 'none';
	rungod.style.animation = 'grow';
});
rungod.addEventListener('click', event => {
	returnSound.play();
	switch (fighting) {
		case 6:
			clearInterval(hermat);
			battleTheme2.pause();
			battleTheme2.currentTime = 0;
			text2.innerText = "You escaped Hermes, knowing you cannot defeat him.\n Get more health or a better weapon to be able to defeat him.";
			hermesxkratos.style.display = 'none';
			hermesKill.style.display = 'none';
			attackHermes.style.display = 'none';
		break;
		case 7:
			clearInterval(hercat);
			battleTheme2.pause();
			battleTheme2.currentTime = 0;
			text2.innerText = "You escaped Hercules, knowing you cannot defeat him with all that incredible strength. \n Get more health or a better weapon to be able to defeat him.";
			herculesxkratos.style.display = 'none';
			herculesKill.style.display = 'none';
			attackHercules.style.display = 'none';
		break;
		case 8:
			clearInterval(zeuat);
			zeusBattle.pause();
			zeusBattle.currentTime = 0;
			text2.innerText = "You escaped Zeus, knowing you cannot defeat him. His power was SHOCKING (Get it? 😆)! \n Get more health or a better weapon to be able to defeat him.";
			zeusxkratos.style.display = 'none';
			attackZeus.style.display = 'none';
		break;
	}
	setTimeout(() => {
	    olympusAm.play();
	}, 500 );
	tct2 = setTimeout(() => {
	    text.innerText = "You have now arrived at Olympus. Choose which god you want to battle. Be sure to at least have the Gauntlet weapon as these gods are strong.";
	    timed = true;
	}, 8000);
	enemyStats.style.display = 'none';
	if (rungod.innerText = "Return") {
	    rungod.innerText = "Run";
	}
	if (enemyHealth === 0) eHealthFiller.style.width = '100%';
	gamebox.style.transform = 'rotate(0deg)';
	rungod.style.display = 'none';
	evadeB.style.display = 'none';
	hermesB.style.display = 'inline';
	hermesB.style.animationDuration = '2s';
	hermesB.style.animationTimingFunction = 'linear';
	herculesB.style.display = 'inline';
	herculesB.style.animationDuration = '2s';
	herculesB.style.animationTimingFunction = 'linear';
	zeusB.style.display = 'inline';
	zeusB.style.animationDuration = '2s';
	zeusB.style.animationTimingFunction = 'linear';
	leaveOlympus.style.display = 'block';
	leaveOlympus.style.animationDuration = '2s';
	leaveOlympus.style.animationTimingFunction = 'linear';
});

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
		health -= getEnemyAttackValue(enemies[fighting].level);
		healthText.innerText = health;
		healthFiller.style.width = `${health}%`;
		setTimeout (() => {
		    gamebox.style.animationPlayState = 'paused';
		}, 1000 );
		if (health <= 0) {
		    death();
		    setTimeout(() => {
			    hermesxkratos.style.display = 'none';
		    }, 1);
		    clearInterval(hermat);
		} else if (health <= 25) {
		    lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
			defeatEnemy();
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
			    }
			}, 80);
			clearInterval(hermat);
		}
	}, 1400);
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
		if (health <= 0) {
			death();
			setTimeout(() => {
			    herculesxkratos.style.display = 'none';
		    }, 1);
		    clearInterval(hercat);
		} else if (health <= 25) {
		    lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
		    defeatEnemy();
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
		if (health <= 0) {
			death();
			clearInterval(zeuat);
		} else if (health <= 25) {
		    lowHealth();
		} else if (health <= 50) {
			healthFiller.style.background = '#ed7014'
		}
		if (enemyHealth <= 0) {
		    beatGame();
		}
	}, 2800);
}

// Olympus battle functions complete

function gaan(){
	enemyStats.style.display = "inline-block";
	enemyName.innerText = enemies[fighting].name;
	enemyHealth = enemies[fighting].health;
	enemyHealthText.innerText = enemyHealth;
	herculesB.style.display = 'none';
	hermesB.style.display = 'none';
	zeusB.style.display = 'none';
	leaveOlympus.style.display = 'none';
	switch(fighting){
		case 6: 
		    setTimeout(() => {
				selection2.play();
				setTimeout(() => {
				    battleTheme2.play();
				}, 1000 );
				evadeB.style.display = 'inline';
				evadeB.style.animationDuration = '2s';
				evadeB.style.animationTimingFunction = 'linear';
				attackHermes.style.display = 'inline';
				attackHermes.style.animationDuration = '2s';
				attackHermes.style.animationTimingFunction = 'linear';
				rungod.style.display = 'inline';
				rungod.style.animationDuration = '2s';
				rungod.style.animationTimingFunction = 'linear';
				hermesShapa();
		    }, 4200 );
		break;
		case 7:
		    setTimeout(() => {
				selection2.play();
				setTimeout(() => {
				    battleTheme2.play();
				}, 1000 );
				evadeB.style.display = 'inline';
				evadeB.style.animationDuration = '2s';
				evadeB.style.animationTimingFunction = 'linear';
				attackHercules.style.display = 'inline';
				attackHercules.style.animationDuration = '2s';
				attackHercules.style.animationTimingFunction = 'linear';
				rungod.style.display = 'inline';
				rungod.style.animationDuration = '2s';
				rungod.style.animationTimingFunction = 'linear';
				herculesShapa();
		    }, 3000 );
		break;
		case 8:
		    setTimeout(() => {
				selection2.play();
				setTimeout(() => {
				    zeusBattle.play();
				}, 1000 );
				evadeB.style.display = 'inline';
				evadeB.style.animationDuration = '2s';
				evadeB.style.animationTimingFunction = 'linear';
				attackZeus.style.display = 'inline';
				attackZeus.style.animationDuration = '2s';
				attackZeus.style.animationTimingFunction = 'linear';
				rungod.style.display = 'inline';
				rungod.style.animationDuration = '2s';
				rungod.style.animationTimingFunction = 'linear';
				zeusShapa();
		    }, 14200 );
		break;
	}
}

// Battle functions

function attack() {
	//text2.innerText = "You approach the " + enemies[fighting].name + " and the " + enemies[fighting].name + " detects you and attacks attacks.";
	//text2.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
	enemyHealth -= weapons[currentWeapon].damage + Math.floor(Math.random() * exp);    
	enemyHealthText.innerText = enemyHealth;
	eHealthFiller.style.width = `${enemyHealth}%`;
}

function getEnemyAttackValue(level) {
	gamebox.style.animationPlayState = 'running';
	var hit = (level * 4 + 1);
	console.log(hit);
	return hit > 0 ? hit : 0;
}

function evade() {
	evadeSound.play();
	if (fighting >= 6 ) {
	    text.innerText = "You evade the attack from " + enemies[fighting].name + ".";
	} else {
	    text.innerText = "You evade the attack from the " + enemies[fighting].name;
	}
}

function lowHealth() {
	heartbeat.play();
	gamebox.style.boxShadow = '#880808 0px 20px 30px -10px'; // '#4c0807 0px 10px 36px 0px, #4c0807 0px 0px 0px 1px';
	healthFiller.style.background = '#900604';
}

function defeatEnemy() {
	stopMusic();
	enemyHealth = 0;
	eHealthFiller.style.width = `${enemyHealth}%`;
	enemyHealthText.innerText = enemyHealth;
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
	text2.innerText = 'You have defeated the enemy. You have now earned some exp and have recieved some orbs from the defeated enemy.';
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
	text2.innerText = "You're dead 🫥. Guess now you really are the \"Ghost\" of sparta";
	enemyStats.style.display = 'none';
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

leaveOlympus.addEventListener('mouseover', event => {
	hoverSound.play();
	gamebox.style.background = '#20130c';
	leaveOlympus.style.animation = 'horizontal-shaking 0.5s';
	kratosOlympus.style.position = 'absolute';
	kratosOlympus.style.left = '40cm';
	sparta.style.display = 'block';
});
leaveOlympus.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	gamebox.style.background = '#335168';
	leaveOlympus.style.animation = 'grow';
	kratosOlympus.style.position = 'relative';
	kratosOlympus.style.left = '0';
	sparta.style.display = 'none';
});
leaveOlympus.addEventListener('click', event => {
	olympusAm.pause();
	olympusAm.currentTime = 0;
	returnSound.play();
	if (timed == false) {
	    clearTimeout(tct2);
   }
	kratosOlympus.style.display = 'none';
	hermesB.style.display = 'none';
	herculesB.style.display = 'none';
	zeusB.style.display = 'none';
	leaveOlympus.style.display = 'none';
	mainAppear();
});

reset.addEventListener('mouseover', event => {
	hoverSound.play();
	reset.style.animation = 'horizontal-shaking';
	reset.style.animationDuration = '0.5s';
	switch (fighting) {
		case 0:
		    kratosUnderworld.style.display = 'none';
		break;
		case 1:
			kratosUnderworld.style.display = 'none';
		break;
		case 2:
		    kratosUnderworld.style.display = 'none';
		break;
		case 3:
		    kratosUnderworld.style.display = 'none';
		break;
		case 4:
		    kratosUnderworld.style.display = 'none';
		break;
		case 5:
		    kratosUnderworld.style.display = 'none';
		break;
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
});
reset.addEventListener('mouseout', event => {
	hoverSound.pause();
	hoverSound.currentTime = 0;
	reset.style.animation = 'no';
});
reset.addEventListener('click', restart );

function beatGame() {
	zeusBattle.pause();
	zeusBattle.currentTime = 0;
	wonned.play();
	text.innerText = "You defeated Zeus! You have finally completed this SHIT game! 🤩";
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
	}
	}, 80);
	    clearInterval(zeuat);
}

function restart() {
	ambienceStop();
	returnSound.play();
	gamebox.style.transform = 'rotate(0deg)';
	gamebox.style.background = '#464646';
	settingsB.style.display = 'inline';
	settingsB.style.background = '#464646';
	setTimeout(() => {
	    ahShit.play();
	}, 1800 );
	exp = 0;
	health = 100;
	orbs = 0;
	currentWeapon = 0;
	potionquantity = 0;
	inventory = ["blades of chaos"];
	orbsText.innerText = orbs;
	healthText.innerText = health;
	healthBar.style.width = '100px';
	healthFiller.style.width = '100%';
	healthFiller.style.background = '#32cd33';
	expText.innerText = exp;
	pqText.innerText = potionquantity;
	slot1.style.border = '3px solid #5a3910';
	pslot.style.display = 'none';
	slot2.style.display = 'none';
	slot2.style.border = '1.8px solid #5a3910';
	slot3.style.display = 'none';
	slot3.style.border = '1.8px solid #5a3910';
	slot4.style.display = 'none';
	slot4.style.border = '1.8px solid #5a3910';
	slot5.style.display = 'none';
	slot5.style.border = '1.8px solid #5a3910';
	gamebox.style.boxShadow = 'none';
	musicOption.style.display = 'inline';
	text2.style.display = 'none';
	text.style.display='inline-block';
	text.innerText = "Welcome back to God of War. You must defeat Zeus to get Kratos' revenge and conclude the game. You are currently in Sparta, your home. Where do you want to go first? Use the buttons below to go where you want.";
	if (fighting <= 7) {
	    youDead.style.display = 'none';
	} else {
	    kratosDead.style.display = 'none';
	}
	kratosAtSparta.style.display = 'inline-block';
	reset.style.display = 'none';
	shopB.style.display = 'inline';
	shopB.style.animation = 'rotateX';
	shopB.style.animationDuration = '0.8s';
	underworldB.style.display = 'inline';
	underworldB.style.animation = 'rotateX';
	underworldB.style.animationDuration = '0.8s';
	olympusB.style.display = 'inline';
	olympusB.style.animation = 'rotateX';
	olympusB.style.animationDuration = '0.8s';
}

function stopMusic() {
	if (fighting <= 1) {
		battleTheme.pause();
		battleTheme.currentTime = 0;
	} else if(fighting <= 4) {
		battleTheme2.pause();
		battleTheme.currentTime = 0;
	} else if (fighting == 5) {
		cyclopsBattle.pause();
		cyclopsBattle.currentTime = 0;
	} else if (fighting <= 7) {
		battleTheme2.pause();
		battleTheme2.currentTime = 0;
	} else {
		zeusBattle.pause();
		zeusBattle.currentTime = 0;
	}
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
	if (play == true) {
		menuTheme.play();
	}
	musicOption.style.display = 'inline';
	setTimeout(() => {
		gamebox.style.background = '#464646';
	}, 5 );
	settingsB.style.background = '#464646';
	text2.style.display = 'none';
	text.style.display = 'inline-block'
	text.innerText = "You have returned to Sparta. Where do you want to go next?";
	stats.style.marginTop = '0';
	kratosAtSparta.style.display = 'block';
	shopB.style.display = 'inline-block';
	shopB.style.animation = 'rotateY';
	shopB.style.animationDuration = '0.8s';
	underworldB.style.display = 'inline-block';
	underworldB.style.animation = 'rotateY';
	underworldB.style.animationDuration = '0.8s';
	olympusB.style.display = 'inline-block';
	olympusB.style.animation = 'rotateY';
	olympusB.style.animationDuration = '0.8s';
}
