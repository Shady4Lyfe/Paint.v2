$("#penColor").change(updatePenColor);
$("#bgColor").change(updateBgColor);
$("#toolSize").change(updateToolSize);
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

function updateToolSize() {
  let newToolSize = $("#toolSize").val();
  strokeWeight(newToolSize);
  $("cursor").css("width", newToolSize);
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
