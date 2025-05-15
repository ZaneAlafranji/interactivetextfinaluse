let bg2, bubble2;

function preload() {
  bg2 = loadImage('bg2.jpeg'); // Ensure this image exists in your project directory
}

function setup() {
  createCanvas(800, 600);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  textWrap(WORD);

  bubble2 = new MovingBubble(width / 2, height / 2, 300,
    "I do not fear this new challenge, rather like a true warrior I will rise to meet it. Click key #3 to continue then click the screen to reveal the hidden message.");
}

function draw() {
  background(bg2);
  bubble2.move();
  bubble2.display();
}

function keyPressed() {
  if (key === '3') {
    window.location.href = "page3.html";
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
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.radius, bubbleHeight);

    stroke('#FFA500');
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.radius + 10, bubbleHeight + 10);

    noStroke();
    fill('#FFA500');
    textSize(16);
    let textBoxWidth = this.radius * 0.75;
    let textBoxHeight = bubbleHeight * 0.7;
    text(this.text, this.x - textBoxWidth / 2, this.y - textBoxHeight / 2, textBoxWidth, textBoxHeight);
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