class Mass {
	constructor(sx, sy, x, y, c) {
		this.pos = createVector(sx, sy);
		this.speed = createVector(x - sx, y - sy).div(50);
		this.c = c;
	}

	draw() {
		strokeWeight(5);
		stroke(this.c);
		point(this.pos.x, this.pos.y);
	}

	calcForce(other) {
		const distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
		const force = 6 / distance ** 2;
		this.speed.add(
			force * (other.pos.x - this.pos.x) / distance,
			force * (other.pos.y - this.pos.y) / distance
		);
	}
	
	// --- extern change speed ---

	applyForce() {
		this.pos.add(this.speed);
	}
}