import { sparta } from '../scenes/sparta.js';

export function battle(g) {
	g.inBattle = true;
	
	const battleArea = document.querySelector('.Battle-area');
	const ctx = battleArea.getContext('2d');
	
	const ratio = window.devicePixelRatio || 1;

    // Set canvas bitmap size based on DPR
    battleArea.width = battleArea.offsetWidth * ratio;
    battleArea.height = battleArea.offsetHeight * ratio;

    // Scale the drawing context
    ctx.scale(ratio, ratio);

	// ===== Battle constants =====

	const gravity = 0.5;
	const groundLevel = g.currentEnemy < 8 ? 470 : 480; 
	const jumpPower = -13;
	const hitFlashTime = 200; // ms to stay tinted red
	const enemy = g.enemies[g.currentEnemy];

	// ===== Load images =====
	
	const kratosStandL = new Image();
	kratosStandL.src = "Imagery/battle/Kratos standing left.png";
	const kratosStandR = new Image();
	kratosStandR.src = "Imagery/battle/Kratos standing right.png";

	const kratosFightingStanceL = new Image();
	const kratosFightingStanceR = new Image();

	const kratosJogLeft = new Image();
	kratosJogLeft.src = "Imagery/battle/Kratos jogging left.png";
	const kratosJogRight = new Image();
	kratosJogRight.src = "Imagery/battle/Kratos jogging right.png";
	
	const kratosFallsLeft = new Image();
	kratosFallsLeft.src = "Imagery/battle/Kratos lands left.png";
	const kratosFallsRight= new Image();
	kratosFallsRight.src = "Imagery/battle/Kratos lands right.png";
	const kratosJumpsLeft = new Image(); 
	kratosJumpsLeft.src = "Imagery/battle/Kratos jumps left.png";
	const kratosJumpsRight = new Image(); 
	kratosJumpsRight.src = "Imagery/battle/Kratos jumps right.png";
	
	const lightAttackLeft = new Image();
	const lightAttackRight = new Image();

	const heavyAttackLeft = new Image();
	const heavyAttackRight = new Image();
	
	const kratosAirAttackLeft = new Image();
	const kratosAirAttackRight = new Image();
	
	const kratosBlocksLeft = new Image();
	const kratosBlocksRight = new Image();

	const kratosStunnedLeft = new Image();
	kratosStunnedLeft.src = "Imagery/battle/Kratos damage left.png";
	const kratosStunnedRight = new Image();
	kratosStunnedRight.src = "Imagery/battle/Kratos damage right.png";

	const kratosAirStunnedL = new Image();
	kratosAirStunnedL.src = "Imagery/battle/Kratos air damage left.png";
	const kratosAirStunnedR = new Image();
	kratosAirStunnedR.src = "Imagery/battle/Kratos air damage right.png";

	const kratosDodgesLeft = new Image();
	kratosDodgesLeft.src = "Imagery/battle/Kratos dodging left.png";
	const kratosDodgesRight = new Image();
	kratosDodgesRight.src = "Imagery/battle/Kratos dodging right.png";

	const kratosDeafenedL = new Image();
	const kratosDeafenedR = new Image();
	if (enemy.name === "Banshee") {
		kratosDeafenedL.src = "Imagery/battle/Kratos covering ears left.png";
		kratosDeafenedR.src = "Imagery/battle/Kratos covering ears right.png";
	}

	const kratosPetrifiedL = new Image();
	const kratosPetrifiedR = new Image();
	const kratosDeadPetrifiedL = new Image();
	const kratosDeadPetrifiedR = new Image();
	if (enemy.name === "Gorgon" || enemy.name === "Medusa") {
		kratosPetrifiedL.src = "Imagery/battle/Kratos petrified left.png";
		kratosPetrifiedR.src = "Imagery/battle/Kratos petrified right.png";
		kratosDeadPetrifiedL.src = "Imagery/battle/Kratos dead as stone left.png";
		kratosDeadPetrifiedR.src = "Imagery/battle/Kratos dead as stone right.png";
	}

	const kratosSoulTookL = new Image();
	const kratosSoulTookR = new Image();
	const kratosHeldL = new Image();
	const kratosHeldR = new Image();
	if (enemy.name === "Hades") {
		kratosSoulTookL.src = "Imagery/battle/Kratos soul left.png";
		kratosSoulTookR.src = "Imagery/battle/Kratos soul right.png";
		kratosHeldL.src = "Imagery/battle/Kratos held by hands left.png";
		kratosHeldR.src = "Imagery/battle/Kratos held by hands right.png";
	}

	const kratosDeadL = new Image();
	kratosDeadL.src = "Imagery/battle/Kratos dead left.png";
	const kratosDeadR = new Image();
	kratosDeadR.src = "Imagery/battle/Kratos dead right.png";

	const enemyLeft = new Image();
	enemyLeft.src = `Imagery/battle/${enemy.name} facing left.png`;
	const enemyRight = new Image();
	enemyRight.src = `Imagery/battle/${enemy.name} facing right.png`;
	
	const enemyChasesL = new Image();
	enemyChasesL.src = `Imagery/battle/${enemy.name} chasing left.png`;
	const enemyChasesR = new Image();
	enemyChasesR.src = `Imagery/battle/${enemy.name} chasing right.png`;
	
	const enemyLattackR = new Image();
	enemyLattackR.src = `Imagery/battle/${enemy.name} light attacks right.png`;
	const enemyLattackL = new Image();
	enemyLattackL.src = `Imagery/battle/${enemy.name} light attacks left.png`;
	const enemyHattackR = new Image();
	enemyHattackR.src = `Imagery/battle/${enemy.name} heavy attacks right.png`;
	const enemyHattackL = new Image();
	enemyHattackL.src = `Imagery/battle/${enemy.name} heavy attacks left.png`;

	const enemyBlocksR = new Image();
	const enemyBlocksL = new Image();
	if (enemy.blockChance) {
		enemyBlocksR.src = `Imagery/battle/${enemy.name} blocks right.png`;
		enemyBlocksL.src = `Imagery/battle/${enemy.name} blocks left.png`;
	}

	const bansheeScreamsR = new Image();
	const bansheeScreamsL = new Image();
	if (enemy.screamChance) {
		bansheeScreamsR.src = `Imagery/battle/${enemy.name} screams right.png`;
		bansheeScreamsL.src = `Imagery/battle/${enemy.name} screams left.png`;
	}

	const enemyPetrifiesR = new Image();
	const enemyPetrifiesL = new Image();
	if (enemy.petrifyChance) {
		enemyPetrifiesR.src = `Imagery/battle/${enemy.name} petrifies right.png`;
		enemyPetrifiesL.src = `Imagery/battle/${enemy.name} petrifies left.png`;
	}

	const enemyTakesSoulR = new Image();
	const enemyTakesSoulL = new Image();
	if (enemy.soulTakeChance) {
		enemyTakesSoulR.src = `Imagery/battle/${enemy.name} takes soul right.png`;
		enemyTakesSoulL.src = `Imagery/battle/${enemy.name} takes soul left.png`;
	}
	const enemySummonsR = new Image();
	const enemySummonsL = new Image();
	if (enemy.graspChance) {
		enemySummonsR.src = `Imagery/battle/${enemy.name} summons right.png`;
		enemySummonsL.src = `Imagery/battle/${enemy.name} summons left.png`;
	}

	const enemyDodgesR = new Image();
	const enemyDodgesL = new Image();
	if (enemy.dodgeChance) {
		enemyDodgesR.src = `Imagery/battle/${enemy.name} dodges right.png`;
		enemyDodgesL.src = `Imagery/battle/${enemy.name} dodges left.png`;
	}

	const enemySprintsR = new Image();
	const enemySprintsL = new Image();
	if (enemy.speedStrikeChance) {
		enemySprintsR.src = `Imagery/battle/${enemy.name} sprints right.png`;
		enemySprintsL.src = `Imagery/battle/${enemy.name} sprints left.png`;
	}

	const enemySmashesR = new Image();
	const enemySmashesL = new Image();
	if (enemy.smashChance) {
		enemySmashesR.src = `Imagery/battle/${enemy.name} smashes right.png`;
		enemySmashesL.src = `Imagery/battle/${enemy.name} smashes left.png`;
	}

	const enemyTeleportsR = new Image();
	const enemyTeleportsL = new Image();
	const enemyLevitatesR = new Image();
	const enemyLevitatesL = new Image();
	const enemyFliesL = new Image();
	const enemyFliesR = new Image();
	const enemyFallsR = new Image();
	const enemyFallsL = new Image();
	const enemyVictoryR = new Image();
	const enemyVictoryL = new Image();
	if (enemy.name === "Zeus") {
		enemyTeleportsR.src = "Imagery/battle/Zeus teleports right.png";
		enemyTeleportsL.src = "Imagery/battle/Zeus teleports left.png";
		enemyLevitatesR.src = "Imagery/battle/Zeus levitates right.png";
		enemyLevitatesL.src = "Imagery/battle/Zeus levitates left.png";
		enemyFliesR.src = "Imagery/battle/Zeus flies right.png";
		enemyFliesL.src = "Imagery/battle/Zeus flies left.png";
		enemyFallsR.src = "Imagery/battle/Zeus falls right.png";
		enemyFallsL.src = "Imagery/battle/Zeus falls left.png";
		enemyVictoryR.src = "Imagery/battle/Zeus victory pose right.png";
		enemyVictoryL.src = "Imagery/battle/Zeus victory pose left.png";
	}

	const enemyDeadR = new Image();
	enemyDeadR.src = `Imagery/battle/${enemy.name} dead right.png`;
	const enemyDeadL = new Image();
	enemyDeadL.src = `Imagery/battle/${enemy.name} dead left.png`;

	let weapon = g.weapons[g.currentWeapon];

	function updateKratosSprites() {
		weapon = g.weapons[g.currentWeapon];
		const lightableWeapon = g.currentWeapon <= 2 || g.currentWeapon === 5;
		kratosFightingStanceL.src = `Imagery/battle/Kratos fighting stance left (${weapon.name})${lightableWeapon && attacked ? '-lit' : ''}.png`;
		kratosFightingStanceR.src = `Imagery/battle/Kratos fighting stance right (${weapon.name})${lightableWeapon && attacked ? '-lit' : ''}.png`;
		lightAttackLeft.src = `Imagery/battle/Kratos light attacks left with ${weapon.name.toLowerCase()} ${g.kratos.lightCombo + 1}.png`;
		lightAttackRight.src = `Imagery/battle/Kratos light attacks right with ${weapon.name.toLowerCase()} ${g.kratos.lightCombo + 1}.png`;
		heavyAttackLeft.src = `Imagery/battle/Kratos heavy attacks left with ${weapon.name.toLowerCase()} ${g.kratos.heavyCombo + 1}.png`;
		heavyAttackRight.src = `Imagery/battle/Kratos heavy attacks right with ${weapon.name.toLowerCase()} ${g.kratos.heavyCombo + 1}.png`;
		kratosAirAttackLeft.src = `Imagery/battle/Kratos aerial attack left with ${weapon.name.toLowerCase()}.png`;
		kratosAirAttackRight.src = `Imagery/battle/Kratos aerial attack right with ${weapon.name.toLowerCase()}.png`;
		kratosBlocksLeft.src = `Imagery/battle/Kratos blocking left with ${weapon.name.toLowerCase()}.png`;
		kratosBlocksRight.src = `Imagery/battle/Kratos blocking right with ${weapon.name.toLowerCase()}.png`;
	}
	
	// ===== Dodge settings =====

	let dodgeDuration = 400;
	let dodgeSpeedMultiplier = g.kratos.speed - .5;
	g.kratos.dodging = false;
	g.kratos.dodgeEnd = 0;

	// ====== Input =======
	
	document.addEventListener("keydown", g.keydownHandler);
	document.addEventListener("keyup", g.keyupHandler);

	// ===== Battle states =====
	
	let attacked = false;
	let defeated = false;

	// ===== Kratos =====

	g.kratos.y = groundLevel;
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

	// For debugging or just checking things
	function showKratosXpos(){
		ctx.strokeStyle = "yellow";
		ctx.beginPath();
		ctx.moveTo(g.kratos.x, g.kratos.y);
		ctx.lineTo(g.kratos.x, g.kratos.y - g.kratos.h);
		ctx.stroke();
	}
	function showKratosMidX() {
		const kratosMidX = g.kratos.x + 150 / 2;
		ctx.strokeStyle = "orange";
		ctx.beginPath();
		ctx.moveTo(kratosMidX, g.kratos.y);
		ctx.lineTo(kratosMidX, g.kratos.y - g.kratos.h);
		ctx.stroke();
	}

	const kratosHitbox = () => {
		return {
			x: g.kratos.x + 75 / 2,
			y: g.kratos.y - g.kratos.h,
			w: 75,
			h: g.kratos.h
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
	function showKratosAttackRange(attackPos) {
		let attackRange = weapon.lR;
		if (g.kratos.hAttacking) attackRange = weapon.hR
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(attackPos, g.kratos.y);
		ctx.lineTo(
			attackPos + (g.kratos.facing === "right" ? attackRange : -attackRange),
			g.kratos.y
		);
		ctx.stroke();
	}

	function updateKratos() {
		if (g.kratos.health <= 0) {
			// Physics will still apply
			if (sButtonPrompt.active) sButtonPrompt.active = false;
			//if (g.kratos.petrified) g.audios.stoneBroke.play();
			physics();
			return
		} 

		let speed = g.kratos.speed;
		const kratosXpos = g.kratos.x + 75;
		const enemyXpos = enemy.x + g.eW / 2;
		g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
		document.querySelector('.Efiller').style.width = `${enemy.health}px`;

		// Handle dodge

		if (g.kratos.dodging) {
			speed *= dodgeSpeedMultiplier;
			if (Date.now() > g.kratos.dodgeEnd) {
				g.kratos.dodging = false;
			}
		}

		// Handle stun
		if (g.kratos.stunned) {
			// Apply knockback
			g.kratos.x += g.kratos.knockbackVel || 0;
			// Gradually slow knockback down
			g.kratos.knockbackVel *= 0.85;

			// End stun when time is up or knockback is very small
			if (Date.now() > g.kratos.stunEnd) {
				g.kratos.stunned = false;
				g.kratos.knockbackVel = 0;
			}

			// Physics will still apply
			physics();
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

				if (g.kratos.screamBreak >= 17) endScream()
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
				
				if (g.kratos.soulTakeBreak >= 15) endSoulTake()
			}
			if (g.currentEnemy === 7 && g.kratos.took) {
				var inRange = Math.abs(kratosXpos  - enemyXpos) <= enemy.lR;
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

			// Still affected by gravity
			g.kratos.velY += gravity - 0.2;
			g.kratos.y += g.kratos.velY;

			if (g.kratos.y > groundLevel) {
				g.kratos.y = groundLevel;
				g.kratos.velY = 0;
				if (g.kratos.petrified && g.kratos.petrifiedInAir) {
					g.kratos.health = 0;
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
					sButtonPrompt.active = false;
				} 
				g.kratos.onGround = true;
			}

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
			if (g.kratos.stunned || enemy.speedStriking) return
			if (g.keys["ArrowLeft"] || g.keys["a"] || g.keys["A"]) {
				if (g.currentEnemy > 6 && !enemy.defeated) { lineComplete ? g.kratos.velX = -speed : g.kratos.velX = 0 } else { g.kratos.velX = -speed }
				g.kratos.facing = "left";
			} else if (g.keys["ArrowRight"] || g.keys["d"] || g.keys["D"]) {
				if (g.currentEnemy > 6 && !enemy.defeated) { lineComplete ? g.kratos.velX = speed : g.kratos.velX = 0 } else { g.kratos.velX = speed }
				g.kratos.facing = "right";
			} else {
				g.kratos.velX = 0;
			}
		}

		// Jump
		if (g.keys[" "] && g.kratos.onGround && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.blocking) {
			g.audios.evadeSound.cloneNode().play();
			g.kratos.velY = jumpPower;
			g.kratos.onGround = false;
			lineComplete = true;
		}

		let enemyAttackableXpos = enemy.facing === "left" ? enemyXpos + (g.eW / 4) * 2 : enemyXpos - (g.eW / 4) * 2;
		if (enemy.name === "Minotaur" || enemy.name === "Hades" || enemy.name === "Hercules") enemy.facing === "right" ? enemyAttackableXpos += (g.eW / 4) : enemyAttackableXpos -= (g.eW / 4)
		if (enemy.name === "Cyclops") enemy.facing === "right" ? enemyAttackableXpos += (g.eW / 4) + 43 : enemyAttackableXpos -= (g.eW / 4) + 32
		if (enemy.name === "Hermes" && enemy.facing === "left") enemyAttackableXpos += (g.eW / 4)
		let attackRange = weapon.lR;
		if (g.kratos.hAttacking) attackRange = weapon.hR
		const kratosAttackX = g.kratos.facing === "right" ? kratosXpos + attackRange : kratosXpos - attackRange;
		const attackDis = Math.abs(Math.round(kratosAttackX - enemyAttackableXpos));

		// Attack with e (light attacks)
		if (g.keys["e"] && Date.now() - g.kratos.lastLattack > weapon.lC && enemy.health !== 0 && !g.kratos.blocking && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.hAttacking) {
			const now = Date.now();

			if (g.currentWeapon < 3) {
				g.kratos.lightCombo = g.kratos.lightCombo === 2 ? 0 : g.kratos.lightCombo + 1
			} else {
				g.kratos.lightCombo = (g.kratos.lightCombo + 1) % 2 // 2 hit combo for other weapons 'cause I am too lazy to make more sprites
			}
			
			if (g.currentWeapon === 0 || g.currentWeapon === 3 || g.currentWeapon === 4 || g.currentWeapon === 5) weapon.lAttack[(g.kratos.lightCombo + 1) % 2].cloneNode().play()
			if (g.currentWeapon === 1 || g.currentWeapon === 2) {
				weapon.lAttack[g.kratos.lightCombo].cloneNode().play(); 
				if (g.currentWeapon === 1 && g.kratos.lightCombo) weapon.lAttack[0].cloneNode().play();
			}
			
			g.kratos.lAttacking = true;
			g.kratos.lAttackEnd = now + weapon.lC - 50;                    
			g.kratos.lastLattack = now;

			attacked = true;

			// Check if enemy is in range
			
			if (attackDis <= weapon.lR) {
				if (enemy.blocking) { 
					if (g.currentEnemy === 10 && g.currentWeapon !== 5) {
						g.kratos.stunned = true;
						g.kratos.stunEnd = Date.now() + 350;
						g.kratos.hitUntil = Date.now() + hitFlashTime;
						g.kratos.health -= 2;
						g.audios.electrify.cloneNode().play();
						return
					}
					g.currentEnemy !== 4 ? g.audios.blockSound.cloneNode().play() : g.audios.minBlock.cloneNode().play();
					const knockback = g.currentEnemy !== 4 && g.currentEnemy !== 6 && g.currentEnemy !== 7 && g.currentEnemy !== 9 && g.currentEnemy !== 10 ? Math.round(weapon.lK / 2) : 0
					enemy.knockbackVel = g.kratos.facing === "right" ? knockback : -knockback;

					if (g.currentEnemy !== 4 && g.currentEnemy !== 6 && g.currentEnemy !== 7 && g.currentEnemy !== 9 && g.currentEnemy !== 10) { // No stun for bigger / stronger enemies
						enemy.stunned = true;
						enemy.stunEnd = Date.now() + weapon.lS / 2;
					}
				} else {
					if (enemy.name === "Hermes" && tryDodge()) {
						g.audios.dodge.cloneNode().play();
						return
					}

					if (enemy.name === "Zeus" && tryTeleport()) {
						g.audios.teleport.cloneNode().play();
						return
					}

					if (enemy.name === "Zeus" && g.kratos.onGround && enemy.flying) return

					const hitSound = g.currentEnemy !== 10 ? enemy.hitSound : enemy.hitSound[0];
					g.playCaudio(hitSound, g.damageVolume);
					enemy.health -= weapon.lD;
					enemy.hitUntil = Date.now() + hitFlashTime; // flash red

					if (enemy.name === "Zeus" && enemy.flying && !g.kratos.onGround) {
						enemy.maxAirHits -= g.currentWeapon
						enemy.airHits++;

						// Enough light hits knock him down
						if (enemy.airHits >= enemy.maxAirHits) {
							knockZeusDown();
							return;
						}
					}

					// Knockback enemy
					if (g.currentEnemy !== 4 && g.currentEnemy !== 6 && g.currentEnemy !== 7 && g.currentEnemy !== 9) {
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.lK : -weapon.lK;
					} else { // Lower knockback for bigger or stronger enemies
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.lK - 5 : -weapon.lK; - 5 
					}

					// Stun enemy
					enemy.stunned = true;
					if (g.currentEnemy !== 4 && g.currentEnemy !== 6 && g.currentEnemy !== 7 && g.currentEnemy !== 8 && g.currentEnemy !== 9) {
						enemy.stunEnd = Date.now() + weapon.lS;
					} else { // Less stunn for bigger aor stronger enemies
						enemy.stunEnd = Date.now() + weapon.lS / 2 
					} 

					if (enemy.health <= 0) {
						enemy.health = 0;
						enemy.deathSound.play();
						if (!enemy.defeated) {
							enemy.defeated = true;
							localStorage.setItem(`${enemy.name.toLowerCase()}Defeated`, enemy.defeated);
						}
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
		if (g.keys["r"] && Date.now() - g.kratos.lastHattack > weapon.hC && enemy.health !== 0 && !g.kratos.blocking && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.lAttacking) {
			const now = Date.now();

			g.kratos.heavyCombo = (g.kratos.heavyCombo + 1) % 2; // 2 hit combo for now
			g.playCaudio(g.audios.grunt[(g.kratos.heavyCombo + 1) % 2], 0.7);
			weapon.hAttack[(g.kratos.heavyCombo + 1) % 2].cloneNode().play();
			if(g.currentWeapon === 4) g.audios.nemeanRoar.cloneNode().play();
			
			g.kratos.hAttacking = true;
			g.kratos.hAttackEnd =  now + weapon.hC - 50;
			g.kratos.lastHattack = now;

			attacked = true;

			// Check if enemy is in range
			if (attackDis <= weapon.hR) {
				if (enemy.blocking) { 
					function breakBlock() {
						enemy.blocking = false;
						enemy.state = "idle";
						enemy.stunned = true;
						enemy.stunEnd = Date.now() + weapon.hS - 120;
					}
					var knockback = g.currentEnemy !== 4 && g.currentEnemy !== 6 ? Math.round(weapon.hK / 2) : 2;
						if (g.currentEnemy === 10) return
						enemy.knockbackVel = g.kratos.facing === "right" ? knockback : -knockback;
					if (g.currentEnemy) {
						if (g.currentEnemy === 2 && g.currentWeapon >= 2) {
							g.audios.blockSound.play();
							breakBlock();
							return
						} else if (g.currentEnemy === 4 && g.currentWeapon >= 3) {
							g.audios.minBlock.play();
							breakBlock();
							return
						} else if (g.currentEnemy === 9 && g.currentWeapon >= 4) {
							breakBlock();
							return
						} else if (g.currentEnemy === 10 && g.currentWeapon === 5) {
							breakBlock();
							return
						}
						g.currentEnemy !== 4 ? g.audios.blockSound.cloneNode().play() : g.audios.minBlock.cloneNode().play();

						enemy.stunned = true;
						enemy.stunEnd = Date.now() + weapon.hS / g.currentEnemy !== 4 && g.currentEnemy !== 6 ? 2 : 3;
					} else { // Hoplite blocks can be broken with any weapon (Only with heavy attacks)
						g.audios.blockSound.play();
						breakBlock()
					}
				} else {
					if (enemy.name === "Hermes" && tryDodge()) {
						g.audios.dodge.cloneNode().play();
						return;
					}

					if (enemy.name === "Zeus" && tryTeleport()) {
						g.audios.teleport.cloneNode().play();
						return
					}

					if (enemy.name === "Zeus" && g.kratos.onGround && enemy.flying) return

					const hitSound = g.currentEnemy !== 10 ? enemy.hitSound : enemy.hitSound[1];
					g.playCaudio(hitSound, g.damageVolume);
					enemy.health -= weapon.hD;
					enemy.hitUntil = Date.now() + hitFlashTime; // flash red

					if (enemy.name === "Zeus" && enemy.flying && !g.kratos.onGround) {
						enemy.maxAirHits -= g.currentWeapon;
						enemy.airHits += 2;
						
						if (enemy.airHits >= enemy.maxAirHits) {
							knockZeusDown();
							return;
						}
					}

					if (g.currentEnemy !== 4 && g.currentEnemy !== 6 && g.currentEnemy !== 7) {
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.hK : -weapon.hK;
					} else { // Lower knockback for bigger and stronger enemies
						enemy.knockbackVel = g.kratos.facing === "right" ? weapon.hK - 5 : -weapon.hK; - 5 
					}

					enemy.stunned = true;
					if (g.currentEnemy !== 4 && g.currentEnemy !== 6 && g.currentEnemy !== 7) {
						enemy.stunEnd = Date.now() + weapon.hS;
					} else { // Less stunn for bigger and stronger enemies
						enemy.stunEnd = Date.now() + weapon.hS / 2 
					} 

					if (enemy.health <= 0) {
						enemy.health = 0;
						enemy.deathSound.play();
						if (!enemy.defeated) {
							enemy.defeated = true;
							localStorage.setItem(`${enemy.name.toLowerCase()}Defeated`, enemy.defeated);
						}
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
		if (g.keys["q"] && !g.kratos.blocking && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.petrified && !g.kratos.lAttacking && !g.kratos.hAttacking) g.kratos.blocking = true

        // Dodge
        if (g.keys["Shift"] && g.kratos.velX && !g.kratos.dodging && !g.kratos.stunned && !g.kratos.blocking && !g.kratos.petrified && !g.kratos.lAttacking && !g.kratos.hAttacking) {
			g.audios.evadeSound.play();
			g.kratos.dodging = true;
			g.kratos.dodgeEnd = Date.now() + dodgeDuration;
        }

		g.keys["Shift"] = false;

		if (!g.kratos.dodging && !g.kratos.hAttacking && !enemy.speedStriking && !defeated) preventOverlap()

		// Apply physics
		g.kratos.velY += gravity;
		g.kratos.x += g.kratos.velX;
		g.kratos.y += g.kratos.velY;

		// Ground collision
		if (g.kratos.y > groundLevel) {
			g.kratos.y = groundLevel;
			g.kratos.velY = 0;
			g.kratos.onGround = true;
		}

		// Keep inside canvas
		
		if (g.kratos.x < 0) g.kratos.x = 0;
		if (g.kratos.x + g.kratos.w > battleArea.width) g.kratos.x = battleArea.width - g.kratos.w;
	}

	function physics() {
		g.kratos.velY += gravity;
		g.kratos.y += g.kratos.velY;

		if (g.kratos.y > groundLevel) {
			g.kratos.y = groundLevel;
			g.kratos.velY = 0;
			g.kratos.onGround = true;
		}
	}

	function drawKratos() {
		updateKratosSprites();
		let img;
		if (g.kratos.health > 0) {
			if (!g.kratos.onGround) {  
				// In the air
				if (g.kratos.stunned && !g.kratos.petrified) {
					img = g.kratos.facing === "right" ? kratosAirStunnedR : kratosAirStunnedL;
					g.kratos.w = 107;
				} else if (g.kratos.covering || enemy.screaming) {
					img = g.kratos.facing === "right" ? kratosDeafenedR : kratosDeafenedL;
					g.kratos.w = 105;
				} else if (g.kratos.petrified) {
					img = g.kratos.facing === "right" ? kratosPetrifiedR : kratosPetrifiedL;
					g.kratos.h = 167;
					g.kratos.w = 154;
				} else if (g.kratos.took) {
					img = g.kratos.facing === "right" ? kratosSoulTookR : kratosSoulTookL;
					g.kratos.h = 210;
					g.kratos.w = 135;
				} else if (g.kratos.dodging) {
					img = g.kratos.facing === "right" ? kratosDodgesRight : kratosDodgesLeft;
					g.kratos.w = 148;
					g.kratos.h = 110;
				} else if (g.kratos.lAttacking || g.kratos.hAttacking) {
					img = g.kratos.facing === "right" ? kratosAirAttackRight : kratosAirAttackLeft;
					g.kratos.w = 140;
				} else if (g.kratos.velY < 0) {
					// Jumping
					img = g.kratos.facing === "right" ? kratosJumpsRight : kratosJumpsLeft;
					g.kratos.w = 127;
				} else {
					// Falling
					img = g.kratos.facing === "right" ? kratosFallsRight : kratosFallsLeft;
					g.kratos.w = 127;
				}
			} else if (g.kratos.velX > 0 && !g.kratos.dodging && !g.kratos.stunned) {
				img = kratosJogRight;
				g.kratos.h = 160;
				g.kratos.w = 115;
			} else if (g.kratos.velX < 0 && !g.kratos.dodging && !g.kratos.stunned) {
				img = kratosJogLeft;
				g.kratos.h = 160;
				g.kratos.w = 115;
			} else {
				// On the ground
				if (g.kratos.stunned && !g.kratos.petrified && !g.kratos.held) {
					img = g.kratos.facing === "right" ? kratosStunnedRight : kratosStunnedLeft;
					g.kratos.w = 125;
					g.kratos.h = 150;
				} else if (g.kratos.covering || enemy.screaming) {
					img = g.kratos.facing === "right" ? kratosDeafenedR : kratosDeafenedL;
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
					img = g.kratos.facing === "right" ? kratosDodgesRight : kratosDodgesLeft;
					g.kratos.w = 148;
					g.kratos.h = 110;
				} else if (g.kratos.blocking) {
					img = g.kratos.facing === "right" ? kratosBlocksRight : kratosBlocksLeft;
					g.kratos.w = 150;
					if (g.currentWeapon === 4) g.kratos.w = 130
				} else if (enemy.health !== 0) { 
					if (g.kratos.x < enemy.x) {
						g.kratos.facing = "right";
						if (g.kratos.hAttacking) {
							img = heavyAttackRight;
							g.kratos.w = 250;
							if (g.currentWeapon === 1 && g.kratos.heavyCombo === 0) g.kratos.w = 295
							if (g.currentWeapon === 1 && g.kratos.heavyCombo === 1) g.kratos.w = 325
							if (g.currentWeapon === 2 && g.kratos.heavyCombo == 1) { g.kratos.h = 180; g.kratos.w = 320 }
							if (g.currentWeapon === 3 || g.currentWeapon === 4) g.kratos.w = 160
							if (g.currentWeapon === 5) { g.kratos.h = 140; g.kratos.w = 170 }
						} else if (g.kratos.lAttacking) {
							img = lightAttackRight;
							g.kratos.w = 170;
							if (g.currentWeapon === 1 && g.kratos.lightCombo) g.kratos.w = 188
							if (g.currentWeapon === 1 && g.kratos.lightCombo === 2) g.kratos.h = 192
							if (g.currentWeapon === 2 && g.kratos.lightCombo === 2) { g.kratos.h = 185; g.kratos.w = 158 }
							if (g.currentWeapon === 5 && !g.kratos.lightCombo) { g.kratos.w = 150; g.kratos.h = 190 }
							if (g.currentWeapon === 5 && g.kratos.lightCombo) { g.kratos.w = 140; g.kratos.h = 171 }
						} else {
							img = kratosFightingStanceR;
							g.kratos.w = 150;
							g.kratos.h = 159;
						}
					} else {
						g.kratos.facing = "left";
						if (g.kratos.hAttacking) {
							img = heavyAttackLeft;
							g.kratos.w = 250;
							if (g.currentWeapon === 1 && g.kratos.heavyCombo === 0) g.kratos.w = 295
							if (g.currentWeapon === 1 && g.kratos.heavyCombo === 1) g.kratos.w = 325
							if (g.currentWeapon === 2 && g.kratos.heavyCombo == 1) { g.kratos.h = 180; g.kratos.w = 320 }
							if (g.currentWeapon === 3 || g.currentWeapon === 4) g.kratos.w = 165
							if (g.currentWeapon === 5) { g.kratos.h = 140; g.kratos.w = 170 }
						} else if (g.kratos.lAttacking) {
							img = lightAttackLeft;
							g.kratos.w = 170;
							if (g.currentWeapon === 1 && g.kratos.lightCombo) g.kratos.w = 188
							if (g.currentWeapon === 1 && g.kratos.lightCombo === 2) g.kratos.h = 192
							if (g.currentWeapon === 2 && g.kratos.lightCombo === 2) { g.kratos.h = 185; g.kratos.w = 158 }
							if (g.currentWeapon === 5 && !g.kratos.lightCombo) { g.kratos.w = 150; g.kratos.h = 190 }
							if (g.currentWeapon === 5 && g.kratos.lightCombo) { g.kratos.w = 140; g.kratos.h = 171 }
						} else {
							img = kratosFightingStanceL;
							g.kratos.w = 150;
							g.kratos.h = 159;
							if (g.currentWeapon === 1) g.kratos.w = 171
						}
					}
				} else { 
					img = g.kratos.facing === "right" ? kratosStandR : kratosStandL;
					g.kratos.h = 162;
					g.kratos.w = 112;
				}
			}
		} else { 
			if (!g.kratos.petrified) {
				img = g.kratos.facing === "right" ? kratosDeadR : kratosDeadL
				g.kratos.w = 160;
				g.kratos.h = 55;
			} else {
				img = g.kratos.facing === "right" ? kratosDeadPetrifiedR : kratosDeadPetrifiedL
				g.kratos.w = 147;
				g.kratos.h = 85;
			}
			
		}
		let drawX = g.kratos.x;
		if (g.kratos.facing === "left") drawX -= 75 / 2 - 13
		if (g.kratos.facing === "left" && g.kratos.hAttacking && g.currentWeapon < 3) drawX -= g.kratos.w - 150

		drawCharacter(img, drawX, g.kratos.y, g.kratos.w, g.kratos.h, Date.now() < g.kratos.hitUntil);
	}

	// ===== Overlap prevention

	function preventOverlap() {
		if (g.kratos.y < groundLevel || !enemy.onGround) return;
		if (g.kratos.dodging || enemy.speedStriking || enemy.flying) return;
		
		const kHitbox = kratosHitbox();
		const eHitbox = enemyHitbox();

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

	// ====== Enemy ======

	enemy.y = groundLevel;
	enemy.velX = 0;
	enemy.velY = 0;
	enemy.onGround = true;
	enemy.state = "idle";
	enemy.facing = "left";
	enemy.decision = null;
	enemy.lAttacking = false;
	enemy.hAttacking = false;
	enemy.alpha = 1;
	enemy.hasHit = false;
	enemy.hitUntil = 0;
	enemy.lastAttack = 0;
	enemy.dCooldown = 700;
	if (g.currentEnemy === 1) {
		enemy.screaming = false;
		enemy.lastScream = 0;
		enemy.lastScreamTick = 0;
		enemy.screamRange = 320;
	} else if (g.currentEnemy === 3 || g.currentEnemy === 5) {
		enemy.petrifying = false;
		enemy.petrifyStart = 0;
		enemy.lastPetrify = 0;
		enemy.petrifyRange = g.currentEnemy === 3 ? 295 : 400;
	} else if (g.currentEnemy === 7) {
		enemy.soulTaking = false;
		enemy.lastSoulTake = 0;
		enemy.lastSoulTakeTick = 0;

		enemy.grasping = false;
		enemy.graspStart = 0;
		enemy.lastGrasp = 0;
		enemy.graspAttempts = 0;
		enemy.maxGrasps = 3;
		enemy.nextGraspTime = 0;
	} else if (g.currentEnemy === 8) {
		enemy.canDodge = true;
		enemy.lastDodge = 0;
		enemy.dodging = false;
		enemy.dodgeSpeed = 7.7;
		enemy.invulnerable = false;

		enemy.canSpeedStrike = true;
		enemy.speedStriking = false;
		enemy.speedStrikeSpeed = 10;
		enemy.speedStrikeHits = 0;
		enemy.speedStrikeStartX = 0;
		enemy.speedStrikeTargetX = 0;
		enemy.speedStrikeDir = 1;
		enemy.lastSpeedStrike = 0;
	} else if (g.currentEnemy === 9) {
		enemy.smashing = false;
		enemy.lastSmash = 0;

		enemy.smashCount = 0;
		enemy.maxSmashes = 2;
		enemy.nextSmashTime = 0;
		enemy.smashHasHit = false;
	} else if (g.currentEnemy === 10) {
		enemy.maxHealth = g.eHealth;
		enemy.teleporting = false;
		enemy.lastTeleport = 0;

		enemy.flying = false;
		enemy.flyCooldown = 2200;
		enemy.flightHeight = 170;
		enemy.flightY = groundLevel - enemy.flightHeight;

		enemy.flightState = "";
		enemy.lastFlightAction = 0;
		enemy.flightCooldown = 2200;

		enemy.lightningCooldown = 700;
		enemy.lastLightning = 0;

		enemy.flySpeed = 6;
		enemy.strikeOffsetY = 70;
		enemy.currentFlightTargetY = enemy.flightY;
		enemy.dipping = false;

		enemy.airHits = 0;
		enemy.maxAirHits = 7;
		enemy.droppable = true;
	}
	enemy.stunned = false;
	enemy.stunEnd = 0;
	enemy.knockbackVel = 0;
	enemy.blocking = false;
	enemy.blockStart = 0;
	enemy.lastBlock = 0;

	const chaseRange = 450 + g.currentEnemy * 10;

	// ---- Enemy AI ----

	function decision(choices) {
		const total = Object.values(choices).reduce((a, b) => a + b, 0);
		let r = Math.random() * total;

		for (const [key, weight] of Object.entries(choices)) {
			r -= weight;
			if (r <= 0) return key;
		}
	}

	function enemyDecides() {
		const now = Date.now();
		const options = {};

		if (now - enemy.lastAttack > enemy.lC) options.lAttack = enemy.lightChance
		if (now - enemy.lastAttack > enemy.hC) options.hAttack = enemy.heavyChance
		if (enemy.blockChance && now - enemy.lastBlock > enemy.bC) options.block = enemy.blockChance
		if (enemy.screamChance && now - enemy.lastScream > enemy.sC) options.scream = enemy.screamChance
		if (enemy.petrifyChance && !g.kratos.petrified && now - enemy.lastPetrify > enemy.pC) options.petrify = enemy.petrifyChance
		if (enemy.soulTakeChance && !g.kratos.took && !g.kratos.held && now - enemy.lastSoulTake > enemy.sTC) options.soulTake = enemy.soulTakeChance
		if (enemy.graspChance && !g.kratos.held && now - enemy.lastGrasp > enemy.gC) options.grasp = enemy.graspChance
		if (enemy.speedStrikeChance && now - enemy.lastSpeedStrike > enemy.ssC) options.speedStrike = enemy.speedStrikeChance
		if (enemy.smashChance && now - enemy.lastSmash > enemy.sC) options.smash = enemy.smashChance

		if (!Object.keys(options).length) return;

		console.log("Deciding...");
		const choice = decision(options);
		console.log("Decided:", choice);
		return choice
	}

	function enemyLightAttacks() {
		const now = Date.now();
		enemy.state = "lAttack";
		enemy.stateEnd = now + enemy.lC;
		enemy.lAttacking = true;
		enemy.lastAttack = now;
		enemy.attackRange = enemy.lR;
		enemy.hasHit = false;
		enemy.velX = 0;
	}
	function enemyHeavyAttacks() {
		const now = Date.now();
		enemy.state = "hAttack";
		enemy.stateEnd = now + enemy.hC;
		enemy.hAttacking = true;
		enemy.lastAttack = now;
		enemy.attackRange = enemy.hR;
		enemy.hasHit = false;
		enemy.velX = 0;
	}
	function enemyBlocks() {
		const now = Date.now();
		enemy.state = "block";
		enemy.stateEnd = now + enemy.bD;
		enemy.blocking = true;
		enemy.lastBlock = now;
	}
	function knockbackKratos(knockback) {
		g.kratos.knockbackVel = enemy.facing === "right" ? knockback : -knockback;
	}

	function bansheeScreams() {
		const now = Date.now();
		enemy.state = "scream";
		enemy.stateEnd = now + 6200;
		enemy.screaming = true;
		enemy.lastScream = now;
		enemy.lastScreamTick = now;
		enemy.attackRange = enemy.hR + enemy.lR;

		g.kratos.covering = true;
		g.kratos.screamBreak = 0;

		sButtonActivate();

		g.audios.bansheeScream.play();
	}

	function endScream() {
		enemy.screaming = false;
		enemy.state = "idle";
		enemy.decision = null;
		
		g.kratos.covering = false;
		g.kratos.screamBreak = 0;

		sButtonPrompt.active = false;
    	sButtonPrompt.visualPress = false;

		if (g.audios.bansheeScream.currentTime > 0) {
			g.audios.bansheeScream.pause();
			g.audios.bansheeScream.currentTime = 0;
		}
	}

	function enemyPetrifies() {
		const now = Date.now();

		const animationDuration = g.currentEnemy === 3 ? 2000 : 1500
		enemy.state = "petrify";
		enemy.stateEnd = now + animationDuration;
		enemy.petrifying = true;
		enemy.petrifyStart = now;
		enemy.lastPetrify = now;
		enemy.velX = 0;

		enemy.name === "Gorgon" ? g.audios.gorgonPetrify.play() : g.audios.medusaPetrify.play();
	}

	function breakPetrification() {
		g.kratos.petrified = false;
		g.kratos.petrifyBreak = 0;

		sButtonPrompt.active = false;
		sButtonPrompt.visualPress = false;
		g.audios.stoneBroke.play();
	}

	function hadesTakesSoul() {
		const now = Date.now();

		enemy.state = "soulTake";
		enemy.stateEnd = now + enemy.sTD;
		enemy.soulTaking = true;
		enemy.lastSoulTake = now;
		enemy.lastSoulTakeTick = now;
		enemy.attackRange = enemy.lR + enemy.hR * 2;

		g.kratos.took = true;
		g.kratos.soulTakeBreak = 0;

		g.audios.soulTake.play();
		sButtonActivate();
	}

	function endSoulTake() {
		enemy.soulTaking = false;
		enemy.state = "idle";
		enemy.decision = null;
		
		g.kratos.took = false;
		g.kratos.soulTakeBreak = 0;

		sButtonPrompt.active = false;
    	sButtonPrompt.visualPress = false;
		if (g.audios.soulTake.currentTime > 0) {
			g.audios.soulTake.pause();
			g.audios.soulTake.currentTime = 0;
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

	function spawnGraspWarning() {
		const now = Date.now();

		graspFX.active = true;
		graspFX.grabbed = false;
		graspFX.start = now;

		graspFX.x = g.kratos.x + g.kratos.w / 2;
		graspFX.y = groundLevel - 2;

		enemy.graspAttempts++;
		enemy.nextGraspTime = now + 1500; // delay between attempts
		g.audios.handGrasp.play();
	}

	function hadesGrasp() {
		const now = Date.now();

		enemy.state = "grasp";
		enemy.grasping = true;
		enemy.lastGrasp = now;
		enemy.graspAttempts = 0;
		enemy.nextGraspTime = now;

		enemy.velX = 0;

		spawnGraspWarning();
	}

	function endGrasp() {
		enemy.grasping = false;
		enemy.state = "idle";
		enemy.decision = null;

		graspFX.active = false;
	}

	function drawGraspWarning() {
		if (!graspFX.active || graspFX.grabbed) return;

		const t = (Date.now() - graspFX.start) / 500;
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

	const graspHand = new Image();
	if (enemy.name === "Hades") graspHand.src = "Imagery/battle/Underground hand.png";

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

	function tryDodge() {
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
		console.log("Decided: dodge")

		hermesDodges();
		return true;
	}

	function hermesDodges() {
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
	
	function hermesSpeedStrike() {
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

		g.audios.speedStrike.play();
	}

	function endSpeedStrike() {
		enemy.state = "idle";
		enemy.decision = null;
		enemy.speedStriking = false;
		enemy.velX = 0;
		// Snap back to original spot
		enemy.x = enemy.speedStrikeStartX;
	}

	function herculesSmash() {
		const now = Date.now();
		
		enemy.state = "smash";
		enemy.smashing = true;
		enemy.lastSmash = now;

		enemy.smashCount = 0;
		enemy.nextSmashTime = now + 700;
		enemy.smashHasHit = false;

		enemy.velX = 0;
	}

	function tryTeleport() {
		const now = Date.now();

		if (enemy.teleporting || now - enemy.lastTeleport < enemy.teleportCooldown) return false
		if (Math.random() > enemy.teleportChance) return false

		zeusTeleports();
		return true
	}

	function zeusTeleports() {
		enemy.state = "teleport";
		enemy.stateEnd = Date.now() + 330;
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

	function zeusFlies() {
		enemy.flying = true;
		enemy.state = "fly";
		enemy.velX = 0;
		enemy.velY = -6; // lift-off
		enemy.onGround = false;

		enemy.lastFlightAction = Date.now();
	}

	function flightUpdate() {
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
			console.log("Decided:", enemy.flightState);
			enemy.lastFlightAction = now;
		}
		
		if (enemy.flightState === "shoot") {
			zeusLightningAttack();
		}

		if (enemy.flightState === "chase") {
			zeusAirChase();
		}
	}

	function zeusLightningAttack() {
		const now = Date.now();
		if (now - enemy.lastLightning < enemy.lightningCooldown) return;

		enemy.lastLightning = now;
		//enemy.state = "shoot"; ---- Not needed until I add a sprite of him shooting

		spawnZeusLightning();
	}

	const lightningSprite = new Image();
	if (enemy.name === "Zeus") lightningSprite.src = "Imagery/battle/Lightning bolt.png";

	const lightnings = [];

	function updateLightnings() {
		for (let i = lightnings.length - 1; i >= 0; i--) {
			const l = lightnings[i];
			if (!l.active) {
				lightnings.splice(i, 1);
				continue;
			}

			l.x += l.velX;
			l.y += l.velY;

			// ---- Hit Kratos ----
			if (l.x > g.kratos.x && l.x < g.kratos.x + g.kratos.w && l.y > g.kratos.y - g.kratos.h && l.y < g.kratos.y) {
				g.audios.electrify.play();
				g.kratos.health -= l.damage;
				g.kratos.hitUntil = Date.now() + hitFlashTime;
				l.active = false;
				continue;
			}

			// ---- Hit ground ----
			if (l.y >= groundLevel) {
				l.active = false;
				continue;
			}

			// ---- Off screen ----
			if (l.x < -50 || l.x > battleArea.width + 50 || l.y < -50 || l.y > battleArea.height + 50) {
				l.active = false
			}
		}
	}

	function spawnZeusLightning() {
		g.audios.lShoot.cloneNode().play();

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
			active: true
		});
	}

	function drawLightnings() {
		for (const l of lightnings) {
			if (!l.active) continue;

			const angle = Math.atan2(l.velY, l.velX);

			ctx.save();
			ctx.translate(l.x, l.y);
			ctx.rotate(angle + Math.PI / 2);

			ctx.drawImage(
				lightningSprite,
				-36,
				-11,
				72,
				22
			);

			ctx.restore();
		}
	}

	function zeusAirChase() {
		const kratosX = g.kratos.x + g.kratos.w / 2;
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
			zeusAirStrike();
		}
	}

	function zeusAirStrike() {
		enemy.hasHit = true;

		// Force lowest dip during hit
		enemy.currentFlightTargetY = enemy.flightY + enemy.strikeOffsetY + 20;

		g.audios.gorgonAttacks[0].cloneNode().play();
		g.kratos.health -= 9;
		g.kratos.hitUntil = Date.now() + hitFlashTime;
		g.kratos.stunned = true;
		g.kratos.stunEnd = Date.now() + enemy.hS;

		// Small knockback
		g.kratos.knockbackVel = enemy.facing === "right" ? 6 : -6;

		// Reset after hit
		setTimeout(() => {
			enemy.hasHit = false;
			enemy.flightState = "";
			enemy.currentFlightTargetY = enemy.flightY;
		}, 300);
	}

	function knockZeusDown() {
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

	// For debugging or checking things
	function showEnemyXpos() {
		ctx.strokeStyle = "yellow";
		ctx.beginPath();
		ctx.moveTo(enemy.x, enemy.y);
		ctx.lineTo(enemy.x, enemy.y - enemy.h);
		ctx.stroke();
	}
	function showEnemyMidX() {
		const enemyMidX = enemy.x + g.eW / 2;
		ctx.strokeStyle = "orange";
		ctx.beginPath();
		ctx.moveTo(enemyMidX, enemy.y);
		ctx.lineTo(enemyMidX, enemy.y - enemy.h);
		ctx.stroke();
	}

	const enemyHitbox = () => {
		return {
			x: enemy.facing === "left" ? (enemy.x - g.eW / 4) + (g.eW / 2) : enemy.x + g.eW / 4,
			y: enemy.y - enemy.h,
			w: g.eW / 2,
			h: enemy.h
		}
	}

	function showEnemyHitBox () {
		const hitbox = enemyHitbox();

		ctx.save();
		ctx.globalAlpha = 0.35;
		ctx.strokeStyle = "cyan";
		ctx.strokeRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
		ctx.restore();
	}
	function showEnemyAttackRange(attackPos) {
		const attackRange = enemy.decision === "lAttack" ? enemy.lR : enemy.hR;
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(attackPos, enemy.y);
		ctx.lineTo(attackPos + (enemy.facing === "right" ? attackRange : -attackRange), enemy.y);
		ctx.stroke();
	}

	function updateEnemy() {
		// Handle death
		if (enemy.health === 0 && !defeated) {
			defeated = true;
			spawnOrbs(enemy.x + enemy.w / 2, enemy.y - 28, "red", redOrbs);
			spawnOrbs(enemy.x + enemy.w / 2, enemy.y - 28, "green", greenOrbs);

			setTimeout(victory(g), 2500)
			return;
		}

		if (defeated) {
			// Still apply physics
			enemy.velY += gravity;
			enemy.y += enemy.velY;
			if (enemy.y > groundLevel) {
				enemy.y = groundLevel;
				enemy.velY = 0;
				enemy.onGround = true;
			}
			return
		} 

		const enemyXpos = enemy.x + g.eW / 2;
		const kratosXpos = g.kratos.x + 150 / 2;
		const distance = Math.abs(Math.round(kratosXpos - enemyXpos));
		const kratosAttackableX = g.kratos.facing === "left" ? kratosXpos + (75 / 2) : kratosXpos - (75 / 2) - 10;
		const enemyAttackX = enemy.facing === "right" ? enemyXpos + g.eW / 2 : enemy.x;
		const attackDis = Math.abs(Math.round(enemyAttackX - kratosAttackableX));

		// Handle stun
		if (enemy.stunned) {
			// Apply knockback
			enemy.x += enemy.knockbackVel || 0;
			// Gradually slow knockback down
			enemy.knockbackVel *= 0.85;

			// End stun when time is up or knockback is very small
			if (Date.now() > enemy.stunEnd) {
				enemy.stunned = false;
				enemy.knockbackVel = 0;
			}

			enemy.velY += gravity;
			enemy.y += enemy.velY;
			if (enemy.y > groundLevel) {
				enemy.y = groundLevel;
				enemy.velY = 0;
				enemy.onGround = true;
			}

			// While stunned, skip chasing, attacking, etc
			return;
		}

		// ----- Banshee scream -----
		if (g.currentEnemy === 1 && enemy.screaming && g.kratos.health > 0) {

			// Damage over time (2 HP every 0.25s)
			if (Date.now() - enemy.lastScreamTick > 250) {
				g.kratos.health -= 1;
				g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));

				if (g.kratos.health <= 0) endScream()

				enemy.lastScreamTick = Date.now();
			}

			if (Date.now() > enemy.stateEnd) endScream()

			return; // no other attacks
		}

		// ---- Gorgon / Medusa petrification ----
		if (enemy.state === "petrify") {
			enemyXpos < kratosXpos ? enemy.facing = "right" : enemy.facing = "left"
			if (Date.now() > enemy.stateEnd && !g.kratos.petrified) {
				if (attackDis <= enemy.petrifyRange) {
					g.kratos.petrified = true;
					g.kratos.petrifyBreak = 0;
					sButtonActivate();
					g.audios.stonify.play();
					enemy.name === "Gorgon" ? g.audios.snakesHiss.play() : g.audios.medusaLaugh.play()
					if (g.kratos.y <= 340) g.kratos.petrifiedInAir = !g.kratos.onGround;
				}
				enemy.state = "idle";
				enemy.decision = null;
				enemy.petrifying = false;
			}

			return;
		}

		// ----- Hades soul take -----
		if (g.currentEnemy === 7 && enemy.soulTaking && g.kratos.health > 0) {

			// Damage over time (3 HP every 0.25s)
			if (Date.now() - enemy.lastSoulTakeTick > 250) {
				g.kratos.health -= 3;
				g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));

				if (g.kratos.health <= 0) endSoulTake();

				enemy.lastSoulTakeTick = Date.now();
			}

			if (Date.now() > enemy.stateEnd) endSoulTake()

			return; // no other attacks
		}

		// ----- Hades Grasp -----
		if (enemy.state === "grasp") {
			const now = Date.now();

			// Attempt grab after telegraph
			if (graspFX.active && !graspFX.grabbed && now - graspFX.start > 800) {
				const caught = g.kratos.onGround && !g.kratos.dodging && Math.abs(g.kratos.x - graspFX.x) < 125;

				if (caught) {
					g.audios.held.play();
					g.kratos.held = true;
					graspFX.grabbed = true;
					g.kratos.graspBreak = 0;

					sButtonActivate();
					endGrasp();
					return;
				} else {
					graspFX.active = false;
				}
			}

			// Retry if dodged
			if (!graspFX.active && enemy.graspAttempts <= enemy.maxGrasps) {
				if (now > enemy.nextGraspTime) spawnGraspWarning()
			}

			// End grasp only if attempts are met
			if (enemy.graspAttempts >= enemy.maxGrasps) {
				endGrasp();
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
					g.kratos.hitUntil = Date.now() + hitFlashTime;
					g.kratos.health -= 6;
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
					g.kratos.stunned = true;
					g.kratos.stunEnd = Date.now() + 300;
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
				if (returned) endSpeedStrike()
			}
			return;
		}

		// ----- Hercules Ground Smash -----
		if (enemy.state === "smash") {
			const now = Date.now();

			if (now >= enemy.nextSmashTime && enemy.smashCount < enemy.maxSmashes) {
				g.audios.smash.cloneNode().play();

				document.querySelector(".Olympus-battle").style.animation = "none";
				document.querySelector(".Olympus-battle").offsetHeight;
				enemy.smashCount++;
				// Do damage if Kratos is on ground
				if (g.kratos.onGround && !enemy.smashHasHit) {
					g.kratos.health -= 8;
					g.kratos.hitUntil = now + hitFlashTime;

					g.kratos.stunned = true;
					g.kratos.stunEnd = now + 350;

					enemy.smashHasHit = true;
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
				}

				enemy.smashHasHit = false;
				enemy.nextSmashTime = now + 1200;

				// Screen shake
				document.querySelector(".Olympus-battle").style.animation = "tilt-shaking 0.5s linear";
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
		const choseToFly = Math.random() < 0.35;
		const cooledDown = Date.now() - enemy.lastFlightAction > enemy.flyCooldown;
		if (g.currentEnemy === 10 && enemy.onGround && enemy.state === "idle" && lineComplete && enemy.health <= enemy.maxHealth / 2 && cooledDown && choseToFly) {
			zeusFlies();
			return;
		}

		if (enemy.flying) {
			flightUpdate();
			return;
		}

		// Enemy state & decision handling

		if (!enemy.decision && Date.now() - enemy.lastAttack > enemy.dCooldown) enemy.decision = enemyDecides();
		
		if (g.kratos.health > 0 && !enemy.stunned && !enemy.dodging) {
			if (distance <= chaseRange && enemy.state === "idle") {
				if (g.currentEnemy >= 7 && !enemy.defeated && !lineComplete) {
					if (enemy.state !== "dodge") enemy.state = "chase"
				} else { enemy.state = "chase" }
			}
		}

		if (enemy.state === "chase" || enemy.state === "idle" && g.kratos.health) {
			if (g.currentEnemy >= 7 && !enemy.defeated && !lineComplete) return
			if (enemy.decision === "block") {
				enemyBlocks();
			} else if (enemy.decision === "lAttack" && attackDis <= enemy.lR) {
				enemyLightAttacks();
			} else if (enemy.decision === "hAttack" && attackDis <= enemy.hR) {
				enemyHeavyAttacks();
			} else if (enemy.decision === "scream" && attackDis <= enemy.screamRange) {
				bansheeScreams();
			} else if (enemy.decision === "petrify" && attackDis <= enemy.petrifyRange) {
				enemyPetrifies();
			} else if (enemy.decision === "grasp") {
				hadesGrasp();
			} else if (enemy.decision === "soulTake") {
				hadesTakesSoul();
			} else if (enemy.decision === "speedStrike") {
				hermesSpeedStrike();
			} else if (enemy.decision === "smash") {
				herculesSmash();
			} else {
				enemy.state = "chase";
				enemy.velX = kratosXpos > enemyXpos ? enemy.speed : -enemy.speed;
				enemy.facing = enemy.velX > 0 ? "right" : "left";
				enemy.x += enemy.velX;
			}
		}

		if (enemy.state === "lAttack"|| enemy.state === "hAttack") {
			if (Date.now() > enemy.stateEnd) {
				enemy.state = inRange ? "idle" : "chase";
				enemy.hasHit = false;
				enemy.lAttacking = false;
				enemy.hAttacking = false;
				enemy.decision = null;
				return
			}
		} else if (enemy.state === "block") {
			if (Date.now() > enemy.stateEnd) {
				enemy.state = "idle";
				enemy.blocking = false;
				enemy.decision = null;
			}
		}

		// Attack states handling
		if (enemy.state === "lAttack" && !enemy.hasHit) {
			enemy.attackSound[0].cloneNode().play();
			enemy.hasHit = true;
			const inFront = enemy.facing === "left" ? kratosXpos < enemyXpos : kratosXpos > enemyXpos
			let knockback = 5 + g.currentEnemy + g.currentEnemy;
			if (g.currentEnemy === 1 || g.currentEnemy === 3 || g.currentEnemy === 5 || g.currentEnemy === 8) knockback = 3 + g.currentEnemy
			if (g.kratos.dodging || !inRange || !inFront) {
				return
			} else if (g.kratos.blocking) {
				g.audios.blockSound.cloneNode().play();
				if (enemy.name === "Hoplite" || enemy.name === "Satyr") g.kratos.health -= 0 // no damage for Hoplites or Satyrs
				if (enemy.name === "Minotaur") g.kratos.health -= Math.round(enemy.lD * 0.95) // reduce damage by 95% for the Minotaur
				if (enemy.name === "Hercules") g.kratos.health -= Math.round(enemy.lD * 0.8) // reduce damage by 80% for Hercules
				if (enemy.name === "Zeus") g.kratos.health -= Math.round(enemy.lD * 0.7) // reduce damage by 70% for Zeus
				knockback -= 2;
				g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'))
			} else {
				if (g.currentEnemy <= 4) {
					!g.kratos.petrified ? g.playCaudio(g.audios.hurt[0], g.damageVolume) : g.audios.stoneBreak.cloneNode().play()
				} else if (g.currentEnemy <= 7) {
					!g.kratos.petrified ? g.playCaudio(g.audios.hurt[1], g.damageVolume) : g.audios.stoneBreak.cloneNode().play()
				} else {
					g.playCaudio(g.audios.hurt[2], g.damageVolume)
				}
				
				g.kratos.health -= enemy.lD;
				g.kratos.hitUntil = Date.now() + hitFlashTime;
				g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));

				// Knockback kratos		
				if (!g.kratos.held) knockbackKratos(knockback)
				
				// Stun kratos
				g.kratos.stunned = true;
				g.kratos.stunEnd = Date.now() + enemy.lS;
			}
			
		} else if (enemy.state === "hAttack" && !enemy.hasHit) {
			enemy.attackSound[1].cloneNode().play();
			enemy.hasHit = true;
			const inFront = enemy.facing === "left" ? kratosXpos < enemyXpos : kratosXpos > enemyXpos
			let damage = enemy.hD;
			let knockback = 8 + g.currentEnemy + g.currentEnemy;
			if (g.currentEnemy === 1 || g.currentEnemy === 3 || g.currentEnemy === 5 || g.currentEnemy === 8) knockback = 5 + g.currentEnemy
			
			if (g.kratos.dodging || !inRange || !inFront) return
			if (g.kratos.blocking) {
				function breakBlock() {
					g.audios.blockSound.cloneNode().play();
					g.kratos.blocking = false;
					g.keys['q'] = false;
				}
				if ((enemy.name === "Satyr" && g.currentWeapon >= 1) || (enemy.name === "Minotaur" && g.currentWeapon >= 3) || (enemy.name === "Hercules" && g.currentWeapon >= 4) || (enemy.name === "Zeus" && g.currentWeapon === 5)) {
					breakBlock();
					if (enemy.name === "Satyr") g.kratos.health -= Math.round(damage * 0.85) // reduce damage by 85%
					if (enemy.name === "Minotaur") g.kratos.health -= Math.round(damage * 0.65) // reduce damage by 65% for the Minotaur
					if (enemy.name === "Hercules") g.kratos.health -= Math.round(damage * 0.50) // reduce damage by 50% for Hercules
					if (enemy.name === "Zeus") g.kratos.health -= Math.round(damage * 0.35) // reduce damage by 35% for Zeus
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
					g.kratos.hitUntil = Date.now() + (hitFlashTime - 50);
					knockback -= 2;
					knockbackKratos(knockback);
					return
				} else { 
					breakBlock();
					if (enemy.name === "Satyr") g.kratos.health -= Math.round(damage * 0.75) // reduce damage by 75%
					if (enemy.name === "Minotaur") g.kratos.health -= Math.round(damage * 0.55) // reduce damage by 55% for the Minotaur
					if (enemy.name === "Hercules") g.kratos.health -= Math.round(damage * 0.40) // reduce damage by 40% for Hercules
					if (enemy.name === "Zeus") g.kratos.health -= Math.round(damage * 0.25) // reduce damage by 25% for Zeus
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
					g.kratos.hitUntil = Date.now() + (hitFlashTime / 2);
					knockback -= 3;
					knockbackKratos(knockback);
					return
				}
			}
			
			if (g.currentEnemy <= 4) {
				!g.kratos.petrified ? g.playCaudio(g.audios.hurt[2], g.damageVolume) : g.audios.stoneBreak.cloneNode().play()
			} else if (g.currentEnemy <= 7) {
				!g.kratos.petrified ? g.playCaudio(g.audios.hurt[3], g.damageVolume) : g.audios.stoneBreak.cloneNode().play()
			} else {
				g.playCaudio(g.audios.hurt[4], g.damageVolume)
			}
			g.kratos.health -= damage;
			g.kratos.hitUntil = Date.now() + hitFlashTime;
			g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
			
			if (!g.kratos.held) knockbackKratos(knockback)
			
			g.kratos.stunned = true;
			g.kratos.stunEnd = Date.now() + enemy.hS;
		}

		// Apply physics
		enemy.velY += gravity;
		enemy.y += enemy.velY;

		// Ground collision
		if (enemy.y > groundLevel) {
			enemy.y = groundLevel;
			enemy.velY = 0;
			enemy.onGround = true;
			if (enemy.state === "fall") {
				enemy.state = "idle";
				enemy.decision = null;
			}
		}

		// Keep inside canvas
		if (enemy.x < 0) enemy.x = 0;
		if (enemy.x + enemy.w > battleArea.width) enemy.x = battleArea.width - enemy.w;
	}

	function drawEnemy() {
		let img;
		if (enemy.health === 0 || defeated) {
			img = enemy.facing === "right" ? enemyDeadR : enemyDeadL
			enemy.w = g.eH;
			enemy.h = g.eW - 30;
			if (g.currentEnemy === 2) enemy.h = g.eW - 50
			if (g.currentEnemy === 4) enemy.w = g.eH + 30
			if (g.currentEnemy === 5) enemy.w = g.eH + 20
			if (g.currentEnemy === 6) enemy.h = g.eW - 85
			if (g.currentEnemy === 7) { enemy.w = g.eH + 75; enemy.h = g.eW - 100 }
			if (g.currentEnemy === 8) enemy.h = g.eW - 25
			if (g.currentEnemy === 9) enemy.h = g.eW - 53
		} else if (enemy.name === "Zeus" && enemy.flying && g.kratos.health <= 0) {
			img = enemy.facing === "right" ? enemyVictoryR : enemyVictoryL;
			enemy.w = g.eW;
			enemy.h = g.eH - 5;
		} else if (enemy.lAttacking && enemy.onGround && !enemy.dodging) {
			img = enemy.facing === "right" ? enemyLattackR : enemyLattackL;
			enemy.w = g.eW;
			enemy.h = g.eH;
			if (g.currentEnemy === 2) { enemy.h = g.eH - 18; enemy.w = g.eW + 62 }
			if (g.currentEnemy === 3) { enemy.h = g.eH - 8; enemy.w = g.eW }
			if (g.currentEnemy === 5) { enemy.h = g.eH; enemy.w = g.eW }
			if (g.currentEnemy === 6) { enemy.h = g.eH - 47; enemy.w = g.eW + 37 }
			if (g.currentEnemy === 8) enemy.w = g.eW + 30
			if (g.currentEnemy === 9) { enemy.h = g.eH - 10; enemy.w = g.eW + 27 }
			if (g.currentEnemy === 10) { enemy.h = g.eH - 8; enemy.w = g.eW + 25 }
		} else if (enemy.hAttacking && enemy.onGround && !enemy.dodging) {
			img = enemy.facing === "right" ? enemyHattackR : enemyHattackL;
			enemy.h = 150;
			enemy.w = 175;
			if (g.currentEnemy === 1) enemy.w = g.eW + 25
			if (g.currentEnemy === 2) { enemy.h = g.eH - 17; enemy.w = g.eW + 35 }
			if (g.currentEnemy === 3) { enemy.h = g.eH + 15; enemy.w = g.eW + 59 }
			if (g.currentEnemy === 4) { enemy.h = g.eH; enemy.w = g.eW + 110 }
			if (g.currentEnemy === 5) { enemy.h = g.eH; enemy.w = g.eW }
			if (g.currentEnemy === 6) { enemy.h = g.eH; enemy.w = g.eW + 135 }
			if (g.currentEnemy === 7) { enemy.h = g.eH - 15; enemy.w = g.eW + 66 }
			if (g.currentEnemy === 8) enemy.w = g.eW + 39
			if (g.currentEnemy === 9) { enemy.h = g.eH - 7; enemy.w = g.eW + 85 }
			if (g.currentEnemy === 10) { enemy.h = g.eH - 8; enemy.w = g.eW + 25 }
		} else if (enemy.blocking) {
			img = enemy.facing === "right" ? enemyBlocksR : enemyBlocksL;
			enemy.h = g.eH;
			enemy.w = 110;
			if (g.currentEnemy === 2) enemy.w = g.eW + 12
			if (g.currentEnemy === 4) enemy.w = g.eW - 10
			if (g.currentEnemy === 9) { enemy.h = g.eH - 13; enemy.w = g.eW + 22 }
			if (g.currentEnemy === 10) { enemy.h = g.eH - 8; enemy.w = g.eW + 76 }
		} else if (enemy.screaming) {
			img = enemy.facing === "right" ? bansheeScreamsR : bansheeScreamsL;
			enemy.w = g.eW - 10;
			enemy.h = g.eH;
		} else if (enemy.petrifying) {
			img = enemy.facing === "right" ? enemyPetrifiesR : enemyPetrifiesL;
			enemy.w = g.eW;
			enemy.h = g.eH;
			if (g.currentEnemy === 5) enemy.w = g.eW + 20
		} else if (enemy.soulTaking) {
			img = enemy.facing === "right" ? enemyTakesSoulR : enemyTakesSoulL;
			enemy.w = g.eW - 20;
			enemy.h = g.eH;
		} else if (enemy.grasping) {
			img = enemy.facing === "right" ? enemySummonsR : enemySummonsL;
			enemy.w = g.eW - 100;
			enemy.h = g.eH - 75;
		} else if (enemy.dodging) {
			img = enemy.facing === "right" ? enemyDodgesR : enemyDodgesL;
			enemy.w = g.eW + 15;
			enemy.h = g.eH - 8;
		} else if (enemy.speedStriking) {
			img = enemy.facing === "right" ? enemySprintsR : enemySprintsL;
			enemy.w = g.eW;
			enemy.h = g.eH;
		} else if (enemy.smashing) {
			if (!enemy.smashCount) {
				img = enemy.facing === "right" ? enemyRight : enemyLeft;
				enemy.h = g.eH;
			} else {
				if (enemy.smashCount === 1) img = enemySmashesR
				if (enemy.smashCount === 2) img = enemySmashesL
				enemy.h = g.eH - 50;
			}
			enemy.w = g.eW;
		} else if (enemy.teleporting) {
			img = enemy.facing === "right" ? enemyTeleportsR : enemyTeleportsL;
			enemy.w = g.eW;
			enemy.h = g.eH;
		} else if (enemy.state === "chase") {
			img = enemy.facing === "right" ? enemyChasesR : enemyChasesL;
			enemy.w = g.eW;
			enemy.h = g.eH;
			if (g.currentEnemy === 1 || g.currentEnemy === 5) enemy.w = g.eW + 27
			if (g.currentEnemy === 5) enemy.h = g.eH - 10
			if (g.currentEnemy === 6) { enemy.h = g.eH - 70; enemy.w = g.eW - 30 }
			if (g.currentEnemy === 7) enemy.w = g.eW + 40
			if (g.currentEnemy === 8) enemy.w = g.eW + 10
			if (g.currentEnemy === 9) enemy.w = g.eW - 15
		} else if (enemy.flightState === "chase") {
			img = enemy.facing === "right" ? enemyFliesR : enemyFliesL;
			enemy.w = g.eW + 54;
			enemy.h = g.eH - 44;
		} else if (enemy.state === "idle") {
			img = enemy.facing === "right" ? enemyRight : enemyLeft;
			enemy.w = g.eW;
			enemy.h = g.eH;
		} else if (enemy.state === "fly") {
			img = enemy.facing === "right" ? enemyLevitatesR : enemyLevitatesL;
			enemy.w = g.eW;
			enemy.h = g.eH;
		} else if (enemy.state === "fall") {
			img = enemy.facing === "right" ? enemyFallsR : enemyFallsL;
			enemy.w = g.eH - 16;
			enemy.h = g.eW + 33;
		}
		let drawX = enemy.x;
		if ((enemy.name === "Satyr" || enemy.name === "Hermes" || enemy.name === "Hercules" || enemy.name === "Zeus") && enemy.facing === "left") drawX -= enemy.w - g.eW
		if ((enemy.name === "Hoplite" || enemy.name === "Banshee" || enemy.name === "Gorgon" || enemy.name === "Minotaur" || enemy.name === "Cyclops" || enemy.name === "Hades") && enemy.hAttacking && enemy.facing === "left") drawX -= enemy.w - g.eW
		if (enemy.name === "Medusa" && enemy.hAttacking || enemy.petrifying && enemy.facing === "left") drawX -= g.eW / 4
		if (enemy.name === "Hades" && enemy.grasping && enemy.facing === "left") drawX += g.eW / 4
		if ((enemy.name === "Minotaur" || enemy.name === "Hades") && enemy.lAttacking && enemy.facing === "left") drawX -= g.eW / 4
		drawCharacter(img, drawX, enemy.y, enemy.w, enemy.h, Date.now() < enemy.hitUntil);
	}

	// ===== Character drawing =====

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
		switch (enemy.name) {
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
	const timeOuts = [5200, 4000]; // 6200

	if (enemy.name === "Hermes" || enemy.name === "Hercules") {
		setTimeout(() => {
			lineComplete = true;
		}, timeOuts[g.currentEnemy - 8]);
	}

	if (enemy.name === "Hades" && !enemy.defeated) {
		setTimeout(() => { 
			firstLineC = true;
			g.audios.hadesLines[1].play();
		}, 4200);
		setTimeout(() => { 
			secondLineC = true;
			g.audios.hadesLines[2].play();
		}, 8000);
		setTimeout(() => { 
			thirdLineC = true;
			g.audios.hadesLines[3].play();
		}, 12000);
		setTimeout(() => { fourthLineC = true }, 14700);
		setTimeout(() => { fifthLineC = true }, 19700);
		setTimeout(() => { sixthLineC = true }, 25400);
		setTimeout(() => { lineComplete = true }, 27000);
	}
	
	if (enemy.name === "Zeus") {
		setTimeout(() => { firstLineC = true }, 6270);
		setTimeout(() => { secondLineC = true }, 11000);
		setTimeout(() => { lineComplete = true }, 14200);
	}

	// ==== Canvas UI ====

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
	let redOrbs = 4 + g.currentEnemy * 2;
	if (enemy.name === "Gorgon") redOrbs += 2;
	if (enemy.name === "Minotaur") redOrbs += 2;
	if (enemy.name === "Medusa") redOrbs += 4;
	if (enemy.name === "Cyclops") redOrbs += 7;
	if (enemy.name === "Hades") redOrbs += 11;
	if (enemy.name === "Hermes") redOrbs += 17;
	if (enemy.name === "Hercules") redOrbs += 22;
	if (enemy.name === "Zeus") redOrbs += 29;
	let greenOrbs = 5 + g.currentEnemy * 2;
	if (enemy.name === "Gorgon") greenOrbs += 2;
	if (enemy.name === "Minotaur") greenOrbs += 2;
	if (enemy.name === "Medusa") greenOrbs += 4;
	if (enemy.name === "Cyclops") greenOrbs += 7;
	if (enemy.name === "Hades") greenOrbs += 11;
	if (enemy.name === "Hermes") greenOrbs += 17;
	if (enemy.name === "Hercules") greenOrbs += 22;
	if (enemy.name === "Zeus") greenOrbs += 29;

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

				speed: 0.01 + Math.random() * 0.01,
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
			orb.x = lerp(
				orb.startX + orb.offsetX,
				targetX,
				t
			);

			orb.y = lerp(
				orb.startY + orb.offsetY,
				targetY,
				t
			);

			// Fade out near the end
			if (orb.progress > 0.85) {
				orb.alpha = 1 - (orb.progress - 0.85) / 0.15;
			}

			// Reached Kratos
			if (orb.progress >= 1) {
				if (orb.type === "red") {
					g.kratos.orbs += orb.size - 2;
					document.getElementById("Orbs").innerText = g.kratos.orbs;
					g.audios.redOrbSound.cloneNode().play();
					localStorage.setItem('orbs', g.kratos.orbs);
				} 
				if (orb.type === "green") {
					if (g.kratos.health >= 200) {
						orbs.splice(i, 1);
						return
					} 
					g.kratos.health += orb.size;
					if (g.kratos.health > 200) g.kratos.health = 200
					document.getElementById('Health').innerText = g.kratos.health;
					g.healthUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
					g.audios.greenOrbSound.cloneNode().play();
					localStorage.setItem('health', g.kratos.health);
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
			ctx.fillStyle = orb.type === "red" ? "rgba(180, 0, 11, 0.8)" : "rgba(79, 204, 2, 0.8)";
			ctx.shadowColor = orb.type === "red" ? "rgba(226, 84, 84, 0.7)" : "rgba(96, 231, 168, 0.7)";
			ctx.shadowBlur = 20 + Math.sin(performance.now() * 0.01) * 5;
			ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}

	// ===== FPS count =====

	let frames = 0;

	g.frameCount = setInterval(() => { 
		if (!document.getElementById("FPS")) return
		document.getElementById("FPS").innerText = frames;
		frames = 0;
	}, 1000);

	// ===== Battle loop =====

	function battleLoop() {
		ctx.clearRect(0, 0, battleArea.width, battleArea.height);

		if (!lineComplete && !enemy.defeated) drawText();
		if (!g.paused) updateKratos();
		if (!g.paused) updateEnemy();
		updateSbuttonPrompt();
		updateLightnings();
		if (defeated) updateOrbs();

		drawGraspWarning();
		drawHandGrasp();

		if (enemy.health <= 0) {
			drawEnemy();
			drawKratos();
		} else {
			drawKratos();
			drawEnemy();
		}
		drawLightnings();
		drawSbuttonPrompt();
		if (defeated) drawOrbs();

		frames++;
		if (g.inBattle) requestAnimationFrame(battleLoop);
	}
	battleLoop();
}

export function restart(g) {
	const reset = document.getElementById('Reset');
	
	reset.onmouseover = () => {
		g.audios.hover.play();
		reset.style.animation = 'horizontal-shaking';
		reset.style.animationDuration = '0.5s';
	}
	reset.onmouseout = () => {
		g.audios.hover.pause();
		g.audios.hover.currentTime = 0;
		reset.style.animation = 'no';
	}
	reset.onclick = () => { 
        g.stopAmbience();
        g.audios.exit.play();
        setTimeout(() => { g.audios.ahShit.play() }, 1800 );
        g.kratos.health = 100;
        g.kratos.orbs = 0;
        g.currentWeapon = 0;
        g.potions = 0;
        g.inventory = ["Blades of chaos"];
        [g.hoplite, g.banshee, g.satyr, g.gorgon, g.minotaur, g.medusa, g.cyclops, g.hades, g.hermes, g.hercules, g.zeus].forEach((enemy) => enemy.defeated = false );
        [ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'gorgonDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hadesDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated'].forEach(save => localStorage.removeItem(save));
        g.inBattle = false;
		clearInterval(g.frameCount);
		sparta(g);
		g.resetThem();
        document.getElementById('Main-text').innerText = "Welcome back. It seems that you died last time. Don't do that again. \n  (❁´◡`❁)";
    }
}

export function lowHealth(g) {
	g.audios.heartbeat.play();
	[document.querySelector('.Underworld-battle'), document.querySelector('.Olympus-battle')].forEach((container) => { if (container) container.style.boxShadow = '#880808 0px 20px 30px -10px' });
}

function victory(g) {
	g.stopMusic();
	if (g.currentEnemy <= 4) {
		g.audios.underworldAm.play()
	} else {
		g.audios.olympusAm.play()
	}
	document.querySelector('.Efiller').style.width = `${g.enemies[g.currentEnemy].health}%`;
	if (g.currentEnemy < 10) { 
		g.audios.defeatSound.play();
		if (!g.enemies[g.currentEnemy].deated) g.notify();
		document.getElementById('Text').innerText = 'You have defeated the enemy. You have now earned some orbs from the defeated enemy.';
	} else { 
		g.audios.wonned.play();
		document.getElementById('Text').innerText = "You defeated Zeus! You have finally completed this absolute SHIT game! 🤩";
	}
	[ document.getElementById("Return-Underworld"), document.getElementById("Return-Olympus") ].forEach((button) => { if (button) button.style.display = 'block' });
}

export function death(g) {
	g.stopMusic();
	g.audios.heartbeat.pause();
	g.audios.heartbeat.currentTime = 0;
	if (g.kratos.petrified) g.audios.stoneBroke.play()
	g.kratos.health = 0;
	setTimeout(() => { g.audios.deathScream.play() }, 1100 );
	document.getElementById('Health').innerText = g.kratos.health;
	document.querySelector('.Enemy-stats').style.display = 'none';
	document.querySelector('.Hotbar').style.display = 'none';
	document.getElementById('Text').innerText = "You're dead 🫥. Guess now you really are the \"Ghost\" of sparta";
	setTimeout(() => {
		document.getElementById('You-dead').style.display = 'block';
		document.getElementById('Reset').style.display = 'block';
	}, 2700 );
	[document.querySelector('.Underworld-battle'), document.querySelector('.Olympus-battle')].forEach((container) => { if (container) container.style.background = 'black' });
	[ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated' ].forEach(save => localStorage.removeItem(save));
}