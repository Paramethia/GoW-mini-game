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
	const groundLevel = 430; 
	const jumpPower = -16;
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
	kratosFightingStanceL.src = "Imagery/Kratos fighting stance left (Blades of chaos).png";
	const kratosFightingStanceR = new Image();
	kratosFightingStanceR.src = "Imagery/Kratos fighting stance right (Blades of chaos).png";

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
	kratosAttackLeft.src = "Imagery/Kratos attacks left.png";
	const kratosAttackRight = new Image();
	kratosAttackRight.src = "Imagery/Kratos attacks right.png";
	
	const kratosAirAttackLeft = new Image();
	kratosAirAttackLeft.src = "Imagery/Kratos aerial attack left.png";
	const kratosAirAttackRight = new Image();
	kratosAirAttackRight.src = "Imagery/Kratos aerial attack right.png";

	const enemyLeft = new Image();
	enemyLeft.src = `Imagery/${enemy.name} facing left.png`;
	const enemyRight = new Image();
	enemyRight.src = `Imagery/${enemy.name} facing right.png`;
	
	const enemyRunsL = new Image();
	if (g.currentEnemy > 5) enemyRunsL.src = `Imagery/${enemy.name} running left.png`;
	const enemyRunsR = new Image();
	if (g.currentEnemy > 5) enemyRunsR.src = `Imagery/${enemy.name} running right.png`;
	
	const enemyAttackR = new Image();
	enemyAttackR.src = `Imagery/${enemy.name} attacks right.png`;
	const enemyAttackL = new Image();
	enemyAttackL.src = `Imagery/${enemy.name} attacks left.png`;
	
	const kratosAttackSounds = [g.audios.attacksHoplite, g.audios.attacksBanshee, g.audios.attacksSatyr, g.audios.attacksMinotaur, g.audios.attacksMedusa, g.audios.attacksCyclops, g.audios.attacks, g.audios.attacks2, g.audios.attacksZeus];
	const enemyAttackSounds = [g.audios.hopliteAttacks, g.audios.bansheeAttacks2, g.audios.satyrAttacks, g.audios.minotaurAttacks, g.audios.bansheeAttacks2, g.audios.cyclopsAttacks, g.audios.herculesAttacks, g.audios.herculesAttacks2, g.audios.zeusAttacks]
	
	// ===== Dodge settings =====

	let dodgeDuration = 400; // ms
	let dodgeSpeedMultiplier = g.kratos.speed - .5;
	g.kratos.dodging = false;
	g.kratos.dodgeEnd = 0;

	// ===== Input =====
	
	document.addEventListener("keydown", g.keydownHandler)
	document.addEventListener("keyup", g.keyupHandler);
	
	// ===== Battle functions =====
	
	let defeated = false;
	
	const timeOuts = [5200, 4000, 6200];
	
	let firstLineC = false;
	let secondLineC = false;
	
	function drawText() {
		ctx.font = "17px GodOfWar";
		ctx.fillStyle = "#ddd";
		switch (g.currentEnemy) {
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
	}, timeOuts[g.currentEnemy - 6]);
	
	if (g.currentEnemy === 8) {
		setTimeout(() => { 
			lineComplete = false; 
			firstLineC = true;
		}, 6270);
		setTimeout(() => { secondLineC = true }, 11000);
		setTimeout(() => {  lineComplete = true }, 14200);
	}

	function updateKratos() {
		if (g.kratos.dead) {
			// Fade out and "fall" after death
			g.kratos.alpha -= 0.02
			if (g.kratos.alpha <= 0) g.kratos.alpha = 0
			if (g.kratos.y <= 800) g.kratos.y += 1.5
			return;
		}
		
		let speed = g.kratos.speed;

		// Handle dodge
		if (g.kratos.dodging) {
			speed *= dodgeSpeedMultiplier;
			if (Date.now() > g.kratos.dodgeEnd) {
				g.kratos.dodging = false;
			}
		}
		
		// Horizontal movement
		if (g.keys["ArrowLeft"] || g.keys["a"] || g.keys["A"]) {
			if (g.currentEnemy > 5 && !enemy.defeated) { lineComplete ? g.kratos.velX = -speed : g.kratos.velX = 0 } else { g.kratos.velX = -speed }
			g.kratos.facing = "left";
		} else if (g.keys["ArrowRight"] || g.keys["d"] || g.keys["D"]) {
			if (g.currentEnemy > 5 && !enemy.defeated) { lineComplete ? g.kratos.velX = speed : g.kratos.velX = 0 } else { g.kratos.velX = speed }
			g.kratos.facing = "right";
		} else {
			g.kratos.velX = 0;
		}
		
		// Only block overlap if not dodging and if the enemy is defeated
		if (!g.kratos.dodging && !defeated) {
			preventOverlap();
		}

		// Jump
		if (g.keys[" "] && g.kratos.onGround) {
			g.audios.evadeSound.play();
			g.kratos.velY = jumpPower;
			g.kratos.onGround = false;
			lineComplete = true;
		}

		// Attack with e
		if (g.keys["e"] && Date.now() - g.kratos.lastAttack > g.kratos.aC && enemy.health !== 0) {
			g.kratos.attacking = true;
			g.kratos.attackEnd = Date.now() + 1474;
			g.kratos.lastAttack = Date.now();

			// Check if enemy is in range
			if (Math.abs(g.kratos.x - enemy.x) < g.kratos.aR && Math.abs(g.kratos.y - enemy.y) < g.kratos.h) {
				kratosAttackSounds[g.currentEnemy].play();
				enemy.health -= g.weapons[g.currentWeapon].damage;
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
				const hopDistance = (g.kratos.facing === "right" ? 5 : -5); // toward enemy
				const hopDuration = 450; // ms

				// Temporarily adjust position
				g.kratos.y -= hopHeight;
				g.kratos.x += hopDistance;

				// Reset after hop duration
				setTimeout(() => {
					enemy.y = groundLevel;
				}, hopDuration);
			}
		}

        // Dodge

        if (g.keys["Shift"] && !g.kratos.dodging) {
            g.audios.evadeSound.play();
			g.kratos.dodging = true;
			g.kratos.dodgeEnd = Date.now() + dodgeDuration;
        }
		
		// If attack duration expired, reset
		if (g.kratos.attacking && Date.now() > g.kratos.attackEnd) {
			g.kratos.attacking = false;
		}

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
			if (enemy.y <= 800) enemy.y += 1.5;
			if (enemy.alpha <= 0) enemy.alpha = 0
			if (!defeated) victory(g)
			defeated = true;
			return;
		}
		
		const distance = g.kratos.x - enemy.x;

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
			enemyAttackSounds[g.currentEnemy].play();
			g.kratos.health -= enemy.damage;
			g.healthCheck(document.querySelector('.filler'));
			g.kratos.hitUntil = Date.now() + hitFlashTime; // flash red

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
		if (!g.kratos.onGround) {  
			// In the air
			if (g.kratos.attacking) {
				img = g.kratos.facing === "right" ? kratosAirAttackRight : kratosAirAttackLeft;
				g.kratos.w = 100;
			} else if (g.kratos.velY < 0) {
				// Jumping
				img = g.kratos.facing === "right" ? kratosJumpsRight : kratosJumpsLeft;
				g.kratos.w = 112;
			} else {
				// Falling
				img = g.kratos.facing === "right" ? kratosFallsRight : kratosFallsLeft;
				g.kratos.w = 112;
			}
		} else if (g.kratos.velX > 0) {
			img = kratosWalkRight;
			g.kratos.w = 65;
		} else if (g.kratos.velX < 0) {
			img = kratosWalkLeft;
			g.kratos.w = 65;
		} else {
			// On the ground
			if (enemy.health !== 0) { 
				if (g.kratos.x < enemy.x) {
					img = g.kratos.attacking ? kratosAttackRight : kratosFightingStanceR;
					g.kratos.w = 99;
				} else {
					img = g.kratos.attacking ? kratosAttackLeft : kratosFightingStanceL;
					g.kratos.w = 99;
				}
			} else { 
				img = g.kratos.facing === "right" ? kratosStandR : kratosStandL;
				g.kratos.w = 69;
			}
		}
		drawCharacter(img, g.kratos.x, g.kratos.y, g.kratos.w, g.kratos.h, Date.now() < g.kratos.hitUntil);
	}

	function drawEnemy() {
		if (enemy.alpha <= 0) return;
		let img;
		if (enemy.attacking) {
			img = enemy.facing === "right" ? enemyAttackR : enemyAttackL;
			if (g.currentEnemy ===8) enemy.w = 99;
		} else if (enemy.velX !== 0 && g.currentEnemy > 5) {
			img = enemy.facing === "right" ? enemyRunsR : enemyRunsL;
			if (g.currentEnemy ===8) enemy.w = 78;
		} else {
			img = enemy.facing === "right" ? enemyRight : enemyLeft;
			if (g.currentEnemy ===8) enemy.w = 78;
		}

		drawCharacter(img, enemy.x, enemy.y, enemy.w, enemy.h, Date.now() < enemy.hitUntil);
	}

	function preventOverlap() {
		if (!g.kratos.onGround || !enemy.onGround) return;
		
		const minGap = 5; // pixels of breathing room
		const dx = (g.kratos.x + g.kratos.w / 5) - (enemy.x + enemy.w / 5);
		const overlap = (g.kratos.w / 5 + enemy.w / 5) - Math.abs(dx);

		if (overlap > -minGap) {
			// Push both characters apart equally
			const push = (overlap + minGap) / 2;
			if (dx > 0) {
				g.kratos.x += push;
				enemy.x -= push;
			} else {
				g.kratos.x -= push;
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
	document.getElementById('Enemy-health').innerText = 0;
	// document.querySelector('.Enemy-stats').style.display = 'none';
	if (g.currentEnemy < 8) { 
		g.audios.defeatSound.play();
		if (!g.enemies[g.currentEnemy + 1].deated) g.notify();
	} else { 
		g.audios.wonned.play();
		document.getElementById('Text').innerText = "You defeated Zeus! You have finally completed this SHIT game! 🤩";
	}
	const rewards = [35, 59, 80, 100, 125, 150, 170, 189];
	const durations = [100, 89, 82, 75, 67, 58, 50, 44]
	var enemDefR = setInterval(( )=> {
		count++;
		g.kratos.orbs += 1;
		document.getElementById('Orbs-text').innerText = g.kratos.orbs;
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
/*
function beatGame(g) {
	g.audios.zeusBattle.pause();
	g.audios.zeusBattle.currentTime = 0;
	g.audios.wonned.play();
	localStorage.setItem('health', g.kratos.health);
	game.style.transform = 'none';
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
*/