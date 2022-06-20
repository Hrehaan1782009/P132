img = "";
status = "";

function second_page(){
    window.location("Secondary.html");
}

function preload(){
    img = loadImage('https://ksassets.timeincuk.net/wp/uploads/sites/56/2021/01/Small-bedroom-Ideal-Home.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 600, 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 200);

    fill("#FF0000");
    text("Lamp", 320, 120);
    noFill();
    stroke("#FF0000")
    rect(300, 90, 270, 320);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
   if (error) {
    console.log(error);
   }
   console.log(results);
}