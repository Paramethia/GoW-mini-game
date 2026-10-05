export const ui = {
    // General
    hover: new Audio('../Audio/UI/Hover sound GoW2.mp3'),
    hover2: new Audio('../Audio/UI/GoW CoO hover sound.mp3'),
    selection: new Audio('../Audio/UI/GoW CoO Selection sound.mp3'),
    selection2: new Audio('../Audio/UI/Other selection sound GoW2.mp3'),
    return: new Audio('Audio/UI/GoW return sound.mp3'),
    exit: new Audio('../Audio/UI/GoW CoO exit sound.mp3'),
    gameStart: new Audio('../Audio/UI/Game start.mp3'),
    ahShit: new Audio('../Audio/UI/Ah shit, here we go again.mp3'),

    // --- Smithy ---

    brokie: new Audio('../Audio/UI/YOURE BROKE!.mp3'),
    hmmmm: new Audio('../Audio/UI/Hmm hmm Mc villager.mp3'),
    bruh: new Audio('../Audio/UI/Bruh.mp3'),

    // --- Athens ---

    uArcherS: new Audio('../Audio/UI/Undead archer sound.mp3'),
    uLegionnaireS: new Audio('../Audio/UI/Undead legionnaire sound.mp3'),
    cLegionnaireS: new Audio('../Audio/UI/Cursed legionnaire sound.mp3'),
    fLegionnaireS: new Audio('../Audio/UI/Fallen legionnaire sound.mp3'),
    bansheeS: new Audio('../Audio/UI/Banshee sound.mp3'),
    gorgonS: new Audio('../Audio/UI/Gorgon sound.mp3'),
    medusaS: new Audio('../Audio/UI/Medusa sound.mp3'),

    // --- Underworld ---

    hopliteS: new Audio('../Audio/UI/Hoplite sound.mp3'),
    satyrS: new Audio('../Audio/UI/Satyr sound.mp3'),
    minotaurS: new Audio('../Audio/UI/Minotaur sound.mp3'),
    cyclopsS: new Audio('../Audio/UI/Cyclops sound.mp3'),
};

export const music = {
    mainTheme: new Audio('../Audio/music/Main menu theme.ogg'),
    athensBattleT1: new Audio('../Audio/music/Athens battle theme 1.ogg'),
    athensBattleT2: new Audio('../Audio/music/Athens battle theme 2.ogg'),
    athensBattleT3: new Audio('../Audio/music/Athens battle theme 3.ogg'),
    athensBattleT4: new Audio('../Audio/music/Athens battle theme 4.ogg'),
    medusaBattleT: new Audio('../Audio/music/Medusa battle theme.ogg'),
    underworldBattleT1: new Audio('../Audio/music/Underworld battle theme 1.ogg'),
    underworldBattleT2: new Audio('../Audio/music/Underworld battle theme 2.ogg'),
    underworldBattleT3: new Audio('../Audio/music/Underworld battle theme 3.ogg'),
    cyclopsBattleT: new Audio('../Audio/music/Cyclops battle theme.ogg'),
    hadesBattleT: new Audio('../Audio/music/Hades battle theme.ogg'),
    hermesBattleT: new Audio('../Audio/music/Hermes battle theme.ogg'),
    herculesBattleT: new Audio('../Audio/music/Hercules battle theme.ogg'),
    zeusBattleT: new Audio('../Audio/music/Zeus battle theme.ogg'),
}

export const ambience = { 
    athens: new Audio('../Audio/ambience/Athens ambience.ogg'),
    underworld: new Audio('../Audio/ambience/Underworld ambience.ogg'),
    olympus: new Audio('../Audio/ambience/Olympus ambience.ogg'),
}

export const dialogue = {
    hadesLines: [
        new Audio('../Audio/dialogue/Hades line 1.mp3'), 
        new Audio('../Audio/dialogue/Hades line 2.mp3'), 
        new Audio('../Audio/dialogue/Hades line 3.mp3'), 
        new Audio('../Audio/dialogue/Hades line 4.mp3')
    ],
    hermesLine: new Audio('../Audio/dialogue/Hermes line.mp3'),
    herculesLine: new Audio('../Audio/dialogue/Hercules line.mp3'),
    zeusLine: new Audio('../Audio/dialogue/Zeus line.mp3'),
}

export const sfx = {
    // --- Weapon swtiches ---
    
    bocSound: new Audio('../Audio/UI/Blades of chaos sound.mp3'),
    gozSound: new Audio('../Audio/UI/Gauntlet of Zeus sound.mp3'),
    nwSound: new Audio('../Audio/UI/Nemesis whip sound.mp3'),
    cohSound: new Audio('../Audio/UI/Claws of Hades sound.mp3'),
    ncSound: new Audio('../Audio/UI/Nemean cestus sound.mp3'),
    swordThud: new Audio('../Audio/UI/Sword thud.mp3'),

    // --- Kratos ---

    grunt: [new Audio('../Audio/SFX/Kratos grunt.mp3'), new Audio('../Audio/SFX/Kratos grunt 2.mp3')],
    hurt: [
        new Audio('../Audio/SFX/Kratos hurt.mp3'), 
        new Audio('../Audio/SFX/Kratos hurt 2.mp3'), 
        new Audio('../Audio/SFX/Kratos hurt 3.mp3'), 
        new Audio('../Audio/SFX/Kratos hurt 4.mp3'), 
        new Audio('../Audio/SFX/Kratos hurt 5.mp3')
    ],
    evadeSound: new Audio('../Audio/SFX/Evade sound.mp3'),
    blockSound: new Audio('../Audio/SFX/Sword block sound.mp3'),
    stoneHit: new Audio('../Audio/SFX/Stone impact.mp3'),
    stoneBreak: new Audio('../Audio/SFX/Stone break.mp3'),
    stoneBroke: new Audio('../Audio/SFX/Stone broke.mp3'),
    stonify: new Audio('../Audio/SFX/Stone impact.mp3'),
    deathScream: new Audio('../Audio/SFX/Kratos death scream GoW2.mp3'),

    // --- Weapons ---

    // Blades of chaos
    bocLA: [new Audio('../Audio/SFX/Blade slash.mp3'), new Audio('../Audio/SFX/Blade slash 2.mp3')],
    bocHA: [new Audio('../Audio/SFX/Boc attack.mp3'), new Audio('../Audio/SFX/Boc attack 2.mp3')],
    // Nemesis whip
    nwLA: [new Audio('../Audio/SFX/Electric.mp3'), new Audio('../Audio/SFX/Whip slash.mp3'), new Audio('../Audio/SFX/Whip slash 2.mp3')],
    nwHA: [new Audio('../Audio/SFX/Whip attack.mp3'), new Audio('../Audio/SFX/Whip attack 2.mp3')],
    // Arms of sparta
    aosLA: [new Audio('../Audio/SFX/Arms of Sparta light attack.mp3'), new Audio('../Audio/SFX/Arms of Sparta light attack.mp3')],
    aosHA: [new Audio('../Audio/SFX/Arms of Sparta heavy attack.mp3'), new Audio('../Audio/SFX/Arms of Sparta heavy attack.mp3')],
    // Claws of Hades
    cohLA: [new Audio('../Audio/SFX/Blade slash.mp3'), new Audio('../Audio/SFX/Blade slash 2.mp3'), new Audio('../Audio/SFX/CoH attack.mp3')],
    cohHA: [new Audio('../Audio/SFX/Ranged attack.mp3'), new Audio('../Audio/SFX/Ranged attack 2.mp3')],
    // Gauntlet of Zeus
    gozLA: [new Audio('../Audio/SFX/Goz attack.mp3'), new Audio('../Audio/SFX/Goz attack 2.mp3')],
    gozHA: [new Audio('../Audio/SFX/Goz attack 3.mp3'), new Audio('../Audio/SFX/Goz attack 3.mp3')],
    // Nemean cestus
    nemeanRoar: new Audio('../Audio/UI/Nemean lion roar.mp3'),
    ncLA: [new Audio('../Audio/SFX/Nc attack.mp3'), new Audio('../Audio/SFX/Nc attack.mp3')],
    ncHA: [new Audio('../Audio/SFX/Nc attack.mp3'), new Audio('../Audio/SFX/Nc attack.mp3')],
    // Blade of Olympus
    booLA: [new Audio('../Audio/SFX/BoO slash.mp3'), new Audio('../Audio/SFX/BoO slash.mp3')],
    booHA: [new Audio('../Audio/SFX/BoO slash 2.mp3'), new Audio('../Audio/SFX/BoO slash 3.mp3')],

    // --- Athens battle ---

    // Undead archer
    archerAttacks: [new Audio('../Audio/SFX/Weapon slash 2.mp3')],
    bowCharge: new Audio('../Audio/SFX/Bow charge.mp3'),
    archerAttacked: new Audio('../Audio/SFX/Undead archer hitted.mp3'),
    archerDeath: new Audio('../Audio/SFX/Undead archer death.mp3'),
    // Legionnaires attacks
    legionnaireAttacks: [new Audio('../Audio/SFX/Legionnaire attack.mp3'), new Audio('../Audio/SFX/Legionnaire attack 2.mp3')],
    legionnaireLeapAttack: new Audio('../Audio/SFX/Legionnaire leap attack.mp3'),
    legionnaireAttacked: new Audio('../Audio/SFX/Legionnaire hitted.mp3'),
    // Undead/Cursed/Fallen legionnaire deaths
    undeadLdeath: new Audio('../Audio/SFX/Undead legionnaire death.mp3'),
    cursedLdeath: new Audio('../Audio/SFX/Cursed legionnaire death.mp3'),
    fallenLdeath: new Audio('../Audio/SFX/Fallen legionnaire death.mp3'),
    // Banshee
    bansheeAttacks: [new Audio('../Audio/SFX/Banshee attack.mp3'), new Audio('../Audio/SFX/Banshee attack 2.mp3')],
    bansheeAttacked: new Audio('../Audio/SFX/Banshee hitted.mp3'),
    bansheeDeath: new Audio('../Audio/SFX/Banshee death.mp3'),
    bansheeScream: new Audio('../Audio/SFX/Banshee scream.mp3'),
    // Gorgon
    gorgonAttacks: [new Audio('../Audio/SFX/Little punch.mp3'), new Audio('../Audio/SFX/Banshee attack.mp3')],
    gorgonAttacked: new Audio('../Audio/SFX//Gorgon hitted.mp3'),
    gorgonDeath: new Audio('../Audio/SFX/Gorgon death.mp3'),
    gorgonPetrify: new Audio('../Audio/SFX/Gorgon petrify.mp3'),
    snakesHiss: new Audio('../Audio/SFX/Gorgon snakes hiss.mp3'),
    // Medusa
    medusaAttacks: [new Audio('../Audio/SFX/Gorgon attack.mp3'), new Audio('../Audio/SFX/Medusa attack.mp3')],
    medusaAttacked: new Audio('../Audio/SFX/Medusa hitted.mp3'),
    medusaDeath: new Audio('../Audio/SFX/Medusa death.mp3'),
    medusaPetrify: new Audio('../Audio/SFX/Medusa petrify.mp3'),
    medusaLaugh: new Audio('../Audio/SFX/Medusa laugh.mp3'),

    // --- Underworld battle ---

    // Hoplite
    hopliteAttacks: [new Audio('../Audio/SFX/Hoplite attack.mp3'), new Audio('../Audio/SFX/Hoplite attack 2.mp3')],
    hopliteAttacked: new Audio('../Audio/SFX/Hoplite hitted.mp3'),
    hopliteDeath: new Audio('../Audio/SFX/Hoplite death.mp3'),
    // Satyr
    satyrAttacks: [new Audio('../Audio/SFX/Weapon slash.mp3'), new Audio('../Audio/SFX/Satyr attacks.mp3')],
    satyrAttacked: new Audio('../Audio/SFX/Satyr hitted.mp3'),
    satyrDeath: new Audio('../Audio/SFX/Satyr death.mp3'),
    // Minotaur
    minotaurAttacks: [new Audio('../Audio/SFX/Minotaur attack.mp3'), new Audio('../Audio/SFX/Minotaur attack 2.mp3')],
    minotaurAttacked: new Audio('../Audio/SFX/Minotaur hitted.mp3'),
    minotaurDeath: new Audio('../Audio/SFX/Minotaur death.mp3'),
    minBlock: new Audio('../Audio/SFX/Minotaur block.mp3'),
    // Cyclops
    cyclopsAttacks: [new Audio('../Audio/SFX/Cyclops attack.mp3'), new Audio('../Audio/SFX/Cyclops attack 2.mp3')],
    cyclopsAttacked: new Audio('../Audio/SFX/Cyclops hitted.mp3'),
    cyclopsDeath: new Audio('../Audio/SFX/Cyclops death.mp3'),
    // Hades
    hadesAttacks: [new Audio('../Audio/SFX/Hades attack.mp3'), new Audio('../Audio/SFX/Hades attack 2.mp3')],
    hadesAttacked: new Audio('../Audio/SFX/Flesh impact.mp3'),
    hadesDeath: new Audio('../Audio/SFX/Hades death.mp3'),
    soulTake: new Audio('../Audio/SFX/Hades soul take.mp3'),
    handGrasp: new Audio('../Audio/SFX/Hand grasp.mp3'),
    held: new Audio('../Audio/SFX/Held.mp3'),

    // --- Olympus battle ---

    // Hermes
    hermesAttacks: [new Audio('../Audio/SFX/Punch.mp3'), new Audio('../Audio/SFX/Hermes attack.mp3')],
    hermesAttacked: new Audio('../Audio/SFX/Hermes hitted.mp3'),
    hermesDeath: new Audio('../Audio/SFX/Hermes death.mp3'),
    dodge: new Audio('../Audio/SFX/Whoosh.mp3'),
    speedStrike: new Audio('../Audio/SFX/Speed strike.mp3'),
    // Hercules
    herculesAttacks: [new Audio('../Audio/SFX/Punch 2.mp3'), new Audio('../Audio/SFX/Hercules attack.mp3')],
    herculesAttacked: new Audio('../Audio/SFX/Flesh impact.mp3'),
    herculesDeath: new Audio('../Audio/SFX/Hercules death.mp3'),
    smash: new Audio('../Audio/SFX/Smash.mp3'),
    // Zeus
    zeusAttacks: [new Audio('../Audio/SFX/Zeus attack.mp3'), new Audio('../Audio/SFX/Zeus attack 2.mp3')],
    zeusAttacked: [new Audio('../Audio/SFX/Zeus hitted.mp3'), new Audio('../Audio/SFX/Zeus hitted 2.mp3')],
    zeusDeath: new Audio('../Audio/SFX/Zeus death.mp3'),
    electrify: new Audio('../Audio/SFX/Electrify.mp3'),
    teleport: new Audio('../Audio/SFX/Teleport.mp3'),
    lShoot: new Audio('../Audio/SFX/Lightning shoot.mp3'),
    
    // --- Extra battle audio ---

    heartbeat: new Audio('../Audio/SFX/Heartbeat.mp3'),
    achievement: new Audio('../Audio/SFX/Achievment sound.mp3'),
    defeatSound: new Audio('../Audio/SFX/Defeat sound.mp3'),
    redOrbSound: new Audio('../Audio/SFX/Red orb sound.mp3'),
    greenOrbSound: new Audio('../Audio/SFX/Green orb sound.mp3'),
    goldOrbSound: new Audio('../Audio/SFX/Gold orb sound.mp3'),
    wonned: new Audio('../Audio/SFX/Wonned.mp3'),
}
