$("#penColor").change(updatePenColor);
$("#bgColor").change(updateBgColor);
$("#penSize").change(updatePenSize);
$("#clearC").click(clearCanvas);
$("#eraser").click(eraser);
$("#device").click(device);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function updatePenColor() {
  let newPenColor = $("#penColor").val();
  stroke(newPenColor);
}

function updateBgColor()  {
  let newBgColor = $("#bgColor").val();
  background(newBgColor);
}

function updatePenSize() {
  let newPenSize = $("#penSize").val();
  strokeWeight(newPenSize);
}

function clearCanvas() {
  clear();
}

function device()  {
  let newPenColor = $("#penColor").val();
  stroke(newPenColor);
}

function eraser() {
  stroke("#FFFFF");
  $("#eraser").css("cursor", "url[images/Eraser_Icon.png]");
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
