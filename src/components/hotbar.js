export function hotbar(g){
    return `
        <div class="Hotbar">
            <center>
                <div id="Weapon-identifier"></div>
                <span id="Pslot">
                    <font color="#cc9229"><span>F</span></font>
                    <p id="potion-quantity">${g.potions}</p>
                </span>
                <span id="Slot1"><p id="slot-num">1</p></span>
                <span id="Slot2"><p id="slot-num">2</p></span>
                <span id="Slot3"><p id="slot-num">3</p></span>
                <span id="Slot4"><p id="slot-num">4</p></span>
                <span id="Slot5"><p id="slot-num">5</p></span>
            </center>
        </div>
    `
}

export function hotbarInit(g) {
	const pslot = document.getElementById('Pslot');
	if (g.potions) pslot.style.backgroundImage = `url('${g.potionSrc}')`
	const slot1 = document.getElementById('Slot1');
		if (g.currentWeapon !== 0) slot1.style.border = '1.8px solid #5a3910'
		if (!g.inventory.includes(g.blades)) { slot1.style.backgroundImage = 'none' }
	const slot2 = document.getElementById('Slot2');
		if (g.inventory.includes(g.whip)) slot2.style.backgroundImage = `url('${g.whipSrc}')`
		if (g.currentWeapon === 1) slot2.style.border = '3px ridge #5a3910'
	const slot3 = document.getElementById('Slot3');
	if (g.inventory.includes(g.gauntlet)) slot3.style.backgroundImage = `url('${g.gauntletSrc}')`
		if (g.currentWeapon === 2) slot3.style.border = '3px ridge #5a3910'
	const slot4 = document.getElementById('Slot4');
		if (g.inventory.includes(g.claws)) slot4.style.backgroundImage = `url('${g.clawsSrc}')`
		if (g.currentWeapon === 3) slot4.style.border = '3px ridge #5a3910'
	const slot5 = document.getElementById('Slot5');
		if (g.inventory.includes(g.blade)) slot5.style.backgroundImage = `url('${g.bladeSrc}')`
		if (g.currentWeapon === 4) slot5.style.border = '3px ridge #5a3910'
	const identifier = document.getElementById('Weapon-identifier');
	const pqText = document.getElementById('potion-quantity');
		if (g.potions > 1) { 
			pqText.style.display = 'inline'; 
			pqText.innerText = g.potions;
		}
		
	function increaseHealth() {
		if (g.kratos.health <= 199 && g.potions && !g.inMainMenu) {
			g.audios.drink.play();
			g.potions--;
			localStorage.setItem('potions', g.potions);
			if (g.potions > 1) { 
				pqText.innerText = g.potions
			} else if (g.potions === 1) { 
				pqText.style.display = 'none'
			} else { pslot.style.backgroundImage = 'none' }

			g.kratos.health += 14;
			if (g.kratos.health > 200) g.kratos.health = 200; // Cap health at 200
			
			localStorage.setItem('health', g.kratos.health);
			document.getElementById('Health').innerText = g.kratos.health;

			g.healthBarUpdate(document.querySelector('.Health-bar'), document.querySelector('.filler'));
		}
	}
	
	const weaponsClaimed = [g.inventory.includes(g.blades), g.inventory.includes(g.whip), g.inventory.includes(g.gauntlet), g.inventory.includes(g.claws), g.inventory.includes(g.blade)];
	const sounds = [g.audios.bocSound, g.audios.nwSound, g.audios.gozSound, g.audios.cohSound, g.audios.swordThud];
	const identifiers = [g.weapons[0].name, g.whip, g.gauntlet, g.claws, g.blade];
	const lefts = ['9.9cm', '11.7cm', '13.2cm', '14.5cm', '16.5cm'];

	if (g.hotbarKeys) document.removeEventListener('keydown', g.hotbarKeys)
	
	g.hotbarKeys = function(event) {
		if (event.repeat) return;
		
		if (event.key === 'f') increaseHealth()
			
		var keyIndex = parseInt(event.key) - 1; // Convert key to index (1 -> 0, 2 -> 1, etc.)

		if (keyIndex >= 0 && keyIndex < slots.length) { 
			// Reset all borders
			slots.forEach(slot => slot.style.border = '1.8px solid #5a3910');

			// Highlight the selected slot
			slots[keyIndex].style.border = '3px ridge #5a3910';

			// Check if the weapon is in inventory
			if (weaponsClaimed[keyIndex]) {
				sounds[keyIndex].cloneNode().play();
				identifier.style.display = 'inline';
				identifier.innerText = identifiers[keyIndex];
				identifier.style.top = '-35px';
				identifier.style.left = lefts[keyIndex];
				setTimeout(( ) => {
					identifier.style.animation = 'disappear 0.4s linear forwards';
					setTimeout(() => { 
						identifier.style.display = 'none';
						identifier.style.animation = 'none';
					}, 420 );
				}, 1100 );
				// If it is, then update and save current weapon
				if (g.currentWeapon !== keyIndex) {
					g.currentWeapon = keyIndex;
					localStorage.setItem('currentWeapon', g.currentWeapon);
				}
			}
		}
	}
	
	document.addEventListener('keydown', g.hotbarKeys)
	
	pslot.onmouseover = () => {
		identifier.style.display = 'inline';
		identifier.innerText = 'Health potion';
		identifier.style.top = '-35px';
		identifier.style.left = '7cm';
	}
	pslot.onmouseout = () => { identifier.style.display = 'none' }
	pslot.addEventListener('click', increaseHealth );

	const slots = [slot1, slot2, slot3, slot4, slot5];

	slots.forEach((slot, index) => {
		slot.onmouseover = () => {
			if (g.currentWeapon !== index) slot.style.border = '3px ridge #5a3910';
			if (weaponsClaimed[index]) identifier.style.display = 'inline';
			identifier.innerText = identifiers[index];
			identifier.style.top = '-35px';
			identifier.style.left = lefts[index];
		};

		slot.onmouseout = () => {
			if (g.currentWeapon !== index) slot.style.border = '1.8px solid #5a3910'
			identifier.style.display = 'none';
		};

		slot.onclick = () => {
			if (weaponsClaimed[index]) {
				sounds[index].play();
				if (g.currentWeapon !== index) {
					g.currentWeapon = index;
					localStorage.setItem('currentWeapon', g.currentWeapon);

					// Reset all slot borders
					slots.forEach(s => s.style.border = '1.8px solid #5a3910');
					
					// Highlight the selected slot
					slot.style.border = '3px ridge #5a3910';
				}
			}
		};
	});
}