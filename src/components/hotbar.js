export function hotbar(g){
    return `
        <div class="Hotbar">
            <center>
                <div id="Weapon-identifier"></div>
                <span id="Slot1"><p id="slot-num">1</p></span>
                <span id="Slot2"><p id="slot-num">2</p></span>
                <span id="Slot3"><p id="slot-num">3</p></span>
                <span id="Slot4"><p id="slot-num">4</p></span>
                <span id="Slot5"><p id="slot-num">5</p></span>
				<span id="Slot6"><p id="slot-num">6</p></span>
            </center>
        </div>
    `
}

export function hotbarInit(g) {
	const slot1 = document.getElementById('Slot1');
		if (g.currentWeapon !== 0) slot1.style.border = '1.8px solid #5a3910'
	const slot2 = document.getElementById('Slot2');
		if (g.inventory.includes(g.whip)) slot2.style.backgroundImage = `url('${g.whipSrc}')`
		if (g.currentWeapon === 1) slot2.style.border = '3px ridge #5a3910'
	const slot3 = document.getElementById('Slot3');
		if (g.inventory.includes(g.claws)) slot3.style.backgroundImage = `url('${g.clawsSrc}')`
		if (g.currentWeapon === 2) slot3.style.border = '3px ridge #5a3910'
	const slot4 = document.getElementById('Slot4');
		if (g.inventory.includes(g.gauntlet)) slot4.style.backgroundImage = `url('${g.gauntletSrc}')`
		if (g.currentWeapon === 3) slot4.style.border = '3px ridge #5a3910'
	const slot5 = document.getElementById('Slot5');
		if (g.inventory.includes(g.cestus)) slot5.style.backgroundImage = `url('${g.cestusSrc}')`
		if (g.currentWeapon === 4) slot5.style.border = '3px ridge #5a3910'
	const slot6 = document.getElementById('Slot6');
		if (g.inventory.includes(g.blade)) slot6.style.backgroundImage = `url('${g.bladeSrc}')`
		if (g.currentWeapon === 5) slot6.style.border = '3px ridge #5a3910'
	const identifier = document.getElementById('Weapon-identifier');

	const weaponsClaimed = [g.inventory.includes(g.blades), g.inventory.includes(g.whip), g.inventory.includes(g.claws), g.inventory.includes(g.gauntlet), g.inventory.includes(g.cestus), g.inventory.includes(g.blade)];
	const sounds = [g.audios.bocSound, g.audios.nwSound, g.audios.cohSound, g.audios.gozSound, g.audios.ncSound, g.audios.swordThud];
	const identifiers = [g.weapons[0].name, g.whip, g.claws, g.gauntlet, g.cestus, g.blade];
	const lefts = ['7.5cm', '9.4cm', '11cm', '12.4cm', '13.7cm', '15.5cm'];

	if (g.hotbarKeys) document.removeEventListener('keydown', g.hotbarKeys)
	
	g.hotbarKeys = function(event) {
		if (event.repeat) return;
			
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
					identifier.style.animation = 'disappear 0.7s linear forwards';
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

	const slots = [slot1, slot2, slot3, slot4, slot5, slot6];

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