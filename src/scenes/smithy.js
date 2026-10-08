import { settings, settingsInit } from '../components/settings.js';
import { stats } from '../components/stats.js';
import { hotbar, hotbarInit } from '../components/hotbar.js';
import sparta from './sparta.js';

export default function smithy(g){
	const stock = g.weapons.filter(weapon => !g.kratos.inventory.includes(weapon));
	g.game.innerHTML = `
		<div id="Smithy">
			${settings(g, true)}
			${stats(g)}
			<center>
			<div id="Text">
				You enter the smithy. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie. Select weapons using a/← or d/→. Or just hover on them.
			</div>
            <div id="Mid">     
                <img id="Kratos" src="./Imagery/UI/Kratos standing animation.gif">
                
				${stock.map((weapon => { return `<img id="${weapon.name.replaceAll(" ", "-")}" src="Imagery/UI/${weapon.name}.png" />`})).join("")}

				<button id="Sell-weapon">Sell weapon</button>
                
                <div id="dialogue">
                    <i><span id="dialogue-text"> </span></i>
                </div>
				${stock.map((weapon, index) => {
					return `
						<div class="weapon-info" id="${`weapon-${index + 1}-info`}" data-weapon="${weapon.name}">
							<i class="Item-info" id="italics"><span><font color="#E2000C" />${weapon.price}</font> red orbs</span> <span><img src="Imagery/UI/Red orb.png" width="15" height="15" alt="Red orb" /></span></i>
                    		<hr color="#daa" height="1" />
							<i class="Item-info" id="italics"><font color="#aaa"> Damages: </font> ${stock[index].lD} | ${stock[index].hD} </i>
							<i class="Item-info" id="italics"><font color="#aaa"> Stun: </font> ${parseInt(stock[index].lS + stock[index].hS / 2) / 100}s </i>
							<i class="Item-info" id="italics"><font color="#aaa"> Range: </font> ${Math.round((stock[index].lR + stock[index].hR) / 2)} </i> 
						</div>
					`;
				}).join("")}
            </div>
            ${hotbar}
			</center>
		</div>
	`;
	
	settingsInit(g);
	
	const text = document.getElementById('Text');
	const dialogue = document.getElementById('dialogue');
	const weaponsInfo = {};
	document.querySelectorAll('.weapon-info').forEach(info => {
		weaponsInfo[info.dataset.weapon] = info;
	});
	
	const dialogueText = document.getElementById('dialogue-text');
	const sellWeaponB = document.getElementById('Sell-weapon');

	const kratos = document.getElementById('Kratos');
	
	setTimeout(() => {
		kratos.style.width = '200px';
		kratos.style.height = '340px';
		kratos.style.left = '30%';
		kratos.style.bottom = '-1cm';
	}, 40)
	
	sellWeaponB.onmouseover = () => {
		const sellingWeapon = g.kratos.inventory[g.currentWeapon];
		if (!g.currentWeapon || !sellingWeapon.price) return
		g.playCaudio(g.audio.hover, g.uiVolume);
		dialogue.style.display = 'inline';
		dialogueText.innerText = `I'll take your ${sellingWeapon.name} for ${Math.round(sellingWeapon.price / 2)} orbs`;
		sellWeaponB.style.animation = 'vertical-shaking 0.5s';
	}
	sellWeaponB.onmouseout = () => {
		sellWeaponB.style.animation = 'grow';
		dialogue.style.display = 'none';
	}
	sellWeaponB.addEventListener('click', sellWeapon );

	const images = [];
	
	if (stock?.length) {
		for (const weapon of stock) {
			const image = document.getElementById(`${weapon.name.replaceAll(" ", "-")}`)
			images.push(image);
			const info = weaponsInfo[weapon.name]; 
			if (image.style.display !== 'none') {
				image.onmouseover = () => {
					g.playCaudio(g.audio.hover, g.uiVolume);
					image.src = `./Imagery/UI/${weapon.name} (outlined).png`;
					if (weapon.name.includes("whip")) image.style.transform = 'rotateX(0deg)';
					dialogue.style.display = 'block';
					dialogueText.innerText = `${weapon.name.includes("Arms") ? 'Those are' : 'This is'} the ${weapon.name}`;
					if (info) info.style.display = 'inline-block';
				}
				image.onmouseout = () => {
					image.src = `./Imagery/UI/${weapon.name}.png`;
					if (weapon.name.includes("whip")) image.style.transform = 'rotateX(55deg)';
					dialogue.style.display = 'none';
					if (info) info.style.display = 'none';
				}
				image.onclick = () => buyWeapon(weapon)
			}
		}
	}

    let currentIndex = -1;

    document.removeEventListener("keydown", g.navKeys);

    function selectImage(index) {
		if (!images.length) return
		// reset all images (simulate mouseout)
		images.forEach(img => img.onmouseout && img.onmouseout());

		// apply hover effect to the current one (simulate mouseover)
		if (images[index].onmouseover) { images[index].onmouseover() }

		currentIndex = index;
	}

	if (images.length) {
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
	}

	function leaveSmithy() {
		g.audio.exit.play();
		sparta(g);
	}
	
    let count = 0;
	
	function sellWeapon() {
		const sellingWeapon = g.kratos.inventory[g.currentWeapon];
		if (g.kratos.inventory.length > 1 && g.kratos.inventory.includes(sellingWeapon) && g.currentWeapon && sellingWeapon.price) {
			g.audio.hmmmm.play();
			dialogue.style.display = 'none';
			g.kratos.inventory = g.kratos.inventory.filter(weapon => weapon !== sellingWeapon);
			const sell = setInterval(() => {
				count++;
				g.kratos.orbs++;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
				if (count == (Math.round(sellingWeapon.price / 2))) {
					count = 0;
					clearInterval(sell);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 110);
			images.push[g.currentWeapon];
			g.currentWeapon = 0;
			hotbarInit(g);
			localStorage.setItem('inventory', JSON.stringify(g.kratos.inventory));
			localStorage.setItem('currentWeapon', g.currentWeapon);
			text.innerText = `You sold the ${sellingWeapon.name} for ${(Math.round(sellingWeapon.price / 2))}.`;
		} else {
			g.audio.bruh.play();
			dialogue.style.display = 'inilne-block';
			dialogueText.innerText = "I can't buy that weapon...";
		setTimeout(() => {
			text.innerText = "You enter the smithy. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
		}, 4000 );
	}}

	function buyWeapon(weapon) {
		if(g.kratos.orbs >= weapon.price && !g.kratos.inventory.includes(weapon) && g.kratos.inventory.length < 6) {
			g.audio.achievement.play();
			dialogue.style.display = 'none';
			const bought = setInterval (() => {
				count++;
				g.kratos.orbs--;
				document.getElementById('Orbs').innerText = g.kratos.orbs;
				if (count == weapon.price) {
					count = 0;
					clearInterval(bought);
					localStorage.setItem('orbs', g.kratos.orbs);
				}
			}, 80 );
			localStorage.setItem('currentWeapon', g.currentWeapon);
			g.kratos.inventory.push(weapon);
			g.currentWeapon = g.kratos.inventory.indexOf(weapon);
			localStorage.setItem('inventory', JSON.stringify(g.kratos.inventory));
			weaponGot(weapon);
			hotbarInit(g);
			setTimeout(revert, 5250 );
		} else {
			dialogue.style.display = 'inline-block';
			if (!g.kratos.inventory.includes(weapon)) {
				g.audio.brokie.play();
				dialogueText.innerText = weapon.name.includes("whip") ? "Don't make me whip you for being such a brokie" : weapon.name.includes("Gauntlet") ? "You're too poor for this Gauntlet. Go grind" : "You are such a brokie";
			} else {
				g.audio.bruh.play();
				dialogueText.innerText = g.kratos.inventory.length === 6 ? "You have too many weapons" : "You already have that weapon, you twat!";
			}
			setTimeout(revert, 3000 );
		}
	}

	function weaponGot(weapon) {
		text.style.color = '#d8c8a8';
		text.innerText = "You now have the " + weapon.name;
		images.forEach(img => { if (img.id === weapon.name.replaceAll(" ", "-")) img.style.display = 'none' });
		weaponsInfo[weapon.name].style.display = 'none'; 
		if (weapon.name.includes("Arms")) { 
			kratos.style.width = '288px';
			kratos.style.height = '360px';
		} else if (weapon.name.includes("Gauntlet")) {
			kratos.style.width = '200px';
			kratos.style.height = '340px';
		} else if (weapon.name.includes("whip")) {
			kratos.style.width = '270px';
			kratos.style.height = '340px';
		}
		kratos.src = `./Imagery/UI/Kratos standing animation (${weapon.name}).gif`;
	}

	function revert() {
		if (g.inSparta || g.inBattle ) return
		text.style.color = '#ffad15';
		text.innerText = "You enter the smithy. You see a bunch of weapons that vary in power. Get the ones you can, or take a look at them for now if you are currently a brokie";
	}
	
	hotbarInit(g);
}