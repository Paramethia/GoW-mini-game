import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { sparta } from './sparta.js';

export function shop(g){
	const stock = g.weapons.filter(weapon => !g.inventory.includes(weapon.name) || !weapon.name === g.blades);
	const wPrice = [55, 99, 155, 200];
	g.game.innerHTML = `
		<div class="Shop">
			${settings(g, true)}
			${stats(g)}
			<center>
			<div id="Text">
				You enter the shop. You see a bunch of weapons that vary in power.. also a potion of healing. Get the ones you can, or take a look at them for now if you are currently a brokie. Select weapons using a/← or d/→. Or just hover on them.
			</div>
            <div class="Mid">     
                <img id="Kratos">
                
                <img id="Potion" src="Imagery/Health potion.png">
				${stock.map((weapon => { return `<img id="${weapon.name.replaceAll(" ", "-")}" src="Imagery/${weapon.name}.png" />`}))}

				<button id="Sell-weapon">Sell weapon</button>
                
                <div class="Dialogue">
                    <i><span id="Dialogue-text"> </span></i>
                </div>
				<div class="Potion-info">
                    <i class="Item-info" id="italics"> <font color="#299617"> +14 health </font></i> <br>
                    <i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> 11 orbs </i>
                </div>
				${stock.map((weapon, index) => {
					return `
						<div class="${index !== 0 ? weapon.name.split(' ')[0] + '-info' : 'Whip-info'}">
							<i class="Item-info" id="italics"><font color="#8c4004"> Price: </font> ${wPrice[index]}  orbs </i> <br>
                    		<i class="Item-info" id="italics"><font color="#c29200"> Damage: </font> ${stock[index].damage} </i>
						</div>
					`;
				})}
            </div>
            ${hotbar(g)}
			</center>
		</div>
	`;
	
	settingsInit(g);
	
	const text = document.getElementById('Text');
	
	const potion = document.getElementById('Potion');
	const nemesisWhip = document.getElementById('Nemesis-whip');
	const gauntletZeus= document.getElementById('Gauntlet-of-Zeus');
	const clawsHades = document.getElementById('Claws-of-Hades');
	const bladeOlympus = document.getElementById('Blade-of-Olympus');
	
	const dialogue = document.querySelector('.Dialogue');
	const potionInfo = document.querySelector('.Potion-info');
	const whipInfo = document.querySelector('.Whip-info');
	const gauntletInfo = document.querySelector('.Gauntlet-info');
	const clawsInfo = document.querySelector('.Claws-info');
	const bladeInfo = document.querySelector('.Blade-info');
	
	const dialogueText = document.getElementById('Dialogue-text');
		
	const sellWeaponB = document.getElementById('Sell-weapon');

	const kratos = document.getElementById('Kratos');
	kratos.style.bottom = '0';
	kratos.style.right = '55%';

	const sellPrices = [17, 25, 42, 70, 100];
	
	sellWeaponB.onmouseover = () => {
		g.audios.hoverSound.cloneNode().play();
		dialogue.style.display = 'inline';
		dialogueText.innerText = `I'll take your ${g.weapons[g.currentWeapon].name} for ${sellPrices[g.currentWeapon]} orbs`;
		sellWeaponB.style.animation = 'vertical-shaking 0.5s';
	}
	sellWeaponB.onmouseout = () => {
		sellWeaponB.style.animation = 'grow';
		dialogue.style.display = 'none';
	}
	sellWeaponB.addEventListener('click', sellWeapon );

	const images = [];
	const removedIndexes = [];

	[potion, nemesisWhip, gauntletZeus, clawsHades, bladeOlympus].forEach((image, index) => { 
		if (image) {
			images.push(image);
		} else { removedIndexes.push(index); }
	})
    let currentIndex = -1;

    document.removeEventListener("keydown", g.navKeys);

    function selectImage(index) {
		// reset all images (simulate mouseout)
		images.forEach(img => img.onmouseout && img.onmouseout());

		// apply hover effect to the current one (simulate mouseover)
		if (images[index].onmouseover) {
			images[index].onmouseover();
		}

		currentIndex = index;
	}

	g.navKeys = function(e) {
		if (e.repeat) return;

		if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
			let nextIndex = (currentIndex + 1) % images.length;
			selectImage(nextIndex);
		}

		if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
			let prevIndex = (currentIndex - 1 + images.length) % images.length;
			selectImage(prevIndex);
		}

		if (e.key === "Enter") {
			// simulate click
			if (images[currentIndex].onclick) images[currentIndex].onclick()
		}

		if (e.key === "Escape") leaveShop()
	}

	document.addEventListener("keydown", g.navKeys);

	if (removedIndexes.length > 1) removedIndexes.sort((a, b) => b - a);
	const names = ["Health potion", g.whip, g.gauntlet, g.claws, g.blade];
	const defTrans = ['', 'rotateX(417deg)', 'rotateZ(435deg) rotateY(300deg)', 'rotateX(400deg) rotateZ(375deg)', 'rotateX(412deg) rotateZ(345deg)'];
	const transformations = ['', 'rotateX(360deg) rotateZ(30deg)', 'rotateY(360deg) rotateZ(400deg)', 'rotateX(360deg) rotateZ(360deg)', 'rotateX(360deg) rotateZ(360deg)']
	const infos = [potionInfo, whipInfo, gauntletInfo, clawsInfo, bladeInfo];
	const funcs = [buyPotion, buyWhip, buyGauntlet, buyClaws, buyBlade];

	if (removedIndexes.length) removedIndexes.forEach(rI => [names, defTrans, transformations, infos, funcs].forEach(a => a.splice(rI, 1)))

	images.forEach((image, index) => {
		if (image.style.display !== 'none') {
			image.onmouseover = () => {
				g.audios.hoverSound.cloneNode().play();
				image.src = `Imagery/${names[index]} (outlined).png`;
				if (index) {
					image.style.transform = transformations[index];
					dialogue.style.display = 'block';
					dialogueText.innerText = `${index === 3 ? 'Those are' : 'This is'} the ${names[index]}`;
				} 
				infos[index].style.display = 'inline-block';
			}
			image.onmouseout = () => {
				image.src = `Imagery/${names[index]}.png`;
				if (index) {
					image.style.transform = defTrans[index];
					dialogue.style.display = 'none';
				}
				infos[index].style.display = 'none';
			}
			image.onclick = () => funcs[index]()
		}
	})

	function leaveShop() {
		g.audios.returnSound.play();
		if (g.play === true) g.audios.menuTheme.play()
		sparta(g);
	}

	const slots = [document.getElementById('Slot1'), document.getElementById('Slot2'), document.getElementById('Slot3'), document.getElementById('Slot4'), document.getElementById('Slot5')];
	
    let count = 0;
	
	function sellWeapon() {
		var sellingWeapon = g.weapons[g.currentWeapon].name;
		var times = [155, 140, 125, 110, 100];
		if (g.inventory.length > 1 && g.inventory.includes(sellingWeapon)) {
			g.audios.hmmmm.play();
			dialogue.style.display = 'none';
			g.inventory = g.inventory.filter(weapon => weapon !== sellingWeapon);
			slots[currentWeapon].style.display = 'none';
			var sell = setInterval(() => {
				count++;
				g.kratos.orbs++;
				document.getElementById('Orbs').innerText = kratos.orbs;
				if (count == sellPrices[g.currentWeapon]) {
					count = 0;
					clearInterval(sell);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, times[g.currentWeapon]);
			//images.push[g.currentWeapon]
			g.inventory.length > 2 ? g.currentWeapon++ : g.currentWeapon--;
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			localStorage.setItem('currentWeapon', g.currentWeapon);
			text.innerText = `You sold the ${sellingWeapon} for ${sellPrices[g.currentWeapon]}.`;
		} else {
			g.audios.bruh.play();
			dialogue.style.display = 'inilne-block';
			dialogueText.innerText = "Don't sell your only weapon, fool.";
		setTimeout(() => {
			text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4000 );
	}}

	function buyPotion() {
		if (g.kratos.orbs >= 12 && count == 0) {
			g.audios.noice.play();
			dialogue.style.display = 'none';
			// Number counting animation
			var boughted = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
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
			dialogue.style.display = 'inline-block';
			dialogueText.innerText = "Poverty is hitting you, huh?.";
		}
	}

	function buyWhip() {
		if(g.kratos.orbs >= 55 && !g.inventory.includes(g.whip)) {
			g.audios.achievement.play();
			dialogue.style.display = 'none';
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
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
			slots[g.currentWeapon].style.border = '3px solid #5a3910';
			slots[g.currentWeapon].style.backgroundImage = `url('${g.whipSrc}')`;
			slots.forEach((slot, index) => { if (index !== g.currentWeapon) slot.style.border = '1.8px solid #5a3910' });
			setTimeout(() => { revert() }, 5250 );
		} else {
			dialogue.style.display = 'inline-block';
			if (!g.inventory.includes(g.whip)) {
				g.audios.brokie.play();
				dialogueText.innerText = "Don't make me whip you for being such a brokie";
			} else {
				g.audios.bruh.play();
				dialogueText.innerText = "You already have that weapon, you twat!";
			}
			setTimeout(() => { revert() }, 3000 );
		}
	}

	function buyGauntlet() {
		if(g.kratos.orbs >= 99 && !g.inventory.includes(g.gauntlet)) {
			g.audios.achievement.play();
			dialogue.style.display = 'none';
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
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
			slots[g.currentWeapon].style.border = '3px solid #5a3910';
			slots[g.currentWeapon].style.backgroundImage = `url('${g.gauntletSrc}')`;
			slots.forEach((slot, index) => { if (index !== g.currentWeapon) slot.style.border = '1.8px solid #5a3910' });
			setTimeout(() => { revert() }, 5250 );
		} else {
			dialogue.style.display = 'inline-block';
			if (!g.inventory.includes(g.gauntlet)) {
				g.audios.brokie.play();
				dialogueText.innerText = "You're too broke for this gauntlet";
			} else {
				g.audios.bruh.play();
				dialogueText.innerText = "You already have that weapon, you twat!";
			}
			setTimeout(() => { revert() }, 3000 );
		}
	}

	function buyClaws() {
		if(g.kratos.orbs >= 155 && !g.inventory.includes(g.claws)) {
			g.audios.achievement.play();
			dialogue.style.display = 'none';
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
				if (count == 155) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 55 );
			g.currentWeapon = 3;
			g.inventory.push(g.claws);
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			weaponGot();
			slots[g.currentWeapon].style.border = '3px solid #5a3910';
			slots[g.currentWeapon].style.backgroundImage = `url('${g.clawsSrc}')`;
			slots.forEach((slot, index) => { if (index !== g.currentWeapon) slot.style.border = '1.8px solid #5a3910' });
			setTimeout(() => { revert() }, 5250 );
		} else {
			dialogue.style.display = 'inline-block';
			if (!g.inventory.includes(g.claws)) {
				g.audios.brokie.play();
				dialogueText.innerText = "You're too poor for these claws. Go grind";
			} else {
				g.audios.bruh.play();
				dialogueText.innerText = "You already have that weapon, you twat!";
			}
			setTimeout(() => { revert() }, 3000 );
		}
	}

	function buyBlade() {
		if(g.kratos.orbs >= 200 && !g.inventory.includes(g.blade)) {
			g.audios.achievement.play();
			dialogue.style.display = 'none';
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
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
			slots[g.currentWeapon].style.border = '3px solid #5a3910';
			slots[g.currentWeapon].style.backgroundImage = `url('${g.bladeSrc}')`;
			slots.forEach((slot, index) => { if (index !== g.currentWeapon) slot.style.border = '1.8px solid #5a3910' });
			setTimeout(() => { revert() }, 5250 );
		} else {
			dialogue.style.display = 'inline-block';
			if (!g.inventory.includes(g.blade)) {
				g.audios.brokie.play();
				dialogueText.innerText = "This powerful blade is not for brokies";
			} else {
				g.audios.bruh.play();
				dialogueText.innerText = "You already have that weapon, you twat!";
			}
			setTimeout(() => { revert() }, 3000 );
		}
	}

	function weaponGot() {
		document.removeEventListener('keydown', g.navKeys);
		document.querySelector('.Shop').style.backgroundImage = 'url("Imagery/Sparta background.jpg")';
		text.style.color = '#d8c8a8';
		text.innerText = "You now have the " + g.weapons[g.currentWeapon].name;
		[sellWeaponB, potion, nemesisWhip, whipInfo, gauntletZeus, gauntletInfo, clawsHades, clawsInfo, bladeOlympus, bladeInfo].forEach(element => element.style.display = 'none');
		kratos.style.display = 'inline';
		kratos.src = `Imagery/Kratos standing (${g.weapons[g.currentWeapon].name}).png`;
		if (g.currentWeapon === 2) kratos.style.width = '140px';
	}

	function revert() {
		document.addEventListener('keydown', g.navKeys);
		document.querySelector('.Shop').style.backgroundImage = 'url("Imagery/In shop.png")';
		text.style.color = '#ffad15';
		text.innerText = "You enter the shop. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		kratos.style.display = 'none';
		kratos.style.width = '184px';
		[sellWeaponB, potion, nemesisWhip, gauntletZeus, clawsHades, bladeOlympus].forEach(element => element.style.display = 'inline');
	}
	
	hotbarInit(g);
}