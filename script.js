$("#penColor").change(updatePenColor);
$("#bgColor").change(updateBgColor);
$("#penSize").change(updatePenSize);
$("#clearC").click(clearCanvas);
$("#eraser").click(eraser);
$("#brush").click(brush);

let newBgColor = $("#bgColor").val();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function updatePenColor() {
  let newPenColor = $("#penColor").val();
  stroke(newPenColor);
}

function updateBgColor()  {
  let newBgColor = $("#bgColor").val();
  $("body").css("background-color", newBgColor)
}

function updatePenSize() {
  let newPenSize = $("#penSize").val();
  strokeWeight(newPenSize);
  $("cursor").css("width", newPenSize);
  
}

function clearCanvas() {
  clear();
}

function brush()  {
  let newPenColor = $("#penColor").val();
  stroke(newPenColor);
  $("*").css("cursor", "crosshair");
}

function eraser() {
  let newBgColor = $("#bgColor").val();
  stroke(newBgColor);
  strokeWeight(20);
  $("*").css("cursor", "url(images/Eraser_Icon.png), auto");
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
