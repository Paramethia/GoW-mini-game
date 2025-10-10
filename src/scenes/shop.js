import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { sparta } from './sparta.js';

export function shop(g){
	g.game.innerHTML = `
		<div class="Shop">
			${settings(g, true)}
			<center>
			${stats(g)}
			<div id="Text">
				You enter the shop. You see a bunch of weapons that vary in power.. also a potion of healing. Get the ones you can, or take a look at them for now if you are currently a brokie.
			</div>
            <div class="Mid">
                <img id="Sparta" src="Imagery/Sparta.png">
                
                <img id="In-shop" src="Imagery/In shop.png">
                
                <img id="Mvillager" src="Imagery/Minecraft villager.png">
                <img id="B-o-c" src="Imagery/Blades of chaos.png">
                <img id="Potion" src="Imagery/Health potion.png">
                <img id="Nemesis-whip" src="Imagery/Nemesis whip.png">
                <img id="Whip-claim" src="Imagery/Kratos with Nemesis whip.png">
                <img id="Gauntlet-of-Zeus" src="Imagery/Gauntlet of Zeus.png">
                <img id="Gauntlet-claim" src="Imagery/Kratos with Gauntlet of Zeus.png">
                <img id="Claws-of-Hades" src="Imagery/Claws of Hades.png">
                <img id="Claws-claim" src="Imagery/Kratos with Claws of hades.png">
                <img id="Blade-of-Olympus" src="Imagery/Blade of Olympus.png">
                <img id="Blade-claim" src="Imagery/Kratos with Blade of Olympus.jpg">
                
                <div class="Sell-price">
                    <i><span id="Sell-text"> </span></i>
                </div>
                <div class="Potion-info">
                    <i class="Item-info" id="italics"> <font color="#299617"> +14 health </font></i> <br>
                    <i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 11 orbs </i>
                </div>
                <div class="Whip-info">
                    <i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 55  orbs </i> <br>
                    <i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${g.weapons[1].damage} </i>
                </div>
                <div class="Gauntlet-info">
                    <i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 99  orbs </i> <br>
                    <i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${g.weapons[2].damage}  </i>
                </div>
                <div class="Claws-info">
                    <i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 155  orbs </i> <br>
                    <i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${g.weapons[3].damage} </i>
                </div>
                <div class="BladeO-info">
                    <i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 200 orbs </i> <br>
                    <i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${g.weapons[4].damage} </i>
                </div>
            </div>
            
            <div class="Buttons">
                <button id="Sell-weapon">Sell weapon</button>
                <button id="PotionB">Health potion</button>
                <button id="Nemesis-whipB">Nemesis whip</button>
                <button id="GauntletB">Gauntlet of Zeus</button>
                <button id="Claws">Claws of Hades</button>
                <button id="Blade-of-OlympusB">Blade of Olympus</button>
                <button id="Leave-shop">Return to Sparta</button>
            </div>
            ${hotbar(g)}
			</center>
		</div>
	`;
	
	settingsInit(g);
	
	const text = document.getElementById('Text');
	
	const spartaImg = document.getElementById('Sparta');
	const inShop = document.getElementById('In-shop');
	const mVillager = document.getElementById('Mvillager');
	const boc = document.getElementById('B-o-c');
	const potion = document.getElementById('Potion');
	const nemesisWhip = document.getElementById('Nemesis-whip');
	const whipClaim = document.getElementById('Whip-claim');
	const gauntletZeus= document.getElementById('Gauntlet-of-Zeus');
	const gauntletClaim = document.getElementById('Gauntlet-claim');
	const clawsHades = document.getElementById('Claws-of-Hades');
	const clawsClaim = document.getElementById('Claws-claim');
	const bladeOlympus = document.getElementById('Blade-of-Olympus');
	const bladeClaim = document.getElementById('Blade-claim');
	
	const sellCon = document.querySelector('.Sell-price');
	const potionInfo = document.querySelector('.Potion-info');
	const whipInfo = document.querySelector('.Whip-info');
	const gauntletInfo = document.querySelector('.Gauntlet-info');
	const clawsInfo = document.querySelector('.Claws-info');
	const bladeInfo = document.querySelector('.BladeO-info');
	
	const sellText = document.getElementById('Sell-text');
		
	const sellWeaponB = document.getElementById('Sell-weapon');
	const potionB = document.getElementById('PotionB');
	const nemesisWhipB = document.getElementById('Nemesis-whipB');
	const gauntletB = document.getElementById('GauntletB');
	const clawsB = document.getElementById('Claws');
	const bladeOlympusB= document.getElementById('Blade-of-OlympusB');
	const leaveShop = document.getElementById('Leave-shop');
	
	sellWeaponB.onmouseover = () => {
		g.audios.hoverSound.play();
		iSdis();
		sellCon.style.display = 'inline';
		switch (g.currentWeapon) {
			case 0:
				boc.style.display = 'inline-block';
				sellText.innerText = "Sell the " + g.weapons[g.currentWeapon].name + " for 17 orbs?";
			break;
			case 1:
				nemesisWhip.style.display = 'inline-block';
				sellText.innerText = "Sell the " + g.weapons[g.currentWeapon].name + " for 25 orbs?";
			break;
			case 2:
				gauntletZeus.style.display = 'inline-block';
				sellText.innerText = "Sell the " + g.weapons[g.currentWeapon].name + " for 42 orbs?";
			break;
			case 3: 
				clawsHades.style.display = 'inline-block';
				sellText.innerText = "Sell the " + g.weapons[g.currentWeapon].name + " for 70 orbs?";
			break;
			case 4:
				bladeOlympus.style.display= 'inline-block';
				sellText.innerText = "Sell the " + g.weapons[g.currentWeapon].name + " for 100 orbs?";
			break;
		}
		sellWeaponB.style.animation = 'vertical-shaking 0.5s';
	}
	sellWeaponB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		iSap();
		switch (g.currentWeapon) {
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
		g.audios.hoverSound.play();
		potionB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		potion.style.display = 'inline-block';
		potionInfo.style.display = 'inline-block';
	}
	potionB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		potionB.style.animation = 'grow';
		iSap();
		potion.style.display = 'none';
		potionInfo.style.display = 'none';
	}
	potionB.addEventListener('click', buyPotion );

	nemesisWhipB.onmouseover = () => {
		g.audios.hoverSound.play();
		nemesisWhipB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		nemesisWhip.style.display = 'inline-block';
		whipInfo.style.display = 'inline-block';
	}
	nemesisWhipB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		nemesisWhipB.style.animation = 'grow';
		iSap();
		nemesisWhip.style.display = 'none';
		whipInfo.style.display = 'none';
	}
	nemesisWhipB.addEventListener('click', buyWhip);

	gauntletB.onmouseover = () => {
		g.audios.hoverSound.play();
		gauntletB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		gauntletZeus.style.display = 'inline-block';
		gauntletInfo.style.display = 'inline-block';
	}
	gauntletB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		gauntletB.style.animation = 'grow';
		iSap();
		gauntletZeus.style.display = 'none';
		gauntletInfo.style.display = 'none';
	}
	gauntletB.addEventListener('click', buyGauntlet);

	clawsB.onmouseover = () => {
		g.audios.hoverSound.play();
		clawsB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		clawsHades.style.display = 'inline-block';
		clawsInfo.style.display = 'inline-block';
		clawsInfo.style.right = '2.8cm';
	}
	clawsB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		clawsB.style.animation = 'grow';
		iSap();
		clawsHades.style.display = 'none';
		clawsInfo.style.display = 'none';
	}
	clawsB.addEventListener('click', buyClaws );

	bladeOlympusB.onmouseover = () => {
		g.audios.hoverSound.play();
		bladeOlympusB.style.animation = 'tilt-shaking 0.5s';
		iSdis();
		bladeOlympus.style.display = 'inline-block';
		bladeInfo.style.display = 'inline-block';
	}
	bladeOlympusB.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		bladeOlympusB.style.animation = 'grow';
		iSap();
		bladeOlympus.style.display = 'none';
		bladeInfo.style.display = 'none';
	}
	bladeOlympusB.addEventListener('click', buyBlade );

	leaveShop.onmouseover = () => {
		g.audios.hoverSound.play();
		document.querySelector('.Shop').style.background = '#20130c';
		leaveShop.style.animation = 'horizontal-shaking 0.5s';
		inShop.style.display = 'none';
		spartaImg.style.display = 'inline';
	}
	leaveShop.onmouseout = () => {
		g.audios.hoverSound.pause();
		g.audios.hoverSound.currentTime = 0;
		document.querySelector('.Shop').style.background = '#09090b';
		leaveShop.style.animation = 'grow';
		inShop.style.display = 'inline';
		spartaImg.style.display = 'none';
	}
	leaveShop.onclick = () => {
		g.audios.returnSound.play();
		if (g.play === true) g.audios.menuTheme.play()
		sparta(g);
	}

	function iSdis() {
		inShop.style.position = 'absolute';
		inShop.style.left = '40cm';
	}
	function iSap() {
		inShop.style.position = 'relative';
		inShop.style.left = '0';
	}
	
	var slot1 = document.getElementById('Slot1');
	var slot2 = document.getElementById('Slot2');
	var slot3 = document.getElementById('Slot3');
	var slot4 = document.getElementById('Slot4');
	var slot5 = document.getElementById('Slot5');

    let count = 0;

	function sellWeapon() {
		const sellingWeapon = g.weapons[g.currentWeapon].name;
		if (g.inventory.length > 1 && g.inventory.includes(sellingWeapon)) {
			g.audos.hmmmm.play();
			var soldWeapon;
			switch (g.currentWeapon) {
				case 0:	    
					g.inventory.shift();
					slot1.style.backgroundImage = 'none';
					var sold = setInterval(() => {
						count++;
						g.kratos.orbs++;
						document.getElementById('Orbs-text').innerText = kratos.orbs;
						if (count == 17) {
							count = 0;
							clearInterval(sold);
							localStorage.setItem('orbs', g.kratos.orbs);
						}
					}, 155);
					g.currentWeapon++;
					soldWeapon = g.weapons[0].name;
				break;
				case 1:
					g.inventory = g.inventory.filter(weapon => weapon !== g.whip);
					slot2.style.backgroundImage = 'none';
					var sold2 = setInterval(() => {
						count++;
						g.kratos.orbs++;
						document.getElementById('Orbs-text').innerText = g.kratos.orbs;
						if (count == 28) {
							count = 0;
							clearInterval(sold2);
							localStorage.setItem('orbs', g.kratos.orbs);
						}
					}, 140);
					currentWeapon = g.inventory.length > 2 ? g.currentWeapon++ : g.currentWeapon--;
					soldWeapon = g.whip;
				break;
				case 2:
					g.inventory = inventory.filter(weapon => weapon !== g.gauntlet);
					slot3.style.backgroundImage = 'none';
					var sold3 = setInterval(() => {
						count++;
						g.kratos.orbs++;
						document.getElementById('Orbs-text').innerText = g.kratos.orbs;
						if (count == 42) {
							count = 0;
							clearInterval(sold3);
							localStorage.setItem('orbs', g.kratos.orbs);
						}
					}, 125);
					g.currentWeapon = g.inventory.length > 2 ? g.currentWeapon++ : g.currentWeapon--;
					soldWeapon =  g.gauntlet;
				break;
				case 3:
					g.inventory = g.inventory.filter(weapon => weapon !== g.claws);
					slot4.style.backgroundImage = 'none';
					var sold4 = setInterval(() => {
						count++;
						g.kratos.orbs++;
						document.getElementById('Orbs-text').innerText = g.kratos.orbs;
						if (count == 70) {
							count = 0;
							clearInterval(sold4);
							localStorage.setItem('orbs', g.kratos.orbs);
						}
					}, 110);
					g.currentWeapon = g.inventory.length > 2 ? g.currentWeapon++ : g.currentWeapon--;
					soldWeapon = g.claws;
				break;
				case 4:
					g.inventory = inventory.filter(weapon => weapon !== g.blade);
					slot5.style.backgroundImage = 'none';
					var sold5 = setInterval(() => {
						count++;
						g.kratos.orbs++;
						document.getElementById('Orbs-text').innerText = g.kratos.orbs;
						if (count == 100) {
							count = 0;
							clearInterval(sold5);
							localStorage.setItem('orbs', g.kratos.orbs);
						}
					}, 100);
					g.currentWeapon = g.inventory.length > 2 ? g.currentWeapon++ : g.currentWeapon--;
					soldWeapon = g.blade;
				break;
			}
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			localStorage.setItem('currentWeapon', g.currentWeapon);
			text.innerText = `You sold the ${soldWeapon}.`;
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
			g.audios.bruh.play();
			text.innerText = "Don't sell your only weapon, fool.";
		setTimeout(() => {
			text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4000 );
	}}

	function buyPotion() {
		if (g.kratos.orbs >= 12 && count == 0) {
			g.audios.noice.play();
			
			// Number counting animation
			var boughted = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs-text').innerText = g.kratos.orbs;
				if (count == 11) {
					count = 0;
					clearInterval(boughted);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 90);
			
			// Update potion slot
			g.potions++;
			localStorage.setItem('potions', g.potions);
			if (g.potions === 1) document.getElementById('Pslot').style.backgroundImage = `url('${g.potionSrc}')`;
			if (g.potions > 1) { 
				document.getElementById('potion-quantity').style.display = 'inline';
				document.getElementById('potion-quantity').innerText = g.potions;
			}
			
		} else if (g.kratos.orbs < 17) {
			g.audios.brokie.play();
			text.innerText = "You do not have enough orbs to buy a health potion.";
			setTimeout(() => {
				text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
			}, 4400 );
		}
	}

	function buyWhip() {
		if(g.kratos.orbs >= 55 && !g.inventory.includes(g.whip)) {
			g.audios.achievement.play();
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs-text').innerText = g.kratos.orbs;
				if (count == 55) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 100 );
			g.currentWeapon = 1;
			localStorage.setItem('currentWeapon', g.currentWeapon);
			g.inventory.push(g.whip);
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			weaponGot();
			whipClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.backgroundImage = `url('${g.whipSrc}')`;
			slot2.style.border = '3px solid #5a3910';
			slot3.style.border = '1.8px solid #5a3910';
			slot4.style.border = '1.8px solid #5a3910';
			slot5.style.border = '1.8px solid #5a3910';
			setTimeout(() => {
				whipClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!g.inventory.includes(g.whip)) {
				g.audios.brokie.play();
				text.innerText = "You do not have enough orbs to buy the Nemesis whip. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				g.audios.bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function buyGauntlet() {
		if(g.kratos.orbs >= 99 && !g.inventory.includes(g.gauntlet)) {
			g.audios.achievement.play();
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs-text').innerText = g.kratos.orbs;
				if (count == 99) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 80 );
			g.currentWeapon = 2;
			localStorage.setItem('currentWeapon', g.currentWeapon);
			g.inventory.push(g.gauntlet);
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			weaponGot();
			gauntletClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.border = '1.8px solid #5a3910';
			slot3.style.backgroundImage = `url('${g.gauntletSrc}')`;
			slot3.style.border = '3px solid #5a3910';
			slot4.style.border = '1.8px solid #5a3910';
			slot5.style.border = '1.8px solid #5a3910';
			setTimeout(() => {
				gauntletClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!g.inventory.includes(g.gauntlet)) {
				g.audios.brokie.play();
				text.innerText = "You do not have enough orbs to buy the Gauntlet of Zeus. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				g.audios.bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function buyClaws() {
		if(g.kratos.orbs >= 155 && !g.inventory.includes(g.claws)) {
			g.audios.achievement.play();
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs-text').innerText = g.kratos.orbs;
				if (count == 155) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 55 );
			g.currentWeapon = 3;
			//g.inventory.push(g.weapons[g.currentWeapon].name);
			g.inventory.push(g.claws);
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			weaponGot();
			clawsClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.border = '1.8px solid #5a3910';
			slot3.style.border = '1.8px solid #5a3910';
			slot4.style.backgroundImage = `url('${g.clawsSrc}')`;
			slot4.style.border = '3px solid #5a3910';
			slot5.style.border = '1.8px solid #5a3910';
			setTimeout(() => {
				clawsClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!g.inventory.includes(g.claws)) {
				g.audios.brokie.play();
				text.innerText = "You do not have enough orbs to buy the Claws of Hades. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				g.audios.bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function buyBlade() {
		if(g.kratos.orbs >= 200 && !g.inventory.includes(g.blade)) {
			g.audios.achievement.play();
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs-text').innerText = g.kratos.orbs;
				if (count == 200) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 35 );
			g.currentWeapon = 4;
			localStorage.setItem('currentWeapon', g.currentWeapon);
			g.inventory.push(g.blade);
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			weaponGot();
			bladeClaim.style.display = 'block';
			slot1.style.border = '1.8px solid #5a3910';
			slot2.style.border = '1.8px solid #5a3910';
			slot3.style.border = '1.8px solid #5a3910';
			slot4.style.border = '1.8px solid #5a3910';
			slot5.style.backgroundImage = `url('${g.bladeSrc}')`;
			slot5.style.border = '3px solid #5a3910';
			setTimeout(() => {
				bladeClaim.style.display = 'none';
				revert();
			}, 4400 );
		} else {
			if (!g.inventory.includes(g.blade)) {
				g.audios.brokie.play();
				text.innerText = "You do not have enough orbs to buy the Blade of Olympus. You are a brokie! Go fight enemies to earn more orbs.";
				text.style.color = '#bb0a1e';
			} else {
				g.audios.bruh.play();
				text.innerText = "You already have that weapon, you twat!";
				text.style.color = '#bb0a1e';
			}
			setTimeout(() => {
				revert();
			}, 3000 );
		}
	}

	function weaponGot() {
		text.innerText = "You now have the " + g.weapons[g.currentWeapon].name + ". \n";
		text.style.color = '#191970';
		[ inShop,  sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display = 'none');
	}

	function revert() {
		text.style.color = '#ffad15';
		text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		inShop.style.display = 'block';
		[sellWeaponB, potionB, nemesisWhipB, gauntletB, clawsB, bladeOlympusB, leaveShop ].forEach(button => button.style.display = 'inline');
	}
	
	hotbarInit(g);

}