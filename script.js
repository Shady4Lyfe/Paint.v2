$("#penColor").change(updatePenColor);
$("#penSize").change(updatePenSize);
$("#clearC").click(clearCanvas);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function updatePenColor() {
  let newPenColor = $("#penColor").val();
  stroke(newPenColor);
}

function updatePenSize() {
  let newPenSize = $("#penSize").val();
  strokeWeight(newPenSize);
}

function clearCanvas() {
  clear();
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
