export const hotbar = `
	<div class="Hotbar">
		<center>
			<div id="Weapon-identifier"></div>

			${Array.from({ length: 6 }, (_, index) => `
				<span id="Slot${index + 1}">
					<p class="slot-num">${index + 1}</p>
				</span>
			`).join('')}
		</center>
	</div>
`;

export function hotbarInit(g) {
	const inventory = g.kratos.inventory;
    const maxSlots = 6;

    const slots = Array.from(
        { length: maxSlots },
        (_, index) => document.getElementById(`Slot${index + 1}`)
    );

    const kratos = document.getElementById('Kratos');
    const dimentions = [
        {which: "Default", width: 82, height: 142},
        {which: "Arms", width: 130, height: 151},
        {which: "whip", width: 114, height: 145},
        {which: "Claws", width: 124, height: 142},
        {which: "cestus", width: 100, height: 142},
        {which: "Blade", width: 135, height: 142},
    ]
    function updateKratos(wIndex) {
        if (!g.inSparta) return
        let currentWeapon = g.kratos.inventory[wIndex];
        if (!currentWeapon) {
            console.warn("Current selected weapon index is not included in your inventory.  Resetting the index to the first...");
            g.currentWeapon = 0;
            localStorage.removeItem("currentWeapon");
            currentWeapon = g.kratos.inventory[0];
        }
        if (!currentWeapon.name.includes("Blades")) {
            const dimention = dimentions.find(d => currentWeapon.name.includes(d.which)) || dimentions[0];
            kratos.style.width = `${dimention.width}px`;
            kratos.style.height = `${dimention.height}px`;
            kratos.src = `./Imagery/UI/Kratos standing animation (${currentWeapon.name}).gif`;
        } else if (kratos) { 
            kratos.style.width = `${dimentions[0].width}px`;
            kratos.style.height = `${dimentions[0].height}px`;
            kratos.src = "./Imagery/UI/Kratos standing animation.gif";
        }
    }
    
    updateKratos(g.currentWeapon);

    const identifier = document.getElementById('Weapon-identifier');

    // Reset/render slots
    slots.forEach((slot, index) => {
        slot.style.backgroundImage = '';
        slot.style.border = '1.8px solid #5a3910';

		const item = inventory[index];
        if (!item) return;
        const itemName = item.name.includes("Arms") ? item.name.replace("Arms", "Arm") : item.name;

        slot.style.backgroundImage = `url('./Imagery/UI/${itemName}.png')`;

        if (g.currentWeapon === index) {
            slot.style.border = '3px ridge #5a3910';
        }
    });

	if (g.hotbarKeys) document.removeEventListener('keydown', g.hotbarKeys)
	
	g.hotbarKeys = function(event) {
		if (event.repeat) return;
			
		const keyIndex = parseInt(event.key) - 1;

        if (keyIndex < 0 || keyIndex >= maxSlots) return;

        const item = inventory[keyIndex];

        // Empty slot
        if (!item) return;

        // Reset borders
        slots.forEach(slot => {
            slot.style.border = '1.8px solid #5a3910';
        });

        // Highlight selected slot
        slots[keyIndex].style.border = '3px ridge #5a3910';

        // Play item sound
        g.playCaudio(item.sound, g.sfxVolume);

        // Show identifier
        identifier.style.display = 'inline';
        identifier.innerText = item.name;
        identifier.style.top = '-35px';

        // Probably should improve this later
        identifier.style.left = `${7.5 + (keyIndex * 1.6)}cm`;

        setTimeout(() => {
            identifier.style.animation = 'disappear 0.7s linear forwards';

            setTimeout(() => {
                identifier.style.display = 'none';
                identifier.style.animation = 'none';
            }, 420);
        }, 1100);

        // Change weapon
        if (g.currentWeapon !== keyIndex) {
            g.currentWeapon = keyIndex;
            updateKratos(g.currentWeapon);
            localStorage.setItem('currentWeapon', g.currentWeapon);
        }
	}
	
	document.addEventListener('keydown', g.hotbarKeys)

	// Mouse interactions
	slots.forEach((slot, index) => {
		const item = inventory[index];

        if (!item) return;

        slot.onmouseover = () => {
            if (g.currentWeapon !== index) {
                slot.style.border = '3px ridge #5a3910';
            }

            identifier.style.display = 'inline';
            identifier.innerText = item.name;
            identifier.style.top = '-35px';
            identifier.style.left = `${7.5 + (index * 1.6)}cm`;
        };

        slot.onmouseout = () => {
            if (g.currentWeapon !== index) {
                slot.style.border = '1.8px solid #5a3910';
            }

            identifier.style.display = 'none';
        };

        slot.onclick = () => {
            g.playCaudio(item.sound, g.sfxVolume);

            if (g.currentWeapon !== index) {
                g.currentWeapon = index;
                localStorage.setItem('currentWeapon', g.currentWeapon);
                slots.forEach(s => s.style.border = '1.8px solid #5a3910');
                slot.style.border = '3px ridge #5a3910';
                updateKratos(g.currentWeapon);
            }
        };
	});
}