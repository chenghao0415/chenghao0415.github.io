class Hole {
	constructor(x, y) {
		this.pos = createVector(x, y);
	}
	
	draw() {
		strokeWeight(5);
		stroke(0);
		point(this.pos.x, this.pos.y);
	}

	calcForce(p) {
		const distance = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
		const force = 6 * 50 / distance ** 2;
		p.speed.add(
			force * (this.pos.x - p.pos.x) / distance,
			force * (this.pos.y - p.pos.y) / distance
		);
	}
}