import { sparta } from '../scenes/sparta.js';

export function battle(g) {
	g.inBattle = true;
	
	const battleArea = document.querySelector('.Battle-area');
	const ctx = battleArea.getContext('2d');
	
	const ratio = window.devicePixelRatio || 1;

    // Set canvas bitmap size based on DPR
    battleArea.width = battleArea.offsetWidth * ratio;
    battleArea.height = battleArea.offsetHeight * ratio;

	//console.log("Canvas dimentions:", battleArea.width, battleArea.height);

    // Scale the drawing context
    ctx.scale(ratio, ratio);

	// ===== Battle constants =====

	const gravity = 0.8;
	const groundLevel = 470; 
	const jumpPower = -18;
	const hitFlashTime = 200; // ms to stay tinted red
	const enemy = g.enemies[g.currentEnemy];
	
	g.kratos.y = groundLevel;
	enemy.y = groundLevel;

	// ===== Load images =====
	
	const kratosStandL = new Image();
	kratosStandL.src = "Imagery/Kratos standing left.png";
	const kratosStandR = new Image();
	kratosStandR.src = "Imagery/Kratos standing right.png";

	const kratosFightingStanceL = new Image();
	const kratosFightingStanceR = new Image();

	const kratosWalkLeft = new Image();
	kratosWalkLeft.src = "Imagery/Kratos walkin left.png";
	const kratosWalkRight = new Image();
	kratosWalkRight.src = "Imagery/Kratos walkin right.png";
	
	const kratosFallsLeft = new Image();
	kratosFallsLeft.src = "Imagery/Kratos lands left.png";
	const kratosFallsRight= new Image();
	kratosFallsRight.src = "Imagery/Kratos lands right.png";
	const kratosJumpsLeft = new Image(); 
	kratosJumpsLeft.src = "Imagery/Kratos jumps left.png";
	const kratosJumpsRight = new Image(); 
	kratosJumpsRight.src = "Imagery/Kratos jumps right.png";
	
	const kratosAttackLeft = new Image();
	const kratosAttackRight = new Image();
	
	const kratosAirAttackLeft = new Image();
	const kratosAirAttackRight = new Image();
	
	const kratosBlocksLeft = new Image();
	const kratosBlocksRight = new Image();

	const kratosDeadL = new Image();
	kratosDeadL.src = "Imagery/Kratos dead left.png";
	const kratosDeadR = new Image();
	kratosDeadR.src = "Imagery/Kratos dead right.png";

	const enemyLeft = new Image();
	enemyLeft.src = `Imagery/${enemy.name} facing left.png`;
	const enemyRight = new Image();
	enemyRight.src = `Imagery/${enemy.name} facing right.png`;
	
	const enemyChasesL = new Image();
	enemyChasesL.src = `Imagery/${enemy.name} chasing left.png`;
	const enemyChasesR = new Image();
	enemyChasesR.src = `Imagery/${enemy.name} chasing right.png`;
	
	const enemyAttackR = new Image();
	enemyAttackR.src = `Imagery/${enemy.name} attacks right.png`;
	const enemyAttackL = new Image();
	enemyAttackL.src = `Imagery/${enemy.name} attacks left.png`;

	function updateKratosImages() {
		kratosFightingStanceL.src = `Imagery/Kratos fighting stance left (${g.weapons[g.currentWeapon].name})${!g.currentWeapon && attacked ? '-lit' : ''}.png`;
		kratosFightingStanceR.src = `Imagery/Kratos fighting stance right (${g.weapons[g.currentWeapon].name})${!g.currentWeapon && attacked ? '-lit' : ''}.png`;
		kratosAttackLeft.src = `Imagery/Kratos attacks left with ${g.weapons[g.currentWeapon].name.toLowerCase()}.png`;
		kratosAttackRight.src = `Imagery/Kratos attacks right with ${g.weapons[g.currentWeapon].name.toLowerCase()}.png`;
		kratosAirAttackLeft.src = `Imagery/Kratos aerial attack left with ${g.weapons[g.currentWeapon].name.toLowerCase()}.png`;
		kratosAirAttackRight.src = `Imagery/Kratos aerial attack right with ${g.weapons[g.currentWeapon].name.toLowerCase()}.png`;
		kratosBlocksLeft.src = `Imagery/Kratos blocking left with ${g.weapons[g.currentWeapon].name.toLowerCase()}.png`;
		kratosBlocksRight.src = `Imagery/Kratos blocking right with ${g.weapons[g.currentWeapon].name.toLowerCase()}.png`;
	}
	
	// ===== Dodge settings =====

	let dodgeDuration = 400; // ms
	let dodgeSpeedMultiplier = g.kratos.speed - .5;
	g.kratos.dodging = false;
	g.kratos.dodgeEnd = 0;

	// ===== Knock back =====

	let knockbackStrength = 11;

	// ==== Block settings ====

	g.kratos.blocking = false;
	g.kratos.blockStart = 0;
	g.kratos.blockDuration = 1700;
	g.kratos.blockCooldown = 2800;
	g.kratos.lastBlock = 0;

	// ===== Enemy setup ==== 

	enemy.velX = 0;
	enemy.velY = 0;
	enemy.onGround = true;
	enemy.attacking = false;
	enemy.facing = "left";
	enemy.alpha = 1;
	enemy.hitUntil = 0;
	enemy.lastAttack = 0;
	enemy.deathTime = 0;
	enemy.stunned = false;
	enemy.stunEnd = 0;
	enemy.knockbackVel = 0;

	// ===== Input =====
	
	document.addEventListener("keydown", g.keydownHandler);
	document.addEventListener("keyup", g.keyupHandler);

	// ===== Battle functions =====
	
	let attacked = false;
	let defeated = false;
	
	const timeOuts = [5200, 4000, 6200];
	
	let firstLineC = false;
	let secondLineC = false;
	
	function drawText() {
		ctx.font = "17px GodOfWar";
		ctx.fillStyle = "#ddd";
		switch (g.currentEnemy) {
			case 6:
				ctx.fillText("You may have brute force... but you lack speed!", 420, 300);
			break;
			case 7:
				ctx.fillText("Hello... brother.", 500, 300)
			break;
			case 8:
				if (!firstLineC && !secondLineC) ctx.fillText("Such chaos... I will have much to do after I kill you.", 420, 285);
				if (firstLineC && !secondLineC) ctx.fillText("Face me father... it is time to end this!", 35, 295);
				if (firstLineC && secondLineC) ctx.fillText("Yes my son! It is time!", 670, 285);
			break;
		}
	}
	let lineComplete;
	setTimeout(() => {
		lineComplete = true;
	}, timeOuts[g.currentEnemy - 6]);
	
	if (g.currentEnemy === 8) {
		setTimeout(() => { 
			lineComplete = false; 
			firstLineC = true;
		}, 6270);
		setTimeout(() => { secondLineC = true }, 11000);
		setTimeout(() => { lineComplete = true }, 14200);
	}

	function updateKratos() {
		if (g.kratos.dead) return

		let speed = g.kratos.speed;

		// Handle dodge

		if (g.kratos.dodging) {
			speed *= dodgeSpeedMultiplier;
			if (Date.now() > g.kratos.dodgeEnd) {
				g.kratos.dodging = false;
			}
		}
		
		// Horizontal movement
		const blockingGroundAttack = g.kratos.attacking && g.kratos.onGround;
		if (blockingGroundAttack || g.kratos.blocking) {
			g.kratos.velX = 0;
		} else {
			if (g.keys["ArrowLeft"] || g.keys["a"] || g.keys["A"]) {
				if (g.currentEnemy > 5 && !enemy.defeated) { lineComplete ? g.kratos.velX = -speed : g.kratos.velX = 0 } else { g.kratos.velX = -speed }
				g.kratos.facing = "left";
			} else if (g.keys["ArrowRight"] || g.keys["d"] || g.keys["D"]) {
				if (g.currentEnemy > 5 && !enemy.defeated) { lineComplete ? g.kratos.velX = speed : g.kratos.velX = 0 } else { g.kratos.velX = speed }
				g.kratos.facing = "right";
			} else {
				g.kratos.velX = 0;
			}
		}
		
		// Only block overlap if not dodging and if the enemy is not defeated
		if (!g.kratos.dodging && !defeated) {
			preventOverlap();
		}

		// Jump
		if (g.keys[" "] && g.kratos.onGround) {
			g.audios.evadeSound.cloneNode().play();
			g.kratos.velY = jumpPower;
			g.kratos.onGround = false;
			lineComplete = true;
		}

		// Attack with e
		if (g.keys["e"] && Date.now() - g.kratos.lastAttack > g.kratos.aC && enemy.health !== 0 && !g.kratos.blocking) {
			g.kratos.attacking = true;
			g.kratos.attackEnd = Date.now() + 1474;
			g.kratos.lastAttack = Date.now();
			attacked = true;

			// Check if enemy is in range
			if (Math.abs(g.kratos.x - enemy.x) < g.kratos.aR && Math.abs(g.kratos.y - enemy.y) < g.kratos.h) {
				enemy.hitSound.cloneNode().play();
				enemy.health -= g.weapons[g.currentWeapon].damage;
				enemy.hitUntil = Date.now() + hitFlashTime; // flash red

				// Knockback
				enemy.knockbackVel = g.kratos.facing === "right" ? knockbackStrength : -knockbackStrength;
				enemy.stunned = true;
				enemy.stunEnd = Date.now() + 700;

				// Ensures the enemy stops its current attack
				enemy.attacking = false;
				enemy.velX = 0;

				if (enemy.health <= 0) {
					enemy.health = 0;
					enemy.deathTime = Date.now();
					if (!enemy.defeated) {
						enemy.defeated = true;
						localStorage.setItem(`${enemy.name.toLowerCase()}Defeated`, enemy.defeated);
					}
				}
				document.querySelector('.Efiller').style.width = `${enemy.health}%`;
			}
		}

		g.keys['e'] = false;
		// If attack duration expired, reset
		if (g.kratos.attacking && Date.now() > g.kratos.attackEnd) {
			g.kratos.attacking = false;
			g.keys['e'] = false;
		}

		// Block with q
		if (g.keys["q"] && !g.kratos.blocking && Date.now() - g.kratos.lastBlock > g.kratos.blockCooldown) {
			g.kratos.blocking = true;
			g.kratos.blockStart = Date.now();
		}

		// End block after duration
		if (g.kratos.blocking && Date.now() - g.kratos.blockStart > g.kratos.blockDuration) {
			g.kratos.blocking = false;
			g.kratos.lastBlock = Date.now();
			g.keys["q"] = false;
		}

		g.keys["q"] = false;

        // Dodge
        if (g.keys["Shift"] && !g.kratos.dodging) {
            g.audios.evadeSound.play();
			g.kratos.dodging = true;
			g.kratos.dodgeEnd = Date.now() + dodgeDuration;
        }

		g.keys["Shift"] = false;

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

	function updateEnemy() {
		if (enemy.health === 0) {
			// Fade out and "fall" after death
			enemy.alpha -= 0.02;
			//if (enemy.y <= 800) enemy.y += 1.5;
			if (enemy.alpha <= 0) enemy.alpha = 0
			if (!defeated) victory(g)
			defeated = true;
			return;
		}
		
		const distance = g.kratos.x - enemy.x;

		// Handle stun
		if (enemy.stunned) {
			// Apply knockback
			enemy.x += enemy.knockbackVel;
			// Gradually slow knockback down
			enemy.knockbackVel *= 0.85;

			// End stun when time is up or knockback is very small
			if (Date.now() > enemy.stunEnd || Math.abs(enemy.knockbackVel) < 0.5) {
				enemy.stunned = false;
				enemy.knockbackVel = 0;
			}

			// While stunned, skip chasing or attacking
			return;
		}

		// Move toward Kratos
		if (Math.abs(distance) < 400 && !g.kratos.dead) {
			enemy.velX = distance > 0 ? enemy.speed : -enemy.speed;
			enemy.facing = distance > 0 ? "right" : "left";
		} else {
			enemy.velX = 0;
		}
		
		// Only block overlap if not dodging
		if (!g.kratos.dodging) {
			preventOverlap();
		}

		// Attack if close
		if (Math.abs(enemy.x - g.kratos.x) < enemy.aR && Date.now() - enemy.lastAttack > enemy.aC && !g.kratos.dead) {
			enemy.attacking = true;
			enemy.attackEnd = Date.now() + 1650;
			enemy.lastAttack = Date.now();

			if (g.kratos.blocking) {
				g.audios.blockSound.cloneNode().play();
				enemy.velX *= -0.8; // small pushback
				if (g.currentEnemy === 0 || g.currentEnemy === 1) return; // no damage for weaker enemies
				if (g.currentEnemy < 5) g.kratos.health -= enemy.damage * 0.85; // reduce damage by 85%
				if (g.currentEnemy === 5) g.kratos.health -= enemy.damage * 0.7; // reduce damage by 70% for cyclops
				if (g.currentEnemy > 5) g.kratos.health -= enemy.damage * 0.5; // reduce damage by 50%
			} else {
				enemy.attackSound.cloneNode().play();
				g.kratos.health -= enemy.damage;
				g.kratos.hitUntil = Date.now() + hitFlashTime;
			} 
			g.healthCheck(document.querySelector('.filler'));
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
		updateKratosImages();
		let img;
		if (g.kratos.health > 0) {
			if (!g.kratos.onGround) {  
				// In the air
				if (g.kratos.attacking) {
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
			} else if (g.kratos.velX > 0) {
				img = kratosWalkRight;
				g.kratos.w = 115;
			} else if (g.kratos.velX < 0) {
				img = kratosWalkLeft;
				g.kratos.w = 115;
			} else {
				// On the ground
				if (g.kratos.blocking) {
					img = g.kratos.facing === "right" ? kratosBlocksRight : kratosBlocksLeft;
					g.kratos.w = 150;
				} else if (enemy.health !== 0) { 
					if (g.kratos.x < enemy.x) {
						img = g.kratos.attacking ? kratosAttackRight : kratosFightingStanceR;
						g.kratos.attacking ? g.kratos.w = 170 : g.kratos.w = 150
					} else {
						img = g.kratos.attacking ? kratosAttackLeft : kratosFightingStanceL;
						g.kratos.attacking ? g.kratos.w = 170 : g.kratos.w = 150
					}
				} else { 
					img = g.kratos.facing === "right" ? kratosStandR : kratosStandL;
					g.kratos.w = 119;
				}
			}
		} else { 
			img = g.kratos.facing === "right" ? kratosDeadR : kratosDeadL
			g.kratos.w = 160;
			g.kratos.h = 55;
		}
		drawCharacter(img, g.kratos.x, g.kratos.y, g.kratos.w, g.kratos.h, Date.now() < g.kratos.hitUntil);
	}

	function drawEnemy() {
		if (enemy.alpha <= 0) return;
		let img;
		if (enemy.attacking) {
			img = enemy.facing === "right" ? enemyAttackR : enemyAttackL;
			if (g.currentEnemy === 8) enemy.w = 189;
			if (g.currentEnemy === 2) enemy.w = 220;
		} else if (enemy.velX !== 0) {
			img = enemy.facing === "right" ? enemyChasesR : enemyChasesL;
			if (g.currentEnemy === 8) enemy.w = g.eW;
		} else {
			img = enemy.facing === "right" ? enemyRight : enemyLeft;
			enemy.w = g.eW;
		}
		drawCharacter(img, enemy.x, enemy.y, enemy.w, enemy.h, Date.now() < enemy.hitUntil);
	}

	function preventOverlap() {
		if (!g.kratos.onGround || !enemy.onGround) return;
		
		const minGap = 5; // pixels of breathing room
		const dx = (g.kratos.x + g.kratos.w / minGap) - (enemy.x + enemy.w / minGap); 
		const overlap = (g.kratos.w / minGap + enemy.w / minGap) - Math.abs(dx); 
		if (overlap > -minGap) { 
			// Push both characters apart equally 
			const push = (overlap + minGap) / 2; 
			if (dx > 0) { 
				g.kratos.x += push; enemy.x -= push 
			} else { g.kratos.x -= push; enemy.x += push } 
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
		if (g.inBattle) requestAnimationFrame(battleLoop);
	}
	battleLoop();
}

export function restart(g) {
	const reset = document.getElementById('Reset');
	
	reset.onmouseover = () => {
		g.audios.hoverSound.play();
		reset.style.animation = 'horizontal-shaking';
		reset.style.animationDuration = '0.5s';
	}
	reset.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		reset.style.animation = 'no';
	}
	reset.onclick = () => { 
        g.stopAmbience();
        g.audios.returnSound.play();
        g.resetThem();
        setTimeout(() => {
            g.audios.ahShit.play();
        }, 1800 );
        g.kratos.health = 100;
        g.kratos.orbs = 0;
        g.currentWeapon = 0;
        g.potions = 0;
        g.inventory = ["Blades of chaos"];
        [g.hoplite, g.banshee, g.satyr, g.minotaur, g.medusa, g.cyclops, g.hermes, g.hercules, g.zeus].forEach((enemy) => enemy.defeated = false );
        [ 'health', 'orbs', 'inventory', 'currentWeapon', 'hopliteDefeated', 'bansheeDefeated', 'satyrDefeated', 'minotaurDefeated', 'medusaDefeated', 'cyclopsDefeated', 'hermesDefeated', 'herculesDefeated', 'zeusDefeated'].forEach(save => localStorage.removeItem(save));
        sparta(g);
        g.inBattle = false;
        document.getElementById('potion-quantity').style.display = 'none';
        document.getElementById('Main-text').innerText = "Welcome back. It seems that you died last time. Don't do that again. \n  (❁´◡`❁)";
    }
}

export function lowHealth(g, healthFiller) {
	g.audios.heartbeat.play();
	[document.querySelector('.Underworld-battle'), document.querySelector('.Olympus-battle')].forEach((container) => { if (container) container.style.boxShadow = '#880808 0px 20px 30px -10px' });
	healthFiller.style.background = '#900604';
}

let count = 0;

function victory(g) {
	g.stopMusic();
	if (g.currentEnemy <= 4) {
		g.audios.underworldAm.play()
	} else {
		g.audios.olympusAm.play()
	}
	document.querySelector('.Efiller').style.width = `${g.enemies[g.currentEnemy].health}%`;
	// document.querySelector('.Enemy-stats').style.display = 'none';
	if (g.currentEnemy < 8) { 
		g.audios.defeatSound.play();
		if (!g.enemies[g.currentEnemy].deated) g.notify();
	} else { 
		g.audios.wonned.play();
		document.getElementById('Text').innerText = "You defeated Zeus! You have finally completed this SHIT game! 🤩";
	}
	const rewards = [24, 40, 57, 76, 100, 120, 144, 167];
	const durations = [100, 89, 82, 75, 67, 58, 50, 44]
	var enemDefR = setInterval(( )=> {
		count++;
		g.kratos.orbs += 1;
		document.getElementById('Orbs').innerText = g.kratos.orbs;
		if (count === rewards[g.currentEnemy]) {
			count = 0;
			clearInterval(enemDefR);
			localStorage.setItem('orbs', g.kratos.orbs);
		}
	}, durations[g.currentEnemy]);
	setTimeout (() => {
		const soundMap = {
			0: g.audios.orbSound,
			1: g.audios.orbsSound,
			2: g.audios.orbsSound,
			8: g.audios.orbsSound3,
		};
		(soundMap.currentEnemy || g.audios.orbsSound2).play();
	}, 1400 );
	[ document.getElementById("Return-Underworld"), document.getElementById("Return-Olympus") ].forEach((button) => { if (button) button.style.display = 'block' });
	document.getElementById('Text').innerText = 'You have defeated the enemy. You have now earned some orbs from the defeated enemy.';
	//document.removeEventListener("keydown", skh);
	localStorage.setItem('health', g.kratos.health);
}

export function death(g, healthFiller) {
	g.stopMusic();
	g.audios.heartbeat.pause();
	g.audios.heartbeat.currentTime = 0;
	g.audios.deathScream.play();
	g.kratos.health = 0;
	document.getElementById('Health').innerText = g.kratos.health;
	healthFiller.style.width = '0';
	g.kratos.dead = true;
	g.kratos.deathTime = Date.now();
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