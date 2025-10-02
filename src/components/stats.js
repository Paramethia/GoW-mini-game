export const stats = (g) => {
    return `
		<div class="Stats">
			<div class="Health-bar"><div class="filler"></div></div>
			<span class="stat" id="Health-text">Health: <strong><span id="Health" >${g.kratos.health}</span></strong></span>
			<span class="stat">Orbs: <strong><span id="Orbs-text" >${g.kratos.orbs}</span></strong></span>
		</div>
	`;
}

export const enemyStats = (g) => {
    return `
		<div class="Enemy-stats">
			<span class="stat">Enemy: <strong><span id="Enemy-name">${g.enemies[g.currentEnemy].name}</span></strong></span>
			<span class="stat" id="enemy-health">Health: <strong><span id="Enemy-health">${g.enemies[g.currentEnemy].health}</span></strong></span>
			<div class="Ehealth-bar">
				<div class="Efiller"></div>
			</div>
		</div>
	`;
}