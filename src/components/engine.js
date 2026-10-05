import { bAssets } from '../components/loader.js';
import sparta from '../scenes/sparta.js';

export default function enginize(g, config) {
	const battleArea = document.getElementById('Battle-area');
	const ctx = battleArea.getContext('2d');
	
	const ratio = window.devicePixelRatio || 1;

    // Set canvas bitmap size based on DPR
    battleArea.width = battleArea.offsetWidth * ratio;
    battleArea.height = battleArea.offsetHeight * ratio;

    // Scale the drawing context
    ctx.scale(ratio, ratio);

	// Battle constants
	const currentBattle = g.currentBattle;
	const tintTime = 200; // ms to stay tinted red

	// --- Kratos configurations ---

	g.kratos.y = config.groundLevel;
	g.kratos.onGround = true;
	g.kratos.facing = "right";
	g.kratos.blocking = false;
	g.kratos.lastLattack = 0;
	g.kratos.lastHattack = 0;
	g.kratos.lightCombo = 0;
	g.kratos.heavyCombo = 0;
	g.kratos.covering = false;
	g.kratos.screamBreak = 0;
	g.kratos.petrified = false;
	g.kratos.petrifyBreak = 0
	g.kratos.held = false;
	g.kratos.holdEnd = 0;
	g.kratos.graspBreak = 0;
	g.kratos.dodging = false;
	g.kratos.dodgeEnd = 0;

	let dodgeDuration = 400;
	let dodgeSpeedMultiplier = g.kratos.speed - .5;

	// --- Enemies configurations ---

	class Enemy{
		constructor(enemy){
			Object.assign(this, enemy);
			this.y = config.groundLevel;
			this.oW = enemy.w;
			this.oH = enemy.h;
			this.velX = 0; this.velY = 0;
			this.onGround = true;
			this.state = "idle";
			this.facing = "left";
			this.decision = null;
			this.lAttacking = false;
			this.hAttacking = false;
			this.alpha = 1;
			this.hasHit = false;
			this.hitHuntil = 0;
			this.lastAttack = 0;
			if (!enemy.name.includes("Archer")) this.dCooldown = 700;
			this.stunned = false;
			this.stunEnd = 0;
			this.knockbackVel = 0;
			if (!enemy.name.includes("Archer")) this.chaseRange = enemy.god ? 520 : 450;
			this.maxHealth = enemy.health;
			this.halved = false;
			this.dead = false;
			if (enemy.blockChance) {
				this.blocking = false;
				this.blockStart = 0;
				this.lastBlock = 0;
			}
			if (enemy.sD && enemy.sK) {
				this.shooting = false;
				this.shootStart = 0;
				this.lastShot = 0;

				this.shootWindup = 500;

				this.arrowSpeed = 8;

				this.bowAttacking = false;
				this.bowAttackStart = 0;
				this.bowAttackCooldown = 1000;
			} else if (enemy.leapChance) {
				this.leaping = false;
				this.leapState = "";

				this.leapStart = 0;
				this.lastLeap = 0;

				this.leapSpeed = Math.round(enemy.speed * 2);
				this.leapVelocityY = -12;

				this.leapRange = 250;
				this.leapMinRange = 225;

				this.leapPrepareTime = 500;
				this.leapRecoveryTime = 950;

				this.leapDamage = enemy.lD + enemy.hD - 3;
				this.leapHit = false;
			} else if (enemy.screamChance) {
				this.screaming = false;
				this.lastScream = 0;
				this.lastScreamTick = 0;
				this.screamRange = 320;
			} else if (enemy.petrifyChance) {
				this.petrifying = false;
				this.petrifyStart = 0;
				this.lastPetrify = 0;
				this.petrifyRange = enemy.name === "Gorgon" ? 295 : 400;
			} else if (enemy.graspChance) {
				this.soulTaking = false;
				this.lastSoulTake = 0;
				this.lastSoulTakeTick = 0;

				this.grasping = false;
				this.graspStart = 0;
				this.lastGrasp = 0;
				this.maxGrasps = 3;
				this.nextGraspTime = 0;
			} else if (enemy.dodgeChance) {
				this.canDodge = true;
				this.lastDodge = 0;
				this.dodging = false;
				this.dodgeSpeed = 7.7;
				this.invulnerable = false;

				this.canSpeedStrike = true;
				this.speedStriking = false;
				this.speedStrikeSpeed = 10;
				this.speedStrikeHits = 0;
				this.speedStrikeStartX = 0;
				this.speedStrikeTargetX = 0;
				this.speedStrikeDir = 1;
				this.lastSpeedStrike = 0;
			} else if (enemy.smashChance) {
				this.smashing = false;
				this.lastSmash = 0;

				this.maxSmashes = 2;
				this.nextSmashTime = 0;
				this.smashHasHit = false;
			} else if (enemy.teleportChance) {
				this.teleporting = false;
				this.lastTeleport = 0;

				this.flying = false;
				this.flyCooldown = 2200;
				this.flightHeight = 170;
				this.flightY = config.groundLevel - this.flightHeight;

				this.flightState = "";
				this.lastFlightAction = 0;
				this.flightCooldown = 2200;

				this.lightningCooldown = 700;
				this.lastLightning = 0;

				this.flySpeed = 6;
				this.strikeOffsetY = 70;
				this.currentFlightTargetY = this.flightY;
				this.dipping = false;

				this.airHits = 0;
				this.maxAirHits = 7;
				this.droppable = true;
			}
		}
	}

	const enemies = [];

	function setEnemyAssets(enemy) {
		enemy.left = bAssets.get(`Imagery/battle/${enemy.name} facing left.png`);
		enemy.right = bAssets.get(`Imagery/battle/${enemy.name} facing right.png`);
		
		if (!enemy.name.includes("Archer")) enemy.chaseL = bAssets.get(`Imagery/battle/${enemy.name} chasing left.png`);
		if (!enemy.name.includes("Archer")) enemy.chaseR = bAssets.get(`Imagery/battle/${enemy.name} chasing right.png`);
		
		enemy.lAttackR = bAssets.get(`Imagery/battle/${enemy.name} light attacks right.png`);
		enemy.lAttackL = bAssets.get(`Imagery/battle/${enemy.name} light attacks left.png`);
		if (enemy.heavyChance) {
			enemy.hAttackR = bAssets.get(`Imagery/battle/${enemy.name} heavy attacks right.png`);
			enemy.hAttackL = bAssets.get(`Imagery/battle/${enemy.name} heavy attacks left.png`);;
		}

		enemy.deadR = bAssets.get(`Imagery/battle/${enemy.name} dead right.png`);
		enemy.deadL = bAssets.get(`Imagery/battle/${enemy.name} dead left.png`);

		if (enemy.leapChance) {
			enemy.leapR = bAssets.get(`Imagery/battle/${enemy.name} leaps right.png`);
			enemy.leapL = bAssets.get(`Imagery/battle/${enemy.name} leaps left.png`);
			enemy.airAttackR = bAssets.get(`Imagery/battle/${enemy.name} leap attacks right.png`);
			enemy.airAttackL = bAssets.get(`Imagery/battle/${enemy.name} leap attacks left.png`);
			enemy.landR = bAssets.get(`Imagery/battle/${enemy.name} lands right.png`);
			enemy.landL = bAssets.get(`Imagery/battle/${enemy.name} lands left.png`);
		}

		if (enemy.name.includes("Archer")) {
			enemy.shootsR = bAssets.get(`Imagery/battle/${enemy.name} shoots right.png`);
			enemy.shootsL = bAssets.get(`Imagery/battle/${enemy.name} shoots left.png`);
		}

		if (enemy.blockChance) {
			enemy.blockR = bAssets.get(`Imagery/battle/${enemy.name} blocks right.png`);
			enemy.blockL = bAssets.get(`Imagery/battle/${enemy.name} blocks left.png`);
		}

		if (enemy.screamChance) {
			enemy.screamR = bAssets.get(`Imagery/battle/${enemy.name} screams right.png`);
			enemy.screamL = bAssets.get(`Imagery/battle/${enemy.name} screams left.png`);
		}

		if (enemy.petrifyChance) {
			enemy.petrifyR = bAssets.get(`Imagery/battle/${enemy.name} petrifies right.png`);
			enemy.petrifyL = bAssets.get(`Imagery/battle/${enemy.name} petrifies left.png`);
		}
		
		if (enemy.soulTakeChance) {
			enemy.takeSoulR = bAssets.get(`Imagery/battle/${enemy.name} takes soul right.png`);
			enemy.takeSoulL = bAssets.get(`Imagery/battle/${enemy.name} takes soul left.png`);
			enemy.summonR = bAssets.get(`Imagery/battle/${enemy.name} summons right.png`);
			enemy.summonL = bAssets.get(`Imagery/battle/${enemy.name} summons left.png`);
		}

		if (enemy.dodgeChance) {
			enemy.dodgeR = bAssets.get(`Imagery/battle/${enemy.name} dodges right.png`);
			enemy.dodgeL = bAssets.get(`Imagery/battle/${enemy.name} dodges left.png`);
			enemy.sprintR = bAssets.get(`Imagery/battle/${enemy.name} sprints right.png`);
			enemy.sprintL = bAssets.get(`Imagery/battle/${enemy.name} sprints left.png`);
		}

		if (enemy.smashChance) {
			enemy.smashR = bAssets.get(`Imagery/battle/${enemy.name} smashes right.png`);
			enemy.smashL = bAssets.get(`Imagery/battle/${enemy.name} smashes left.png`);
		}
	
		if (enemy.teleportChance) {
			enemy.teleportR = bAssets.get("Imagery/battle/Zeus teleports right.png");
			enemy.teleportL = bAssets.get("Imagery/battle/Zeus teleports left.png");
			enemy.levitateR = bAssets.get("Imagery/battle/Zeus levitates right.png");
			enemy.levitateL = bAssets.get("Imagery/battle/Zeus levitates left.png");
			enemy.flyR = bAssets.get("Imagery/battle/Zeus flies right.png");
			enemy.flyL = bAssets.get("Imagery/battle/Zeus flies left.png");
			enemy.fallR = bAssets.get("Imagery/battle/Zeus falls right.png");
			enemy.fallL = bAssets.get("Imagery/battle/Zeus falls left.png");
			enemy.victoryR = bAssets.get("Imagery/battle/Zeus victory pose right.png");
			enemy.victoryL = bAssets.get("Imagery/battle/Zeus victory pose left.png");
		}
	}

	if (g.freePlay) {
		setEnemyAssets(g.currentEnemy);
		enemies.push(new Enemy(g.currentEnemy));
	} else {
		for (const enemy of currentBattle.enemies) {
			setEnemyAssets(enemy);
			enemies.push(new Enemy(enemy));
		}
	}

	if (enemies.length > 1) {
		enemies.forEach((enemy, index) => {
			if (index) enemy.x += index * 100;
		});
	}

	// ===== Get Kratos images =====
	
	// Kratos
	const kratosStandL = bAssets.get("Imagery/battle/Kratos standing left.png");
	const kratosStandR = bAssets.get("Imagery/battle/Kratos standing right.png");

	let kratosFightingStanceL;
	let kratosFightingStanceR;

	const kratosJogL = bAssets.get("Imagery/battle/Kratos jogging left.png");
	const kratosJogR = bAssets.get("Imagery/battle/Kratos jogging right.png");
	
	const kratosFallsL = bAssets.get("Imagery/battle/Kratos falls left.png");
	const kratosFallsR = bAssets.get("Imagery/battle/Kratos falls right.png");
	const kratosJumpsL = bAssets.get("Imagery/battle/Kratos jumps left.png");
	const kratosJumpsR = bAssets.get("Imagery/battle/Kratos jumps right.png");
	
	let lightAttackL;
	let lightAttackR;

	let heavyAttackL;
	let heavyAttackR;
	
	let kratosAirAttackL;
	let kratosAirAttackR;
	
	let kratosBlocksL;
	let kratosBlocksR;

	const kratosStunnedL = bAssets.get("Imagery/battle/Kratos damage left.png");
	const kratosStunnedR = bAssets.get("Imagery/battle/Kratos damage right.png");

	const kratosAirStunnedL = bAssets.get("Imagery/battle/Kratos air damage left.png");
	const kratosAirStunnedR = bAssets.get("Imagery/battle/Kratos air damage right.png");

	const kratosDodgesL = bAssets.get("Imagery/battle/Kratos dodging left.png");
	const kratosDodgesR = bAssets.get("Imagery/battle/Kratos dodging right.png");

	const kratosDeafenedL = bAssets.get("Imagery/battle/Kratos covering ears left.png");
	const kratosDeafenedR = bAssets.get("Imagery/battle/Kratos covering ears right.png");

	const kratosPetrifiedL = bAssets.get("Imagery/battle/Kratos petrified left.png");
	const kratosPetrifiedR = bAssets.get("Imagery/battle/Kratos petrified right.png");
	const kratosDeadPetrifiedL = bAssets.get("Imagery/battle/Kratos dead as stone left.png");
	const kratosDeadPetrifiedR = bAssets.get("Imagery/battle/Kratos dead as stone right.png");

	const kratosSoulTookL = bAssets.get("Imagery/battle/Kratos soul left.png");
	const kratosSoulTookR = bAssets.get("Imagery/battle/Kratos soul right.png");
	const kratosHeldL = bAssets.get("Imagery/battle/Kratos held by hands left.png");
	const kratosHeldR = bAssets.get("Imagery/battle/Kratos held by hands right.png");

	const kratosDeadL = bAssets.get("Imagery/battle/Kratos dead left.png");
	const kratosDeadR = bAssets.get("Imagery/battle/Kratos dead right.png");

	let weapon = g.kratos.inventory[g.currentWeapon];

	function updateKratosSprites() {
		weapon = g.kratos.inventory[g.currentWeapon];

		const lightableWeapon = !weapon.name.includes("Gauntlet") && !weapon.name.includes("cestus");

		kratosFightingStanceL = bAssets.get(`Imagery/battle/Kratos fighting stance left (${weapon.name})${lightableWeapon && weapon.lit ? "-lit" : ""}.png`);
		kratosFightingStanceR = bAssets.get(`Imagery/battle/Kratos fighting stance right (${weapon.name})${lightableWeapon && weapon.lit ? "-lit" : ""}.png`);

		lightAttackL = bAssets.get(`Imagery/battle/Kratos light attacks left with ${weapon.name.toLowerCase()} ${g.kratos.lightCombo + 1}.png`);
		lightAttackR = bAssets.get(`Imagery/battle/Kratos light attacks right with ${weapon.name.toLowerCase()} ${g.kratos.lightCombo + 1}.png`);

		heavyAttackL = bAssets.get(`Imagery/battle/Kratos heavy attacks left with ${weapon.name.toLowerCase()} ${g.kratos.heavyCombo + 1}.png`);
		heavyAttackR = bAssets.get(`Imagery/battle/Kratos heavy attacks right with ${weapon.name.toLowerCase()} ${g.kratos.heavyCombo + 1}.png`);

		kratosAirAttackL = bAssets.get(`Imagery/battle/Kratos aerial attack left with ${weapon.name.toLowerCase()}.png`);
		kratosAirAttackR = bAssets.get(`Imagery/battle/Kratos aerial attack right with ${weapon.name.toLowerCase()}.png`);

		kratosBlocksL = bAssets.get(`Imagery/battle/Kratos blocking left with ${weapon.name.toLowerCase()}.png`);
		kratosBlocksR = bAssets.get(`Imagery/battle/Kratos blocking right with ${weapon.name.toLowerCase()}.png`);
	}

	function weaponAirMax() {
		let airMax = 0;
		airMax = weapon.name.inludes("Arms") ? 1 : weapon.name.includes("Claws") ? 1.5 : weapon.name.includes("Gauntlet") ? 2 : weapon.name.includes("cestus") ? 3 : weapon.name.includes("Blade ") ? 4 : 0
		return airMax
	}

	// ====== Input =======
	
	document.addEventListener("keydown", g.keydownHandler);
	document.addEventListener("keyup", g.keyupHandler);

	// Just some checks
	
	function strongEnemy(enemy){
		if (enemy.name === "Minotaur" || enemy.name === "Cyclops" || enemy.god) return true
		return false
	}

	// Kratos referral functions

	function damageKratos(hit) {
		if (!hit || hit.damage === undefined) throw new Error("No damage provided")
		g.kratos.health -= hit.damage;
		g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
		if (g.kratos.health > 0) g.kratos.hitUntil =  + hit?.tint ? Date.now() + hit.tint : Date.now() + tintTime;
		if (hit.stun) {
			g.kratos.stunned = true;
			g.kratos.stunEnd = Date.now() + hit.stun;
		}
		if (hit.knockback && hit.dir) { 
			g.kratos.knockbackVel = hit.dir === "right" ? hit.knockback : -hit.knockback
		}
	}

	// === Kratos updation ===

	// For debugging or just checking things
	function showKratosXpos() {
		ctx.strokeStyle = "yellow";
		ctx.beginPath();
		ctx.moveTo(g.kratos.x, g.kratos.y);
		ctx.lineTo(g.kratos.x, g.kratos.y - g.kratos.h);
		ctx.stroke();
	}
	function showKratosMidX() {
		ctx.strokeStyle = "orange";
		ctx.beginPath();
		ctx.moveTo(g.kratos.midX, g.kratos.y);
		ctx.lineTo(g.kratos.midX, g.kratos.y - g.kratos.h);
		ctx.stroke();
	}

	const kratosHitbox = () => {
		return {
			x: g.kratos.x + 75 / 2,
			y: g.kratos.y - 160,
			w: 75,
			h: 160
		}
	}
	
	function showKratosHitBox() {
		const hitbox = kratosHitbox();

		ctx.save();
		ctx.globalAlpha = 0.35;
		ctx.strokeStyle = "cyan";
		ctx.strokeRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
		ctx.restore();
	}
	function showKratosAttackRange() {
		const attackRange = g.kratos.hAttacking ? weapon.hR : weapon.lR;
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(g.kratos.midX, g.kratos.y);
		ctx.lineTo(
			g.kratos.midX + (g.kratos.facing === "right" ? attackRange : -attackRange),
			g.kratos.y
		);
		ctx.stroke();
	}

	function updateKratos(enemy) {
		if (g.kratos.health <= 0) {
			if (sButtonPrompt.active) sButtonPrompt.active = false;
			g.kratos.stunned = false;
			g.kratos.velX = 0;
			return
		} 

		let speed = g.kratos.speed;
		g.kratos.midX = g.kratos.x + 75;

		// Handle stun

		if (g.kratos.stunned) {
			// Apply knockback
			g.kratos.velX = 0;

			// End stun when time is up or knockback is very small
			if (Date.now() > g.kratos.stunEnd) {
				g.kratos.stunned = false;
				g.kratos.knockbackVel = 0;
			}
		}
		
		// Handle knockback
		if (g.kratos.knockbackVel) {
			g.kratos.x += g.kratos.knockbackVel || 0;
			// Gradually slow knockback down
			g.kratos.knockbackVel *= 0.85;
			if (Math.abs(g.kratos.knockbackVel) > 0.4) g.kratos.knockbackVel = 0; 
		}
		
		// Handle dodge

		if (g.kratos.dodging) {
			speed *= dodgeSpeedMultiplier;
			if (Date.now() > g.kratos.dodgeEnd) { 
				g.kratos.dodging = false;
				g.keys["d"] = false;
				g.keys["D"] = false;
				g.keys["a"] = false;
				g.keys["A"] = false;
			}
		}

		// Banshee scream OR Gorgon/Medusa petrification OR Hades abilities cancel
		if (g.kratos.covering || g.kratos.petrified || g.kratos.took || g.kratos.held) {
			const sPressed = g.keys["s"] || g.keys["S"];
			if (g.kratos.covering && sPressed) {
				g.kratos.screamBreak++;

				sButtonPrompt.visualPress = true;
				sButtonPrompt.visualPressEnd = Date.now() + 80;

				// Temporarily speed up animation
				sButtonPrompt.pressInterval = Math.max(70, sButtonPrompt.pressInterval - 5);

				if (g.kratos.screamBreak >= 17) endScream(enemy)
			} 

			if (g.kratos.petrified && sPressed) {
				g.keys['s'] = false;

				g.kratos.petrifyBreak++;

				// Visual feedback
				sButtonPrompt.visualPress = true;
				sButtonPrompt.visualPressEnd = Date.now() + 80;

				if (g.kratos.petrifyBreak >= 20) breakPetrification()
			}

			if (g.kratos.took && sPressed) {
				g.kratos.soulTakeBreak++;

				sButtonPrompt.visualPress = true;
				sButtonPrompt.visualPressEnd = Date.now() + 80;
				
				if (g.kratos.soulTakeBreak >= 15) endSoulTake(enemy)
			}
			if (g.kratos.took) {
				const inRange = Math.abs(g.kratos.midX  - enemy.midX) <= enemy.lR;
				if (g.kratos.facing === enemy.facing && g.kratos.facing === "right") g.kratos.facing = "left"
				if (g.kratos.facing === enemy.facing && g.kratos.facing === "left") g.kratos.facing = "right"
				if (!inRange) g.kratos.x += g.kratos.facing === "right" ? speed / 2 : -speed / 2
			} 
			if (g.kratos.held && sPressed) {
				g.kratos.graspBreak++;

				sButtonPrompt.visualPress = true;
				sButtonPrompt.visualPressEnd = Date.now() + 80;

				if (g.kratos.graspBreak >= 12) {
					// Escape
					g.kratos.held = false;
					graspFX.active = false;
					enemy.state = "idle";
					enemy.grasping = false;

					sButtonPrompt.active = false;
				}
			}

			g.keys['s'] = false;
			g.keys['S'] = false;

			// No movement or attacks
			g.kratos.velX = 0;
			g.keys["e"] = false;
			g.keys["r"] = false;

			// Keep inside still
			if (g.kratos.x < 0) g.kratos.x = 0;
			if (g.kratos.x + g.kratos.w > battleArea.width) g.kratos.x = battleArea.width - g.kratos.w;
			return
		}
		
		// Horizontal movement
		const blockingGroundAttack = g.kratos.lAttacking || g.kratos.hAttacking && g.kratos.onGround;
		if (blockingGroundAttack || g.kratos.blocking) {
			g.kratos.velX = 0;
		} else {
			if (g.kratos.stunned || g.kratos.knockbackVel || enemy.speedStriking) return
			if (g.keys["ArrowLeft"] || g.keys["a"] || g.keys["A"]) {
				if (!g.freeplay && enemy.god && !enemy.defeated) { lineComplete ? g.kratos.velX = -speed : g.kratos.velX = 0 } else { g.kratos.velX = -speed }
				g.kratos.facing = "left";
			} else if (g.keys["ArrowRight"] || g.keys["d"] || g.keys["D"]) {
				if (!g.freePlay && enemy.god && !enemy.defeated) { lineComplete ? g.kratos.velX = speed : g.kratos.velX = 0 } else { g.kratos.velX = speed }
				g.kratos.facing = "right";
			} else {
				g.kratos.velX = 0;
			}
		}

		// Jump
		if (g.keys[" "] && g.kratos.onGround && !g.kratos.petrified && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.blocking) {
			g.playCaudio(g.audio.evadeSound, g.sfxVolume);
			g.kratos.velY = -13;
			g.kratos.onGround = false;
			lineComplete = true;
		}

		// Focus
		if (g.keys["f"] || g.keys["F"] && (!g.freePlay && enemies.length > 1)) {
			changeFocusedEnemy();
		}
		g.keys["f"] = false;
		g.keys["F"] = false;

		// Debug drawings
		if (g.devMode) {
			showKratosXpos();
			showKratosMidX();
			showKratosHitBox();
			showKratosAttackRange();
		}
		
		let enemyAttackableXpos = enemy.facing === "left" ? enemy.midX + (enemy.oW / 4) * 2 : enemy.midX - (enemy.oW / 4) * 2;
		if (enemy.name === "Minotaur" || enemy.name === "Hades" || enemy.name === "Hercules") enemy.facing === "right" ? enemyAttackableXpos += (enemy.Ow / 4) : enemyAttackableXpos -= (enemy.oW / 4)
		if (enemy.name === "Cyclops") enemy.facing === "right" ? enemyAttackableXpos += (enemy.oW / 4) + 43 : enemyAttackableXpos -= (enemy.oW / 4) + 32
		if (enemy.name === "Hermes" && enemy.facing === "left") enemyAttackableXpos += (enemy.oW / 4)
		let attackRange = weapon.lR;
		if (g.kratos.hAttacking) attackRange = weapon.hR
		const kratosAttackX = g.kratos.facing === "right" ? g.kratos.midX + attackRange : g.kratos.midX - attackRange;
		const attackDis = Math.abs(Math.round(kratosAttackX - enemyAttackableXpos));

		// Attack with e (light attacks)
		if (g.keys["e"] && Date.now() - g.kratos.lastLattack > weapon.lC && (!currentBattle?.complete || !g.currentEnemy.defeated) && !g.kratos.blocking && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.hAttacking) {
			const now = Date.now();

			if (g.currentWeapon === 0 || weapon.name.includes("whip") || weapon.name.includes("Claws")) {
				g.kratos.lightCombo = g.kratos.lightCombo === 2 ? 0 : g.kratos.lightCombo + 1
			} else {
				g.kratos.lightCombo = (g.kratos.lightCombo + 1) % 2 // 2 hit combo for other weapons 'cause I am too lazy to make more sprites
			}
			if (g.currentWeapon === 0 || weapon.name.includes("Gauntlet") || weapon.name.includes("cestus") || weapon.name.includes("Blade")) g.playCaudio(weapon.lAttack[(g.kratos.lightCombo + 1) % 2], g.sfxVolume)
			if (weapon.name.includes("whip") || weapon.name.includes("Arms") || weapon.name.includes("Claws")) {
				g.playCaudio(weapon.lAttack[g.kratos.lightCombo], g.sfxVolume); 
				if (weapon.name.includes("whip") && g.kratos.lightCombo) g.playCaudio(weapon.lAttack[0], g.sfxVolume);
			}

			
			g.kratos.lAttacking = true;
			g.kratos.lAttackEnd = now + weapon.lC - 50;       
			g.kratos.lastLattack = now;

			weapon.lit = true;

			// Check if enemy is in range
			
			if (attackDis <= weapon.lR && !enemy.dead) {
				if (enemy.blocking) { 
					if (enemy.name === "Zeus" && !weapon.name.includes("Blade ") && !weapon.name.includes("whip")) {
						damageKratos({damage: 2, stun: 350});
						g.playCaudio(g.audio.electrify, g.sfxVolume);
						return
					}
					enemy.name !== "Minotaur" ? g.playCaudio(g.audio.blockSound, g.sfxVolume) : g.playCaudio(g.audio.minBlock, g.sfxVolume)
					const knockback = !strongEnemy(enemy) ? Math.round(weapon.lK / 2) : 0
					enemy.knockbackVel = g.kratos.facing === "right" ? knockback : -knockback;

					if (!strongEnemy(enemy)) { // No stun for bigger / stronger enemies
						enemy.stunned = true;
						enemy.stunEnd = Date.now() + weapon.lS / 2;
					}
				} else {
					if (enemy.name === "Hermes" && tryDodge(enemy)) {
						g.playCaudio(g.audio.dodge, g.sfxVolume);
						return
					}

					if (enemy.name === "Zeus" && tryTeleport(enemy)) {
						g.playCaudio(g.audio.teleport, g.sfxVolume);
						return
					}

					if (enemy.name === "Zeus" && g.kratos.onGround && enemy.flying) return

					const hitSound = enemy.name !== "Zeus" ? enemy.hitSound : enemy.hitSound[0];
					g.playCaudio(hitSound, g.sfxVolume);
					enemy.health -= weapon.lD;
					enemy.hitUntil = Date.now() + tintTime;

					if (enemy.name === "Zeus" && enemy.flying && !g.kratos.onGround) {
						enemy.maxAirHits -= weaponAirMax();
						enemy.airHits++;

						// Enough light hits knock him down
						if (enemy.airHits >= enemy.maxAirHits) {
							knockZeusDown();
							return;
						}
					}

					// Knockback enemy
					if (!strongEnemy(enemy)) {
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.lK : -weapon.lK;
					} else { // Lower knockback for bigger or stronger enemies
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.lK - 5 : -weapon.lK; - 5 
					}

					// Stun enemy
					enemy.stunned = true;
					if (!strongEnemy(enemy)) {
						enemy.stunEnd = Date.now() + weapon.lS;
					} else { // Less stunn for bigger / stronger enemies
						enemy.stunEnd = Date.now() + weapon.lS / 2 
					} 

					if (enemy.health <= 0) {
						enemy.health = 0;
						enemy.deathSound.play();
					}
					
				}
			}
		}

		g.keys['e'] = false;

		// If light attack duration expired, reset
		if (g.kratos.lAttacking && Date.now() > g.kratos.lAttackEnd) {
			g.kratos.lAttacking = false;
			g.keys['e'] = false;
		}
		
		// Attack with r (heavy attacks)
		if (g.keys["r"] && Date.now() - g.kratos.lastHattack > weapon.hC && (!currentBattle?.complete || !g.currentEnemy.defeated) && !g.kratos.blocking && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.lAttacking) {
			const now = Date.now();

			g.kratos.heavyCombo = (g.kratos.heavyCombo + 1) % 2; // 2 hit combo for now
			g.playCaudio(g.audio.grunt[(g.kratos.heavyCombo + 1) % 2], g.sfxVolume);
			g.playCaudio(weapon.hAttack[(g.kratos.heavyCombo + 1) % 2], g.sfxVolume);
			if(weapon.name.includes("cestus")) g.playCaudio(g.audio.nemeanRoar, g.sfxVolume);
			
			g.kratos.hAttacking = true;
			g.kratos.hAttackEnd = now + weapon.hC - 50;
			g.kratos.lastHattack = now;

			weapon.lit = true;

			// Check if enemy is in range
			if (attackDis <= weapon.hR && !enemy.dead) {
				if (enemy.blocking) { 
					function breakBlock() {
						enemy.decision = null;
						enemy.blocking = false;
						enemy.state = "idle";
						enemy.stunned = true;
						enemy.stunEnd = Date.now() + weapon.hS - 120;
					}
					const knockback = enemy.name !== "Minotaur" && enemy.name !== "Cyclops" ? Math.round(weapon.hK / 2) : 2;
					if (enemy.name === "Zeus") return
					enemy.knockbackVel = g.kratos.facing === "right" ? knockback : -knockback;
			
					if (enemy.name === "Satyr" && (weapon.name.includes("Gauntlet") || weapon.name.includes("cestus") || weapon.name.includes("Blade "))) {
						g.audio.blockSound.play();
						breakBlock();
						return
					} else if (enemy.name === "Minotaur" && (weapon.name.includes("Gauntlet") || weapon.name.includes("cestus") || weapon.name.includes("Blade "))) {
						g.audio.minBlock.play();
						breakBlock();
						return
					} else if (enemy.name === "Hercules" && (weapon.name.includes("cestus") || weapon.name.includes("Blade "))) {
						breakBlock();
						return
					} else if (enemy.name === "Zeus" && weapon.name.includes("Blade ")) {
						breakBlock();
						return
					}
					enemy.name !== "Minotaur" ? g.playCaudio(g.audio.blockSound, g.sfxVolume) : g.playCaudio(g.audio.minBlock, g.sfxVolume)

					enemy.stunned = true;
					enemy.stunEnd = Date.now() + weapon.hS / strongEnemy(enemy) ? 2 : 3;
					if (enemy.name === "Hoplite") { // Hoplite blocks can be broken with any weapon (Only with heavy attacks)
						g.audio.blockSound.play();
						breakBlock()
					}
				} else {
					if (enemy.name === "Hermes" && tryDodge(enemy)) {
						g.audio.dodge.cloneNode().play();
						return;
					}

					if (enemy.name === "Zeus" && tryTeleport(enemy)) {
						g.audio.teleport.cloneNode().play();
						return
					}

					if (enemy.name === "Zeus" && g.kratos.onGround && enemy.flying) return

					const hitSound = enemy.name !== "Zeus" ? enemy.hitSound : enemy.hitSound[1];
					g.playCaudio(hitSound, g.sfxVolume);
					enemy.health -= weapon.hD;
					enemy.hitUntil = Date.now() + tintTime; // flash red

					if (enemy.name === "Zeus" && enemy.flying && !g.kratos.onGround) {
						enemy.maxAirHits -= weaponAirMax();
						enemy.airHits += 2;
						
						if (enemy.airHits >= enemy.maxAirHits) {
							knockZeusDown();
							return;
						}
					}

					if (!strongEnemy(enemy)) {
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.hK : -weapon.hK
					} else { // Lower knockback for bigger/stronger enemies
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.hK - 5 : -weapon.hK; - 5
					}

					enemy.stunned = true;
					if (!strongEnemy(enemy)) {
						enemy.stunEnd = Date.now() + weapon.hS;
					} else { // Less stunn for bigger/stronger enemies
						enemy.stunEnd = Date.now() + weapon.hS / 2;
					} 

					if (enemy.health <= 0) {
						enemy.health = 0;
						enemy.deathSound.play();
					}
				}
			}
		}

		g.keys['r'] = false;

		// If heavy attack duration expired, reset
		if (g.kratos.hAttacking && Date.now() > g.kratos.hAttackEnd) {
			g.kratos.hAttacking = false;
			g.keys['r'] = false;
		}
		// Block with q
		if (g.keys["q"] && !g.kratos.blocking && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.petrified && !g.kratos.held && !g.kratos.lAttacking && !g.kratos.hAttacking) g.kratos.blocking = true

        // Dodge
        if (g.keys["Shift"] && !g.kratos.dodging && !g.kratos.blocking && !g.kratos.stunned && !g.kratos.petrified && !g.kratos.lAttacking && !g.kratos.hAttacking) {
            g.audio.evadeSound.play();
			g.kratos.dodging = true;
			g.kratos.dodgeEnd = Date.now() + dodgeDuration;
        }

		g.keys["Shift"] = false;

		if (!g.kratos.dodging && !g.kratos.hAttacking && !enemy.speedStriking && !enemy.health <= 0) {
			// Overlap prevention
			if (g.kratos.y < config.groundLevel || !enemy.onGround) return;
			if (g.kratos.dodging || enemy.speedStriking || enemy.flying) return;
			
			const kHitbox = kratosHitbox();
			const eHitbox = enemyHitbox(enemy);

			// Get sides
			const kLeft = kHitbox.x;
			const kRight = kHitbox.x + kHitbox.w;
			const eLeft = eHitbox.x;
			const eRight = eHitbox.x + eHitbox.w;

			// Check for horizontal overlap if Kratos's right is past enemy's left AND Kratos's left is before enemy's right
			if (kRight > eLeft && kLeft < eRight) {
				
				// Find out which side Kratos is on to determine push direction
				const kCenter = kHitbox.x + kHitbox.x / 2;
				const eCenter = eHitbox.x + eHitbox.x / 2;
				
				if (kCenter < eCenter) {
					// Kratos is on the left, push him further left
					const overlap = kRight - eLeft;
					g.kratos.x -= (overlap + 0.1);
				} else {
					// Kratos is on the right, push him further right
					const overlap = eRight - kLeft;
					g.kratos.x += (overlap + 0.1);
				}
			}
		}

		// Keep inside canvas
		
		if (g.kratos.x < 0) g.kratos.x = 0;
		if (g.kratos.x + g.kratos.w > battleArea.width) g.kratos.x = battleArea.width - g.kratos.w;
	}

	function drawKratos(enemy) {
		updateKratosSprites();
		let img;
		if (g.kratos.health > 0) {
			if (!g.kratos.onGround) {  
				// In the air
				if (g.kratos.stunned && !g.kratos.petrified) {
					img = g.kratos.facing === "right" ? kratosAirStunnedR : kratosAirStunnedL;
					g.kratos.h = 150;
					g.kratos.w = 107;
				} else if (g.kratos.covering) {
					img = g.kratos.facing === "right" ? kratosDeafenedR : kratosDeafenedL;
					g.kratos.w = 105;
					g.kratos.h = 157;
				} else if (g.kratos.petrified) {
					img = g.kratos.facing === "right" ? kratosPetrifiedR : kratosPetrifiedL;
					g.kratos.h = 167;
					g.kratos.w = 154;
				} else if (g.kratos.took) {
					img = g.kratos.facing === "right" ? kratosSoulTookR : kratosSoulTookL;
					g.kratos.h = 210;
					g.kratos.w = 135;
				} else if (g.kratos.dodging) {
					img = g.kratos.facing === "right" ? kratosDodgesR : kratosDodgesL;
					g.kratos.w = 148;
					g.kratos.h = 110;
				} else if (g.kratos.lAttacking || g.kratos.hAttacking) {
					img = g.kratos.facing === "right" ? kratosAirAttackR : kratosAirAttackL;
					g.kratos.w = 140;
					g.kratos.h = 160;
					if (weapon.name.includes("Arms")) {
						g.kratos.w = 150;
						g.kratos.h = 200;
					}
				} else if (g.kratos.velY < 0) {
					// Jumping
					img = g.kratos.facing === "right" ? kratosJumpsR : kratosJumpsL;
					g.kratos.w = 127;
					g.kratos.h = 162;
				} else {
					// Falling
					img = g.kratos.facing === "right" ? kratosFallsR : kratosFallsL;
					g.kratos.w = 127;
					g.kratos.h = 162;
				}
			} else if (g.kratos.velX > 0 && !g.kratos.dodging && !g.kratos.stunned) {
				img = kratosJogR;
				g.kratos.h = 160;
				g.kratos.w = 115;
			} else if (g.kratos.velX < 0 && !g.kratos.dodging && !g.kratos.stunned) {
				img = kratosJogL;
				g.kratos.h = 160;
				g.kratos.w = 115;
			} else {
				// On the ground
				if (g.kratos.stunned && !g.kratos.petrified && !g.kratos.held) {
					img = g.kratos.facing === "right" ? kratosStunnedR : kratosStunnedL;
					g.kratos.w = 110;
					g.kratos.h = 150;
				} else if (g.kratos.covering || enemy.screaming) {
					img = g.kratos.facing === "right" ? kratosDeafenedR : kratosDeafenedL;
					g.kratos.h = 157;
					g.kratos.w = 95;
				} else if (g.kratos.petrified) {
					img = g.kratos.facing === "right" ? kratosPetrifiedR : kratosPetrifiedL;
					g.kratos.h = 167;
					g.kratos.w = 154;
				} else if (g.kratos.took) {
					img = g.kratos.facing === "right" ? kratosSoulTookR : kratosSoulTookL;
					g.kratos.h = 210;
					g.kratos.w = 135;
				} else if (g.kratos.held) {
					img = g.kratos.facing === "right" ? kratosHeldR : kratosHeldL;
					g.kratos.w = 135
				} else if (g.kratos.dodging) {
					img = g.kratos.facing === "right" ? kratosDodgesR : kratosDodgesL;
					g.kratos.w = 148;
					g.kratos.h = 110;
				} else if (g.kratos.blocking) {
					img = g.kratos.facing === "right" ? kratosBlocksR : kratosBlocksL;
					g.kratos.h = 158;
					g.kratos.w = 150;
					if (weapon.name.includes("cestus") || weapon.name.includes("Arms")) g.kratos.w = 130
					if (weapon.name.includes("Gauntlet")) g.kratos.w = 110
					if (weapon.name.includes("Arms")) g.kratos.h = 205;
				} else if (enemy.health !== 0) { 
					if (g.kratos.x < enemy.x) {
						g.kratos.facing = "right";
						if (g.kratos.hAttacking) {
							img = heavyAttackR;
							g.kratos.w = 250;
							if (weapon.name.includes("whip") && g.kratos.heavyCombo === 0) g.kratos.w = 295
							if (weapon.name.includes("whip") && g.kratos.heavyCombo === 1) g.kratos.w = 325
							if (weapon.name.includes("Claws") && g.kratos.heavyCombo == 1) { g.kratos.h = 180; g.kratos.w = 320 }
							if (weapon.name.includes("Gauntlet") || weapon.name.includes("cestus")) g.kratos.w = 160
							if (weapon.name.includes("Blade ")) { g.kratos.h = 140; g.kratos.w = 170 }
							if (weapon.name.includes("Arms")) {
								g.kratos.w = 270;
								g.kratos.h = !g.kratos.heavyCombo ? 155 : 150;
							}
						} else if (g.kratos.lAttacking) {
							img = lightAttackR;
							g.kratos.w = 170;
							if (weapon.name.includes("whip") && g.kratos.lightCombo) g.kratos.w = 188
							if (weapon.name.includes("whip") && g.kratos.lightCombo === 2) g.kratos.h = 192
							if (weapon.name.includes("Claws") && g.kratos.lightCombo === 2) { g.kratos.h = 185; g.kratos.w = 158 }
							if (weapon.name.includes("Blade ") && !g.kratos.lightCombo) { g.kratos.w = 150; g.kratos.h = 190 }
							if (weapon.name.includes("Blade ") && g.kratos.lightCombo) { g.kratos.w = 140; g.kratos.h = 171 }
							if (weapon.name.includes("Arms")) {
								g.kratos.w = 270;
								g.kratos.h = !g.kratos.lightCombo ? 175 : 150;
							}
						} else {
							img = kratosFightingStanceR;
							g.kratos.w = 150;
							g.kratos.h = 159;
							if (weapon.name.includes("whip")) g.kratos.w = 160
							if (weapon.name.includes("Arms")) {
								g.kratos.w = 120;
								g.kratos.h = 205;
							}
						}
					} else {
						g.kratos.facing = "left";
						if (g.kratos.hAttacking) {
							img = heavyAttackL;
							g.kratos.w = 250;
							if (weapon.name.includes("whip") && g.kratos.heavyCombo === 0) g.kratos.w = 295
							if (weapon.name.includes("whip") && g.kratos.heavyCombo === 1) g.kratos.w = 325
							if (weapon.name.includes("Claws") && g.kratos.heavyCombo == 1) { g.kratos.h = 180; g.kratos.w = 320 }
							if (weapon.name.includes("Gauntlet") || weapon.name.includes("cestus") === 4) g.kratos.w = 165
							if (weapon.name.includes("Blade ")) { g.kratos.h = 140; g.kratos.w = 170 }
							if (weapon.name.includes("Arms")) {
								g.kratos.w = 270;
								g.kratos.h = !g.kratos.heavyCombo ? 155 : 150;
							}
						} else if (g.kratos.lAttacking) {
							img = lightAttackL;
							g.kratos.w = 170;
							if (weapon.name.includes("whip") && g.kratos.lightCombo) g.kratos.w = 188
							if (weapon.name.includes("whip") && g.kratos.lightCombo === 2) g.kratos.h = 192
							if (weapon.name.includes("Claws") && g.kratos.lightCombo === 2) { g.kratos.h = 185; g.kratos.w = 158 }
							if (weapon.name.includes("Blade ") && !g.kratos.lightCombo) { g.kratos.w = 150; g.kratos.h = 190 }
							if (weapon.name.includes("Blade ") && g.kratos.lightCombo) { g.kratos.w = 140; g.kratos.h = 171 }
							if (weapon.name.includes("Arms")) {
								g.kratos.w = 270;
								g.kratos.h = !g.kratos.lightCombo ? 175 : 150;
							}
						} else {
							img = kratosFightingStanceL;
							g.kratos.w = 150;
							g.kratos.h = 159;
							if (weapon.name.includes("whip")) g.kratos.w = 160
							if (weapon.name.includes("Arms")) {
								g.kratos.w = 130;
								g.kratos.h = 205;
							}
						}
					}
				} else { 
					if (enemies.length > 1 && !currentBattle?.complete) return
					img = g.kratos.facing === "right" ? kratosStandR : kratosStandL;
					g.kratos.h = 162;
					g.kratos.w = 112;
				}
			}
		} else { 
			if (!g.kratos.petrified) {
				img = g.kratos.facing === "right" ? kratosDeadL : kratosDeadR
				g.kratos.w = 160;
				g.kratos.h = 55;
			} else {
				img = g.kratos.facing === "right" ? kratosDeadPetrifiedR : kratosDeadPetrifiedL
				g.kratos.w = 150;
				g.kratos.h = 99;
			}
		}
		let drawX = g.kratos.x;
		if (g.kratos.facing === "left") drawX -= 75 / 2 - 13
		if (weapon.name.includes("Arms") && (g.kratos.hAttacking || g.kratos.lAttacking) && g.kratos.facing === "left") drawX -= g.kratos.w - 150
		if (g.kratos.facing === "left" && g.kratos.hAttacking && (weapon.name.includes("Blades") || weapon.name.includes("whip") || weapon.name.includes("Claws"))) drawX -= g.kratos.w - 150
		drawCharacter(img, drawX, g.kratos.y, g.kratos.w, g.kratos.h, Date.now() < g.kratos.hitUntil);
	}

	// === Enemies updation ===

	// ---- Enemy AI ----

	function decision(choices) {
		const total = Object.values(choices).reduce((a, b) => a + b, 0);
		let r = Math.random() * total;

		for (const [key, weight] of Object.entries(choices)) {
			r -= weight;
			if (r <= 0) return key;
		}
	}

	function enemyDecides(enemy) {
		const now = Date.now();
		const options = {};

		if (now - enemy.lastAttack > enemy.lC) options.lAttack = enemy.lightChance
		if (now - enemy.lastAttack > enemy.hC) options.hAttack = enemy.heavyChance
		if (enemy.leapChance && now - enemy.lastLeap > enemy.leapC) options.leap = enemy.leapChance
		if (enemy.blockChance && now - enemy.lastBlock > enemy.bC) options.block = enemy.blockChance
		if (enemy.screamChance && now - enemy.lastScream > enemy.sC) options.scream = enemy.screamChance
		if (enemy.petrifyChance && !g.kratos.petrified && now - enemy.lastPetrify > enemy.pC && !g.kratos.petrified) options.petrify = enemy.petrifyChance
		if (enemy.soulTakeChance && !g.kratos.took && !g.kratos.held && now - enemy.lastSoulTake > enemy.sTC) options.soulTake = enemy.soulTakeChance
		if (enemy.graspChance && !g.kratos.held && now - enemy.lastGrasp > enemy.gC) options.grasp = enemy.graspChance
		if (enemy.speedStrikeChance && now - enemy.lastSpeedStrike > enemy.ssC) options.speedStrike = enemy.speedStrikeChance
		if (enemy.smashChance && now - enemy.lastSmash > enemy.sC) options.smash = enemy.smashChance
		
		if (!Object.keys(options).length) return;

		const choice = decision(options);
		console.log(enemy.name, "decided:", choice);
		return choice;
	}

	//  --- Enemy abilities ---

	const arrows = [];
	const arrowRight = bAssets.get("Imagery/battle/Arrow right.png");
	const arrowLeft = bAssets.get("Imagery/battle/Arrow left.png");

	function spawnArrow(enemy) {
		const direction = enemy.facing === "right" ? 1 : -1;

		arrows.push({
			x: enemy.facing === "right" ? enemy.x + enemy.w : enemy.x,
			y: enemy.y - enemy.h * 0.60,
			velX: enemy.arrowSpeed * direction,
			w: 72,
			h: 17,

			damage: enemy.sD,
			stun: enemy.sS,
			knockback: enemy.sK,
			dir: enemy.facing,
			img: enemy.facing === "right" ? arrowRight : arrowLeft,

			enemy,
			hit: false
		});
	}

	function updateArrows() {
		for (let i = arrows.length - 1; i >= 0; i--) {
			const arrow = arrows[i];
			const kHitbox = kratosHitbox();
			kHitbox.x = g.kratos.x - 75 / 2;

			arrow.x += arrow.velX;

			// Hit Kratos
			if (!arrow.hit && arrow.x < kHitbox.x + kHitbox.w && arrow.x + arrow.w > kHitbox.x && arrow.y < kHitbox.y + kHitbox.h && arrow.y + arrow.h > kHitbox.y) {
				arrow.hit = true;

				if (g.kratos.blocking) g.playCaudio(g.audio.blockSound, g.sfxVolume)
				if (!g.kratos.dodging && !g.kratos.blocking) {
					damageKratos(arrow)
				}

				arrows.splice(i, 1);
				continue;
			}

			// Remove arrow after leaving the battlefield
			if (arrow.x < -100 || arrow.x > battleArea.width + 100) arrows.splice(i, 1)
		}
	}
	function drawArrows() {
		for (const arrow of arrows) {
			ctx.drawImage(
				arrow.img,
				arrow.x,
				arrow.y,
				arrow.w,
				arrow.h
			);
		}
	}

	function enemyLeaps(enemy) {
		enemy.state = "leap";		
		enemy.leapHit = false;

		const kratos = g.kratos;

		enemy.leapTargetX = kratos.midX + Math.round(kratosHitbox().w / 2);

		const distance = Math.abs(enemy.leapTargetX - enemy.midX);

		// Kratos is too close
		if (distance < enemy.leapMinRange) {
			enemy.leapState = "backup";
			return;
		}
		// Kratos is too far
		if (distance > enemy.leapRange) {
			enemy.leapState = "forwards";
			return;
		}

		enemy.leapState = "prepare";
		enemy.leapStart = Date.now();
	}

	function moveTowardsX(entity, targetX, speed) {
		const distance = targetX - entity.midX;

		if (Math.abs(distance) <= speed) {
			entity.x = targetX;
			entity.velX = 0;
			return true;
		}

		entity.velX = Math.sign(distance) * speed;
		return false;
	}

	function drawLeapR(enemy) {
		if (!enemy.leapRange) return
		const range = enemy.facing === "left" ? enemy.midX - enemy.leapRange : enemy.midX + enemy.leapRange
		ctx.beginPath();
		ctx.strokeStyle = "blue";
		ctx.moveTo(enemy.midX, config.groundLevel);
		ctx.lineTo(range, config.groundLevel);
		ctx.stroke();
	}

	function updateLeap(enemy) {
		const now = Date.now();
		const distance = Math.abs(enemy.midX - enemy.leapTargetX);
		const addition = enemy.name.includes("Fallen") ? 20 : 0;

		switch (enemy.leapState) {
			case "backup": {
				enemy.velX = enemy.facing === "right" ? -enemy.speed : enemy.speed;

				if (distance >= enemy.leapMinRange) {
					enemy.leapState = "prepare";
					enemy.leapStart = now;
				}

				break;
			}
			case "forwards": {
				const reachedRange = moveTowardsX(enemy, enemy.leapTargetX, enemy.speed);

				if (distance <= enemy.leapRange || reachedRange) {
					enemy.leapState = "prepare";
					enemy.leapStart = now;
				}

				break;
			}
			case "prepare": {
				enemy.velX = 0;

				if (now - enemy.leapStart >= enemy.leapPrepareTime) {
					enemy.onGround = false;
					enemy.leaping = true;
					enemy.leapState = "airborne";

					enemy.velY = enemy.leapVelocityY;

					// Face toward the target
					enemy.facing = enemy.leapTargetX > enemy.x ? "right" : "left";
				}

				break;
			}
			case "airborne": {
				enemy.velX = enemy.leapTargetX > enemy.x ? enemy.leapSpeed : -enemy.leapSpeed;

				// Close to target X
				if (distance <= 80 + addition) { 
					if (!enemy.airAttacking) {
						enemy.airAttacking = true;
						g.audio.legionnaireLeapAttack.play();
					}
				}

				// Has reached the target X
				if (distance <= 50 + addition) {
					enemy.x = enemy.leapTargetX;
					enemy.velX = 0;
					const kratosHitboxX = g.kratos.midX + 38;
					if (!enemy.leapHit && !g.kratos.dodging && Math.abs(enemy.midX - kratosHitboxX) <= 50 + addition) {
						let damage = enemy.leapDamage
						if (g.kratos.blocking) { 
							breakBlock();
							damage -= enemy.lD;
						}
						enemy.leapHit = true;
						g.audio.hurt[3].play();
						damageKratos({damage, stun: enemy.lS + enemy.hS * 2, knockback: enemy.lK + enemy.hK, dir: enemy.facing})
					}
				}

				// Landing
				if (enemy.onGround && enemy.velY >= 0) {
					enemy.leapState = "land";
					enemy.airAttacking = false;
					enemy.onGround = false;
					enemy.leapStart = now;

					enemy.velX = 0;
				}

				break;
			}
			case "land": {
				enemy.velX = 0;

				if (now - enemy.leapStart >= enemy.leapRecoveryTime) {
					enemy.leaping = false;
					enemy.leapState = "";

					enemy.decision = null;
					enemy.state = "idle";
				}

				break;
			}
		}
	}

	function enemyShoots(enemy) {
		const now = Date.now();
		enemy.state = "shoot";
		enemy.shooting = true;
		enemy.lastShot = now;
		enemy.velX = 0;
	}
	function enemyLightAttacks(enemy) {
		const now = Date.now();
		enemy.state = "lAttack";
		enemy.stateEnd = now + enemy.lC;
		enemy.lAttacking = true;
		enemy.lastAttack = now;
		enemy.hasHit = false;
		enemy.velX = 0;
	}
	function enemyHeavyAttacks(enemy) {
		const now = Date.now();
		enemy.state = "hAttack";
		enemy.stateEnd = now + enemy.hC;
		enemy.hAttacking = true;
		enemy.lastAttack = now;
		enemy.hasHit = false;
		enemy.velX = 0;
	}
	function enemyBlocks(enemy) {
		const now = Date.now();
		enemy.state = "block";
		enemy.stateEnd = now + enemy.bD;
		enemy.blocking = true;
		enemy.lastBlock = now;
	}

	function bansheeScreams(enemy) {
		const now = Date.now();
		enemy.state = "scream";
		enemy.stateEnd = now + 6200;
		enemy.screaming = true;
		enemy.lastScream = now;
		enemy.lastScreamTick = now;
		enemy.attackRange = enemy.hR + enemy.lR;
		enemy.velX = 0;

		g.kratos.covering = true;
		g.kratos.screamBreak = 0;

		sButtonActivate();

		g.audio.bansheeScream.play();
	}

	function endScream(enemy) {
		enemy.screaming = false;
		enemy.state = "idle";
		enemy.decision = null;
		
		g.kratos.covering = false;
		g.kratos.screamBreak = 0;

		sButtonPrompt.active = false;
    	sButtonPrompt.visualPress = false;

		if (g.audio.bansheeScream.currentTime > 0) {
			g.audio.bansheeScream.pause();
			g.audio.bansheeScream.currentTime = 0;
		}
	}

	function enemyPetrifies(enemy) {
		const now = Date.now();

		const animationDuration = enemy.name === "Gorgon" ? 2000 : 1500
		enemy.state = "petrify";
		enemy.stateEnd = now + animationDuration;
		enemy.petrifying = true;
		enemy.petrifyStart = now;
		enemy.lastPetrify = now;
		enemy.velX = 0;

		enemy.name === "Gorgon" ? g.audio.gorgonPetrify.play() : g.audio.medusaPetrify.play();
	}

	function breakPetrification() {
		g.kratos.petrified = false;
		g.kratos.petrifyBreak = 0;

		sButtonPrompt.active = false;
		sButtonPrompt.visualPress = false;
		g.audio.stoneBroke.play();
	}

	function hadesTakesSoul(enemy) {
		const now = Date.now();

		enemy.state = "soulTake";
		enemy.stateEnd = now + enemy.sTD;
		enemy.soulTaking = true;
		enemy.lastSoulTake = now;
		enemy.lastSoulTakeTick = now;
		enemy.attackRange = enemy.lR + enemy.hR * 2;

		g.kratos.took = true;
		g.kratos.soulTakeBreak = 0;

		g.audio.soulTake.play();
		sButtonActivate();
	}

	function endSoulTake(enemy) {
		enemy.soulTaking = false;
		enemy.state = "idle";
		enemy.decision = null;
		
		g.kratos.took = false;
		g.kratos.soulTakeBreak = 0;

		sButtonPrompt.active = false;
    	sButtonPrompt.visualPress = false;
		if (g.audio.soulTake.currentTime > 0) {
			g.audio.soulTake.pause();
			g.audio.soulTake.currentTime = 0;
		}
	}

	const graspFX = {
		active: false,
		grabbed: false,
		x: 0,
		y: 0,
		start: 0,
		frame: 0
	};

	function spawnGraspWarning(enemy) {
		const now = Date.now();

		graspFX.active = true;
		graspFX.grabbed = false;
		graspFX.start = now;

		graspFX.x = g.kratos.midX;
		graspFX.y = config.groundLevel - 2;

		enemy.graspAttempts++;
		enemy.nextGraspTime = now + 1500; // delay between attempts
		g.audio.handGrasp.play();
	}

	function hadesGrasp(enemy) {
		const now = Date.now();

		enemy.state = "grasp";
		enemy.grasping = true;
		enemy.lastGrasp = now;
		enemy.graspAttempts = 0;
		enemy.nextGraspTime = now + 1500;

		enemy.velX = 0;

		spawnGraspWarning(enemy);
	}

	function endGrasp(enemy) {
		enemy.grasping = false;
		enemy.state = "idle";
		enemy.decision = null;

		graspFX.active = false;
	}

	function drawGraspWarning() {
		if (!graspFX.active || graspFX.grabbed) return;

		const pulse = Math.sin(Date.now() / 100) * 2;
		const scale = 2;

		ctx.save();
		ctx.globalAlpha = 0.6;

		ctx.strokeStyle = "#752626";
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.ellipse(
			graspFX.x,
			graspFX.y,
			35 + pulse* scale,
			15 * scale,
			0,
			0,
			Math.PI * 2
		);
		ctx.stroke();
		ctx.restore();
	}

	const graspHand = bAssets.get("Imagery/battle/Underground hand.png");
	function drawHandGrasp() {
		if (!graspFX.active) return;

		const img = graspHand;

		let x = graspFX.x - 50;
		let y = graspFX.y - 80;

		// If grabbed, remove sprite
		if (graspFX.grabbed) {
			return
		}

		ctx.drawImage(img, x, y, 100, 81);
		ctx.restore();
	}

	function tryDodge(enemy) {
		if (!enemy.canDodge) return false;
		if (enemy.dodging || enemy.stunned) return false;

		const now = Date.now();
		if (now - enemy.lastDodge < enemy.dC) return false;
		if (!g.kratos.lAttacking && !g.kratos.hAttacking) return false;

		// Only dodge if close
		const kratosAttackX = g.kratos.facing === "right" ? g.kratos.x + 150 : g.kratos.x;
		const enemyCenter = enemy.x + enemy.w / 2;
		const dist = Math.abs(kratosAttackX - enemyCenter);

		if (dist > 120) return false;

		// Dodge chance
		if (Math.random() > enemy.dodgeChance) return false;
		console.log("Hermes dodges");

		hermesDodges(enemy);
		return true;
	}

	function hermesDodges(enemy) {
		const now = Date.now();

		enemy.state = "dodge";
		enemy.stateEnd = now + 580;
		enemy.dodging = true;
		enemy.invulnerable = true;
		enemy.lastDodge = now;

		// Dodge away from Kratos
		const dir = g.kratos.x < enemy.x ? 1 : -1;
		enemy.velX = dir * enemy.dodgeSpeed;
	}

	const offset = 171;
	
	function hermesSpeedStrike(enemy) {
		const now = Date.now();

		enemy.state = "speedStrike";
		enemy.speedStriking = true;
		enemy.speedStrikeHits = 0;
		enemy.lastSpeedStrike = now;

		enemy.speedStrikePhase = "forward";
		enemy.speedStrikeDir = enemy.x < g.kratos.x ? 1 : -1;
		enemy.speedStrikeStartX = enemy.x;
		enemy.speedStrikeTargetX = g.kratos.x + g.kratos.w / 2 + offset * enemy.speedStrikeDir;
		enemy.velX = enemy.speedStrikeSpeed * enemy.speedStrikeDir;
		g.kratos.velX = 0;

		g.audio.speedStrike.play();
	}

	function endSpeedStrike(enemy) {
		enemy.state = "idle";
		enemy.decision = null;
		enemy.speedStriking = false;
		enemy.velX = 0;
		// Snap back to original spot
		enemy.x = enemy.speedStrikeStartX;
	}

	function herculesSmash(enemy) {
		const now = Date.now();
		
		enemy.state = "smash";
		enemy.smashing = true;
		enemy.lastSmash = now;

		enemy.smashCount = 0;
		enemy.nextSmashTime = now + 700;
		enemy.smashHasHit = false;

		enemy.velX = 0;
	}

	function tryTeleport(enemy) {
		const now = Date.now();

		if (enemy.teleporting || now - enemy.lastTeleport < enemy.teleportCooldown) return false
		if (Math.random() > enemy.teleportChance) return false

		zeusTeleports(enemy);
		return true
	}

	function zeusTeleports(enemy) {
		enemy.state = "teleport";
		enemy.stateEnd = Date.now() + 330;
		enemy.lAttacking = false;
		enemy.hAttacking = false;
		enemy.teleporting = true;
		enemy.lastTeleport = Date.now();

		enemy.velX = 0;
		enemy.velY = 0;

		const minDistance = 190;
		const maxDistance = 340;

		const dir = enemy.x < g.kratos.x ? -1 : 1;
		const offset = minDistance + Math.random() * (maxDistance - minDistance);

		let newX = g.kratos.x + offset * dir;

		newX = Math.max(20, Math.min(battleArea.width - enemy.w - 20, newX));

		enemy.x = newX;
	}

	function zeusFlies(enemy) {
		enemy.flying = true;
		enemy.state = "fly";
		enemy.decision = null;
		enemy.velX = 0;
		enemy.velY = -6; // lift-off
		enemy.onGround = false;

		enemy.lastFlightAction = Date.now();
	}

	function flightUpdate(enemy) {
		const now = Date.now();

		// Smooth hover
		enemy.y += (enemy.currentFlightTargetY - enemy.y) * 0.1;

		enemy.velX = 0;
		enemy.velY = 0;

		if (g.kratos.health <= 0) return

		// Decide action
		const coolDown = 1170
		if (now - enemy.lastFlightAction > coolDown) {
			enemy.flightState = Math.random() < 0.6 ? "shoot" : "chase";
			console.log("Zeus flight state:", enemy.flightState);
			enemy.lastFlightAction = now;
		}
		
		if (enemy.flightState === "shoot") {
			zeusLightningAttack(enemy);
		}

		if (enemy.flightState === "chase") {
			zeusAirChase(enemy);
		}
	}

	function zeusLightningAttack(enemy) {
		const now = Date.now();
		if (now - enemy.lastLightning < enemy.lightningCooldown) return;

		enemy.lastLightning = now;
		spawnZeusLightning(enemy);
	}

	const lightnings = [];

	function spawnZeusLightning(enemy) {
		g.audio.lShoot.cloneNode().play();

		const dir = enemy.facing === "right" ?  1 : -1;
		const startX = enemy.x + enemy.w / 2 + 40 * dir;
		const startY =  enemy.y - 80; // enemy.y + enemy.h / 2

		const targetX = g.kratos.x + g.kratos.w / 2;
		const targetY = g.kratos.y - 70; // g.kratos.y + g.kratos.h / 2

		const dx = targetX - startX;
		const dy = targetY - startY;

		const dist = Math.hypot(dx, dy) || 1;
		const speed = 9;

		lightnings.push({
			x: startX,
			y: startY,
			velX: (dx / dist) * speed,
			velY: (dy / dist) * speed,
			damage: 7,
			stun: 270,
			active: true
		});
	}

	function updateLightnings() {
		for (let i = lightnings.length - 1; i >= 0; i--) {
			const l = lightnings[i];
			const kratos = g.kratos;
			if (!l.active) {
				lightnings.splice(i, 1);
				continue;
			}

			l.x += l.velX;
			l.y += l.velY;

			// ---- Hit Kratos ----
			if (l.x > kratos.x && l.x < kratos.x + kratos.w && l.y > kratos.y - kratos.h && l.y < kratos.y) {
				g.audio.electrify.play();
				damageKratos(l);
				l.active = false;
				continue;
			}

			// ---- Hit ground ----
			if (l.y >= config.groundLevel) {
				l.active = false;
				continue;
			}

			// ---- Off screen ----
			if (l.x < -50 || l.x > battleArea.width + 50 || l.y < -50 || l.y > battleArea.height + 50) {
				l.active = false
			}
		}
	}

	const lightningBolt = bAssets.get("Imagery/battle/Lightning bolt.png");
	function drawLightnings() {
		for (const l of lightnings) {
			if (!l.active) continue;

			const angle = Math.atan2(l.velY, l.velX);

			ctx.save();
			ctx.translate(l.x, l.y);
			ctx.rotate(angle + Math.PI / 2);

			ctx.drawImage(
				lightningBolt,
				-36,
				-11,
				72,
				22
			);

			ctx.restore();
		}
	}

	function zeusAirChase(enemy) {
		const kratosX = g.kratos.midX;
		const dir = kratosX > enemy.x ? 1 : -1;

		enemy.velX = dir * enemy.flySpeed;
		enemy.x += enemy.velX;
		enemy.facing = dir === 1 ? "right" : "left";

		// Dip slightly when close
		if (Math.abs(enemy.x - kratosX) < 90) {
			enemy.currentFlightTargetY = enemy.flightY + enemy.strikeOffsetY;
		} else {
			enemy.currentFlightTargetY = enemy.flightY;
		}

		// Strike when aligned
		if (Math.abs(enemy.x - kratosX) < 45 && !enemy.hasHit) {
			zeusAirStrike(enemy);
		}
	}

	function zeusAirStrike(enemy) {
		enemy.hasHit = true;

		// Force lowest dip during hit
		enemy.currentFlightTargetY = enemy.flightY + enemy.strikeOffsetY + 20;

		g.audio.gorgonAttacks[0].cloneNode().play();
		damageKratos({damage: 9, stun: enemy.hS, knockback: 6, dir: enemy.facing})

		// Reset after hit
		setTimeout(() => {
			enemy.hasHit = false;
			enemy.flightState = "";
			enemy.currentFlightTargetY = enemy.flightY;
		}, 300);
	}

	function knockZeusDown(enemy) {
		enemy.flying = false;
		enemy.state = "fall";
		enemy.onGround = false;

		enemy.airHits = 0;
		enemy.flightState = "";
		enemy.lastFlightAction = Date.now();

		// Stun him while falling
		
		enemy.stunned = true;
		enemy.stunEnd = Date.now() + 450;
	}

	function breakBlock() {
		g.playCaudio(g.audio.blockSound, g.sfxVolume);
		g.kratos.blocking = false;
		g.keys['q'] = false;
	}

	// For debugging or checking things
	function showEnemyXpos(enemy) {
		ctx.strokeStyle = "yellow";
		ctx.beginPath();
		ctx.moveTo(enemy.x, enemy.y);
		ctx.lineTo(enemy.x, enemy.y - enemy.h);
		ctx.stroke();
	}
	function showEnemyMidX(enemy) {
		const enemyMidX = enemy.x + enemy.oW / 2;
		ctx.strokeStyle = "orange";
		ctx.beginPath();
		ctx.moveTo(enemyMidX, enemy.y);
		ctx.lineTo(enemyMidX, enemy.y - enemy.h);
		ctx.stroke();
	}

	const enemyHitbox = (enemy) => {
		return {
			x: enemy.facing === "left" ? (enemy.x - enemy.oW / 4) + (enemy.oW / 2) : enemy.x + enemy.oW / 4,
			y: enemy.y - enemy.h,
			w: enemy.oW / 2,
			h: enemy.h
		}
	}

	function showEnemyHitBox (enemy) {
		const hitbox = enemyHitbox(enemy);

		ctx.save();
		ctx.globalAlpha = 0.35;
		ctx.strokeStyle = "cyan";
		ctx.strokeRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
		ctx.restore();
	}
	function showEnemyAttackRange(enemy) {
		const midX = enemy.x + enemy.oW / 2;
		const attackRange = enemy.decision === "lAttack" ? enemy.lR : enemy.hR;
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(midX, enemy.y);
		ctx.lineTo(midX + (enemy.facing === "right" ? attackRange : -attackRange), enemy.y);
		ctx.stroke();
	}

	const enemyHealthFiller = document.querySelector('.Efiller');

	function updateEnemy(enemy) {
		// Handle death
		if (enemy.health <= 0 && !enemy.dead) {
			enemy.dead = true;
			if (enemy.reward && !g.kratos.inventory.includes(enemy.reward) && g.kratos.inventory.length < 6) { 
				g.kratos.inventory.push(enemy.reward);
				localStorage.setItem('inventory', JSON.stringify(g.kratos.inventory));
			} else if (enemy.name === "Hermes" && !enemy.defeated) {
				g.kratos.speed = 4.5
			}

			for (const orbs of enemy.orbs) {
				if (orbs.type === "gold" && enemy.defeated) continue
				spawnOrbs(enemy.x + enemy.w / 2, enemy.y - 28, orbs.type, orbs.amount)
			}
			if (!enemy.defeated) {
				enemy.defeated = true;
				g.enemies.forEach(e => { if (e.name === enemy.name) e.defeated = true });
				const enemyNameL = enemy.name.includes(" ") ? enemy.name.toLowerCase().replace(" ", "") : enemy.name.toLowerCase();
				localStorage.setItem(`${enemyNameL}Defeated`, enemy.defeated);
			}

			if (g.freePlay) setTimeout(victory(g), 2500)
			return;
		}

		if (enemies.length === 1) enemyHealthFiller.style.width = `${enemy.health}px`;

		if (!enemy.halved && enemy.god && enemy.health <= enemy.maxHealth / 2) {
			enemy.halved = true;
			spawnOrbs(enemy.x + enemy.w / 2, enemy.y - 28, "green", Math.round(enemy.orbs[0].amount / 2));
		}

		enemy.midX = enemy.x + enemy.oW / 2;
		const distance = Math.abs(Math.round(g.kratos.midX - enemy.midX));

		if (g.devMode) {
			showEnemyXpos(enemy);
			showEnemyMidX(enemy);
			showEnemyHitBox(enemy);
			showEnemyAttackRange(enemy);
			drawLeapR(enemy);
		}

		const kratosAttackableX = g.kratos.facing === "left" ? g.kratos.midX + (75 / 2) : g.kratos.midX - (75 / 2) - 10;
		const enemyAttackX = enemy.facing === "right" ? enemy.midX + enemy.oW / 2 : enemy.x;
		const attackDis = Math.abs(Math.round(enemyAttackX - kratosAttackableX)); 

		// Handle stun
		if (enemy.stunned) {
			// Apply knockback
			enemy.x += enemy.knockbackVel || 0;
			// Gradually slow knockback down
			enemy.knockbackVel *= 0.85;

			// End stun when time is up
			if (Date.now() > enemy.stunEnd) {
				enemy.stunned = false;
				enemy.knockbackVel = 0;
			}

			// While stunned, skip chasing, attacking, etc
			return;
		}

		/* --- Undead archer AI --- */
		if (enemy.name.includes("Archer") && attackDis <= enemy.lR && !enemy.dead && g.kratos.health > 0) {
			enemy.decision = "lAttack";
			enemy.facing = g.kratos.x >= enemy.x ? "right" : "left";
		}
		if (enemy.decision !== "lAttack" && enemy.sC && attackDis <= enemy.sR && !enemy.dead && g.kratos.health > 0) {
			enemy.descision = "shoot";
			if (!enemy.shooting && Date.now() - enemy.lastShot >= enemy.sC) {
				g.audio.bowCharge.play();
				enemyShoots(enemy);
			}
		}
		// ~ Undead archer shooting ~
        if (enemy.state === "shoot" && Date.now() - enemy.lastShot >= enemy.shootWindup) {
            spawnArrow(enemy);

			enemy.decision = null;
			enemy.state = "idle";
            enemy.shooting = false;
            enemy.lastShot = Date.now();

			return
        }

		/* --- Cursed/Fallen legionnaire leap ---*/
		if (enemy.leapState) {
			updateLeap(enemy);
			return;
		}

		// ----- Banshee scream -----
		if (enemy.screaming && g.kratos.health > 0) {

			// Damage over time (1 HP every 0.25s)
			if (Date.now() - enemy.lastScreamTick > 250) {
				damageKratos({damage: 1, tint: 44});

				if (g.kratos.health <= 0) endScream(enemy)

				enemy.lastScreamTick = Date.now();
			}

			if (Date.now() > enemy.stateEnd) endScream(enemy)

			return;
		}

		// ---- Gorgon / Medusa petrification ----
		if (enemy.state === "petrify") {
			enemy.midX < g.kratos.midX ? enemy.facing = "right" : enemy.facing = "left"
			if (Date.now() > enemy.stateEnd && !g.kratos.petrified) {
				if (attackDis <= enemy.petrifyRange) {
					g.kratos.petrified = true;
					g.kratos.petrifyBreak = 0;
					sButtonActivate();
					g.audio.stonify.play();
					enemy.name === "Gorgon" ? g.audio.snakesHiss.play() : g.audio.medusaLaugh.play()
					if (g.kratos.y <= config.groundLevel - 100) {
						g.kratos.petrifiedInAir = !g.kratos.onGround;
						g.kratos.velY = 0;
					} 
				}
				enemy.state = "idle";
				enemy.decision = null;
				enemy.petrifying = false;
			}

			return;
		}

		// ----- Hades soul take -----
		if (enemy.soulTaking && g.kratos.health > 0) {

			// Damage over time (3 HP every 0.4s)
			if (Date.now() - enemy.lastSoulTakeTick > 400) {
				damageKratos({damage: 3});

				if (g.kratos.health <= 0) endSoulTake(enemy);

				enemy.lastSoulTakeTick = Date.now();
			}

			if (Date.now() > enemy.stateEnd) endSoulTake(enemy)

			return;
		}

		// ----- Hades Grasp -----
		if (enemy.state === "grasp") {
			const now = Date.now();

			// Attempt grab after telegraph
			if (graspFX.active && !graspFX.grabbed && now - graspFX.start > 800) {
				const caught = g.kratos.onGround && !g.kratos.dodging && Math.abs(g.kratos.midX - graspFX.x) < 125;

				if (caught) {
					g.audio.held.play();
					g.kratos.held = true;
					graspFX.grabbed = true;
					g.kratos.graspBreak = 0;

					sButtonActivate();
					endGrasp(enemy);
					return;
				} else {
					graspFX.active = false;
				}
			}

			// Retry if dodged
			if (!graspFX.active && enemy.graspAttempts <= enemy.maxGrasps) {
				if (now > enemy.nextGraspTime) spawnGraspWarning(enemy)
			}

			// End grasp only if attempts are met
			if (enemy.graspAttempts >= enemy.maxGrasps) {
				endGrasp(enemy);
			}
			return;
		}

		// ----- Hermes Dodge -----
		if (enemy.dodging) {
			enemy.x += enemy.velX;

			// Slight slowdown
			enemy.velX *= 0.85;

			if (Date.now() > enemy.stateEnd) {
				enemy.state = "idle";
				enemy.decision = null;
				enemy.dodging = false;
				enemy.invulnerable = false;
				enemy.velX = 0;
			}

			return;
		}

		if (enemy.state === "speedStrike") {
			enemy.facing = enemy.velX > 0 ? "right" : "left";
			enemy.x += enemy.velX;

			// Check if Hermes crosses Kratos' position
			const crossedKratos = (enemy.speedStrikeDir === 1 && enemy.x >= g.kratos.x + g.kratos.w / 2) || (enemy.speedStrikeDir === -1 && enemy.x <= g.kratos.x + g.kratos.w / 2);

			if (crossedKratos && !enemy.hasHit) {
				enemy.speedStrikeHits++;

				if (!g.kratos.stunned) {
					enemy.hasHit = true;
					damageKratos({damage: 6, stun: 300})
					g.kratos.velX = enemy.speedStrikeDir * 2.5;
				}
			}

			if (enemy.speedStrikePhase === "forward") {
				const reachedTarget = (enemy.speedStrikeDir === 1 && enemy.x >= enemy.speedStrikeTargetX) || (enemy.speedStrikeDir === -1 && enemy.x <= enemy.speedStrikeTargetX);

				if (reachedTarget) {
					// Turn around
					enemy.speedStrikePhase = "return";
					enemy.speedStrikeDir *= -1;
					enemy.velX = enemy.speedStrikeSpeed * enemy.speedStrikeDir;
					enemy.hasHit = false;
				}
			} else if (enemy.speedStrikePhase === "return") {
				const returned = (enemy.speedStrikeDir === 1 && enemy.x >= enemy.speedStrikeStartX) || (enemy.speedStrikeDir === -1 && enemy.x <= enemy.speedStrikeStartX);
				if (returned) endSpeedStrike(enemy)
			}
			return;
		}

		// ----- Hercules Ground Smash -----
		if (enemy.state === "smash") {
			const now = Date.now();

			if (now >= enemy.nextSmashTime && enemy.smashCount < enemy.maxSmashes) {
				g.audio.smash.cloneNode().play();

				document.getElementById("Battle").style.animation = "none";
				document.getElementById("Battle").offsetHeight;
				enemy.smashCount++;
				// Do damage if Kratos is on ground
				if (g.kratos.onGround && !enemy.smashHasHit) {
					enemy.smashHasHit = true;
					damageKratos({damage: 8, stun: 350})
				}

				enemy.smashHasHit = false;
				enemy.nextSmashTime = now + 1200;

				// Screen shake
				document.getElementById("Battle").style.animation = "tilt-shaking 0.5s linear";
			}

			// End smash after all hits
			if (enemy.smashCount >= enemy.maxSmashes && now > enemy.nextSmashTime) {
				enemy.state = "idle";
				enemy.decision = null;
				enemy.smashing = false;
			}

			return;
		}

		// ---- Zeus teleportation ----

		if (enemy.state === "teleport") {
			if (Date.now() > enemy.stateEnd) {
				enemy.state = !enemy.flying ? "idle" : "fly";
				enemy.decision = null;
				enemy.teleporting = false;
			}
			return
		}

		// ----- Zeus flight -----
		const cooledDown = Date.now() - enemy.lastFlightAction > enemy.flyCooldown;
		if (enemy.name === "Zeus" && enemy.onGround && enemy.state === "idle" && enemy.halved && cooledDown) {
			zeusFlies(enemy);
			return;
		}

		if (enemy.flying) {
			flightUpdate(enemy);
			return;
		}

		// Enemy decision handling

		if (!enemy.name.includes("Archer") && !enemy.dead && enemy.dCooldown && !enemy.decision && Date.now() - enemy.lastAttack > enemy.dCooldown) enemy.decision = enemyDecides(enemy);
		
		const inChaseRange = distance <= enemy.chaseRange;
		if (enemy.chaseRange && g.kratos.health > 0 && !enemy.stunned && !enemy.dodging) {
			if (inChaseRange && enemy.state === "idle") {
				if (enemy.god && !enemy.defeated && !lineComplete) {
					if (enemy.state !== "dodge") enemy.state = "chase"
				} else { enemy.state = "chase" }
			}
		}

		if (enemy.state === "chase" || enemy.state === "idle" && g.kratos.health > 0) {
			if (!g.freePlay && enemy.god && !enemy.defeated && !lineComplete) return
			if (enemy.decision === "leap" && attackDis <= enemy.leapRange) {
				enemyLeaps(enemy);
			} else if (enemy.decision === "block") {
				enemyBlocks(enemy);
			} else if (enemy.decision === "lAttack" && attackDis <= enemy.lR) {
				enemyLightAttacks(enemy);
			} else if (enemy.decision === "hAttack" && attackDis <= enemy.hR) {
				enemyHeavyAttacks(enemy);
			} else if (enemy.decision === "scream" && attackDis <= enemy.screamRange) {
				bansheeScreams(enemy);
			} else if (enemy.decision === "petrify" && attackDis <= enemy.petrifyRange) {
				enemyPetrifies(enemy);
			} else if (enemy.decision === "grasp") {
				hadesGrasp(enemy);
			} else if (enemy.decision === "soulTake") {
				hadesTakesSoul(enemy);
			} else if (enemy.decision === "speedStrike") {
				hermesSpeedStrike(enemy);
			} else if (enemy.decision === "smash") {
				herculesSmash(enemy);
			} else {
				if (enemy.name.includes("Archer") || !inChaseRange || enemy.dead) return
				enemy.state = "chase";
				enemy.velX = g.kratos.midX > enemy.midX ? enemy.speed : -enemy.speed;
				enemy.facing = enemy.velX > 0 ? "right" : "left";
			}
		}

		// Enemy state end handling

		if (Date.now() > enemy.stateEnd) {
			if (enemy.state === "lAttack" || enemy.state === "hAttack") {
				const inRange = enemy.state === "lAttack" ? attackDis <= enemy.lR : attackDis <= enemy.hR;
				enemy.state = inRange || enemy.sC ? "idle" : "chase";
				enemy.hasHit = false;
				enemy.lAttacking = false;
				enemy.hAttacking = false;
				enemy.lastAttack = 0;
				enemy.decision = null;
				return
			} else if (enemy.state === "block") {
				enemy.state = "idle";
				enemy.blocking = false;
				enemy.decision = null;
			}
		}

		// Enemy attacks handling

		if (enemy.state === "lAttack" && !enemy.hasHit) {
			g.playCaudio(enemy.attackSound[0], g.sfxVolume);
			enemy.hasHit = true;
			const inRange = attackDis <= enemy.lR;
			const inFront = enemy.facing === "left" ? g.kratos.midX < enemy.midX : g.kratos.midX > enemy.midX

			let damage = enemy.lD;
			let knockback = enemy.lK;

			if (g.kratos.dodging || !inRange || !inFront) {
				return
			} else if (g.kratos.blocking) {
				g.playCaudio(g.audio.blockSound, g.sfxVolume);
				
				if (enemy.name === "Minotaur" && !weapon.name.includes("Gauntlet") && !weapon.name.includes("cestus") && !weapon.name.includes("Blade ")) {
					damage = Math.round(enemy.lD * 0.9) // reduce damage by 10% for the Minotaur
				} else if (enemy.name === "Cyclops" && !weapon.name.includes("Arms") && !weapon.name.includes("Gauntlet") && !weapon.name.includes("cestus") && !weapon.name.includes("Blade ")) { 
					breakBlock();
					damage = Math.round(enemy.lD * 0.85); // reduce damage by 15% for the Cyclops & break block
				} else if (enemy.name === "Hercules" && !weapon.name.includes("Arms") && !weapon.name.includes("cestus") && !weapon.name.includes("Blade ")) { 
					damage = Math.round(enemy.lD * 0.8) // reduce damage by 20% for Hercules
				} else { 
					return
				}
				knockback = Math.max(0, knockback - 2);
				damageKratos({damage, tint: 120, knockback, dir: enemy.facing})
			} else {
				if (enemy.god) {
					g.playCaudio(g.audio.hurt[2], g.sfxVolume);
				} else if (enemy.name.includes("Fallen") || enemy.name === "Satyr" || enemy.name === "Minotaur" || enemy.name === "Cyclops") {
					g.playCaudio(g.audio.hurt[1], g.sfxVolume);
				} else g.playCaudio(!g.kratos.petrified ? g.audio.hurt[0] : g.audio.stoneBreak, g.sfxVolume)
				
				damageKratos({damage, stun: enemy.lS, knockback, dir: enemy.facing})
			}
		} else if (enemy.state === "hAttack" && !enemy.hasHit) {
			g.playCaudio(enemy.attackSound[1], g.sfxVolume);
			enemy.hasHit = true;
			const inRange = attackDis <= enemy.hR;
			const inFront = enemy.facing === "left" ? g.kratos.midX < enemy.midX : g.kratos.midX > enemy.midX

			if (g.kratos.dodging || !inRange || !inFront) return
			let damage = enemy.hD;
			let knockback = enemy.hK;

			const heavyBlockRules = {
				"Fallen Legionnaire": {
					blockedBy: ["whip", "Arms", "Gauntlet", "Claws", "cestus", "Blade "],
					damageReduce: 0.85
				},

				"Satyr": {
					blockedBy: ["Arms", "Gauntlet", "Claws", "cestus", "Blade "],
					damageReduce: 0.85
				},

				"Minotaur": {
					blockedBy: ["Gauntlet", "Claws", "cestus", "Blade "],
					damageReduce: 0.75
				},

				"Hades": {
					blockedBy: ["Gauntlet", "cestus", "Blade "],
					damageReduce: 0.50
				},

				"Hercules": {
					blockedBy: ["cestus", "Blade "],
					damageReduce: 0.50
				},

				"Zeus": {
					blockedBy: ["Blade "],
					damageReduce: 0.40
				}
			};

			const rule = heavyBlockRules[enemy.name];

			if (g.kratos.blocking) {
				g.playCaudio(g.audio.blockSound, g.sfxVolume);
				if (enemy.name === "Banshee" || enemy.name === "Gorgon" || enemy.name === "Medusa" || enemy.name === "Hermes") return
				breakBlock();

				if (rule) {
					const canBreakBlock = rule.blockedBy.some(weaponType => weapon.name.includes(weaponType));

					if (canBreakBlock) {
						damage = Math.round(damage * rule.damageReduce);
						console.log(`Block broke with ${damage} damage`);
						knockback = Math.max(0, knockback - 2);
						damageKratos({damage, knockback, tint: 80, dir: enemy.facing});
						return;
					}
				} 
				if (enemy.name.includes("Undead") || enemy.name.includes("Cursed") || enemy.name === "Hoplite") damage = Math.round(damage * 0.9) // 90% damage reduction for weaker enemies
				if (enemy.name === "Satyr" || enemy.name.includes("Fallen")) damage = Math.round(damage * 0.75) // reduce damage by 25% for the Satyr & Fallen legionnaire
				if (enemy.name === "Minotaur") damage = Math.round(damage * 0.65) // reduce damage by 35% for the Minotaur
				if (enemy.name === "Cyclops") damage = Math.round(damage * 0.5) // reduce damage by 50% for the Cyclops
				if (enemy.name === "Hercules" || enemy.name === "Hades") damage = Math.round(damage * 0.4) // reduce damage by 60% for Hercules & Hades
				if (enemy.name === "Zeus") damage = Math.round(damage * 0.3) // reduce damage by 70% for Zeus
				console.log(`Block broke with ${damage} damage`);
				knockback = Math.max(0, knockback - 3);
				damageKratos({damage, knockback, tint: 120, dir: enemy.facing});
				return
			}
			
			if (enemy.god) {
				g.playCaudio(g.audio.hurt[4], g.sfxVolume)
			} else if (enemy.name.includes("Fallen") || enemy.name === "Satyr" || enemy.name === "Minotaur" || enemy.name === "Cyclops") {
				g.playCaudio(g.audio.hurt[3], g.sfxVolume)
			} else g.playCaudio(!g.kratos.petrified ? g.audio.hurt[2] : g.audio.stoneBreak, g.sfxVolume)
			if (g.kratos.held) knockback = 0;
			damageKratos({damage, stun: enemy.hS, knockback, dir: enemy.facing})
		}

		// Keep inside canvas
		if (enemy.x < 0) enemy.x = 0;
		if (enemy.x + enemy.w > battleArea.width) enemy.x = battleArea.width - enemy.w;
	}

	function drawEnemy(enemy) {
		let img;
		if (enemy.dead) {
			img = enemy.facing === "right" ? enemy.deadR : enemy.deadL
			enemy.w = enemy.oH;
			enemy.h = enemy.oW - 30;
			if (enemy.name.includes("Cursed")) enemy.h += 30
			if (enemy.name === "Satyr") enemy.h = enemy.oW - 50
			if (enemy.name === "Minotaur") enemy.w = enemy.oH + 30
			if (enemy.name === "Medusa") enemy.w = enemy.oH + 20
			if (enemy.name === "Cyclops") enemy.h = enemy.oW - 85
			if (enemy.name === "Hades") { enemy.w = enemy.oH + 75; enemy.h = enemy.oW - 100 }
			if (enemy.name === "Hermes") enemy.h = enemy.oW - 25
			if (enemy.name === "Hercules") enemy.h = enemy.oW - 53
		} else if (enemy.name === "Zeus" && enemy.flying && g.kratos.health <= 0) {
			img = enemy.facing === "right" ? enemy.victoryR : enemy.victoryL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH - 5;
		} else if (enemy.shooting) {
			img = enemy.facing === "right" ? enemy.shootsR : enemy.shootsL;
			enemy.w = enemy.oW + 20;
		} else if (enemy.leapState === "land") { 
			img = enemy.facing === "right" ? enemy.landR : enemy.landL;
			enemy.h = enemy.oH - 22;
			enemy.w = enemy.oW + 117;
		} else if (enemy.leaping && !enemy.airAttacking) {
			img = enemy.facing === "right" ? enemy.leapR : enemy.leapL;
			enemy.h = enemy.oH - 20;
			enemy.w = enemy.oW + 60;
			if (enemy.name === "Fallen Legionnaire") { enemy.h = enemy.oH + 15; enemy.w = enemy.oW + 20 }
		} else if (enemy.leaping && enemy.airAttacking) {
			img = enemy.facing === "right" ? enemy.airAttackR : enemy.airAttackL
			enemy.w = enemy.oW + 85;
			enemy.h = enemy.oH - 18;
		} else if (enemy.lAttacking && enemy.onGround && !enemy.dodging) {
			img = enemy.facing === "right" ? enemy.lAttackR : enemy.lAttackL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
			if (enemy.name === "Undead Archer") { enemy.h = enemy.oH - 12; enemy.w = enemy.oW + 65 }
			if (enemy.name === "Undead Legionnaire") { enemy.h = enemy.oH - 14; enemy.w = enemy.oW + 65 }
			if (enemy.name.includes("Cursed")) { enemy.h = enemy.oH - 10; enemy.w = enemy.oW + 65 }
			if (enemy.name.includes("Fallen")) { enemy.h = enemy.oH - 35; enemy.w = enemy.oW + 85 }
			if (enemy.name === "Satyr") { enemy.h = enemy.oH - 28; enemy.w = enemy.oW + 62 }
			if (enemy.name === "Gorgon") { enemy.h = enemy.oH - 8; enemy.w = enemy.oW }
			if (enemy.name === "Medusa") { enemy.h = enemy.oH; enemy.w = enemy.oW }
			if (enemy.name === "Cyclops") { enemy.h = enemy.oH - 47; enemy.w = enemy.oW + 37 }
			if (enemy.name === "Hermes") enemy.w = enemy.oW + 30
			if (enemy.name === "Hercules") { enemy.h = enemy.oH - 10; enemy.w = enemy.oW + 27 }
			if (enemy.name === "Zeus") { enemy.h = enemy.oH - 8; enemy.w = enemy.oW + 25 }
		} else if (enemy.hAttacking && enemy.onGround && !enemy.dodging) {
			img = enemy.facing === "right" ? enemy.hAttackR : enemy.hAttackL;
			enemy.h = 150;
			enemy.w = 175;
			if (enemy.name === "Undead Legionnaire") { enemy.h = enemy.oH - 14; enemy.w = enemy.oW + 55 }
			if (enemy.name.includes("Cursed") || enemy.name.includes("Fallen")) { enemy.h = enemy.oH - 22; enemy.w = enemy.oW + 123 }
			if (enemy.name === "Banshee") enemy.w = enemy.oW + 25
			if (enemy.name === "Satyr") { enemy.h = enemy.oH - 17; enemy.w = enemy.oW + 35 }
			if (enemy.name === "Gorgon") { enemy.h = enemy.oH + 15; enemy.w = enemy.oW + 59 }
			if (enemy.name === "Minotaur") { enemy.h = enemy.oH; enemy.w = enemy.oW + 110 }
			if (enemy.name === "Medusa") { enemy.h = enemy.oH; enemy.w = enemy.oW }
			if (enemy.name === "Cyclops") { enemy.h = enemy.oH; enemy.w = enemy.oW + 135 }
			if (enemy.name === "Hades") { enemy.h = enemy.oH - 15; enemy.w = enemy.oW + 66 }
			if (enemy.name === "Hermes") enemy.w = enemy.oW + 39
			if (enemy.name === "Hercules") { enemy.h = enemy.oH - 7; enemy.w = enemy.oW + 85 }
			if (enemy.name === "Zeus") { enemy.h = enemy.oH - 8; enemy.w = enemy.oW + 25 }
		} else if (enemy.blocking) {
			img = enemy.facing === "right" ? enemy.blockR : enemy.blockL;
			enemy.h = enemy.oH;
			enemy.w = 110;
			if (enemy.name.includes("Fallen")) { enemy.w = enemy.oW - 10; enemy.h = enemy.oH + 20 }
			if (enemy.name === "Satyr") enemy.w = enemy.oW + 12
			if (enemy.name === "Minotaur") enemy.w = enemy.oW - 10
			if (enemy.name === "Hercules") { enemy.h = enemy.oH - 13; enemy.w = enemy.oW + 22 }
			if (enemy.name === "Zeus") { enemy.h = enemy.oH - 8; enemy.w = enemy.oW + 76 }
		} else if (enemy.screaming) {
			img = enemy.facing === "right" ? enemy.screamR : enemy.screamL;
			enemy.w = enemy.oW - 10;
			enemy.h = enemy.oH;
		} else if (enemy.petrifying) {
			img = enemy.facing === "right" ? enemy.petrifyR : enemy.petrifyL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
			if (enemy.name === "Medusa") enemy.w = enemy.oW + 20
		} else if (enemy.soulTaking) {
			img = enemy.facing === "right" ? enemy.takeSoulR : enemy.takeSoulL;
			enemy.w = enemy.oW - 20;
			enemy.h = enemy.oH;
		} else if (enemy.grasping) {
			img = enemy.facing === "right" ? enemy.summonR : enemy.summonL;
			enemy.w = enemy.oW - 100;
			enemy.h = enemy.oH - 75;
		} else if (enemy.dodging) {
			img = enemy.facing === "right" ? enemy.dodgeR : enemy.dodgeL;
			enemy.w = enemy.oW + 15;
			enemy.h = enemy.oH - 8;
		} else if (enemy.speedStriking) {
			img = enemy.facing === "right" ? enemy.sprintR : enemy.sprintL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
		} else if (enemy.smashing) {
			if (!enemy.smashCount) {
				img = enemy.facing === "right" ? enemy.right : enemy.left;
				enemy.h = enemy.oH;
			} else {
				if (enemy.smashCount === 1) img = enemy.smashR
				if (enemy.smashCount === 2) img = enemy.smashL
				enemy.h = enemy.oH - 50;
			}
			enemy.w = enemy.oW;
		} else if (enemy.teleporting) {
			img = enemy.facing === "right" ? enemy.teleportR : enemy.teleportL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
		} else if (enemy.state === "chase" || (enemy.state === "leap" && enemy.onGround)) {
			img = enemy.facing === "right" ? enemy.chaseR : enemy.chaseL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
			if (enemy.name === "Undead Legionnaire") enemy.w = enemy.oW - 20
			if (enemy.name === "Cursed Legionnaire") { enemy.h = enemy.oH - 14; enemy.w = enemy.oW + 33 }
			if (enemy.name === "Fallen Legionnaire") { enemy.h = enemy.oH - 7; enemy.w = enemy.oW - 12 }
			if (enemy.name === "Banshee" || enemy.name === "Medusa") enemy.w = enemy.oW + 27
			if (enemy.name === "Medusa") enemy.h = enemy.oH - 10
			if (enemy.name === "Cyclops") { enemy.h = enemy.oH - 70; enemy.w = enemy.oW - 30 }
			if (enemy.name === "Hades") enemy.w = enemy.oW + 40
			if (enemy.name === "Hermes") enemy.w = enemy.oW + 10
			if (enemy.name === "Zeus") enemy.w = enemy.oW - 15
		} else if (enemy.flightState === "chase") {
			img = enemy.facing === "right" ? enemy.flyR : enemy.flyL;
			enemy.w = enemy.oW + 54;
			enemy.h = enemy.oH - 44;
		} else if (enemy.state === "idle") {
			img = enemy.facing === "right" ? enemy.right : enemy.left;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
		} else if (enemy.state === "fly") {
			img = enemy.facing === "right" ? enemy.levitateR : enemy.levitateL;
			enemy.w = enemy.oW;
			enemy.h = enemy.oH;
		} else if (enemy.state === "fall") {
			img = enemy.facing === "right" ? enemy.fallR : enemy.fallL;
			enemy.w = enemy.oH - 16;
			enemy.h = enemy.oW + 33;
		}
		let drawX = enemy.x;
		if ((enemy.name === "Satyr" || enemy.name === "Hermes" || enemy.name === "Hercules" || enemy.name === "Zeus") && enemy.facing === "left") drawX -= enemy.w - enemy.oW
		if ((enemy.name.includes("Legionnaire") || enemy.name === "Hoplite" || enemy.name === "Banshee" || enemy.name === "Gorgon" || enemy.name === "Minotaur" || enemy.name === "Cyclops" || enemy.name === "Hades")
		&& (enemy.hAttacking || enemy.leapState === "land" || enemy.airAttacking) && enemy.facing === "left") drawX -= enemy.w - enemy.oW
		if (enemy.name === "Cursed Legionnaire" && enemy.hAttacking && enemy.facing === "left") drawX += 40;
		if ((enemy.name.includes("Archer") || enemy.name.includes("Legionnaire"))  && enemy.lAttacking && enemy.facing === "left") drawX -= enemy.w - enemy.oW
		if (enemy.name === "Medusa" && enemy.hAttacking || enemy.petrifying && enemy.facing === "left") drawX -= enemy.oW / 4
		if ((enemy.name.includes("Archer") || enemy.name.includes("Undead") || enemy.name.includes("Fallen")) && enemy.facing === "left" && enemy.state === "idle") drawX -= enemy.oW / 4
		if (enemy.name === "Hades" && (enemy.state === "idle" || enemy.state === "chase") && enemy.facing === "left") { drawX -= 60 }
		if (enemy.name === "Hades" && enemy.grasping && enemy.facing === "left") drawX += enemy.oW / 4
		if ((enemy.name === "Minotaur" || enemy.name === "Hades") && enemy.lAttacking && enemy.facing === "left") drawX -= enemy.oW / 4
		drawCharacter(img, drawX, enemy.y, enemy.w, enemy.h, Date.now() < enemy.hitUntil);
	}

	// ===== Character drawing =====

	function drawCharacter(img, x, y, w, h, isHit) {
		ctx.save();
		ctx.globalAlpha = 1;
		ctx.drawImage(img, x, y - h, w, h);
		if (isHit) {
			ctx.fillStyle = "rgba(255, 0, 0, 0.4)";
			ctx.globalCompositeOperation = "source-atop";
			ctx.fillRect(x, y - h, w, h);
			ctx.globalCompositeOperation = "source-over";
		}
		ctx.restore();
	}

	// ==== Physics ====

	function physics(entities) {
		for (const entity of entities) {
			entity.velY += config.gravity;
			entity.y += entity.velY;
			if (entity.dead) entity.velX = 0;
			entity.x += entity.velX;

			if (entity.y > config.groundLevel) {
				entity.y = config.groundLevel;
				entity.velY = 0;
				entity.onGround = true;
				if (entity.state === "fall") {
					entity.state = "idle"
					entity.decision = null
				} else if (entity.petrified && entity.petrifiedInAir) {
					if (g.kratos.health > 0) damageKratos({damage: g.kratos.health});
					sButtonPrompt.active = false;
				}
			}
		}
	}

	// === Dialogue subtitles ===
	
	let firstLineC = false;
	let secondLineC = false;
	let thirdLineC = false;
	let fourthLineC = false;
	let fifthLineC = false;
	let sixthLineC = false;
	
	function drawText() {
		ctx.font = "17px GodOfWar";
		ctx.fillStyle = "#ddd";
		switch (currentBattle.name) {
			case "Hades": 
				if (!firstLineC) ctx.fillText("I sense some bad blood between us, Kratos..", 400, 225);
				if (firstLineC && !secondLineC) ctx.fillText("How many sins have you commited against me?!", 400, 225);
				if (secondLineC && !thirdLineC) ctx.fillText("Oh, that's right you murdered my niece, Athena!", 400, 225);
				if (thirdLineC && !fourthLineC) ctx.fillText("And, you killed my brother... Poseidon", 400, 225);
				if (fourthLineC && !fifthLineC) ctx.fillText("And, I have not forgotted that it was YOU who butchered my beautiful queen!", 350, 190);
				if (fifthLineC && !sixthLineC) ctx.fillText("I will see you suffer as I have suffered!", 400, 225);
				if (fifthLineC && sixthLineC) ctx.fillText("Your soul is mine!!", 500, 225);
			break;
			case "Hermes":
				ctx.fillText("You may have brute force... but you lack speed!", 420, 300);
			break;
			case "Hercules":
				ctx.fillText("Hello... brother.", 450, 300)
			break;
			case "Zeus":
				if (!firstLineC && !secondLineC) ctx.fillText("Such chaos... I will have much to do after I kill you.", 420, 285);
				if (firstLineC && !secondLineC) ctx.fillText("Face me father... it is time to end this!", 35, 295);
				if (firstLineC && secondLineC) ctx.fillText("Yes my son! It is time!", 670, 285);
			break;
		}
	}


	let lineComplete = false;
	
	if (currentBattle.name === "Hermes" || currentBattle.name === "Hercules") {
		setTimeout(() => {
			lineComplete = true;
		}, currentBattle.name === "Hermes" ? 5200 : 4000);
	}

	if (currentBattle.name === "Hades" && !currentBattle.defeated) {
		setTimeout(() => { 
			firstLineC = true;
			g.audio.hadesLines[1].play();
		}, 4200);
		setTimeout(() => { 
			secondLineC = true;
			g.audio.hadesLines[2].play();
		}, 8000);
		setTimeout(() => { 
			thirdLineC = true;
			g.audio.hadesLines[3].play();
		}, 12000);
		setTimeout(() => { fourthLineC = true }, 14700);
		setTimeout(() => { fifthLineC = true }, 19700);
		setTimeout(() => { sixthLineC = true }, 25400);
		setTimeout(() => { lineComplete = true }, 27000);
	}
	
	if (currentBattle.name === "Zeus") {
		setTimeout(() => { firstLineC = true }, 6270);
		setTimeout(() => { secondLineC = true }, 11000);
		setTimeout(() => { lineComplete = true }, 14200);
	}
	
	// ==== Canvas UI ====

	let focus = 0;

	function changeFocusedEnemy() {
		if (currentBattle.complete) return
		if (focus >= enemies.length - 1 && !enemies[focus].dead) { 
			focus = 0 
		} else {
			focus++
			if (focus > enemies.length - 1) focus = 0
		} 
		console.log("Focused on enemy", focus + 1);
	}
		

	function drawFocus(enemy) {
		if (!enemy) return
		if (currentBattle.complete) return
		ctx.font = "15px GodOfWar";
		ctx.fillStyle = "#9f6c08";
		ctx.fillText("∨", enemy.midX - 3, enemy.y - enemy.h - 12);
	}

	const sButtonPrompt = {
		active: false,
		x: 0,
		y: 0,
		size: 44,

		pressTimer: 0,
		pressInterval: 120,

		visualPress: false,
		visualPressEnd: 0,

		alpha: 1
	}

	sButtonPrompt.x = battleArea.width / 2 - sButtonPrompt.size / 2;
	sButtonPrompt.y = battleArea.height - 80;

	function sButtonActivate() {
		sButtonPrompt.active = true;
		sButtonPrompt.pressTimer = Date.now();
		sButtonPrompt.alpha = 1;
	}

	function updateSbuttonPrompt() {
		if (!sButtonPrompt.active) return

		const now = Date.now();

		if (now - sButtonPrompt.pressTimer > sButtonPrompt.pressInterval) {
			sButtonPrompt.pressTimer = now;
			sButtonPrompt.visualPress = true;
			sButtonPrompt.visualPressEnd = now + 60;
		}

		if (now > sButtonPrompt.visualPressEnd) sButtonPrompt.visualPress = false
	}

	function drawSbuttonPrompt() {
		if (!sButtonPrompt.active) return;

		const p = sButtonPrompt;
		const pressOffset = p.visualPress ? 3 : 0;

		ctx.save();
		ctx.globalAlpha = p.alpha;

		// Base
		ctx.fillStyle = "#2b2b2b";
		ctx.fillRect(p.x, p.y + pressOffset, p.size, p.size);

		// Shadow
		ctx.fillStyle = "#111";
		ctx.fillRect(p.x, p.y + p.size + 4, p.size, 6);

		// Letter
		ctx.fillStyle = p.visualPress ? "#ff3b3b" : "#aaa";
		ctx.font = "24px GodOfWar";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(
			"S",
			p.x + p.size / 2,
			p.y + p.size / 2 + pressOffset
		);

		// Flash overlay
		if (p.visualPress) {
			ctx.fillStyle = "rgba(255,80,80,0.25)";
			ctx.fillRect(p.x, p.y, p.size, p.size);
		}

		ctx.restore();
	}

	// ====== Orbs ======

	const orbs = [];

	function spawnOrbs(x, y, type, count) {
		for (let i = 0; i < count; i++) {
			orbs.push({
				x,
				y,
				startX: x,
				startY: y,
				type,
				// random offsets so they spread nicely
				offsetX: (Math.random() - 0.5) * 88,
				offsetY: (Math.random() - 0.5) * 120,

				speed: 0.007 + Math.random() * 0.01,
				progress: 0, // 0 → 1

				size: 4,
				alpha: 1
			});
		}
	}

	function lerp(a, b, t) {
		return a + (b - a) * t;
	}

	function easeOutQuad(t) {
		return t * (2 - t);
	}

	function updateOrbs() {
		for (let i = orbs.length - 1; i >= 0; i--) {
			const orb = orbs[i];

			orb.progress += orb.speed;
			const t = easeOutQuad(Math.min(orb.progress, 1));

			// Target: Kratos center
			const targetX = g.kratos.x + g.kratos.w / 2;
			const targetY = g.kratos.y - g.kratos.h / 2;

			// Curved path
			orb.x = lerp(orb.startX + orb.offsetX, targetX, t);

			orb.y = lerp(orb.startY + orb.offsetY, targetY, t);

			// Fade out near the end
			if (orb.progress > 0.85) {
				orb.alpha = 1 - (orb.progress - 0.85) / 0.15;
			}

			// Reached Kratos
			if (orb.progress >= 1) {
				if (orb.type === "red") {
					g.kratos.orbs += orb.size - 2;
					document.getElementById("Orbs").innerText = g.kratos.orbs;
					g.playCaudio(g.audio.redOrbSound, g.sfxVolume);
					localStorage.setItem('orbs', g.kratos.orbs);
				} 
				if (orb.type === "green") {
					if (g.kratos.health >= g.kratos.maxHealth) {
						orbs.splice(i, 1);
						return
					} 
					g.kratos.health += orb.size;
					if (g.kratos.health > g.kratos.maxHealth) g.kratos.health = g.kratos.maxHealth
					document.getElementById('Health').innerText = g.kratos.health;
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
					if (g.kratos.health > 25) document.getElementById("Battle").style.boxShadow = 'none';
					if (g.kratos.health <= g.kratos.maxHealth) g.playCaudio(g.audio.greenOrbSound, g.sfxVolume);
					localStorage.setItem('health', g.kratos.health);
				} 
				if (orb.type === "gold") {
					if (g.kratos.maxHealth >= 200) {
						orbs.splice(i, 1);
						return
					} 
					g.kratos.maxHealth += orb.size - 1;
					if (g.kratos.maxHealth > 200) g.kratos.maxHealth === 200
					if (g.kratos.maxHealth < 200) g.playCaudio(g.audio.goldOrbSound, g.sfxVolume);
					localStorage.setItem('maxHealth', g.kratos.maxHealth);
				} 
				orbs.splice(i, 1);
			}
		}
	}

	function drawOrbs() {
		for (const orb of orbs) {
			ctx.save();
			ctx.globalAlpha = orb.alpha;
			ctx.beginPath();
			ctx.fillStyle = orb.type === "red" ? "rgba(180, 0, 11, 0.7)" : orb.type === "gold" ? "rgba(255, 229, 180, 0.7)" : "rgba(79, 204, 2, 0.7)";
			ctx.shadowBlur = 20 + Math.sin(performance.now() * 0.01) * 5;
			ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}

	// ==== Battle completion check ====

	function battleCompletion() {
		if (!g.freePlay && !g.currentBattle.complete && currentBattle === g.currentBattle) {
			const deadEnemies = enemies.filter(enemy => enemy.dead === true);
			if (deadEnemies.length === enemies.length) { 
				console.log("Battle complete!");
				currentBattle.complete = true; g.currentBattle.complete = true;
				victory(g);
			}
		}
	}

	// ===== FPS count =====

	let frames = 0;

	g.frameCount = setInterval(() => { 
		if (!document.getElementById("FPS")) return
		document.getElementById("FPS").innerText = frames;
		frames = 0;
	}, 1000);

	// ===== Engine loop ====

	function engineLoop() {
		ctx.clearRect(0, 0, battleArea.width, battleArea.height);

		if (!g.paused) {
			if (!g.freePlay && enemies.length > 1 && enemies[focus].dead) changeFocusedEnemy()
			if (!g.freePlay && enemies.length > 1) drawFocus(enemies[focus])
			updateKratos(enemies[focus]);
			enemies.forEach(enemy => { if (!enemy.dead) updateEnemy(enemy) });
			physics([g.kratos, ...enemies]);
			updateArrows();
			if (sButtonPrompt.active) updateSbuttonPrompt();
			updateLightnings();
			if (orbs.length && g.kratos.health > 0) updateOrbs();
			battleCompletion();
		}

		enemies.forEach(enemy => {
			if (enemy.health <= 0) {
				drawEnemy(enemy);
				if (enemy === enemies[focus]) drawKratos(enemy);
			} else {
				if (enemy === enemies[focus]) drawKratos(enemy);
				drawEnemy(enemy);
			}
		})

		if (enemies[focus].name.includes("Archer")) drawArrows();
		if (enemies[focus].name === "Zeus") drawLightnings();
		if (enemies[focus].name === "Hades") {
			drawGraspWarning();
			drawHandGrasp();
		}
		if (sButtonPrompt.active) drawSbuttonPrompt();
		if (orbs.length && g.kratos.health > 0) drawOrbs();

		if (!g.freePlay && !lineComplete && enemies[focus].god && !enemies[focus].defeated) drawText();

		frames++;
		if (g.inBattle && currentBattle === g.currentBattle) requestAnimationFrame(engineLoop);
	}
	engineLoop();
}

export function lowHealth(g) {
	g.audio.heartbeat.play();
	document.getElementById("Battle").style.boxShadow = '#880808 0px 20px 30px -10px';
}

function victory(g) {
	g.stopMusic();
	if (g.freePlay) {
		const enemyI = g.enemies.indexOf(g.currentEnemy);
		if (enemyI > 9) {
			g.audio.olympus.play()
		} else if (enemyI > 6) {
			g.audio.underworld.play()
		} else g.audio.athens.play()
	} else g.audio[g.battlePlace.toLowerCase()].play()
	const battleI = g.placeBattles?.indexOf(g.currentBattle);
	if (!g.freePlay) localStorage.setItem("currentBattle", JSON.stringify(g.currentBattle));

	if (g.currentBattle?.name !== "Zeus" || g.freePlay) { 
		g.audio.defeatSound.play();
		if (g.freePlay) document.getElementById('Text').innerText = "You have finished the battle. You can return to the enemies selection.";
		if (!g.freePlay) document.getElementById('Text').innerText = "You have finished the battle. You can move to the next battle or return to Sparta for maybe a new weapon at the smithy.";
	} else { 
		g.audio.wonned.play();
		document.getElementById('Text').innerText = "You defeated Zeus! You have finally completed this absolute SHIT game! 🤩";
	}
	if (battleI === g.placeBattles?.length - 1) g.notify();
	document.getElementById("Return").style.display = 'inline';
	if (!g.freePlay && battleI !== g.placeBattles?.length - 1) document.getElementById("Next").style.display = 'inline';
	document.querySelector('.Hotbar').style.display = 'none';
}

export function death(g) {
	g.stopMusic();
	g.audio.heartbeat.pause();
	g.audio.heartbeat.currentTime = 0;
	if (g.kratos.petrified) g.audio.stoneBroke.play()
	setTimeout(() => { g.audio.deathScream.play() }, 1100 );
	g.kratos.health = 0;
	document.getElementById('Health').innerText = g.kratos.health;
	const enemyStat =  document.querySelector('.Enemy-stats');
	if (enemyStat) enemyStat.style.display = 'none';
	document.querySelector('.Hotbar').style.display = 'none';
	document.getElementById('Text').innerText = "You're dead 🫥. Guess now you really are the \"Ghost\" of sparta";
	setTimeout(() => {
		document.getElementById('You-dead').style.display = 'block';
		document.getElementById('Restart').style.display = 'block';
	}, 2700 );
	document.getElementById("Battle").style.background = 'black';
	if (g.hardcore) [ 'health', 'maxHealth', 'orbs', 'inventory', 'currentWeapon', 'currentBattle', 'undeadarcherDefeated', 'undeadlegionnaireDefeated', 'cursedlegionnaireDefeated', 'fallenlegionnaireDefeated', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated' ].forEach(save => localStorage.removeItem(save));
}