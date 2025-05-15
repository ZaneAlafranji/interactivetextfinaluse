let page = 1;
let bubble1, bubble2, bubble3;
let showBubble3 = false;

let bg1, bg2, bg3;

function preload() {
  bg1 = loadImage('bg1.png');    // Update these filenames if needed
  bg2 = loadImage('bg2.jpeg');
  bg3 = loadImage('bg3.jpeg');
}

function setup() {
  createCanvas(800, 600);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  textWrap(WORD);

  bubble1 = new Bubble(width / 2, height / 2, 300,
    "You can't control everything. But you can control how you think about it. Press key #2 to continue.");

  bubble2 = new MovingBubble(width / 2, height / 2, 300,
    "I do not fear this new challenge, rather like a true warrior I will rise to meet it. Click key #3 to continue then click the screen to reveal the hidden message.");

  bubble3 = new Bubble(width / 2, height / 2, 300,
    "You can only win when your mind is stronger than your emotions. Click key #1 to return to page 1.");
}

function draw() {
  drawBackground();

  if (page === 1) {
    bubble1.display();
    bubble1.radius = lerp(bubble1.radius, bubble1.isMouseOver() ? 330 : 300, 0.1);
  } else if (page === 2) {
    bubble2.move();
    bubble2.display();
  } else if (page === 3 && showBubble3) {
    bubble3.display();
  }
}

function mousePressed() {
  if (page === 3) {
    showBubble3 = true;
  }
}

function keyPressed() {
  if (key === '1') {
    page = 1;
  } else if (key === '2') {
    page = 2;
  } else if (key === '3') {
    page = 3;
    showBubble3 = false;
  }
}

function drawBackground() {
  if (page === 1) {
    background(bg1);
  } else if (page === 2) {
    background(bg2);
  } else if (page === 3) {
    background(bg3);
  }
}

class Bubble {
  constructor(x, y, r, txt) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.text = txt;
  }

  display() {
    const bubbleHeight = this.radius * 0.9;

    // Draw bubble background
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.radius, bubbleHeight);

    // Draw bubble outline
    stroke('#FFA500');
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.radius + 10, bubbleHeight + 10);

    // Draw centered text
    noStroke();
    fill('#FFA500');
    textSize(16);
    let textBoxWidth = this.radius * 0.75;
    let textBoxHeight = bubbleHeight * 0.7;

    // Center the text in a bounding box
    text(this.text, this.x - textBoxWidth / 2, this.y - textBoxHeight / 2, textBoxWidth, textBoxHeight);
  }

  isMouseOver() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.radius / 2;
  }
}

class MovingBubble extends Bubble {
  constructor(x, y, r, txt) {
    super(x, y, r, txt);
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.radius / 2 || this.x > width - this.radius / 2) {
      this.vx *= -1;
    }
    if (this.y < this.radius / 2 || this.y > height - this.radius / 2) {
      this.vy *= -1;
    }
  }
}