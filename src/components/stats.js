export const stats = (g) => {
    return `
		<div class="Stats">
			<div class="Stats-blade">
				<img src="Imagery/Stats blade.png" alt="Stats blade" />
				<span id="Health-text">Health: <strong><span id="Health">${g.kratos.health}</span></strong></span>
				<div class="Health-bar"><div class="filler"></div></div>
			</div>
			<span id="Orbs-text"> <img src="Imagery/Red orb.png" /> <strong><span id="Orbs">${g.kratos.orbs}</span></strong></span>
		</div>
	`;
}

export const enemyStats = (g) => {
    return `
		<div class="Enemy-stats">
			<span class="stat"><strong><span id="Enemy-name">${g.enemies[g.currentEnemy].name}</span></strong></span>
			<div class="Ehealth-bar">
				<div class="Efiller"></div>c
			</div>
		</div>
	`;
}