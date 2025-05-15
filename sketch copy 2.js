let bg3, bubble3;
let showBubble = false;

function preload() {
  bg3 = loadImage('bg3.jpeg'); // Ensure this image exists in your project directory
}

function setup() {
  createCanvas(800, 600);
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  textWrap(WORD);

  bubble3 = new Bubble(width / 2, height / 2, 300,
    "You can only win when your mind is stronger than your emotions. Click key #1 to return to page 1.");
}

function draw() {
  background(bg3);
  if (showBubble) {
    bubble3.display();
  }
}

function mousePressed() {
  showBubble = true;
}

function keyPressed() {
  if (key === '1') {
    window.location.href = "page1.html";
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