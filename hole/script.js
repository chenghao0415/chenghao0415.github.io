let use = true;//false
let holes = []; // if there's a hole there's a goal
let vecs = [];
let startX, startY;

function setup() {
	createCanvas(innerWidth, innerHeight);
	document.querySelector("canvas").addEventListener("contextmenu", e => {
		e.preventDefault();
	})
	background(255)
}

function draw() {
	background(255, 125);

	if (mouseIsPressed) {
		strokeWeight(2);
		stroke(255, 0, 0);
		line(startX, startY, mouseX, mouseY);
	}

	for (const hole of holes) {
		hole.draw();
	}

	for (let i = vecs.length - 1; i >= 0; i--) {
		const v = vecs[i];
		for (let j = 0; j < vecs.length && j != i; j++) {
			v.calcForce(vecs[j]);
		}

		for (const hole of holes) {
			hole.calcForce(v);
		}
		v.applyForce();
		v.draw();
	}

	if (!use) {
		fill(0);
		noStroke();
		textAlign(CENTER, CENTER);
		textSize(50);
		text("Click and Drag\nto launch Particles\nRight Click for Black Hole", width / 2, height - 100);
	}
}

function mousePressed() {
	startX = mouseX;
	startY = mouseY;
	if (!use) {
		use = true;
	}
}

function mouseReleased() {
	if (mouseButton === RIGHT) {
		console.log("bruh");
		holes.push(new Hole(mouseX, mouseY));
	} else {
		vecs.push(new Mass(startX, startY, mouseX, mouseY, color(random(255), random(255), random(255))));
	}
}
