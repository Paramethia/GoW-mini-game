import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import { sparta } from './sparta.js';

export function smithy(g){
	const stock = g.weapons.filter(weapon => !g.inventory.includes(weapon.name) || !weapon.name === g.blades);
	const wPrice = [40, 70, 115, 155, 200];
	g.game.innerHTML = `
		<div class="Smithy">
			${settings(g, true)}
			${stats(g)}
			<center>
			<div id="Text">
				You enter the smithy. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie. Select weapons using a/← or d/→. Or just hover on them.
			</div>
            <div class="Mid">     
                <img id="Kratos">
                
				${stock.map((weapon => { return `<img id="${weapon.name.replaceAll(" ", "-")}" src="Imagery/${weapon.name}.png" />`})).join("")}

				<button id="Sell-weapon">Sell weapon</button>
                
                <div id="dialogue">
                    <i><span id="dialogue-text"> </span></i>
                </div>
				${stock.map((weapon, index) => {
					return `
						<div class="weapon-info" id="${`weapon-${index + 1}-info`}" data-weapon="${weapon.name}">
							<i class="Item-info" id="italics"><span><font color="#E2000C" />${wPrice[index]}</font> red orbs</span> <span><img src="Imagery/Red orb.png" width="15" height="15" alt="Red orb" /></span></i>
                    		<hr color="#daa" height="1" />
							<i class="Item-info" id="italics"><font color="#aaa"> Damages: </font> ${stock[index].lD} | ${stock[index].hD} </i>
							<i class="Item-info" id="italics"><font color="#aaa"> Stun: </font> ${parseInt(stock[index].lS + stock[index].hS / 2) / 100}s </i>
							<i class="Item-info" id="italics"><font color="#aaa"> Range: </font> ${Math.round((stock[index].lR + stock[index].hR) / 2)} </i> 
						</div>
					`;
				}).join("")}
            </div>
            ${hotbar(g)}
			</center>
		</div>
	`;
	
	settingsInit(g);
	
	const text = document.getElementById('Text');
	
	const nemesisWhip = document.getElementById('Nemesis-whip');
	const clawsHades = document.getElementById('Claws-of-Hades');
	const gauntletZeus= document.getElementById('Gauntlet-of-Zeus');
	const nemeanCestus = document.getElementById('Nemean-cestus');
	const bladeOlympus = document.getElementById('Blade-of-Olympus');
	
	const dialogue = document.getElementById('dialogue');
	const weaponsInfo = {};
	document.querySelectorAll('.weapon-info').forEach(info => {
		weaponsInfo[info.dataset.weapon] = info;
	});
	
	const dialogueText = document.getElementById('dialogue-text');
		
	const sellWeaponB = document.getElementById('Sell-weapon');

	const kratos = document.getElementById('Kratos');
	kratos.style.bottom = '0';
	kratos.style.right = '55%';

	const sellPrices = [0, 15, 25, 45, 70, 100];
	
	sellWeaponB.onmouseover = () => {
		if (!g.currentWeapon) return
		g.audios.hover.cloneNode().play();
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

	[nemesisWhip, clawsHades, gauntletZeus, nemeanCestus, bladeOlympus].forEach((image, index) => { 
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
		if (images[index].onmouseover) { images[index].onmouseover() }

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
			if (images[currentIndex].onclick) images[currentIndex].onclick()
		}
		if (e.key === "Escape") leaveSmithy()
	}

	document.addEventListener("keydown", g.navKeys);

	if (removedIndexes.length > 1) removedIndexes.sort((a, b) => b - a);
	const names = [g.whip, g.claws, g.gauntlet, g.cestus, g.blade];
	const defTrans = ['', 'rotateX(417deg)', 'rotateZ(435deg) rotateY(300deg)', 'rotateX(400deg) rotateZ(375deg)', 'rotateX(412deg) rotateZ(345deg)'];
	const transformations = ['rotateZ(22deg)', 'rotateX(360deg) rotateZ(30deg)', 'rotateY(360deg) rotateZ(400deg)', 'rotateX(360deg) rotateZ(360deg)', 'rotateX(360deg) rotateZ(360deg)'];
	const funcs = [buyWhip, buyClaws, buyGauntlet, buyCestus, buyBlade];

	if (removedIndexes.length) removedIndexes.forEach(rI => [names, defTrans, transformations, funcs].forEach(a => a.splice(rI, 1)))

	images.forEach((image, index) => {
		const weaponName = image.id.replaceAll("-", " ");
		const info = weaponsInfo[weaponName]; 
		if (image.style.display !== 'none') {
			image.onmouseover = () => {
				g.audios.hover.cloneNode().play();
				image.src = `Imagery/${names[index]} (outlined).png`;
				image.style.transform = transformations[index];
				dialogue.style.display = 'block';
				dialogueText.innerText = `${index === 1 ? 'Those are' : 'This is'} the ${names[index]}`;
				if (info) info.style.display = 'inline-block';
			}
			image.onmouseout = () => {
				image.src = `Imagery/${names[index]}.png`;
				image.style.transform = defTrans[index];
				dialogue.style.display = 'none';
				if (info) info.style.display = 'none';
			}
			image.onclick = () => funcs[index]()
		}
	})

	function leaveSmithy() {
		g.audios.exit.play();
		sparta(g);
	}

	const slots = [document.getElementById('Slot1'), document.getElementById('Slot2'), document.getElementById('Slot3'), document.getElementById('Slot4'), document.getElementById('Slot5'), document.getElementById('Slot6')];
	
    let count = 0;
	
	function sellWeapon() {
		var sellingWeapon = g.weapons[g.currentWeapon].name;
		var times = [155, 140, 125, 110, 100];
		if (g.inventory.length > 1 && g.inventory.includes(sellingWeapon) && g.weapons[g.currentWeapon].name !== "Blades of chaos") {
			g.audios.hmmmm.play();
			dialogue.style.display = 'none';
			g.inventory = g.inventory.filter(weapon => weapon !== sellingWeapon);
			slots[g.currentWeapon].style.display = 'none';
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
			g.inventory.length > 2 ? g.currentWeapon++ : g.currentWeapon--;
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			localStorage.setItem('currentWeapon', g.currentWeapon);
			text.innerText = `You sold the ${sellingWeapon} for ${sellPrices[g.currentWeapon]}.`;
		} else {
			g.audios.bruh.play();
			dialogue.style.display = 'inilne-block';
			dialogueText.innerText = "I can't buy that weapon...";
		setTimeout(() => {
			text.innerText = "You enter the smithy. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4000 );
	}}

	function buyWhip() {
		if(g.kratos.orbs >= 30 && !g.inventory.includes(g.whip)) {
			g.audios.achievement.play();
			dialogue.style.display = 'none';
			var bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
				if (count == 30) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 140 );
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

	function buyClaws() {
		if(g.kratos.orbs >= 55 && !g.inventory.includes(g.claws)) {
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
			}, 110 );
			g.currentWeapon = 2;
			localStorage.setItem('currentWeapon', g.currentWeapon);
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
			}, 85 );
			g.currentWeapon = 3;
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

	function buyCestus() {
		if(g.kratos.orbs >= 155 && !g.inventory.includes(g.cestus)) {
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
			g.currentWeapon = 4;
			localStorage.setItem('currentWeapon', g.currentWeapon);
			g.inventory.push(g.cestus);
			localStorage.setItem('inventory', JSON.stringify(g.inventory));
			weaponGot();
			slots[g.currentWeapon].style.border = '3px solid #5a3910';
			slots[g.currentWeapon].style.backgroundImage = `url('${g.cestusSrc}')`;
			slots.forEach((slot, index) => { if (index !== g.currentWeapon) slot.style.border = '1.8px solid #5a3910' });
			setTimeout(() => { revert() }, 5250 );
		} else {
			dialogue.style.display = 'inline-block';
			if (!g.inventory.includes(g.cestus)) {
				g.audios.brokie.play();
				dialogueText.innerText = "You're too poor for this powerful weapon. Grind more";
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
			g.currentWeapon = 5;
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
				dialogueText.innerText = "This god-killing weapon is not for brokies";
			} else {
				g.audios.bruh.play();
				dialogueText.innerText = "You already have that weapon, you twat!";
			}
			setTimeout(() => { revert() }, 3000 );
		}
	}

	function weaponGot() {
		document.removeEventListener('keydown', g.navKeys);
		document.querySelector('.Smithy').style.backgroundImage = 'url("Imagery/Sparta background.jpg")';
		text.style.color = '#d8c8a8';
		text.innerText = "You now have the " + g.weapons[g.currentWeapon].name;
		[sellWeaponB, nemesisWhip, clawsHades, gauntletZeus, nemeanCestus, bladeOlympus].forEach(element => element.style.display = 'none');
		document.querySelectorAll('.weapon-info').forEach(info => info.style.display = 'none');
		kratos.style.display = 'inline';
		kratos.src = `Imagery/Kratos standing (${g.weapons[g.currentWeapon].name}).png`;
		if (g.currentWeapon === 3) kratos.style.width = '140px';
		if (g.curentWeapon === 4) kratos.style.width = '150px';
	}

	function revert() {
		document.addEventListener('keydown', g.navKeys);
		document.querySelector('.Smithy').style.backgroundImage = 'url("Imagery/In smithy.png")';
		text.style.color = '#ffad15';
		text.innerText = "You enter the smithy. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		kratos.style.display = 'none';
		kratos.style.width = '184px';
		[sellWeaponB, nemesisWhip, clawsHades, gauntletZeus, nemeanCestus, bladeOlympus].forEach(element => element.style.display = 'inline');
	}
	
	hotbarInit(g);
}